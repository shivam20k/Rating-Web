import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StoreList = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await axios.get('/api/stores');
        setStores(response.data);
      } catch (error) {
        console.error(error.response.data);
      }
    };

    fetchStores();
  }, []);

  return (
    <div>
      <h2>Store List</h2>
      <ul>
        {stores.map((store) => (
          <li key={store._id}>
            {store.name} - {store.address}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StoreList;
