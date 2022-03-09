"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const mysql = require('mysql2/promise');
let connection;
const database = [
    { id: 1, title: '글1' },
    { id: 2, title: '글2' },
    { id: 3, title: '글3' },
];
const PORT = process.env.PORT || 3000;
app.use(express_1.default.static('build'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/build/index.html');
});
app.get('/database', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const [rows, fields] = yield connection.excute(`SELECT * FROM user`);
        console.log('rows : ', rows);
        res.send(rows);
    });
});
app.post('database', function (req, res) {
    const title = req.body.title;
    database.push({
        id: database.length + 1,
        title,
    });
});
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    connection = yield mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'myapp',
        password: 'root',
    });
    console.log('server running !');
}));
