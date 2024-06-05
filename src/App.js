import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Account from './pages/Account';

const App = () => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({ name: '', address: '', email: '' });

  const addToCart = (product, quantity) => {
    setCart(prevCart => {
      const existingProductIndex = prevCart.findIndex(item => item.id === product.id);
      if (existingProductIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += parseInt(quantity, 10);
        return updatedCart;
      } else {
        return [...prevCart, { ...product, quantity: parseInt(quantity, 10) }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateCartQuantity = (productId, quantity) => {
    setCart(prevCart => {
      return prevCart.map(item =>
        item.id === productId ? { ...item, quantity: parseInt(quantity, 10) } : item
      );
    });
  };

  const finalizePurchase = () => {
    alert("Purchase finalized! Thank you for your purchase.");
    setCart([]);
  };

  const updateUser = (newUser) => {
    setUser(newUser);
  };

  return (
    <Router>
      <NavBar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
      <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} updateCartQuantity={updateCartQuantity} finalizePurchase={finalizePurchase}/>} />
      <Route path="/account" element={<Account user={user} updateUser={updateUser} />} />
      </Routes>
    </Router>
  );
};

export default App;