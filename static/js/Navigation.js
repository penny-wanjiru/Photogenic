import React, {Component} from "react";

 //es6
class Nav extends Component{
  render() {
    return ( 

      <div>
          <div className="row">
            <div className="col s12 m4 l3 sidebar">
              <ul className="tabs">
                <li className="tab select col s6 active"><a href="#">IMAGES</a></li>
              </ul>
            <div className="col s12 m8 l9">
                <div className="col s12 ">
                    
                  <a className="waves-effect waves-light btn">Upload Image</a>

                </div>
            </div>
          </div>
          <div className="row">
          </div>
      </div> 
      </div>         
    );
  }
};
export default Nav
