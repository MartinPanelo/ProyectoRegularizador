const router = require("express").Router();

router.get("/generarCRUD", (req, res, next) => {
  //index
  res.render("index");
  next();
});

router.get("/login", (req, res, next) => {
  //login
  res.render("login");
  next();
});

router.get("/register", (req, res, next) => {
  //register
  res.render("register");
  next();
});

router.get("*", function (req, res) {
  res.redirect("/generarCRUD");
  next();
});

module.exports = router;
