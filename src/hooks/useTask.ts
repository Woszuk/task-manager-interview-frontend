import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ClientError } from "graphql-request";
import { toast } from "react-toastify";
import client from "src/api/graphql-client";
import { CREATE_TASK, DELETE_TASK, UPDATE_TASK } from "src/api/mutation";
import { GET_TASK, GET_TASKS } from "src/api/queries";
import { TaskInput, Task } from "src/types/task";

export const useTasks = () => {
  return useQuery<{ tasks: Task[] }, ClientError>({
    queryKey: ["tasks"],
    queryFn: async () => client.request(GET_TASKS),
    retry: false,
  });
};

export const useTask = (id?: string) => {
  return useQuery<{ task: Task }, ClientError>({
    queryKey: [`task${id}`],
    queryFn: async () => client.request(GET_TASK, { params: { id } }),
    enabled: !!id,
    retry: false,
  });
};

export const useCreateTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: TaskInput) =>
      client.request(CREATE_TASK, { data }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`tasks`] });
      toast.success("Task was created");
    },
    onError: () => {
      toast.error("Failed to add task. Please try again later.");
    },
  });
};

export const useUpdateTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      params,
      data,
    }: {
      params: { id: string };
      data: TaskInput;
    }) => client.request(UPDATE_TASK, { params, data }),
    onSuccess: (data) => {
      const { updateTask } = data as { updateTask: Task };
      queryClient.invalidateQueries({ queryKey: [`task${updateTask.id}`] });
      toast.success("Task was updated");
    },
    onError: () => {
      toast.error("Failed to update task. Please try again later.");
    },
  });
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (params: { id: string }) =>
      client.request(DELETE_TASK, { params }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`tasks`] });
      toast.success("Task was deleted");
    },
    onError: () => {
      toast.error("Failed to delete task. Please try again later.");
    },
  });
};

export const useUpdateTaskStatus = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      params,
      data,
    }: {
      params: { id: string };
      data: Pick<Task, "status">;
    }) => client.request(UPDATE_TASK, { params, data }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`tasks`] });
      toast.success("Status of task has been changed");
    },
    onError: () => {
      toast.error("Failed to update status. Please try again later.");
    },
  });
};
