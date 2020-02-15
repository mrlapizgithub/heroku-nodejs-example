const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 5000;

express()
  .use(bodyParser.urlencoded({ extended: false }))
  .use(express.static(path.join(__dirname, 'public')))
  .get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')))
  .post('/.second', (req, res) => res.send(`Success! Good work ${req.body.name}!`))
.listen(PORT, () => console.log(`Listening on ${PORT}`));
