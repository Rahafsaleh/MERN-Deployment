const PetsController = require("../controllers/pet.controller");
const { Pets } = require("../models/pet.model");
module.exports = (app) => {
  app.post("/api/pets", PetsController.createPet);
  app.get("/api/pets", PetsController.getAll);
  app.get("/api/pets/:idd", PetsController.getOne);
  app.put("/api/pets/:id", PetsController.updatePet);
  app.delete("/api/pets/:iddd", PetsController.deletePet);
};