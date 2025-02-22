import { Dayjs } from "dayjs";

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

export type TaskInput = {
  title: string;
  description: string;
  dueDate: Dayjs;
  status: STATUS;
};
