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
        name: "Air Jordans",
        description:
          "Air Jordan is a line of basketball shoes produced by Nike, Inc. Related apparel and accessories are marketed under Jordan Brand. The silhouette of Michael Jordan served as inspiration to create the Jumpman logo.",
        startingPrice: 25.0,
        imageURL: "/images/Air-Jordans.avif",
        auctionEndDate: "2023-12-24",
        bidHistory: [],
      },
      {
        name: "Amazon Gift Card",
        description: "$100 Amazon Gift Card",
        startingPrice: 10.0,
        imageURL: "/images/Amazon.png",
        auctionEndDate: "2023-12-29",
        bidHistory: [],
      },
      {
        name: "Nintendo Switch",
        description:
          "The Nintendo Switch is a versatile gaming console that offers both portable and home gaming experiences. Its innovative design allows users to seamlessly switch between handheld mode and TV mode for a diverse gaming experience.",
        startingPrice: 50.0,
        imageURL: "/images/Nintendo-Switch.avif",
        auctionEndDate: "2023-12-30",
        bidHistory: [],
      },
      {
        name: "Pokemon Card",
        description:
          "Pokemon cards are collectible cards featuring various Pokémon characters from the Pokémon universe. Each card typically showcases a specific Pokémon's artwork, statistics, abilities, and attacks. These cards are used in the Pokémon Trading Card Game, where players assemble decks to battle against each other using their Pokémon's strengths and strategic moves.",
        startingPrice: 10.0,
        imageURL: "/images/Pokemon-Card.avif",
        auctionEndDate: "2024-01-04",
        bidHistory: [],
      },
      {
        name: "Retinol Cream",
        description:
          "Retinol cream is a skincare product containing a form of vitamin A called retinol. It's widely used for its anti-aging properties, known to reduce the appearance of fine lines, wrinkles, and improve skin texture.",
        startingPrice: 5.0,
        imageURL: "/images/Retinol-Cream.jpeg",
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
