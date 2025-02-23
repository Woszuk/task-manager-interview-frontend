import { gql } from "graphql-request";

export const CREATE_TASK = gql`
  mutation Task($data: CreateTaskInput!) {
    createTask(data: $data) {
      id
    }
  }
`;

export const UPDATE_TASK = gql`
  mutation Task($params: IdInput!, $data: UpdateTaskInput!) {
    updateTask(params: $params, data: $data) {
      id
    }
  }
`;

export const DELETE_TASK = gql`
  mutation Task($params: IdInput!) {
    deleteTask(params: $params) {
      id
    }
  }
`;
