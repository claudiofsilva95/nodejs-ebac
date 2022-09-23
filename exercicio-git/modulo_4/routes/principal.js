const express = require('express');

const router = express.Router();

router.get('/', (_, res) => {
  res.send('Hellow World');
});

module.exports = router;