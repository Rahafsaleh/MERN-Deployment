const mongoose = require("mongoose");

const PetsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "{PATH} is required"],
      // unique : [true, "{PATH} must be unique"],
      minlength: [3, "{PATH} must be at least {MINLENGTH}"],
    },
    type: {
      type: String,
      required: [true, "{PATH} is required"],
      minlength: [3, "{PATH} must be at least {MINLENGTH}"],
    },
    desc: {
      type: String,
      required: [true, "Description is required"],
      minlength: [3, " Description must be at least {MINLENGTH}"],
    },
    skill1: {
      type: String,
    },
    skill2: {
      type: String,
    },
    skill3: {
        type: String,
      },
  },
  { timestamps: true }
);


module.exports.Pets = mongoose.model("Pets", PetsSchema);