const mongoose = require("mongoose");

const limberMongoDB = uri => {
  const options = {
    useNewUrlParser: true
  };
  mongoose
    .connect(uri, options)
    .then(() => console.log("Successfully connected to mongoDB Atlas."))
    .catch(error => {
      console.error(
        `There was an error while connecting to mongoDB Atlas: ${error.message}`
      );
    });
  mongoose.Promise = global.Promise;
};

module.exports = limberMongoDB;
