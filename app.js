const express = require("express");
const cors = require("cors");
const bodyParse = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false }));
app.use("api/v1", "/routes");

require("./src/data/db").connect();

module.exports = app;
