import { Container, Box, Typography } from "@mui/material";
import Task from "src/components/organisms/Task";
import { STATUS } from "src/types/task";
import { formatText } from "src/utils/format-string";

const TaskBoard = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "1440px",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Task Manager
      </Typography>
      <Box
        sx={{ display: "flex", width: "100%", justifyContent: "space-between" }}
      >
        {Object.entries(STATUS).map(([status, label]) => (
          <Task status={status} label={formatText(label)} key={status} />
        ))}
      </Box>
    </Container>
  );
};

export default TaskBoard;
