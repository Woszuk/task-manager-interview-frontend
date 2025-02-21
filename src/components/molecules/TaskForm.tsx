import { Box, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import Button from "src/components/atoms/Button";
import { TaskInput, Task } from "src/types/task";
import { formatDate } from "src/utils/format-date";

type TaskFormProps = {
  onSubmit: (formData: TaskInput) => void;
  isPending: boolean;
  buttonLabel: string;
  task?: Task;
};

const TaskForm = ({
  onSubmit,
  isPending,
  buttonLabel,
  task,
}: TaskFormProps) => {
  const { handleSubmit, control } = useForm<TaskInput>({
    defaultValues: {
      title: task?.title || "",
      description: task?.description || undefined,
      dueDate: task?.dueDate
        ? formatDate(task.dueDate, "YYYY-MM-DDTHH:mm")
        : undefined,
    },
  });

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <Controller
        name="title"
        control={control}
        rules={{ required: "Title is required" }}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            label="Title"
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
          />
        )}
      />
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <TextField
            multiline={true}
            {...field}
            label="Description"
          ></TextField>
        )}
      />

      <Controller
        name="dueDate"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Due Date"
            type="datetime-local"
            slotProps={{ inputLabel: { shrink: true } }}
          />
        )}
      />

      <Button type="submit" disabled={isPending}>
        {buttonLabel}
      </Button>
    </Box>
  );
};

export default TaskForm;
