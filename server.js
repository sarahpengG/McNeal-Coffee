const express = require("express");
const app = express();
const PORT = 3000;
app.set("view engine", "pug");

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/menu', (req, res) => {
  res.send('Hello World!')
})

app.get('/order', (req, res) => {
  res.send('Hello World!')
})

app.get('/events', (req, res) => {
  res.send('Hello World!')
})
app.get('/account', (req, res) => {
  res.send('Hello World!')
})
app.get('/login', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, function (err) {
  if (err) console.log("Error in server setup");
  console.log("http://localhost:", PORT);
});