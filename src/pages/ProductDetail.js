import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(0);
  };

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} className="img-fluid" alt={product.name} />
        </div>
        <div className="col-md-6">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <h3>${product.price}</h3>
          <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} min="0" className="form-control mb-2" />
          <button className="btn btn-primary" onClick={handleAddToCart}>Add to Cart</button>
          <button className='btn btn-secondary ml-2' onClick={handleGoBack}>Go Back</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;