const router = require("express").Router();
const Product = require("../models/product.js");

router
  .route("/")
  .get(async (req, res, next) => {
    const products = await Product.find({});
    res.json(products);
  })
  .post(async (req, res, next) => {
    const product = new Product(req.body);
    await product.save();
    res.json(product);
  });

router
  .route("/:pid")
  .get(async (req, res, next) => {
    const { pid } = req.params;
    res.json(pid);
  })
  .post()
  .patch(async (req, res, next) => {
    const { pid } = req.params;
    res.json({ Status: "This is patch request" });
  })
  .delete(async (req, res, next) => {
    const { pid } = req.params;
    Product.findById(pid, (err, product) => {
      if (err) throw err;
      Product.findByIdAndRemove(product._id, (err, result) => {
        if (err) throw err;
        res.json(result);
      });
    });
    // const result = await Product.findByIdAndRemove(pid);
    // res.json(result);
  });

module.exports = router;
