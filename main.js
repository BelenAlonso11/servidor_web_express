const express = require('express');
const app = express();

app.use(express.static('public'));
app.listen(3004, function () {
  console.log('Example app listening on port 3000!');
});