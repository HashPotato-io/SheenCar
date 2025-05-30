import express from 'express';
import Stripe from 'stripe';

const stripe = new Stripe('your_stripe_secret_key', {
  apiVersion: '2023-10-16',
});

const router = express.Router();

router.post('/create-checkout-session', async (req, res) => {
  try {
    const { duration, budget, carDetails } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `Car Listing Boost - ${carDetails.make} ${carDetails.model} ${carDetails.year}`,
              description: `Boost duration: ${duration} days`,
            },
            unit_amount: budget * 100, // Convert to cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL}/cancel`,
    });

    res.json({ sessionId: session.id });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error creating checkout session' });
  }
});

export default router; 