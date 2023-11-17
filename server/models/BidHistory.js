const mongoose = require("mongoose");
const { Schema } = mongoose;

const bidHistorySchema = new Schema({
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
  auctionItemId: {
    type: Schema.Types.ObjectId,
    ref: "AuctionItem",
  },
});

const BidHistory = mongoose.model("BidHistory", bidHistorySchema);

module.exports = BidHistory;
