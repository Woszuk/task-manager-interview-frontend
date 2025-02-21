import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { Link } from "react-router";
import { STATUS, Task } from "src/types/task";
import { formatDate, isFutureDate } from "src/utils/format-date";
import Warning from "src/components/atoms/Warning";

type TaskCardProps = {
  task: Task;
};

const TaskCard = ({ task }: TaskCardProps) => {
  const shouldDisplayWarning =
    !isFutureDate(task.dueDate) &&
    [STATUS.PENDING, STATUS.IN_PROGRESS].includes(task.status) &&
    task.dueDate;

  return (
    <Link to={`/${task.id}`} style={{ textDecoration: "none" }}>
      <Card
        sx={{
          cursor: "pointer",
          position: "relative",
          marginBottom: 2,
          width: "max-content",
          borderRadius: "10px",
          ":hover": {
            bgcolor: "#e6e6e6",
          },
          textAlign: "center",
          border: shouldDisplayWarning ? "1px solid #ff6666" : "none",
        }}
      >
        <CardContent>
          {shouldDisplayWarning && <Warning />}
          <Typography variant="h5">{task.title}</Typography>
          {task.dueDate && (
            <Typography sx={{ fontSize: "13px" }}>
              Due: {formatDate(task.dueDate)}
            </Typography>
          )}
        </CardContent>
        <CardActions>
          <Typography variant="caption">
            Created at: {formatDate(task.createdAt)}
          </Typography>
        </CardActions>
      </Card>
    </Link>
  );
};

export default TaskCard;
