import { render } from 'react-dom'
import React, {Component} from 'react';


class Sidebar extends React.Component {
  render(){
      return (
        <div>
          <div className="row">
            <div className="col s12 m4 l3 photolist">
              <ul className="tabs">
                <li className="col s6 "><a href="#">Library</a></li>
              </ul>
            </div>
            <div className="col s12 m8 l9">
                <div className="col s12 thumbnails">
                </div>
            </div>
          </div>
        </div>
      );
    }
}

export default Sidebar