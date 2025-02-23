import { Box, MenuItem, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

import Button from "src/components/atoms/Button";
import { TaskInput, Task, STATUS } from "src/types/task";
import { removeUnderscore } from "src/utils/format-string";

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
      dueDate: task?.dueDate ? dayjs(task.dueDate) : undefined,
      status: task?.status || STATUS.TO_DO,
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
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker {...field} />
          </LocalizationProvider>
        )}
      />

      <Controller
        name="status"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Status"
            select
            slotProps={{ inputLabel: { shrink: true } }}
          >
            {Object.values(STATUS).map((value) => (
              <MenuItem value={value} key={value}>
                {removeUnderscore(value)}
              </MenuItem>
            ))}
          </TextField>
        )}
      />

      <Button type="submit" disabled={isPending}>
        {buttonLabel}
      </Button>
    </Box>
  );
};

export default TaskForm;
