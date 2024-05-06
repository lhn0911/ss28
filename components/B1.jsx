import React, { Component } from 'react';

class Exercises01 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Lại Hoàng Nam', 
    };
  }

  render() {
    return (
      <div>
        <h1>Họ Và Tên: {this.state.name}</h1>
      </div>
    );
  }
}

export default Exercises01;
