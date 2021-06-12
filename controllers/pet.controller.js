const { Pets } = require("../models/pet.model");

module.exports = {
  createPet: (req, res) => {
    Pets.create(req.body)
      .then((pet) => {
        console.log("you have successfully added a pet");
        res.json(pet);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  getAll: (req, res) => {
    Pets.find({})
      .then((pets) => res.json(pets))
      .catch((err) => res.status(400).json(err));
  },
  getOne: (req, res) => {
    Pets.findOne({ _id: req.params.idd })
      .then((pet) => res.json(pet))
      .catch((err) => res.status(400).json(err));
  },
  updatePet: (req, res) => {
    Pets.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((pet) => res.json(pet))
      .catch((err) => res.status(400).json(err));
  },
  deletePet: (req, res) => {
    Pets.deleteOne({ _id: req.params.iddd })
      .then((pet) => res.json(pet))
      .catch((err) => res.status(400).json(err));
  },
};