const express = require('express');
const axios = require('axios');
const app = express();
const port = 9000;

app.use('/hostels/:Id', express.static('public'));

app.get('/api/hostels/:id', (req, res) => {
  const Id = req.params.id;
  axios.get(`http://localhost:3001/api/hostels/${Id}`)
    .then(response => (res.status(200).send(response.data)))
    .catch(err => console.log(err))
})

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});