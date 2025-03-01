import { Box, Typography } from "@mui/material";
import { useState } from "react";
import Button from "src/components/atoms/Button";
import Modal from "src/components/molecules/Modal";
import TaskForm from "src/components/molecules/TaskForm";
import { useUpdateTask } from "src/hooks/useTask";
import { Task, TaskInput } from "src/types/task";

type UpdateTaskProps = {
  task: Task;
};

const UpdateTask = ({ task }: UpdateTaskProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { mutate, isPending } = useUpdateTask();

  const onSubmit = (formData: TaskInput) => {
    mutate(
      { params: { id: task.id }, data: formData },
      {
        onSuccess: () => {
          handleClose();
        },
      }
    );
  };

  return (
    <Box>
      <Button onClick={handleOpen}>Update</Button>
      <Modal open={open} handleClose={handleClose}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ textAlign: "center", pb: 2 }}
        >
          Update Task
        </Typography>
        <TaskForm
          onSubmit={onSubmit}
          isPending={isPending}
          buttonLabel="Update Task"
          task={task}
        />
      </Modal>
    </Box>
  );
};

export default UpdateTask;
