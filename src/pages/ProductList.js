import React from 'react';
import { Link } from 'react-router-dom';
import bag from '../assets/bag.jpg';
import bag3 from '../assets/bag3.jpg';

const products = [
  { id: 1, name: 'Product 1', description: 'Description of product 1', image: bag, price: 200 },
  { id: 2, name: 'Product 2', description: 'Description of product 2', image: bag, price: 200 },
  { id: 3, name: 'Product 3', description: 'Description of product 3', image: bag, price: 200 },
  { id: 4, name: 'Product 4', description: 'Description of product 4', image: bag3, price: 300 },
  { id: 5, name: 'Product 5', description: 'Description of product 5', image: bag3, price: 300 },
  { id: 6, name: 'Product 6', description: 'Description of product 6', image: bag3, price: 300 },
];

const ProductList = () => (
  <div className="container">
    <div className="row">
      {products.map(product => (
        <div className="col-md-4" key={product.id}>
          <div className="card w-60 mb-4 shadow-sm">
            <img src={product.image} className="card-img-top" alt={product.name} />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <Link to={`/product/${product.id}`} className="btn btn-primary">View Details</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ProductList;