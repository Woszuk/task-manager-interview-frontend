import { gql } from "graphql-request";

export const GET_TASKS = gql`
  query Task {
    tasks {
      id
      title
      description
      dueDate
      status
      createdAt
      updatedAt
    }
  }
`;
