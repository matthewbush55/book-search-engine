import { gql } from "@apollo/client";

export const GET_ME = gql`
  query me($userId: ID!) {
    me(userId: $userId) {
      _id
      username
      savedBooks {
        bookId
        image
        title
        authors
        description
      }
    }
  }
`;
