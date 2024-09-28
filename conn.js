const mongoose = require("mongoose");
const connection = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Curd");
    console.log("sucessful");
  } catch (error) {
    console.log("404 not found");
  }
};
connection();
module.exports = connection;
