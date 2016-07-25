import React, { Component } from "react";
import request from 'superagent';

const style = {
  delete: {
    marginLeft: 5
  },
  uploadbtn: {
    backgroundColor:'#99b9f3'
  }  
};

class SideImage extends Component {

  _clicked(e){
    this.props.onImageClick(this.props.url)
    this.props.updateFilters(this.props.id)
  }

  _clickDel(e){
    if (!confirm('Are you sure you want to delete this image')) return;
    this.props.deleteImage(this.props.id)
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
              <a style={style.delete} className="delete tooltipped" data-position="right" onClick={this._clickDel.bind(this)} href="#"><i className="material-icons delete-image">delete</i></a>
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
          updateFilters={this.props.updateFilters}
          update={this._updated}
          deleteImage={this.props.deleteImage}
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
          <li className = "tab select col s6 title"> <a href = "#"> IMAGES </a></li>
        </ul>   
        <div className = "side col s12 m12" > 
          <form action = "#">
            <div className = "file-field input-field">
              <div className = "btn" style={style.uploadbtn} >
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
