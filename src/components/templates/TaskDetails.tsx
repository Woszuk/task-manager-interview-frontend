import { Container, Box, Typography, Divider } from "@mui/material";
import { useNavigate, useParams } from "react-router";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { useTask } from "src/hooks/useTask";
import Loading from "src/components/atoms/Loading";
import Error from "src/components/atoms/Error";
import { formatDate } from "src/utils/format-date";
import TaskTimestamps from "src/components/molecules/TaskTimestamp";
import { formatText } from "src/utils/format-string";

const TaskDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useTask(id);
  const navigate = useNavigate();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          border: "1px solid black",
          position: "relative",
          p: 3,
          pt: 7,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            left: 10,
            top: 10,
            cursor: "pointer",
          }}
          onClick={() => navigate(-1)}
        >
          <ArrowBackIcon
            sx={{
              fontSize: "30px",
            }}
          />
          <Typography sx={{ pl: 1, fontSize: "20px" }}>Back</Typography>
        </Box>
        {data ? (
          <Box sx={{ width: "100%" }}>
            <Box sx={{ width: "max-content", mb: 4 }}>
              <Typography variant="h6" sx={{ pr: 3, pb: 1 }}>
                Status: {formatText(data.task.status)}
              </Typography>
              <Divider sx={{ bgcolor: "black" }} />
            </Box>

            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
            >
              <Typography variant="h5">Title: {data.task.title}</Typography>
              {data.task.dueDate && (
                <Typography variant="h6">
                  Due: {formatDate(data.task.dueDate)}
                </Typography>
              )}
            </Box>
            {data.task.description && (
              <Typography variant="h5">
                Description: {data.task.title}
              </Typography>
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
    </Container>
  );
};

export default TaskDetails;
