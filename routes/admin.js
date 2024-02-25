const express = require("express");
const app = express();

const router = express.Router();

router.get("/product", (req, res, next) => {
  res.setHeader("contentType", "text/html");
  res.send("Hello");
});

router.get("/add-product", (req, res, next) => {
  res.setHeader("contentType", "text/html");
  res.send(
    '<form action="/admin/product" method="POST"><input /><button type="submit">submit</button></form>'
  );
});

module.exports = router;
