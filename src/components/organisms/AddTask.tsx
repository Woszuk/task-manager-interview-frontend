import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import Button from "src/components/atoms/Button";
import Modal from "src/components/molecules/Modal";
import TaskForm from "src/components/molecules/TaskForm";
import { useCreateTask } from "src/hooks/useTask";
import { Task, TaskInput } from "src/types/task";

const AddTask = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  const { mutate, isPending } = useCreateTask();

  const onSubmit = (formData: TaskInput) => {
    mutate(formData, {
      onSuccess: (data) => {
        const { createTask } = data as { createTask: Task };
        handleClose();
        navigate(`/${createTask.id}`);
      },
    });
  };

  return (
    <Box>
      <Button
        sx={{
          position: "absolute",
          transform: "translate(50%, -50%)",
          top: "50%",
          right: "25%",
        }}
        onClick={handleOpen}
      >
        Add Task
      </Button>
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
