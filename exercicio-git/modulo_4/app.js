const express = require('express');
const path = require('path');

const routerPrincipal = require('./routes/principal');
const routerPedidos = require('./routes/pedidos');
const routerPerfil = require('./routes/perfil');

const app = express();
const porta = 3000;

// Configurando o ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//routes
app.use('/', routerPrincipal);
app.use('/pedidos', routerPedidos);
app.use('/perfil', routerPerfil);

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});

