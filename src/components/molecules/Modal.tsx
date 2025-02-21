import { Box, Modal as MuiModal } from "@mui/material";

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
    >
      <Box sx={style}>{children}</Box>
    </MuiModal>
  );
};
export default Modal;
