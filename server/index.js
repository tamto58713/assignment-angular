const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const port = 8080
// cors = require('cors')
// const mongoose = require("mongoose");
// const config = require('./config')

// const User = require('./models/user');

// mongoose.Promise = global.Promise;
// mongoose.connect(
//   config.mongoURL,
//   { useNewUrlParser: true }
// ).then(() => console.log("Database is Connected!"), (err) => console.log("Can't connect to the Database"))

// app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist/assignment-angular')))
// app.use(cors())

// app.post('/register', (req, res) => {
//   console.log(req.body)
//   const newUser = new User({
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     email: req.body.email,
//     password: req.body.password,
//     phone: req.body.phone
//   })
//   newUser.save().then(user => {
//     res.json(user)
//   })
// })

// app.post('/login', (req, res) => {
//   let errs = [], user = {}
//   User.findOne({email: req.body.email}).then(loginUser => {
//     if (!loginUser) {
//       errs.push({name: "No UserName"})
//     }
//     else if (loginUser.password !== req.body.password) {
//       errs.push({name: "Wrong password"})
//     }
//     else
//       user = loginUser

//     res.json({user: user, errs: errs})
//   })
// })

// app.get('/users', (req, res) => {
//   User.find().then(rec => {
//     res.status(200).json(rec)
//   })
// })



app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/assignment-angular/index.html'))
});

app.listen(port, () => console.log(`Listening on port ${port}...`));