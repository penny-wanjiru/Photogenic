import React, {Component} from "react";
import Navigation from "./Navigation.js"
import Canvas from "./Canvas.js"
// import main from "./main.js"
 //es6
class Main extends Component{
  render() {
    return (
      <div className="main">
      <div className="row">
        <Navigation/>
        <Canvas/>
      </div>  
      </div>
    );
  }
};
export default Main

 //es5
 /*
var Hello = React.createClass({
    render: function() {
        return (
            <div>Hello</div>
        )
    }
})
module.exports = Hello
*/