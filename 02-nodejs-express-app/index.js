const express = require('express');

// Constantes para el host y el puerto
const PORT = 3000;
const HOST = '0.0.0.0';

// Creamos una instancia de la aplicación Express
const app = express();

// Definimos la ruta principal ('/')
app.get('/', (req, res) => {
  res.send('<h1>Hello from a Docker Container!</h1><p>Your Node.js app is running.</p>');
});

// La aplicación se pone a escuchar en el puerto y host definidos
app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});