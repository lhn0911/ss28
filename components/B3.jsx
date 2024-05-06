import React, { Component } from 'react';

class Exercise03 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { id: 1, name: 'Lại Hoàng Nam', address: 'Thanh Xuân, Hà Nội' },
      ]
    };
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.users.map(user => (
            <li key={user.id}>
              <p>Họ và tên: {user.name}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Exercise03;
