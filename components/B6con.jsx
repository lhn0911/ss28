import React from 'react';

function ChildComponent(props) {
  const { users } = props;

  return (
    <div>
      <h2>Child Component</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <p>Name: {user.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChildComponent;
