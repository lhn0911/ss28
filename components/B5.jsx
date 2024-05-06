import React from 'react';
import ChildComponent from './B5con.jsx';

function ParentComponent() {
  const product = {
    id: 1,
    name: 'Lại Hoàng Nam',
    price: 10.99,
    quantity: 5
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent product={product} />
    </div>
  );
}

export default ParentComponent;
