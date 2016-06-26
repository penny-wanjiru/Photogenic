import React, { Component } from "react";
import request from 'superagent';


class SideImage extends Component{
  render() {
    return(
      <div className="row">
        <div className="col s12 m12">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <img src={this.props.url} onClick={() => props.update(props.photo)}  />
            </div>
            <div className="card-action">
              <a style={{marginLeft: 15}} className="delete tooltipped" data-position="right" data-delay="50" data-tooltip="Delete" onClick={() => props.delete(props.photo)} href="#"><i className="material-icons">delete</i></a>
              {this.props.date_created}
              {this.props.date_updated}
            </div>
          </div>
        </div>
      </div>
      )
  }
}
//es6 component to upload image
class Nav extends Component {
  constructor() {
    super();
  this._handleUpload = this._handleUpload.bind(this);
  this._displayImages = this._displayImages.bind(this);
  }

   
  _displayImages() {
  return (this.props.photos.map((image) => {
    return(<SideImage
          key={image.id}
          url={image.image}
          photo={image}
          body={image.image}
          date_created={image.date_created}
          date_updated={image.date_updated}
        />)}))}

  _handleUpload(event) {
    let files = document.getElementById('file_upload').files;
    let formData = new FormData();
    for (var key in files) {
      formData.append('image', files[key])
    }
    this.props.onAddItem(formData)
  }

  render() {
    const sideImages = this._displayImages()
    return (   
      
      <div className = "col m3 sidebar">
      <ul className = "tabs" >
      <li className = "tab select col s6 active"> <a href = "#" > IMAGES </a></li >
      </ul>   
      <div className = "side col s12 m12" > < form action = "#">
      <div className = "file-field input-field">
      <div className = "btn" >
      <span> Upload </span> 
      <input type = "file" id = "file_upload" onChange = { this._handleUpload} />
      </div> 
      <div className = "file-path-wrapper" >
      <input className = "file-path validate"  type = "text" />
      
      </div> < /div > < /form>
      {sideImages}
      < /div > < /div> 
    );
  }
};

export default Nav
