require("dotenv").config();
const sqlite3 = require("sqlite3").verbose();
const express = require("express");
const app = express();
const apiKey = "1234567890";

const print = require("./controller");
let db = new sqlite3.Database(":memory:");

db.serialize(() => {
  db.run("CREATE TABLE user (id INT, name TEXT)");
  db.run("INSERT INTO user (id, name) VALUES (1, 'Alice')");
  db.run("INSERT INTO user (id, name) VALUES (2, 'Bob')");
  db.run("INSERT INTO user (id, name) VALUES (3, 'Charlie')");
  db.run("INSERT INTO user (id, name) VALUES (4, 'Diana')");
  db.run("INSERT INTO user (id, name) VALUES (5, 'Eve')");
  db.run("INSERT INTO user (id, name) VALUES (6, 'Frank')");
  db.run("INSERT INTO user (id, name) VALUES (7, 'Grace')");
  db.run("INSERT INTO user (id, name) VALUES (8, 'Hank')");
  db.run("INSERT INTO user (id, name) VALUES (9, 'Ivy')");
  db.run("INSERT INTO user (id, name) VALUES (10, 'Jack')");
  db.run("INSERT INTO user (id, name) VALUES (11, 'Karen')");
  db.run("INSERT INTO user (id, name) VALUES (12, 'Leo')");
});

app.get("/user", (req, res) => {
  const userId = req.query.id;
  console.log(userId);
  // Vulnerable to SQL Injection
  const query = `SELECT name FROM user WHERE id = ${userId}`;
  db.all(query, (err, rows) => {
    if (err) {
      res.status(500).send("Database error");
    } else {
      if (rows.length > 0) {
        const names = rows.map((row) => row.name).join(", ");
        res.send(`Users: ${names}`);
      } else {
        res.send("No users found");
      }
    }
  });
});

app.get("/", print);

app.get("/api-key", (req, res) => {
  console.log(apiKey);
  res.send(apiKey);
});

app.listen(process.env.PORT, () => {
  console.log(`Listening to port ${process.env.PORT}`);
});
