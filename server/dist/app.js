"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const mysql = require('mysql2/promise');
const cors = require('cors');
const PORT = process.env.PORT || 3000;
app.use(express_1.default.static('build'));
app.use(express_1.default.json());
app.use(cors());
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/build/index.html');
});
app.listen(PORT, () => {
    console.log('server running !');
});
<<<<<<< HEAD
app.post('/database', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, age } = req.body;
        const [rows, fields] = yield connection.excute(`INSERT INTO user(name, age) VALUES(?, ?)`, [name, age]);
        res.send('값이 추가되었습니다..');
    });
=======
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "passwrod",
    database: "LoginSystem",
>>>>>>> parent of 25bedbb (dd)
});
app.post("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    db.query("INSERT INTO users (username, password) VALUES (?,?)", [username, password], (err, result) => {
        console.log(err);
    });
});
