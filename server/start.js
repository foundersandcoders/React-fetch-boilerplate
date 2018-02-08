const express = require('express')
const app = express()

var someJSON = {data:7};
var someJstring = JSON.stringify (someJSON);


app.get('/', (req, res) => res.send('Hello World!'));
app.get('/api', (req, res) => {
    res.send (someJstring)
  });

const PORT = 8000;

app.listen(PORT, () => console.log('Express listening on port '+PORT));
