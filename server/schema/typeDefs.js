const typeDefs = `
type User {
    _id: ID!
    username: String!
    email: String!
  }
  
  type BidHistory {
    bidder: User!
    amount: Float!
    timestamp: String!
  }
  
  type AuctionItem {
    _id: ID!
    name: String!
    description: String!
    startingPrice: Float!
    imageURL: String!
    bidHistory: [BidHistory]!
    auctionEndDate: String!
    winner: User
  }
  
  type Query {
    getAllUsers: [User]!
    getUserById(userId: ID!): User
    getAllAuctionItems: [AuctionItem]!
    getAuctionItemById(auctionItemId: ID!): AuctionItem
  }
  
  type Mutation {
    addUser(username: String!, email: String!, password: String!): User
    updateUser(userId: ID!, username: String, email: String, password: String): User
    deleteUser(userId: ID!): User
  
    addAuctionItem(
      name: String!
      description: String!
      startingPrice: Float!
      imageURL: String!
      auctionEndDate: String!
    ): AuctionItem
    placeBid(auctionItemId: ID!, bidderId: ID!, amount: Float!): AuctionItem
    # Other mutations for auction-related operations
  }
  `;
module.exports = typeDefs;
