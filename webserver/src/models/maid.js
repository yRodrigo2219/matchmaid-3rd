const mongoose = require("mongoose");

// other schemas
const localizacao = require("./localizacao");
const servicos = require("./servicos");
const periodos = require("./periodos");
const dias = require("./dias");

const Schema = mongoose.Schema;

const schema = new Schema({
  cpf: {
    type: String,
    required: true,
    unique: true,
  },
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  senha: {
    type: String,
    required: true,
  },
  telefone: {
    type: String,
    required: true,
  },
  imagem: Buffer,
  bio: String,
  localizacao: {
    type: localizacao.schema,
    required: true,
  },
  precoHora: Number,
  servicos: servicos.schema,
  periodos: periodos.schema,
  dias: dias.schema,
});

const Maid = mongoose.model("Maid", schema);

module.exports = Maid;
