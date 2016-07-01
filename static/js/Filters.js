import React, {Component} from "react";

class Filtered extends Component{
  _clicked(e){
    this.props.onFilterClick(this.props.url)
  }

  render() {
    return(

      
        <div className="col s12 m3">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <img src={this.props.url} onClick={() => this.props.onFilterClick(this.props.url)}/>
            </div>  
          </div>
        </div>
  
        
      )
  }
}
 //es6
class Filters extends Component{

_displayfilteredImages() {
  return (this.props.filteredImages.map((image) => {
    return(<Filtered
          key={image.id}
          url={image.image}
          body={image.image}
          onFilterClick={this.props.onFilterClick}
  
        />)}))}

  render() {
    const filteredImages = this._displayfilteredImages()
    return ( 
      <div>
          <div className="row">
            <div className="col m12 filters">
              <div className="col m12">
                    <form action="#">
                      <div className="file-field input-field">
                       {filteredImages}
                      </div>
                    </form>
              </div>
            </div>
          </div>
      </div>         
    );
  }
};
export default Filters