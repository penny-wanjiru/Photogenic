import React, {Component} from "react";


class MainCanvas extends Component{

  _fbShare(url){
    window.FB.ui(
      {
        method: 'share',
        href: this.props.url
      },
      // callback
      function(response) {
        console.log(response)
        if (response && !response.error_message) {
          alert('Posting completed');
        } else {
          alert('Error while posting');
        }
      }
    );
  } 
 
  render() {
    return ( 
      <div>   
        <div className="col m12 maincanvas">
          <div className="col m9" style={{marginLeft:100}} >
            <form action="#"> 
            {(this.props.url)
              ?<div className="file-field input-field">
                <img src={this.props.url} id="maincanvas"/>
                <a href={this.props.url} style={{marginTop: 15, marginLeft:70, backgroundColor:'#99b9f3' }} className="btn" download><i className="material-icons left"></i>Download</a>
                <a style={{marginTop: 15, marginLeft:20, backgroundColor:'#3B5998'}} className="btn" onClick={this._fbShare.bind(this)}><i className="material-icons left"></i>Share on facebook</a>         
              </div>
              :<div className="file-field input-field">
                <img src='../static/images/place.jpg' id="maincanvas"/>    
              </div>
            } 
            </form>  
          </div>
          <div className="col m1">
            <a href="/accounts/logout" style={{marginRight:500, marginTop:15}} className="buttons">Log Out</a>
          </div>
        </div>     
      </div>         
    );
  }
};
export default MainCanvas
