import express from 'express';

const app = express();
const mysql = require('mysql2/promise');

// http://localhost:3000

let connection :any;

const PORT :any = process.env.PORT || 4000;

app.use(express.static('build'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/build/index.html');
});

app.get('/database', async function (req, res) {
  const [rows, fields] = await connection.execute(`SELECT * FROM user`);
  console.log('rows : ', rows);
  res.send(rows);
});

app.post('/database', async function (req, res) {
  const { name, age } = req.body;
  const [rows, fields] = await connection.execute(
    `INSERT INTO user(name, age) VALUES(?, ?)`, [name, age]);
  res.send('값이 추가되었습니다..');
});

app.put('/database', async function (req, res) {
  const { id, name, age } = req.body;
  const [rows, fields] = await connection.execute(
    `UPDATE user SET name=?, age=? WHERE id=?`, [name, age, id]);
  res.send('값이 수정되었습니다..');
});

app.listen(3000, async () => {
  connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'myapp',
    password: 'root',
  });
  console.log('Server On !');
});