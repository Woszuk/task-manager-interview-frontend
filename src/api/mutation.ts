import { gql } from "graphql-request";

export const CREATE_TASK = gql`
  mutation Task($data: CreateTaskInput!) {
    createTask(data: $data) {
      id
      title
      status
      dueDate
      description
      createdAt
    }
  }
`;
