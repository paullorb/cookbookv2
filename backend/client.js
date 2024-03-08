//---BASE-------------------------------------------------------------------------
//DOTENV
const dotenv = require("dotenv");
dotenv.config();

//PG
const { Client } = require("pg");

//EXPRESS
const express = require("express");
const process = require("process");
const app = express();
app.use(express.json());

//CORS
const cors = require("cors");
app.use(cors());

//---DB CONNECT-------------------------------------------------------------------
const client = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_BASE,
  port: process.env.DB_PORT,
});

client.connect();

//---REQUESTS---------------------------------------------------------------------

//---QUERIES----------------------------------------------------------------------
// get random single Recipe on Landing
app.get("/", (req, res) => {
  client.query("SELECT * FROM recipes", (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Sorry, something went wrong");
    } else {
      const randomNumber = Math.floor(Math.random() * result.rows.length);
      res.status(200).json(result.rows[randomNumber]);
      res.end();
      console.log("Test 0");
    }
  });
});

//all recipes
app.get("/AllRecipes", (req, res) => {
  client
    .query(`SELECT * FROM recipes ORDER BY id ASC`)
    .then((data) => {
      const recipes = data.rows;
      res.status(200).json(recipes);
      console.log("TEST 1", recipes);
    })
    .catch((e) => {
      console.log(e);
      res.status(500).send("Sorry, something went wrong");
      res.end();
    });
});

//search for recipes
app.get("/AllRecipes/searched/:query", async (req, res) => {
  try {
    const { query: Mquery } = req.params;
    console.log("RAFF DOCH DU HURENSOHN");
    console.log("Received search query:", Mquery);
    const data = await client.query(
      "SELECT * FROM recipes WHERE recipetitle ILIKE $1 ",
      [`%${Mquery}%`]
    );
    console.log("JUNGE JA");
    res.json(data.rows);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//all BREAKFAST
app.get("/Breakfast", (req, res) => {
  client
    .query("SELECT * FROM recipes WHERE category = 'Breakfast'")
    .then((data) => {
      const recipes = data.rows;
      res.status(200).json(recipes);
      console.log("TEST 2", recipes);
    })
    .catch((e) => {
      console.log(e);
      res.status(500).send("Sorry, something went wrong");
      res.end();
    });
});

//all DESSERT
app.get("/Dessert", (req, res) => {
  client
    .query("SELECT * FROM recipes WHERE category = 'Dessert'")
    .then((data) => {
      const recipes = data.rows;
      res.status(200).json(recipes);
      console.log("TEST 3", recipes);
    })
    .catch((e) => {
      console.log(e);
      res.status(500).send("Sorry, something went wrong");
      res.end();
    });
});

//all LUNCH
app.get("/Lunch", (req, res) => {
  client
    .query("SELECT * FROM recipes WHERE category = 'Lunch'")
    .then((data) => {
      const recipes = data.rows;
      res.status(200).json(recipes);
      console.log("TEST 4", recipes);
    })
    .catch((e) => {
      console.log(e);
      res.status(500).send("Sorry, something went wrong");
      res.end();
    });
});

//all DINNER
app.get("/Dinner", (req, res) => {
  client
    .query("SELECT * FROM recipes WHERE category = 'Dinner'")
    .then((data) => {
      const recipes = data.rows;
      res.status(200).json(recipes);
      console.log("TEST 5", recipes);
    })
    .catch((e) => {
      console.log(e);
      res.status(500).send("Sorry, something went wrong");
      res.end();
    });
});

//single Recipe
app.get("/AllRecipes/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log("Received search query:", id);
    const data = await client.query("SELECT * FROM recipes WHERE id = $1 ", [
      `${id}`,
    ]);
    res.json(data.rows);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//---ESSENTIALS-------------------------------------------------------------------
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = client;
