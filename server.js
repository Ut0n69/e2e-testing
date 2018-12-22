const LISTEN_PORT = 8000;

const express = require("express");
const app = express();

app.use(express.static("dist"));

// root
app.get("/", function(req, res) {
  res.sendFile("./dist/index.html");
});

// not found
app.get("/*", function(req, res) {
  res.send('<p style="margin: 30px">Sorry. something wrong...</p>');
});

app.listen(process.env.PORT || LISTEN_PORT);
