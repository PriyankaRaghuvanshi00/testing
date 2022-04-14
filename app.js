var express = require('express');
var app = express();
var cors = require('cors');
var bodyparser = require('body-parser');
var port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }))
app.get('/', (req, res, next) => {
   res.json({ name: "priyanka", enroll: 176 })
})

app.post('/user', (req, res, next) => {
   const name = req.body.name, enroll = req.body;
})

app.get('/user', (req, res, next) => {
   res.json({ msg: "hello" });
})
app.listen(port, () => {
   console.log("listening 3000");
});