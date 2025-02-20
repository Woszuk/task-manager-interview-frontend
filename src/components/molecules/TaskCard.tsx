import { Card, CardContent, Typography } from "@mui/material";
import { Task } from "src/types/task";
import { FormatDate } from "src/utils/format-date";

type TaskCardProps = {
  task: Task;
};

const TaskCard = ({ task }: TaskCardProps) => {
  const { dateTime } = new FormatDate();
  return (
    <Card
      sx={{
        position: "relative",
        cursor: "pointer",
        marginBottom: 2,
        p: 2,
        width: "100%",
        borderRadius: "10px",
        ":hover": { bgcolor: "#e6e6e6" },
      }}
    >
      <CardContent>
        <Typography variant="h6">{task.title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {task.description}
        </Typography>
        <Typography
          variant="caption"
          sx={{ position: "absolute", bottom: 0, left: "10px" }}
        >
          {dateTime(task.createdAt)}
        </Typography>
        {task.dueDate && (
          <Typography variant="caption">
            Due: {dateTime(task.dueDate)}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default TaskCard;
