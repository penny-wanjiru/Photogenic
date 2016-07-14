import React, {Component} from "react";


class Maincanvas extends Component{

  _fbshare(url){
    window.location.assign(`https://www.facebook.com/sharer/sharer.php?u=${this.props.url} target=_blank` )
  }
 
  render() {
    return ( 
      <div>
        <div className="col m12 maincanvas">
          <div className="col m9" style={{marginLeft:100}} >
            <form action="#"> 
              <div className="file-field input-field">
                {(this.props.url)
                  ?<img src={this.props.url} id="maincanvas"/>
                  :<img src='../static/images/place.jpg' id="maincanvas"/>
                }    
                <a href={this.props.url} style={{marginTop: 15, marginLeft:70, backgroundColor:'#99b9f3' }} className="btn" download><i className="material-icons left"></i>Download</a>
                <a style={{marginTop: 15, marginLeft:20, backgroundColor:'#3B5998'}} className="btn"  onClick={this._fbshare.bind(this)}><i className="material-icons left"></i>Share on facebook</a>     
              </div>
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
export default Maincanvas
