const router = require("express").Router();

router
  .route("/")
  .get(async (req, res, next) => {
    res.json({ Status: "this is products route" });
  })
  .post();

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
  });

module.exports = router;
