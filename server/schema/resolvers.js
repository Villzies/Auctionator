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
    //   addAuctionItem: async (
    //     parent,
    //     { name, description, startingPrice, imageURL, auctionEndDate }
    //   ) => {
    //     const auctionItem = await AuctionItem.create({
    //       name,
    //       description,
    //       startingPrice,
    //       imageURL,
    //       auctionEndDate,
    //       bidHistory: [], //Starts with an empty bid
    //     });
    //     return auctionItem;
    //   },
    //   updateBid: async (_, { bidId, newAmount }) => {
    //     try {
    //       const updatedBid = await Bid.findByIdAndUpdate(
    //         bidId,
    //         { amount: newAmount },
    //         { new: true }
    //       );
    //       return updatedBid;
    //     } catch (error) {
    //       console.error("Error updating bid:", error);
    //       throw new Error("Failed to update bid.");
    //     }
    //   },
    //   placeBid: async (parent, { auctionItemId, bidderId, amount }) => {
    //     try {
    //       const bidder = await User.findById(bidderId);
    //       const auctionItem = await AuctionItem.findById(auctionItemId);

    //       if (!bidder || !auctionItem) {
    //         throw new Error("Bidder or Auction Item not found");
    //       }

    //       const currentHighestBid = auctionItem.bidHistory.reduce(
    //         (maxBid, bid) => (bid.amount > maxBid ? bid.amount : maxBid),
    //         0
    //       );

    //       if (
    //         amount <= currentHighestBid ||
    //         amount <= auctionItem.startingPrice
    //       ) {
    //         throw new Error(
    //           "Bid amount must be higher than the current highest bid or starting price"
    //         );
    //       }

    //       const newBid = new BidHistory({
    //         bidder: bidder,
    //         amount: amount,
    //         timestamp: new Date().toISOString(),
    //       });

    //       auctionItem.bidHistory.push(newBid);
    //       await auctionItem.save();

    //       const session = await stripe.checkout.sessions.create({
    //         payment_method_types: ["card"],
    //         line_items: [
    //           {
    //             price_data: {
    //               currency: "usd",
    //               product_data: {
    //                 name: auctionItem.name,
    //                 images: [auctionItem.imageURL],
    //               },
    //               unit_amount: amount * 100, //add cents
    //             },
    //             quantity: 1,
    //           },
    //         ],
    //         mode: "payment",
    //         success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
    //         cancel_url: `${url}/`,
    //       });

    //       return { auctionItem, session: session.id };
    //     } catch (error) {
    //       throw new Error(`Failed to place bid: ${error.message}`);
    //     }
    //   },
  },
};

module.exports = resolvers;
