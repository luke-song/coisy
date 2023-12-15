// This is your test secret API key.
const stripe = require("stripe")(
  "sk_test_51MaHJ3HfgoB6gSAm0ygKFM62IpJnvQ0Ev4R681SWtluhqBLOVx92gxexm7KegUoCynfz8zKLkiMHSse3LiF42AQQ00MOPSoGjY"
);
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.static("."));

const YOUR_DOMAIN = "http://localhost:4242";

app.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'price_1ONUD5HfgoB6gSAmxxEDposF',
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${YOUR_DOMAIN}/success.html`,
    cancel_url: `${YOUR_DOMAIN}/cancel.html`,
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log("Running on port 4242"));
