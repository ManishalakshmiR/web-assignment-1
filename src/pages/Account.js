// src/pages/Account.js
import React, { useState, useEffect } from 'react';

const Account = ({ user, updateUser }) => {
  const [formData, setFormData] = useState({ name: '', address: '', email: '' });
  const [isEditing, setIsEditing] = useState(true);

  useEffect(() => {
    setFormData(user);
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(formData);
    alert("Account details updated!");
    setIsEditing(false);
  };

  const handleClear = () => {
    setFormData({ name: '', address: '', email: '' });
  };

  const handleEdit = () => {
    setIsEditing(true);
    setFormData(user);
  };

  return (
    <div className="container">
      <h1>Account Details</h1>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Shipping Address</label>
            <input
              type="text"
              className="form-control"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Save</button>
          <button type="button" className="btn btn-secondary ml-2" onClick={handleClear}>Clear</button>
        </form>
      ) : (
        <>
          <div className="mt-4">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Shipping Address:</strong> {user.address}</p>
            <p><strong>Email:</strong> {user.email}</p>
          </div>
          <button className="btn btn-primary" onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  );
};

export default Account;
