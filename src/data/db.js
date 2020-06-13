const mongoose = require("mongoose");
require("dotenv").config();

module.exports = {
  connect: () => {
    mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const connection = mongoose.connection;
    connection.once("open", () => {
      console.log("MongoDb connected");
    });

    connection.on("error", () => {
      console.log("MongoDb not connected");
    });
  },
};
