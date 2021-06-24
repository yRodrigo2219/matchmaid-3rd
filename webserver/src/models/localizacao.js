const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const schema = new Schema({
  longitude: {
    type: Number,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  rua: String,
  numeroCasa: String,
  bairro: String,
  cidade: String,
  cep: String,
  estado: String,
});

module.exports = { schema };
