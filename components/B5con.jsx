import React from 'react';

function ChildComponent(props) {
  const { id, name, price, quantity } = props.product;

  return (
    <div>
      <h2>Child Component</h2>
      <p>Họ VÀ TÊN: {name}</p>
    </div>
  );
}

export default ChildComponent;
