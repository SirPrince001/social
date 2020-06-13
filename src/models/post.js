const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const postSchema = new Schema({
  sender_id: String,
  date_created: {
    type: Date,
    default: Date.now,
  },
  seen_by: String,
  post: String,
  comments: String,
  likes: String,
  is_comment: Boolean,
  parent_post: String,
});

module.exports = Mongoose.model("Post", postSchema);
