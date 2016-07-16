import React, {Component} from "react";
import Nav from "./navigation.js"
import Canvas from "./canvas.js"
import request from 'superagent'


class Main extends Component{
  constructor() {
    super();
    this.state = {
      images: [],
      url:'',
      filteredImages: []
    }
  this._addImage = this._addImage.bind(this);
  this._updateView = this._updateView.bind(this);
  this._getFilteredImages = this._getFilteredImages.bind(this);
  this._deleteImage = this. _deleteImage.bind(this);
  }

  componentDidMount() {
    this._getImages()
  }

  _addImage(formData) {
    let images = this.state.images  
    window.Materialize.toast('Uploading your image...', 2000);  
    request
      .post('/main/images/')
      .send(formData)
      .end(
        (err, result) => {
          if (err) {
            window.Materialize.toast('Oops there seems to be a problem uploading!', 2000);
          } else {
            window.Materialize.toast('Your image has been uploaded', 2000);
            this.setState({
              images: [result.body, ...this.state.images]
            })
          }
        }
      );
  }

  _getFilteredImages(imageId) {
    request
      .get(`/images/${imageId}/edited`)
      .end((err, result) => { 
        if (result) {
          this.setState({
            filteredImages: result.body,
          })
        }
      });
  }

  _getImages() {
    request
      .get('/main/images/')
      .end((err, result) => {
        if (result) {
          this.setState({
            images: result.body,
          });
        } else {
          this.setState({
            images: [],
          });
        }
      });
  }

  _deleteImage(imageId) {  
    request
      .delete(`/images/${imageId}/`)
      .end((err, result) => {
        if (result.status === 204) {
          this._getimages();
        } else {
          this.setState({
            deleteError: true,
          });
        }
      });
  }

  _updateView(url){
    if (url !== '') {
      this.setState({
        url
      })
    } 
  }

  render() {
    return (
      <div className="main">
        <div className="row">
          <Nav onAddItem={this._addImage} photos={this.state.images} onImageClick={this._updateView} updateFilters={this._getFilteredImages} deleteImage={this._deleteImage}/>
          <Canvas url={this.state.url} filteredImages={this.state.filteredImages} />
        </div>  
      </div>
    );
  }
};
export default Main
