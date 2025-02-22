import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { Link } from "react-router";
import { STATUS, Task } from "src/types/task";
import { formatDate, isFutureDate } from "src/utils/format-date";
import Warning from "src/components/atoms/Warning";
import Timestamp from "src/components/atoms/Timestamp";
import TaskQuickAction from "src/components/molecules/TaskQuickActions";

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
          width: "100%",
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
          <TaskQuickAction status={task.status} id={task.id} />
          <Typography variant="h5">{task.title}</Typography>
          {task.dueDate && (
            <Typography sx={{ fontSize: "13px", mt: 2 }}>
              Due: {formatDate(task.dueDate)}
            </Typography>
          )}
        </CardContent>
        <CardActions>
          <Timestamp
            variant="caption"
            label="Created at"
            date={task.createdAt}
          />
        </CardActions>
      </Card>
    </Link>
  );
};

export default TaskCard;
