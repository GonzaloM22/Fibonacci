const express = require('express');
const app = express();
const router = require('./routes');

app.use('/', router);

const port = 5001;
app.listen(port, () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
});
