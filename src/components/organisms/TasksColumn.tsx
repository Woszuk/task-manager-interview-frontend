import { Typography, Box } from "@mui/material";
import TaskCard from "src/components/molecules/TaskCard";
import { Task } from "src/types/task";

type TaskProps = {
  data?: { tasks: Task[] };
  label: string;
  status: string;
  index: number;
};

const TaskColumn = ({ data, label, status, index }: TaskProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        borderRight: index < 3 ? "1px solid black" : "none",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          px: 3,
          pb: 1,
          borderBottom: "1px solid black",
          mb: 2,
        }}
      >
        {label}
      </Typography>

      <Box sx={{ overflow: "auto", maxHeight: 700, px: 1, width: "250px" }}>
        {data &&
          data.tasks
            .filter((task) => task.status === status)
            .map((task) => <TaskCard task={task} key={task.id} />)}
      </Box>
    </Box>
  );
};

export default TaskColumn;
