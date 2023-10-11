const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  text: { type: String, required: true },
  user: { type: String, required: true },
  dateAdded: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Message", MessageSchema);
