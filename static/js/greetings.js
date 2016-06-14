import React, {Component} from "react";
import Navigation from "./Navigation.js"
// import main from "./main.js"
 //es6
class Hello extends Component{
  render() {
    return (
      <div>
        <Navigation/>
      </div>
    );
  }
};
export default Hello

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