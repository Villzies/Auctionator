import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation Mutation(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      _id
      email
      firstName
      lastName
    }
  }
`;

export const PLACE_BID_MUTATION = gql`
  mutation Mutation($input: BidHistoryInput!) {
    placeBid(input: $input) {
      bidHistory {
        bidder {
          _id
          firstName
          lastName
          email
        }
        amount
        timestamp
      }
    }
  }
`;
