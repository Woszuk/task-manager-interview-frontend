import { gql } from "graphql-request";

export const GET_TASKS = gql`
  query Task {
    tasks {
      id
      title
      dueDate
      status
      createdAt
    }
  }
`;

export const GET_TASK = gql`
  query Task($params: IdInput!) {
    task(params: $params) {
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
