const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "static")));

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/blog", (req, res) => {
  res.render("blog");
});
app.get("/shop", (req, res) => {
  res.render("shop");
});
app.get("/projects", (req, res) => {
  res.render("projects");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});

module.exports = app;
