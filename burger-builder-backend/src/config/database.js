import mongoose from "mongoose";

import constants from "./constants";

mongoose.Promise = global.Promise;

let dbConnection = null;

// Connect the db with the url provide
try {
  dbConnection = mongoose.connect(constants.MONGO_URL, { useNewUrlParser: true });

  dbConnection = mongoose.connect(
    constants.MONGO_URL,
    {
      useNewUrlParser: true,
      auth: {
        user: constants.MONGO_USER,
        password: constants.MONGO_PASS
      }
    }
  );
} catch (error) {
  dbConnection = mongoose.createConnection(constants.MONGO_URL, {
    useNewUrlParser: true,
    auth: {
      user: constants.MONGO_USER,
      password: constants.MONGO_PASS
    }
  });
}

dbConnection.then(
  () => {
    console.log("MongoDB Running");
  },
  err => {
    throw err;
  }
);

