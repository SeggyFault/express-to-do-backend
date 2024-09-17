require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

console.log(process.env.PORT)

app.get('/', (req, res) => {
  res.send("I am working");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})