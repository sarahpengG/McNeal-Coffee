const express = require("express");
const app = express();
const PORT = 3000;
app.set("view engine", "pug");
app.set("views", "templates");
const mongoose = require('mongoose');

app.use(express.static("templates"));
app.use(express.static("assets"));


app.get('/', (req, res) => {
  res.render("landing.pug")
})
app.get('/landing', (req, res) => {
  res.render("landing.pug")
})
app.get('/order', (req, res) => {
  res.render("order.pug")
})
app.get('/events', (req, res) => {
  res.render("events.pug")
})
app.get('/account', (req, res) => {
  res.render("account.pug")
})


app.listen(PORT, function (err) {
  if (err) console.log("Error in server setup");
  console.log("http://localhost:", PORT);
});