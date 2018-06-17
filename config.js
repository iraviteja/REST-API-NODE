const mongoose = require("mongoose");

module.exports = mongoose.connect(
  "mongodb://localhost/restapi",
  err => {
    if (err) throw err;
    console.log("Database connected");
  }
);
