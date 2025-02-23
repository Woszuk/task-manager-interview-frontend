import { Box, Typography } from "@mui/material";
import Error from "src/components/atoms/Error";
import Loading from "src/components/atoms/Loading";
import TaskColumn from "src/components/organisms/TasksColumn";
import { useTasks } from "src/hooks/useTask";
import { STATUS } from "src/types/task";
import { removeUnderscore } from "src/utils/format-string";

const TaskBoard = () => {
  const { data, isLoading, error } = useTasks();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        flex: 1,
        overflow: "auto",
      }}
    >
      {data?.tasks.length ? (
        <>
          {Object.entries(STATUS).map(([status, label], index) => (
            <TaskColumn
              data={data}
              status={status}
              label={removeUnderscore(label)}
              index={index}
              key={status}
            />
          ))}
        </>
      ) : (
        <Typography variant="h5" sx={{ margin: "auto" }}>
          No tasks to display. Create some.
        </Typography>
      )}
    </Box>
  );
};

export default TaskBoard;
