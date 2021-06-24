const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const schema = new Schema({
  segunda: Boolean,
  terca: Boolean,
  quarta: Boolean,
  quinta: Boolean,
  sexta: Boolean,
  sabado: Boolean,
  domingo: Boolean,
});

module.exports = { schema };
