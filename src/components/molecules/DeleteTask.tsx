import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import Button from "src/components/atoms/Button";
import Modal from "src/components/molecules/Modal";
import { useDeleteTask } from "src/hooks/useTask";

type DeleteTaskProps = {
  id: string;
  children: React.ReactNode;
};

const DeleteTask = ({ id, children }: DeleteTaskProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  const { mutate } = useDeleteTask();

  const onSubmit = () => {
    mutate(id, {
      onSuccess: () => {
        handleClose();
        navigate("/");
      },
    });
  };

  return (
    <Box>
      <Box onClick={handleOpen}>{children}</Box>
      <Modal open={open} handleClose={handleClose}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ textAlign: "center", pb: 2 }}
        >
          Are you sure you want to delete this task?
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 4 }}>
          <Button
            onClick={onSubmit}
            size="large"
            color="error"
            autoFocus
            sx={{
              ":focus": {
                bgcolor: "rgba(211, 47, 47, 0.04)",
                borderColor: "#d32f2f",
              },
            }}
          >
            Yes
          </Button>
          <Button onClick={handleClose} size="large">
            No
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default DeleteTask;
