// import model
const Maid = require("../models/maid");

const signup = (req, res) => {
  const maid = new Maid(req.body);

  maid
    .save()
    .then((result) => res.send({ error: false, data: result }))
    .catch((err) => res.send({ error: true, data: err }));
};

const login = async (req, res) => {
  const maid = await Maid.findOne(req.body);

  if (maid) {
    res.send({ error: false, data: maid });
  } else {
    res.send({ error: true });
  }
};

const listAll = (req, res) => {
  Maid.find()
    .then((result) => {
      result.forEach((maid) => {
        delete maid._doc.cpf;
        delete maid._doc.senha;
      });

      res.send({ error: false, data: result });
    })
    .catch((err) => res.send({ error: true, data: err }));
};

const maidProfile = (req, res) => {
  const id = req.params.id;
  Maid.findById(id)
    .then((result) => {
      delete result._doc.cpf;
      delete result._doc.senha;

      res.send({ error: false, data: result });
    })
    .catch((err) => res.send({ error: true, data: err }));
};

const updateProfile = (req, res) => {
  const id = req.params.id;
  Maid.findByIdAndUpdate(id, req.body, (err) => {
    if (err) res.send({ error: true, data: err });
    else maidProfile(req, res);
  });
};

module.exports = {
  signup,
  login,
  listAll,
  maidProfile,
  updateProfile,
};
