const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  username: String,
  password: String,
  bio: String,
});

module.exports = Mongoose.model("User", userSchema);
