import React, {Component} from "react";
import Maincanvas from "./Maincanvas.js"
import Filters from "./Filters.js"
 //es6
class Canvas extends Component{
  constructor(props) {
    super(props);
    this.state = {
      filteredurl: null,
    }
  this._onFilterClick = this._onFilterClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
      this.setState({
        filteredurl: null
      })
  }

 _handleprop(e){
    this.props.select()
  }

_onFilterClick(url){
 this.setState({
  filteredurl:url
 })

}
  render() {
    return ( 
        <div className="col m9 canvas">
          <div className="col m12">
                <form action="#">
                  <div className="file-field input-field">
                  <Maincanvas url={this.state.filteredurl || this.props.url}/>
                  <Filters filteredImages={this.props.filteredImages} onFilterClick={this._onFilterClick}/>  
                  </div>
                </form>
          </div>
        </div>
    
            
    );
  }
};
export default Canvas
