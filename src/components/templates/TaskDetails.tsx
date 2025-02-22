import { Box, Typography, Divider } from "@mui/material";
import { useParams } from "react-router";

import { useTask } from "src/hooks/useTask";
import Loading from "src/components/atoms/Loading";
import Error from "src/components/atoms/Error";
import { formatDate } from "src/utils/format-date";
import TaskTimestamps from "src/components/molecules/TaskTimestamp";
import { formatText } from "src/utils/format-string";
import BackToBoard from "src/components/molecules/BackToBoard";
import UpdateTask from "src/components/molecules/UpdateTask";
import DeleteTask from "src/components/molecules/DeleteTask";

const TaskDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useTask(id);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        border: "1px solid black",
        position: "relative",
        p: 3,
      }}
    >
      {data ? (
        <Box sx={{ width: "100%" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <BackToBoard />
            <Box sx={{ display: "flex", gap: 1 }}>
              <UpdateTask task={data.task} />
              <DeleteTask id={data.task.id} />
            </Box>
          </Box>

          <Box sx={{ width: "max-content", mb: 4 }}>
            <Typography variant="h6" sx={{ pr: 3, pb: 1 }}>
              Status: {formatText(data.task.status)}
            </Typography>
            <Divider sx={{ bgcolor: "black" }} />
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <Typography variant="h5">Title: {data.task.title}</Typography>
            {data.task.dueDate && (
              <Typography variant="h6">
                Due: {formatDate(data.task.dueDate)}
              </Typography>
            )}
          </Box>

          {data.task.description && (
            <Box>
              <Typography variant="h5" sx={{ whiteSpace: "pre-line" }}>
                Description:
              </Typography>
              <Typography variant="h6" sx={{ whiteSpace: "pre-line" }}>
                {data.task.description}
              </Typography>
            </Box>
          )}

          <Divider sx={{ bgcolor: "black", mt: 4 }} />
          <TaskTimestamps
            createdAt={data.task.createdAt}
            updatedAt={data.task.updatedAt}
          />
        </Box>
      ) : (
        <Typography variant="h5" sx={{ margin: "auto" }}>
          No task found
        </Typography>
      )}
    </Box>
  );
};

export default TaskDetails;
