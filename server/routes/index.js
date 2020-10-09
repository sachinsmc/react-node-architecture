const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.json({ title: 'App Server started successfully' });
});

module.exports = router;
