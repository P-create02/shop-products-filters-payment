const dotenv = require('dotenv')
dotenv.config()

const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY)

exports.handler = async function (event) {
  const { cart, total_amount, shipping_free } = JSON.parse(event.body)

  const calculateOrderAmount = () => {
    return shipping_free + total_amount
  }
  console.log(cart);

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(),
      currency: 'pln',
    })
    return {
      statusCode: 200,
      body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
    }
  } 
  catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    }
  }
}