export enum STATUS {
  PENDING = "PENDING",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
  CLOSED = "CLOSED",
}

export type Task = {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  status: STATUS;
  createdAt: string;
  updatedAt: string;
};

export type TaskInput = Pick<
  Task,
  "title" | "description" | "dueDate" | "status"
>;
