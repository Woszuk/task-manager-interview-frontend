import { Box, Modal, Typography } from "@mui/material";
import { useState } from "react";
import Button from "src/components/atoms/Button";
import TaskForm from "src/components/molecules/TaskForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: 500,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

const AddTask = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ textAlign: "center", pb: 2 }}
          >
            Add Task
          </Typography>
          <TaskForm handleClose={handleClose} />
        </Box>
      </Modal>
    </Box>
  );
};

export default AddTask;
