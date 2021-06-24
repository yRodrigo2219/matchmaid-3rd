const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const schema = new Schema({
  manha: Boolean,
  tarde: Boolean,
  noite: Boolean,
});

module.exports = { schema };
