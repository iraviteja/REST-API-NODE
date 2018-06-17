const express = require("express");

const app = express();

//Routes
const productsRoutes = require("./routes/products.js");
const orderssRoutes = require("./routes/orders.js");

app.use("/products", productsRoutes);
app.use("/orders", ordersRoutes);

const port = process.env.PORT || 3000;
app.listen(port, err => {
  if (err) throw err;
  console.log(`Server is running on port ${port}`);
});
