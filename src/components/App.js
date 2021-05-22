import React, { Component } from "react";

import Shape from "../components/shape";

import Circle from "../components/circle";

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