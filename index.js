const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hola, esta es mi aplicación de prueba para ambientes efímeros.');
});

app.get('/status', (req, res) => {
  res.json({
    app: 'Ephemeral Environment Demo',
    status: 'ok',
    platform: 'Heroku'
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
