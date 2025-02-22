import { Box, Typography } from "@mui/material";
import { useState } from "react";
import Button from "src/components/atoms/Button";
import Modal from "src/components/molecules/Modal";
import TaskForm from "src/components/molecules/TaskForm";
import { useCreateTask } from "src/hooks/useTask";
import { TaskInput } from "src/types/task";

const AddTask = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { mutate, isPending } = useCreateTask();

  const onSubmit = (formData: TaskInput) => {
    mutate(formData, {
      onSuccess: () => {
        handleClose();
      },
    });
  };

  return (
    <Box>
      <Button onClick={handleOpen}>Add Task</Button>
      <Modal open={open} handleClose={handleClose}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ textAlign: "center", pb: 2 }}
        >
          Add Task
        </Typography>
        <TaskForm
          onSubmit={onSubmit}
          isPending={isPending}
          buttonLabel="Create Task"
        />
      </Modal>
    </Box>
  );
};

export default AddTask;
