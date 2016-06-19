import React, {Component} from "react";
import Maincanvas from "./Maincanvas.js"
import Filters from "./Filters.js"
 //es6
class Canvas extends Component{
  render() {
    return ( 
      <div>
            <div className="col m9 canvas">
              <div className="col m12">
                    <form action="#">
                      <div className="file-field input-field">
                      <Maincanvas/>
                      <Filters/>  
                      </div>
                    </form>
              </div>
            </div>
        
      </div>         
    );
  }
};
export default Canvas
