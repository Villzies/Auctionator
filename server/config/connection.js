require('dotenv').config();
const mongoose = require("mongoose");
const link = process.env.MONGODB_URI //|| "mongodb://127.0.0.1:27017/auctionator"
mongoose.connect(
  link
);

module.exports = mongoose.connection;
