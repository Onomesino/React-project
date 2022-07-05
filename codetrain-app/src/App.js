import React from "react";
import "./App.css";

function App() {
  return <WelcomeComponent name="codetrain" />;
}

class WelcomeComponent extends React.Component {
  render() {
    return <h1>{this.props.name} is awesome, react works!!!!</h1>;
  }
}

export default App;
