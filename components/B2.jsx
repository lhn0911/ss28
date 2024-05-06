import React, { Component } from 'react';

class Exercise02 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      name: 'Lại Hoàng Nam',
      birthDate: '09/11/2005',
      address: 'Thanh Xuân, Hà Nội',
    };
  }

  render() {
    return (
      <div>
        <h1>Thông tin cá nhân </h1>
        <p>ID: {this.state.id}</p>
        <p>Name: {this.state.name}</p>
        <p>Birth Date: {this.state.birthDate}</p>
        <p>Address: {this.state.address}</p>
      </div>
    );
  }
}

export default Exercise02;
