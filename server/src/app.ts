import express from 'express';

const app = express();
const mysql = require('mysql2/promise');

let connection :any;

const database = [
  { id:1, title: '글1'},
  { id:2, title: '글2'},
  { id:3, title: '글3'},
];

const PORT :any = process.env.PORT || 3000;

app.use(express.static('build'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/build/index.html');
});

app.get('/database', async function (req, res) {
  const [rows, fields] = await connection.excute(`SELECT * FROM user`);
  console.log('rows : ', rows);
  res.send(rows);
});

app.post('/database', async function (req, res) {
  const { name, age } = req.body;
  const [rows, fields] = await connection.excute(
    `INSERT INTO user(name, age) VALUES(?, ?)`, [name, age]);
  res.send('값이 추가되었습니다..');
});

app.listen(PORT, async () => {
  connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'myapp',
    password: 'root',
  });
  console.log('server running !!');
});
