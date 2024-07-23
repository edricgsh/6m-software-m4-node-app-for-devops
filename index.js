require("dotenv").config();
const sqlite3 = require("sqlite3").verbose();
const express = require("express");
const app = express();

const print = require("./controller");
let db = new sqlite3.Database(":memory:");

db.serialize(() => {
  db.run("CREATE TABLE user (id INT, name TEXT)");
  db.run("INSERT INTO user (id, name) VALUES (1, 'Alice')");
  db.run("INSERT INTO user (id, name) VALUES (2, 'Bob')");
});

app.get("/user", (req, res) => {
  const userId = req.query.id;
  // Vulnerable to SQL Injection
  const query = `SELECT name FROM user WHERE id = ${userId}`;
  db.get(query, (err, row) => {
    if (err) {
      res.status(500).send("Database error");
    } else {
      res.send(`User: ${row ? row.name : "Not found"}`);
    }
  });
});

app.get("/", print);

app.listen(process.env.PORT, () => {
  console.log(`Listening to port ${process.env.PORT}`);
});
