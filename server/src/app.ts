import express from 'express';

const app = express();
const mysql = require('mysql2/promise');


let connection :any;

const PORT = process.env.PORT || 3006;

app.use(express.static('build'));


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/build/index.html');
});


app.get('/database', async function (req, res) {
  console.log('connection :', connection);
  const [rows, fields] = await connection.excute(`SELECT * FROM user`);
  console.log('rows :', rows);
  res.send(rows);
})

app.listen(PORT, async () => {
  connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'myapp',
    password: 'root',
  });
  console.log('server running !');
});