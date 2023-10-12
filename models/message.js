const mongoose = require('mongoose');
const dateAndTime = require('../helpers/date');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  text: { type: String, required: true },
  user: { type: String, required: true },
  dateAdded: { type: Date, default: Date.now },
});

MessageSchema.virtual('formatDate').get(function() {
  return dateAndTime(`${this.dateAdded}`);
})

module.exports = mongoose.model("Message", MessageSchema);
