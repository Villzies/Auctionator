const mongoose = require("mongoose");
const { Schema } = mongoose;

const auctionItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  startingPrice: {
    type: Number,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
  auctionEndDate: {
    type: Date,
    required: true,
  },
  winner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const AuctionItem = mongoose.model("AuctionItem", auctionItemSchema);

module.exports = AuctionItem;
