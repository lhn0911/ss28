import React from 'react';
import ChildComponent from './B6con.jsx';

function ParentComponent() {
  const users = [
    { id: 1, name: 'Lại Hoàng Nam', address: 'Thanh Xuân, Hà Nội', email: 'lhn2005@example.com' },
  ];

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent users={users} />
    </div>
  );
}

export default ParentComponent;
