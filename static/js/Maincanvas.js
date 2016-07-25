import React, {Component} from "react";

const style = {
  button: {
    marginTop: 15, 
    marginLeft:20, 
    backgroundColor:'#3B5998'
  },
  download: {
    marginTop: 15,
    marginLeft:70, 
    backgroundColor:'#99b9f3' 
  },
  logout: {
    marginRight:500, 
    marginTop:15
  }, 
  div: {
    marginLeft:100 
  }  
};


class MainCanvas extends Component{

  _fbShare(url){
    window.FB.ui(
      {
        method: 'share',
        href: this.props.url
      },
      // callback
      function(response) {
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
          <div className="col m9" style={style.div} >
            <form action="#"> 
            {(this.props.url)
              ?<div className="file-field input-field">
                <img src={this.props.url} id="maincanvas"/>
                <a href={this.props.url} style={style.download} className="btn" download><i className="material-icons left"></i>Download</a>
                <a style={style.button} className="btn" onClick={this._fbShare.bind(this)}><i className="material-icons left"></i>Share on facebook</a>         
              </div>
              :<div className="file-field input-field">
                <img src='../static/images/place.jpg' id="maincanvas"/>    
              </div>
            } 
            </form>  
          </div>
          <div className="col m1">
            <a href="/accounts/logout" style={style.logout} className="buttons">Log Out</a>
          </div>
        </div>     
      </div>         
    );
  }
};
export default MainCanvas
