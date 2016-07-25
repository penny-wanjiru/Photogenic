import React, {Component} from "react";
import MainCanvas from "./maincanvas.js"
import Filters from "./filters.js"

class Canvas extends Component{
  constructor(props) {
    super(props);
    this.state = {
      filteredUrl: null,
    }
  this._onFilterClick = this._onFilterClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      filteredUrl: null
    })
  }

  _onFilterClick(url){
    this.setState({
    filteredUrl:url
    })
  }

  render() {
    return (
      <div className="col m9 canvas">
        <div className="col m12">
          <form action="#">
            <div className="file-field input-field">
              <MainCanvas url={this.state.filteredUrl || this.props.url}/>
              <Filters filteredImages={this.props.filteredImages} onFilterClick={this._onFilterClick}/>  
            </div>
          </form>
        </div>
      </div>         
    );
  }
};
export default Canvas
