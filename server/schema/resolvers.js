const { User, BidHistory, AuctionItem } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const resolvers = {
  Query: {
    getAllUsers: async () => {
      return await User.find();
    },
    getUserById: async (parent, { userId }) => {
      return await User.findById(userId);
    },
    getAllAuctionItems: async () => {
      return await AuctionItem.find();
    },
    getAuctionItemById: async (parent, { auctionItemId }) => {
      try {
        const auctionItem = await AuctionItem.findById(auctionItemId);
        if (!auctionItem) {
          throw new Error("Auction item not found");
        }
        const bidHistory = await BidHistory.find({ auctionItemId });
        return {
          ...auctionItem.toObject(),
          bidHistory: bidHistory.map((bid) => bid.toObject()),
        };
      } catch (error) {
        console.error("Error fetching auction item:", error.message);
        throw new Error("Failed to fetch auction item");
      }
    },
  },
  Mutation: {
    addUser: async (parent, { firstName, lastName, email, password }) => {
      const newUser = await User.create({
        firstName,
        lastName,
        email,
        password,
      });
      return newUser;
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    placeBid: async (parent, { auctionItemId, bidderId, amount }) => {
      try {
        const bidder = await User.findById(bidderId);
        const auctionItem = await AuctionItem.findById(auctionItemId);

        if (!bidder || !auctionItem) {
          throw new Error("Bidder or Auction Item not found");
        }

        if (amount <= auctionItem.startingPrice) {
          throw new Error("Bid amount must be higher than the starting price");
        }

        const newBid = new BidHistory({
          bidder: bidder,
          amount: amount,
          timestamp: new Date().toISOString(),
        });

        auctionItem.bidHistory.push(newBid);
        await auctionItem.save();

        return { auctionItem };
      } catch (error) {
        throw new Error(`Failed to place bid: ${error.message}`);
      }
    },
  },
};

module.exports = resolvers;
