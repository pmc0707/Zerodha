require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require("cors");
const {HoldingModel} = require('./models/HoldingModel');
const {PositionModel} = require('./models/PositionModel');
const {OrderModel} = require('./models/OrderModel');
const authRoute = require("./route/AuthRoute");
const AuthController = require("./controller/AuthController");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;  // MongoDB connection URI from environment variable
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/', authRoute);

app.get('/allHolding', async (req, res) => {
  let allHolding = await HoldingModel.find({});
  res.json(allHolding);
});

app.get('/allPosition', async (req, res) => {
  let allPosition = await PositionModel.find({});
  res.json(allPosition);
});

app.post('/newOrder', async (req, res) => {
  let newOrder = new OrderModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  newOrder.save();
  res.send("Order saved!");
});

// Added error handling for MongoDB connection
app.listen(PORT, () => {
  if (!uri) {
    console.error("MongoDB URI is not defined! Ensure that MONGO_URL is set in your .env file.");
    process.exit(1);  // Exit if the URI is not defined
  }

  mongoose.connect(uri)
  .then(() => {
    console.log("DB connected!");
  })
  .catch((error) => {
    console.error("Error connecting to DB:", error);
    process.exit(1);  // Exit if connection fails
  });

  console.log("App started!");
});
