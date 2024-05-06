import React, { Component } from 'react';

class ChildrenComp extends Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <h2>Child Component</h2>
        <p>Họ Và Tên: {name}</p>
      </div>
    );
  }
}

export default ChildrenComp;
