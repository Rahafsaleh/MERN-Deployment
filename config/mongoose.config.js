const mongoose = require("mongoose");
const db = "pets"

mongoose.connect("mongodb://localhost/" + db, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
.then( () => console.log("Connected to " + db))
.catch( err => console.log("Something went wrong! Oh teh noes!", err))

require("../models/pet.model");