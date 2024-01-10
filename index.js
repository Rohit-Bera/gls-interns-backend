const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.get("/", (request, response) => {
  response.status(200).json({ message: `server is running on port : ${port}` });
});

app.listen(port, () => {
  console.log(`server is running on port : ${port}`);
});
