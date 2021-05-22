import Shape from "./Shape";
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
