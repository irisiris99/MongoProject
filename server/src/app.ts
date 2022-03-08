import express from 'express';

const app = express();
const mysql = require('mysql2/promise');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

app.use(express.static('build'));
app.use(express.json());
app.use(cors());

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/build/index.html');
});

app.listen(PORT, () => {
  console.log('server running !');
});

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "passwrod",
  database: "LoginSystem",
});

app.post("/register", (req, res) => {

  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "INSERT INTO users (username, password) VALUES (?,?)",
    [username, password],
    (err :any, result :any) => {
      console.log(err);
    }
  );
})