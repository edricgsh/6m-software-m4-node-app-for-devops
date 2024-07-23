require("dotenv").config();
const express = require("express");
const { exec } = require("child_process");
const app = express();

const print = require("./controller");
const SECRET_KEY = "1234567890abcdef";

app.get("/", print);

app.get("/endpointv2", () => {
  console.log(SECRET_KEY);
});

app.get("/exec", (req, res) => {
  const userCommand = req.query.cmd;

  // Vulnerable to command injection
  exec(userCommand, (error, stdout, stderr) => {
    if (error) {
      res.status(500).send(`Error: ${stderr}`);
    } else {
      res.send(`Output: ${stdout}`);
    }
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Listening to port ${process.env.PORT}`);
});
