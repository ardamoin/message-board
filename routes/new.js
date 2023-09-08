const express = require("express");
const router = express.Router();
let messages = require("./index").messages;

router.get("/", function (req, res, next) {
  res.render("form", {});
});

router.post("/", function (req, res, next) {
  messages.push({
    text: req.body.message,
    user: req.body.author,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
