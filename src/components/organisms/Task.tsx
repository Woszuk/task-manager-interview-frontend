import { Typography, Box } from "@mui/material";
import TaskCard from "src/components/molecules/TaskCard";
import { useTasks } from "src/hooks/useTask";

type TaskProps = {
  label: string;
  status: string;
};

const Task = ({ label, status }: TaskProps) => {
  const { data, isLoading, error } = useTasks();

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }
  if (error) {
    return <Typography>Error occurred</Typography>;
  }

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="h6">{label}</Typography>
      {data &&
        data.tasks
          .filter((task) => task.status === status)
          .map((task) => <TaskCard task={task} key={task.id} />)}
    </Box>
  );
};

export default Task;
