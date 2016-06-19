import React, {Component} from "react";
import request from 'superagent';



class Home extends Component {
  constructor() {
    super();
      this.state = {
        images:[]
      }

     };
  }


 //es6
class Nav extends Component{

  _addimage(event){
     window.Materialize.toast('Uploading.. ', 500);
     let files = document.getElementById('file_upload').files;
     let formData = new FormData();
     for (var key in files) {
      formData.append('image', files[key])
     }
      request
        .post('/api/images/')
        .send(formData)
        .end(
            (err, result) => {
            if(!err) {
                window.Materialize.toast('Your image has been uploaded', 2000);
                
            } else {
                window.Materialize.toast('Oops there seems to be a problem uploading!', 2000);
            }
        });
  }
  render() {
    return ( 
      <div>
        <div className="col m3 sidebar">
          <ul className="tabs">
            <li className="tab select col s6 active"><a href="#">IMAGES</a></li>
          </ul>  
          <div className="col s12 m12 l9">
            <form action="#">
              <div className="file-field input-field">
                <div className="btn">
                  <span>Upload</span>
                  <input type="file" id="file_upload" onChange={this._addimage.bind(this)}/>
                </div>
                <div className="file-path-wrapper">
                  <input className="file-path validate" type="text"/>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>         
    );
  }
};
export default Nav
