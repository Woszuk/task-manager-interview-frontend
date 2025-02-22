import { Box } from "@mui/material";
import Error from "src/components/atoms/Error";
import Loading from "src/components/atoms/Loading";
import TaskColumn from "src/components/organisms/TasksColumn";
import { useTasks } from "src/hooks/useTask";
import { STATUS } from "src/types/task";
import { formatText } from "src/utils/format-string";

const TaskBoard = () => {
  const { data, isLoading, error } = useTasks();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        flex: 1,
        justifyContent: "space-between",
      }}
    >
      {Object.entries(STATUS).map(([status, label], index) => (
        <TaskColumn
          data={data}
          status={status}
          label={formatText(label)}
          index={index}
          key={status}
        />
      ))}
    </Box>
  );
};

export default TaskBoard;
