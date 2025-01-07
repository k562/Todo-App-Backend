const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connection is successful");
  } catch (error) {
    console.log("Issue in DB Connection");
    console.error(error.message);

    // Optionally exit the process if you want to terminate on failure
    process.exit(1); 
  }
};

module.exports = dbConnect;
