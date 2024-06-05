import React from 'react';

const Cart = ({ cart, removeFromCart, updateCartQuantity, finalizePurchase  }) => {
  const handleQuantityChange = (productId, newQuantity) => {
    updateCartQuantity(productId, newQuantity);
  };

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleFinalizePurchase = () => {
    finalizePurchase();
  };
     
  return (
    <div className="container">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cart.map(item => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>{item.name}</strong> - ${item.price} each
                </div>
                <div>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                    min="1"
                    className="form-control d-inline-block"
                    style={{ width: '60px', marginRight: '10px' }}
                  />
                  <button className="btn btn-danger" onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                </div>
                <div>
                  Total: ${item.price * item.quantity}
                </div>
              </li>
            ))}
          </ul>
          <button className="btn btn-success" onClick={handleFinalizePurchase}>Finalize Purchase</button>
        </>
      )}
    </div>
  );
};

export default Cart;