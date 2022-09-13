import React, { Component } from "react";

//  const Name = "Codetrain"
class WelcomeComponent extends Component {
  render(props) {
    return <h1>{props.Name} is awesome, react works!!!</h1>;
  }
}

export default WelcomeComponent;
