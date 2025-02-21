import { useQuery } from "@tanstack/react-query";
import client from "src/api/graphql-client";
import { GET_TASK, GET_TASKS } from "src/api/queries";
import { Task } from "src/types/task";

export const useTasks = () => {
  return useQuery<{ tasks: Task[] }>({
    queryKey: ["tasks"],
    queryFn: async () => client.request(GET_TASKS),
    retry: false,
  });
};

export const useTask = (id?: string) => {
  return useQuery<{ task: Task }>({
    queryKey: ["task"],
    queryFn: async () => client.request(GET_TASK, { id }),
    enabled: !!id,
    retry: false,
  });
};
