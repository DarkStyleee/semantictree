const express = require("express");
const cors = require("cors");
const graphData = require("./glossary.json");
const app = express();
const port = 3333;

app.use(cors());

app.get("/glossary", (req, res) => {
  console.log("Signal received");
  res.type("json");
  res.json(graphData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
