const express = require("express");
const path = require("path");
const app = express();
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "./Public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000);
