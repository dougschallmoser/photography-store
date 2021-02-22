const express = require('express');
const app = express();
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST);
const parser = require('body-parser');
const cors = require('cors');

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(cors());

app.post('/stripe/charge', cors(), async (req, res) => {
  console.log(req.body);
})

app.listen(process.env.PORT || 8080, () => {
  console.log('Server started...')
})