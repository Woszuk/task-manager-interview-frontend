import { Box, Modal as MuiModal } from "@mui/material";

type ModalProps = {
  children: React.ReactNode;
  open: boolean;
  handleClose: () => void;
};

const Modal = ({ open, handleClose, children }: ModalProps) => {
  return (
    <MuiModal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      disableScrollLock
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100vw",
          maxWidth: 500,
          maxHeight: "90vh",
          bgcolor: "background.paper",
          border: "1px solid #000",
          boxShadow: 24,
          p: { xs: 2, lg: 4 },
          mx: { xs: 2, lg: "initial" },
          overflow: "auto",
        }}
      >
        {children}
      </Box>
    </MuiModal>
  );
};
export default Modal;
