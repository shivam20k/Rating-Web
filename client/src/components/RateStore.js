import React, { useState } from 'react';
import axios from 'axios';

const RateStore = () => {
  const [storeId, setStoreId] = useState('');
  const [userId, setUserId] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/stores/rate', { storeId, userId, rating });
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Rate Store</h2>
      <input type="text" placeholder="Store ID" value={storeId} onChange={(e) => setStoreId(e.target.value)} />
      <input type="text" placeholder="User ID" value={userId} onChange={(e) => setUserId(e.target.value)} />
      <input type="number" placeholder="Rating" value={rating} onChange={(e) => setRating(e.target.value)} />
      <button type="submit">Rate Store</button>
    </form>
  );
};

export default RateStore;
