const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const config = require('./config')

const User = require('./models/user');

mongoose.Promise = global.Promise;
mongoose.connect(
  config.mongoURL,
  { useNewUrlParser: true }
);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist/assignment-angular')))


app.post('/register', (req, res) => {
  const newUser = new User({
    name: req.body.fullName,
    email: req.body.email,
    password: req.body.password
  })
  newUser.save().then(rec => {
    res.status(201).json(rec)
  })
})

app.post('/login', (req, res) => {
  User.findOne({email: req.body.email}).then(loginUser => {

    if(loginUser.password !== req.body.password) {
      return res.status(401).json({message: 'Invalid username or password'})
    }
    res.status(200).json({status: "Logged in"})

  })

})

app.get('/users', (req, res) => {
  User.find().then(rec => {
    res.status(200).json(rec)
  })
})



app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/assignment-angular/index.html'))
});

app.listen(8080, () => console.log("Listening on port 8080..."));