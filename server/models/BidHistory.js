const mongoose = require("mongoose");
const { Schema } = mongoose;

const bidHistorySchema = new Schema({
  auctionItemId: {
    type: Schema.Types.ObjectId,
    ref: "AuctionItem",
    required: true,
  },
  bidder: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const BidHistory = mongoose.model("BidHistory", bidHistorySchema);

module.exports = BidHistory;
