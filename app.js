const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const path = require('path');
const port = 4000;
//const test3 = require('./test3') ;
const reduxjs = require('./reduxJS/redux.js');

const makePath = (dir, filename) => {
    return path.resolve(__dirname, '..', dir, filename);
}
const todos = ['todo1', 'todo2', 'todo3', 'todo4', 'todo5', 'todo6', 'todo7'];

app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.get('/test', (req, res) => {
    res.render(makePath(`${__dirname}/public/junior`, 'index.ejs'), {todos});
})
app.get('/', (req, res) => {
    res.send(__dirname);
})
app.post('/todo', (req, res) => {
    todos.push(req.body.todo);
    res.json(req.body);
});
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});