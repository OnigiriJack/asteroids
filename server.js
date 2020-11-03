const express = require('express');
const app = express();
const knex = require("knex");
const config = require("./knexfile");
const db = knex(config);
require("dotenv").config();


const PORT = process.env.PORT || 9000;
// Serve static assets
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
app.use(express.static(__dirname, + "/public"));

app.get("/api/asteroids", async (req, res) => {
    try {
      const asteroids = await db.select().table("asteroids");
      console.log(asteroids);
      res.json(asteroids);
    } catch (err) {
      console.error("Error loading asteroids!", err);
      res.sendStatus(500);
    }
  });

  app.get("/api/asteroids/names", async (req, res) => {
    try {
      const asteroidNames = await db.select("name").table("asteroids");
      res.json(asteroidNames);
    } catch (err) {
      console.error("Error finding names!", err);
      res.sendStatus(500);
    }
  });

  app.get("/api/asteroids/:id", async (req, res) => {
    const id = req.params.id;

    try {
      const asteroidNames = await db
      .select()
      .table("asteroids")
      .where({id:id});
      res.json(asteroidNames);
    } catch (err) {
      console.error("Error finding names!", err);
      res.sendStatus(500);
    }
  });

  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
  