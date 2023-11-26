const typeDefs = `
type User {
  _id: ID
  firstName: String
  lastName: String
  email: String
}
  
  
  type AuctionItem {
    _id: ID!
    name: String!
    description: String!
    startingPrice: Float!
    imageURL: String!
    bidHistory: [BidHistory]
    auctionEndDate: String!
    winner: User
  }

type BidHistory {
  bidder: User
  amount: Float!
  timestamp: String!
}

  input BidHistoryInput {
    bidder: ID!
    amount: Float!
    timestamp: String!
  }
  
  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }
  
  type Query {
    getAllUsers: [User]!
    getUserById(userId: ID!): User
    getAllAuctionItems: [AuctionItem]!
    getAuctionItemById(auctionItemId: ID!): AuctionItem
  }
  
  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): User
    updateUser(userId: ID!, username: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    placeBid(input: BidHistoryInput!): AuctionItem
  }
  `;
module.exports = typeDefs;

// addAuctionItem(
//   name: String!
//   description: String!
//   startingPrice: Float!
//   imageURL: String!
//   auctionEndDate: String!
// ): AuctionItem
// updateBid(bidId: ID!, newAmount: Float!): BidHistory
// placeBid(auctionItemId: ID!, bidderId: ID!, amount: Float!): AuctionItem
