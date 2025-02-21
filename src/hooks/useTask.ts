import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import client from "src/api/graphql-client";
import { CREATE_TASK } from "src/api/mutation";
import { GET_TASK, GET_TASKS } from "src/api/queries";
import { CreateTaskInput, Task } from "src/types/task";

export const useTasks = () => {
  return useQuery<{ tasks: Task[] }>({
    queryKey: ["tasks"],
    queryFn: async () => client.request(GET_TASKS),
    retry: false,
  });
};

export const useTask = (id?: string) => {
  return useQuery<{ task: Task }>({
    queryKey: [`task${id}`],
    queryFn: async () => client.request(GET_TASK, { id }),
    enabled: !!id,
    retry: false,
  });
};

export const useCreateTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: CreateTaskInput) =>
      client.request(CREATE_TASK, { data }),
    onSuccess: (data) => {
      const { createTask } = data as { createTask: Task };
      queryClient.invalidateQueries({ queryKey: [`task${createTask.id}`] });
    },
  });
};
