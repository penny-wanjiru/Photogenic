import React, {Component} from "react";

 //es6
class Maincanvas extends Component{
  render() {
    return ( 
      <div>
          <div className="col m12 maincanvas">
            <div className="col m12">
                <form action="#">
                  <div className="file-field input-field">
                   <img src={this.props.url} id="maincanvas"/> 
                  </div>
                </form>
            </div>
          </div>   
      </div>         
    );
  }
};
export default Maincanvas