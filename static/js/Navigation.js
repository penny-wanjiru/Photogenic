 import React, { Component } from "react";
import request from 'superagent';


class SideImage extends Component{

  _clicked(e){
    this.props.onImageClick(this.props.url)
    this.props.updatefilters(this.props.id)
    
  }
  _clickdel(e){
    this.props.deleteimage(this.props.id)
  }

  render() {
    return(
      <div className="row">
        <div className="col s12 m12">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <img src={this.props.url} onClick={this._clicked.bind(this)}/>
            </div>
            <div className="card-action">
              Uploaded: {this.props.date_created}
            <a style={{marginLeft: 20}} className="delete tooltipped" data-position="right" onClick={this._clickdel.bind(this)} href="#"><i className="material-icons delete-image">delete</i></a>
             </div>
          </div>
        </div>
      </div>
      )
  }
}

class Nav extends Component {
  constructor() {
  super();
  this._handleUpload = this._handleUpload.bind(this);
  this._displayImages = this._displayImages.bind(this);  
  }
 
  _displayImages() {
    return (this.props.photos.map((image) => {
      return(
        <SideImage
          id={image.id}
          key={image.id}
          url={image.image}
          photo={image}
          body={image.image}
          onImageClick={this.props.onImageClick}
          updatefilters={this.props.updatefilters}
          update={this._updated}
          deleteimage={this.props.deleteimage}
          date_created={image.date_created}
          date_updated={image.date_updated}
        />
      )
    }))
  }

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
          <li className = "tab select col s6 active" style={{color:'white'}}> <a href = "#" > IMAGES </a></li>
        </ul>   
        <div className = "side col s12 m12" > 
          <form action = "#">
            <div className = "file-field input-field">
              <div className = "btn" >
                <span> Upload </span> 
                <input type = "file" id = "file_upload" onChange = { this._handleUpload} />
              </div> 
              <div className = "file-path-wrapper" >
                <input className = "file-path validate"  type = "text" /> 
              </div>
            </div> 
          </form>
          {sideImages}
        </div> 
      </div> 
    );
  }
};
export default Nav
