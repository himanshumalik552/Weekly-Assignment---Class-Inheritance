import Shape from "./shape";
import React from 'react'

class Circle extends Shape {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>{this.calculateArea()}</div>;
  }
}

export default Circle;
