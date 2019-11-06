const express = require("express");
const bodyParser = require("body-parser");  
const path = require("path");
const app = express();

const port = process.env.PORT || 8080; 
cors = require('cors')
const mongoose = require("mongoose");
const config = require('./config')

const User = require('./models/user');

mongoose.Promise = global.Promise; 
mongoose.connect(
  config.mongoURL, 
  { useNewUrlParser: true }
).then(() => console.log("Database is Connected!"), (err) => console.log("Can't connect to the Database"))

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist/assignment-angular')))
app.use(cors())

app.post('/register', async (req, res, next) => {
  const isEmail = await User.findOne({email: req.body.email.toLowerCase()});
  if (isEmail)
    res.json({err: "Email aldready!"})
  else {
    const newUser = new User({
      firstName: req.body.firstName.toLowerCase(),
      lastName: req.body.lastName.toLowerCase(),
      email: req.body.email.toLowerCase(),
      password: req.body.password,
      phone: req.body.phone
    })
  
    try {  newUser.save().then(user => {
          res.json(user)
        })
    } catch(err) {
      console.log(err)
    }
  }
})

app.post('/login', async (req, res) => {
  const isEmail = await User.findOne({email: req.body.email.toLowerCase()});
  if (!isEmail) {
    res.json({"err": "Email is not exist!"});
  }
  else {
    if (isEmail.password !== req.body.password)
      return res.json({"err" : "Wrong password!"})
    res.json(isEmail);
  }
})

app.get('/users', (req, res) => {
  User.find().then(rec => {
    res.status(200).json(rec)
  })
})




app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/assignment-angular/index.html'))
});

app.listen(port, () => console.log(`App Listening on port ${port}`));