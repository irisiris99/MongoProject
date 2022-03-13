import express from 'express';

const app = express();
const mysql = require('mysql2/promise');

let connection :any;

const PORT :any = process.env.PORT || 3000;

app.use(express.static('build'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  res.sendFile(__dirname + './build/index.html');
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

app.delete('/database/:id', async function (req, res) {
  const id = req.params.id;
  const [rows, fields] = await connection.execute(
    `DELETE FROM user WHERE id=?`, [id]);
  res.send('값이 삭제되었습니다..');
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