import React, { useState } from 'react';

const Product = ({ id, name, price, quantity }) => {
  return (
    <div>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Price: {price}</p>
      <p>Quantity: {quantity}</p>
    </div>
  );
};

const ListProduct = () => {

  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 10, quantity: 5 },
    { id: 2, name: 'Product 2', price: 20, quantity: 10 },
    { id: 3, name: 'Product 3', price: 15, quantity: 7 },
  ]);

  return (
    <div>
      <h2>List of Products</h2>

      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          quantity={product.quantity}
        />
      ))}
    </div>
  );
};

export default ListProduct;
