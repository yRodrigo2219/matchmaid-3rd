const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const schema = new Schema({
  baba: Boolean,
  lavarRoupa: Boolean,
  passearPet: Boolean,
  cuidarCasa: Boolean,
  lavarLouca: Boolean,
  encanador: Boolean,
  cozinhar: Boolean,
});

module.exports = { schema };
