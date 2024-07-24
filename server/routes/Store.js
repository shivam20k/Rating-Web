const express = require('express');
const { getStores, addStore, rateStore } = require('../controllers/storeController');
const router = express.Router();

router.get('/', getStores);
router.post('/', addStore);
router.post('/rate', rateStore);

module.exports = router;
