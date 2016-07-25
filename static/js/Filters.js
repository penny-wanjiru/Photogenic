import React, {Component} from "react";

class Filtered extends Component{

  _clicked(e){
    window.Materialize.toast('Applying filter...', 1000);
    this.props.onFilterClick(this.props.url)
    this.props.onActive(this.props.effect);
  }

  render() {
    return(
      (this.props.clicked)
        ?<div className="pointer col s12 m3 active">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <img className={this.props.url} src={this.props.url} onClick={this._clicked.bind(this)}/>
              <p className="effect_name">{this.props.effect}</p>
            </div>  
          </div>
        </div>  
        :<div className="pointer col s12 m3">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <img className={this.props.url} src={this.props.url} onClick={this._clicked.bind(this)}/>
              <p className="effect_name">{this.props.effect}</p>
            </div>  
          </div>
        </div>         
    )
  }
}

class Filters extends Component{
  constructor() {
    super();
    this.state  ={
      effect: '',
    }
  }

  _updateClicked(effect) {
    this.setState({effect: effect})
  }

  _displayFilteredImages() {
    if (this.props.filteredImages === [])
    {
      return null;
    }
    return (this.props.filteredImages.map((image) => {
      return(
        <Filtered
          key={image.id}
          url={image.image}
          effect={image.effect}
          onFilterClick={this.props.onFilterClick}
          clicked={this.state.effect==image.effect}
          onActive={this._updateClicked.bind(this)}
        />)
    }))
  }

  render() {
    const filteredImages = this._displayFilteredImages()
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