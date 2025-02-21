import { gql } from "graphql-request";

export const CREATE_TASK = gql`
  mutation Task($data: CreateTaskInput!) {
    createTask(data: $data) {
      id
    }
  }
`;

export const UPDATE_TASK = gql`
  mutation Task($id: String!, $data: UpdateTaskInput!) {
    updateTask(id: $id, data: $data) {
      id
    }
  }
`;

export const DELETE_TASK = gql`
  mutation Task($id: String!) {
    deleteTask(id: $id) {
      id
    }
  }
`;
