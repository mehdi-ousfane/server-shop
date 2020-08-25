const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.send('<p>Pouloulou!</p>')
});

app.listen(3000);
