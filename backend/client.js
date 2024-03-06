/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const dotenv = require("dotenv");
dotenv.config();
const { Client} = require("pg");
const express = require("express");
const process = require("process");
const app = express();

const cors = require('cors');
app.use(cors());

const client = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_BASE,
  port: process.env.DB_PORT,
});

client.connect();

app.use(express.json());



app.get("/", (req, res) => {
  client.query("SELECT * FROM recipes", (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Sorry, something went wrong');
    } else {
      const randomNumber = Math.floor(Math.random() * result.rows.length);
      res.status(200).json(result.rows[randomNumber]);
    }
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = client;