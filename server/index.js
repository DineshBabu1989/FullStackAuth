const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const {init} = require("./utils/db-init");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 8080;

dotenv.config();

var corsOptions = {
  origin: process.env.FRONT_END_URL
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Intialise db
 */
init();

app.get("/", (req, res) => {
  res.json({ message: "Welcome to secret company." });
});

/**
 * Routes
 */
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});