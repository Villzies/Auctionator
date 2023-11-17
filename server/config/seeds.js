const db = require("./connection");
const { User, AuctionItem, BidHistory } = require("../models");
const cleanDB = require("./cleanDB");

db.once("open", async () => {
  try {
    await cleanDB("AuctionItem", "auctionitems");
    await cleanDB("User", "users");
    await cleanDB("BidHistory", "bidhistories");

    const users = [
      {
        firstName: "Nancy",
        lastName: "Ramirez",
        username: "nramirez686",
        email: "ramireznancy686@gmail.com",
        password: "password",
      },
      {
        firstName: "Jessey",
        lastName: "Berry",
        username: "mrberry",
        email: "mrberry@gmail.com",
        password: "wordpass",
      },
    ];

    const createdUsers = await User.create(users);
    console.log("users seeded");

    const auctionItems = await AuctionItem.insertMany([
      {
        name: "Item 1",
        description: "Description for Item 1",
        startingPrice: 50.0,
        imageURL: "https://example.com/item1.jpg",
        auctionEndDate: "2023-12-24",
        bidHistory: [],
      },
      {
        name: "Item 2",
        description: "Description for Item 2",
        startingPrice: 75.0,
        imageURL: "https://example.com/item2.jpg",
        auctionEndDate: "2023-12-29",
        bidHistory: [],
      },
    ]);

    const bidHistoryData = auctionItems.map((item, index) => ({
      bidder: createdUsers[index % createdUsers.length]._id,
      amount: item.startingPrice + Math.floor(Math.random() * 50),
      timestamp: new Date().toISOString(),
      auctionItemId: item._id,
    }));

    await BidHistory.insertMany(bidHistoryData);

    console.log("auction items seeded");

    process.exit();
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
});
