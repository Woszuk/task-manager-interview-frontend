import { Typography, TypographyProps } from "@mui/material";
import { formatDate } from "src/utils/format-date";

type TimestampProps = TypographyProps & {
  label: string;
  date: string;
};

const Timestamp = ({ label, date, ...props }: TimestampProps) => (
  <Typography sx={{ pt: 2 }} {...props}>
    {label}: {formatDate(date)}
  </Typography>
);

export default Timestamp;
