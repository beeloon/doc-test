const express = require('express');

const PORT = 8080;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(PORT, 'localhost', () => {
  console.log(`Server is running on port ${PORT}`);
});
