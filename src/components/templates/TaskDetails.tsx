import { Box, Typography, Divider } from "@mui/material";
import { useParams } from "react-router";

import { useTask } from "src/hooks/useTask";
import Loading from "src/components/atoms/Loading";
import Error from "src/components/atoms/Error";
import { formatDate } from "src/utils/format-date";
import TaskTimestamps from "src/components/molecules/TaskTimestamp";
import { removeUnderscore } from "src/utils/format-string";
import BackToBoard from "src/components/molecules/BackToBoard";
import UpdateTask from "src/components/molecules/UpdateTask";
import DeleteTask from "src/components/molecules/DeleteTask";
import Button from "src/components/atoms/Button";
import Detail from "src/components/atoms/Detail";

const TaskDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useTask(id);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <Box sx={{ width: "100%" }}>
      {data ? (
        <Box sx={{ border: "1px solid black", p: 3 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <BackToBoard />
            <Box sx={{ display: "flex", gap: 1 }}>
              <UpdateTask task={data.task} />
              <DeleteTask id={data.task.id}>
                <Button color="error">Delete</Button>
              </DeleteTask>
            </Box>
          </Box>

          <Box sx={{ width: "max-content", mb: 4 }}>
            <Typography variant="h6" sx={{ pr: 3, pb: 1 }}>
              Status: {removeUnderscore(data.task.status)}
            </Typography>
            <Divider sx={{ bgcolor: "black" }} />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 2,
              flexDirection: { xs: "column", md: "row" },
              gap: 1,
            }}
          >
            <Detail label="Title" value={data.task.title} />
            {data.task.dueDate && (
              <Detail label="Due" value={formatDate(data.task.dueDate)} />
            )}
          </Box>

          {data.task.description && (
            <Box>
              <Divider sx={{ bgcolor: "black", my: 2 }} />

              <Detail
                label="Description"
                value={data.task.description}
                preLine
                sx={{ flexDirection: "column" }}
              />
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
