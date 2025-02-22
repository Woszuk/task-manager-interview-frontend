import { Box } from "@mui/material";
import Timestamp from "src/components/atoms/Timestamp";
import { isAfter } from "src/utils/format-date";

type TaskTimestampsProps = {
  createdAt: string;
  updatedAt: string;
};

const TaskTimestamps = ({ createdAt, updatedAt }: TaskTimestampsProps) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: { sm: "space-between" },
      flexDirection: { xs: "column", sm: "row" },
    }}
  >
    <Timestamp label="Created at" date={createdAt} />
    {isAfter(updatedAt, createdAt) && (
      <Timestamp label="Updated at" date={updatedAt} />
    )}
  </Box>
);

export default TaskTimestamps;
