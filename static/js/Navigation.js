import React, {Component} from "react";

 //es6
 class Nav extends Component{
  render() {
    return (      
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                <img alt="Brand" src="..." />
              </a>
            </div>
          </div>
        </nav>
    );
  }
};
export default Nav