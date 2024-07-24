const Store = require('../models/Store');
const User = require('../models/User');

exports.getStores = async (req, res) => {
  try {
    const stores = await Store.find();
    res.status(200).json(stores);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.addStore = async (req, res) => {
  const { name, email, address } = req.body;

  try {
    const newStore = new Store({ name, email, address });
    await newStore.save();
    res.status(201).json(newStore);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.rateStore = async (req, res) => {
  const { storeId, userId, rating } = req.body;

  try {
    const store = await Store.findById(storeId);
    if (!store) {
      return res.status(400).json({ message: 'Store not found' });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    store.ratings.push({ user: userId, rating });
    await store.save();

    res.status(200).json(store);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
