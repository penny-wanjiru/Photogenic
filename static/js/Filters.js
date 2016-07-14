import React, {Component} from "react";

class Filtered extends Component{

  _clicked(e){
    window.Materialize.toast('Applying filter...', 2000);
    this.props.onFilterClick(this.props.url)
  }

  render() {
    return( 
      <div className="col s12 m3">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <img className={this.props.url} src={this.props.url} onClick={this._clicked.bind(this)}/>
            <p className="effect_name">{this.props.filterName}</p>
          </div>  
        </div>
      </div>     
    )
  }
}

class Filters extends Component{

  _displayfilteredImages() {
    const filters = ['blur', 'contour', 'sharpen', 'smooth', 'smooth_more',
                    'emboss', 'detail', 'edge_enhance',
                    'edge_enhance_more', 'find_edges']
    return (this.props.filteredImages.map((image) => {
      return(
        <Filtered
          key={image.id}
          url={image.image}
          body={image.image}
          filterName={filters[this.props.filteredImages.indexOf(image)]}
          onFilterClick={this.props.onFilterClick}
        />)
    }))
  }

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