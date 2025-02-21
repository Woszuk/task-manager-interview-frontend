import { Typography } from "@mui/material";
import { formatDate } from "src/utils/format-date";

interface TimestampProps {
  label: string;
  date: string;
}

const Timestamp = ({ label, date }: TimestampProps) => (
  <Typography sx={{ pt: 2 }}>
    {label}: {formatDate(date)}
  </Typography>
);

export default Timestamp;
