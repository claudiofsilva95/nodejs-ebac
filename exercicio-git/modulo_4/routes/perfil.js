const express = require('express');

const router = express.Router();

router.get('/', (_, res) => {
  res.render('perfil/index', {
    nome: 'Claudio Silva',
    idade: 27
  });
});

module.exports = router;