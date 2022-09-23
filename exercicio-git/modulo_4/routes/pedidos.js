const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('pedidos/index', {
    nomeDoUsuario: 'Claudio'
  });
});


module.exports = router;