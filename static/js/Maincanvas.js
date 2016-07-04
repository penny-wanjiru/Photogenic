import React, {Component} from "react";

 //es6
class Maincanvas extends Component{

  _onDeletePreview(){
    this.setState({url: undefined})
  }
  _fbshare(url){
    console.log(url)
    window.location.assign(`https://www.facebook.com/sharer/sharer.php?u=${this.props.url}` )

  }
 
  render() {
    return ( 
      <div>
          <div className="col m12 maincanvas">
            <div className="col m12">
                <form action="#">
                  <div className="file-field input-field">
                   <img src={this.props.url} id="maincanvas"/>
                    <a href={this.props.url} style={{marginTop: 15, marginLeft:20}} className="btn" download><i className="material-icons left"></i>Download</a>
                    <a style={{marginTop: 15, marginLeft:20}} className="btn"  onClick={this._fbshare.bind(this)}><i className="material-icons left"></i>Share on facebook</a>   
                  </div>
                </form>
            </div>
          </div>   
      </div>         
    );
  }
};
export default Maincanvas
