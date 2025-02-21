import { Box, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router";
import Button from "src/components/atoms/Button";
import { useCreateTask } from "src/hooks/useTask";
import { CreateTaskInput, Task } from "src/types/task";

type TaskFormProps = {
  handleClose: () => void;
};

const TaskForm = ({ handleClose }: TaskFormProps) => {
  const navigate = useNavigate();

  const { mutate, isPending } = useCreateTask();
  const { handleSubmit, control } = useForm<CreateTaskInput>({
    defaultValues: {
      title: "",
      description: undefined,
      dueDate: undefined,
    },
  });

  const onSubmit = (formData: CreateTaskInput) => {
    mutate(formData, {
      onSuccess: (data) => {
        const { createTask } = data as { createTask: Task };
        handleClose();
        navigate(`/${createTask.id}`);
      },
    });
  };

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
        {isPending ? "Creating..." : "Create Task"}
      </Button>
    </Box>
  );
};

export default TaskForm;
