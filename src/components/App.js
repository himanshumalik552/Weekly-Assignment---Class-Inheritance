import React, { Component } from "react";
import '../styles/App.css'
import Shape from "../components/Shape";

import Circle from "../components/Circle";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Circle />

        <Shape />
      </div>
    );
  }
}
export default App;