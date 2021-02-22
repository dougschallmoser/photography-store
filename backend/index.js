const express = require('express');
const app = express();
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_PRODUCTION);
const parser = require('body-parser');
const cors = require('cors');

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(cors());

app.post('/stripe/charge', cors(), async (req, res) => {
  let { amount, id } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Doug Schallmoser Photography",
      payment_method: id,
      confirm: true
    })

    res.json({
      message: 'Successful payment',
      success: true
    })
  } catch (err) {
    res.json({
      message: 'Failed payment',
      success: false
    })
  }
})

app.listen(process.env.PORT || 8080, () => {
  console.log('Server started...')
})