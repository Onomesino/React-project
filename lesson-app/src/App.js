import logo from "./logo.svg";
import "./App.css";
import WelcomeComponent from "./WelcomeComponent";

// import React, { Component } from 'react'

//  class App extends Component {
//   render() {
//     return (
//       <h1>"Codetrain is awesome,react works!!!"</h1>
//     )
//   }
// }

//  const App = () => {
//    return (
//       <h1>"Codetrain is awesome,react works!!!"</h1>
//    )

//  }

function App() {
  return (
    <>
      <WelcomeComponent Name="Codetrain" />
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
