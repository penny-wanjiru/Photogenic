import React, {Component} from "react";
import Navigation from "./Navigation.js"
import Canvas from "./Canvas.js"
import request from 'superagent'
// import main from "./main.js"
 //es6
class Main extends Component{
  constructor() {
    super();
    this.state = {
      images: []
    }
  this._addimage = this._addimage.bind(this);
  }

  componentDidMount() {
    this._getimages()
  }

  _addimage(formData) {
    let images = this.state.images    
    request
      .post('/api/images/')
      .send(formData)
      .end(
        (err, result) => {
          if (err) {
           console.log('error: ', err)
           window.Materialize.toast('Oops there seems to be a problem uploading!', 2000);

          } else {
            // window.Materialize.toast('Your image has been uploaded', 2000);
            this.setState({
              images: images.concat([result.body])
            })
            console.log(images)
            
          }
        });
  }

  _getimages() {
    request
      .get('/api/images/')
      .end((err, result) => {
        if (result.body) {
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
  _deleteImage() {
    
    this.setState({ images });
    request
      .delete('/api/images/${image.id}/')
      .end((err, result) => {
        if (result.status === 200) {
          this._getimages();
        } else {
          this.setState({
            deleteError: true,
          });
        }
      });
  }


  render() {
    return (
      <div className="main">
      <div className="row">
        <Navigation onAddItem={this._addimage} photos={this.state.images}/>
        <Canvas/>
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