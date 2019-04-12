const express = require('express');
const axios = require('axios');
const app = express();
const port = 9000;

app.use('/hostels/:Id', express.static('public'));

app.get('/api/hostels/:id/photos', (req, res) => {
  const Id = req.params.id;
  axios.get(`http://localhost:3001/api/hostels/${Id}/photos`)
    .then(response => (res.status(200).send(response.data)))
    .catch(err => console.log(err))
})

app.get('/api/hostels/:id/calendar', (req, res) => {
  const Id = req.params.id;
  axios.get(`http://localhost:3002/api/hostels/${Id}/calendar`)
    .then(response => (res.status(200).send(response.data)))
    .catch(err => console.log(err))
})

app.get('/api/reviews/:id/reviews', (req, res) => {
  const Id = req.params.id;
  axios.get(`http://localhost:3003/api/reviews/${Id}/reviews`)
    .then(response => (res.status(200).send(response.data)))
    .catch(err => console.log(err))
})

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});