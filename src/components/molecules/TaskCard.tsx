import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { Link } from "react-router";
import { STATUS, Task } from "src/types/task";
import { formatDate, isFutureDate } from "src/utils/format-date";

type TaskCardProps = {
  task: Task;
};

const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <Link to={`/${task.id}`} style={{ textDecoration: "none" }}>
      <Card
        sx={{
          cursor: "pointer",
          marginBottom: 2,
          width: "max-content",
          borderRadius: "10px",
          ":hover": {
            bgcolor: getHoverColor(task),
          },
          textAlign: "center",
          bgcolor: getTaskBgColor(task),
        }}
      >
        <CardContent>
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

const getTaskBgColor = (task: Task) => {
  if (
    !isFutureDate(task.dueDate) &&
    [STATUS.PENDING, STATUS.IN_PROGRESS].includes(task.status) &&
    task.dueDate
  ) {
    return "#ff9999";
  }
  return "inherit";
};

const getHoverColor = (task: Task) => {
  if (
    !isFutureDate(task.dueDate) &&
    [STATUS.PENDING, STATUS.IN_PROGRESS].includes(task.status) &&
    task.dueDate
  ) {
    return "#ff6666";
  }
  return "#e6e6e6";
};
