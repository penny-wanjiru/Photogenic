import React, {Component} from "react";

 //es6
class Maincanvas extends Component{

  _onDeletePreview(){
    this.setState({url: undefined})
  }
  render() {
    return ( 
      <div>
          <div className="col m12 maincanvas">
            <div className="col m12">
                <form action="#">
                  <div className="file-field input-field">
                   <img src={this.props.url} id="maincanvas"/>
                    <a style={{marginTop: 15, marginLeft:120}} className="btn"  onClick={this._onDeletePreview.bind(this)}><i className="material-icons left"></i>Clear Canvas</a> 
                    <a style={{marginTop: 15, marginLeft:20}} className="btn"  onClick={this._onDeletePreview.bind(this)}><i className="material-icons left"></i>Download</a>
                    <a style={{marginTop: 15, marginLeft:20}} className="btn"  onClick={this._onDeletePreview.bind(this)}><i className="material-icons left"></i>Share on facebook</a>   
                  </div>
                </form>
            </div>
          </div>   
      </div>         
    );
  }
};
export default Maincanvas
