import { gql } from "@apollo/client";

export const QUERY_AUCTION_ITEMS = gql`
  query GetAllAuctionItems {
    getAllAuctionItems {
      _id
      name
      description
      startingPrice
      imageURL
      auctionEndDate
      bidHistory {
        bidder {
          _id
          username
        }
        amount
        timestamp
      }
    }
  }
`;

export const QUERY_AUCTION_ITEM_BY_ID = gql`
  query GetAuctionItemById($auctionItemId: ID!) {
    getAuctionItemById(auctionItemId: $auctionItemId) {
      _id
      name
      description
      startingPrice
      imageURL
      auctionEndDate
      bidHistory {
        bidder {
          _id
          username
        }
        amount
        timestamp
      }
    }
  }
`;

export const QUERY_ALL_USERS = gql`
  query GetAllUsers {
    getAllUsers {
      _id
      username
    }
  }
`;

export const QUERY_USER_BY_ID = gql`
  query GetUserById($userId: ID!) {
    getUserById(userId: $userId) {
      _id
      username
      email
    }
  }
`;
