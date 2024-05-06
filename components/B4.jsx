import React, { Component } from 'react';
import ChildrenComp from './B4con.jsx';

class ParentComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Lại Hoàng Nam'
    };
  }

  render() {
    return (
      <div>
        <h1>Parent Component</h1>
        <p>Name: {this.state.name}</p>
        <ChildrenComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
