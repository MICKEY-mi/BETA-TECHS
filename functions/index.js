const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe") ('sk_test_51M1UcXSDhZafkFR4XRcdZOcC9jPnXKfSIvdzeiEhYp3DBpcezBV1ugWxZSp1CE1n6CsvKKJ1bcZ3b5FzRpITWVLI00sQQvkwjV')

//API


//-App config
const app = express();

//-Middlewares
app.use(cors({ origin: true}));
app.use(express.json());


//-Api router
app.get('/', (request, response) => response.status(200).send("Hello World"))
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('payment request received BOOM!!! for this amount >>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });
    //OK CREATED
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

//-listen command
exports.api = functions.https.onRequest(app)

//example end point
// http://127.0.0.1:5001/clone-be93e/us-central1/api