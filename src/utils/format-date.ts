import dayjs from "dayjs";

export const formatDate = (date: string) => {
  return dayjs(date).format("DD/MM/YYYY hh:mm:ss A");
};

export const isFutureDate = (date: string) => {
  return dayjs().isBefore(date);
};

export const isAfter = (date: string, dateToCompare: string) => {
  return dayjs(date).isAfter(dateToCompare);
};
