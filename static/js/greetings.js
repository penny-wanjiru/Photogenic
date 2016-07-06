import React, {Component} from "react";
import Nav from "./Navigation.js"
import Canvas from "./Canvas.js"
import request from 'superagent'
// import main from "./main.js"

 //es6
class Main extends Component{
  constructor() {
    super();
    this.state = {
      images: [],
      url:'',
      filteredImages: []
    }
  this._addimage = this._addimage.bind(this);
  this._updateView = this._updateView.bind(this);
  this._getfilteredimages = this._getfilteredimages.bind(this);
  this._deleteImage = this. _deleteImage.bind(this);
  }

  componentDidMount() {
    this._getimages()
  }

  _addimage(formData) {
    let images = this.state.images    
    request
      .post('/main/images/')
      .send(formData)
      .end(
        (err, result) => {
          if (err) {
           console.log('error: ', err)
           window.Materialize.toast('Oops there seems to be a problem uploading!', 2000);

          } else {
            window.Materialize.toast('Your image has been uploaded', 2000);
            this.setState({
              images: images.concat([result.body])
            })
            console.log(images)
            
          }
        });
  }

 _getfilteredimages(imageId) {
  console.log(imageId)
    request
      .get(`/images/${imageId}/edited`)
      .end((err, result) => {  
        if (err) {
          console.log(err)
        }
        if (result) {
          this.setState({
            filteredImages: result.body,
          })
        }

        console.log(this.state.filteredImages)
    
        // } else {
        //   this.setState({
        //     filteredImages: [],
        //   });
        
      });
  }

  _getimages() {
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
_onDeletePreview(){
    this.setState({url: undefined})
  }

  render() {
    return (
      <div className="main">
      <div className="row">
        <Nav onAddItem={this._addimage} photos={this.state.images} onImageClick={this._updateView} updatefilters={this._getfilteredimages} deleteimage={this._deleteImage}/>
        <Canvas clearCanvas={this._onDeletePreview} url={this.state.url} filteredImages={this.state.filteredImages} />
      </div>  
      </div>
    );
  }
};
export default Main

 //es5
 /*
var Hello = React.createClass({
    render: function() {
        return (
            <div>Hello</div>
        )
    }
})
module.exports = Hello
*/