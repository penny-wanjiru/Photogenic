import React, {Component} from "react";
import Maincanvas from "./Maincanvas.js"
import Filters from "./Filters.js"
 //es6
class Canvas extends Component{


 _handleprop(e){
    this.props.select()
  }

  render() {
    return ( 
        <div className="col m9 canvas">
          <div className="col m12">
                <form action="#">
                  <div className="file-field input-field">
                  <Maincanvas url={this.props.url}/>
                  <Filters filteredImages={this.props.filteredImages}/>  
                  </div>
                </form>
          </div>
        </div>
    
            
    );
  }
};
export default Canvas
