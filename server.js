const express = require("express");
const app = express();
const port = process.env.PORT || 7000;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "We are cooking with dokku"
  });
});

app.listen(port);
