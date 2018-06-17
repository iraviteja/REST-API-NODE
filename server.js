const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const config = require("./config");

const app = express();

//Middleware
app.use(bodyParser.json());

//Routes
const productsRoutes = require("./routes/products.js");
const ordersRoutes = require("./routes/orders.js");

app.use("/products", productsRoutes);
app.use("/orders", ordersRoutes);

const port = process.env.PORT || 3000;
app.listen(port, err => {
  if (err) throw err;
  console.log(`Server is running on port ${port}`);
});
