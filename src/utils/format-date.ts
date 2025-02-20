import dayjs from "dayjs";

export class FormatDate {
  dateTime(date: string) {
    return dayjs(date).format("DD/MM/YYYY hh:mm:ss A");
  }
}
