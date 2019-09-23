const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName: {type: String, default: ""},
  email: {type: String, required: true, unique: true},
  firstName: {type: String},
  lastName: {type: String},
  gender: {type: Boolean, default: true},
  birthday: {type: Date, default: Date.now()},
  password: {type: String, required: true},
  schoolFee: {type: Number, default: 0},
  marks: {type: Object},
  courses: {type: Array},
  completed: {type: Array}
})
const User = mongoose.model('User', userSchema, 'users')
module.exports = User