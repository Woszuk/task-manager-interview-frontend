import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BackToBoard = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={() => navigate("/")}
    >
      <ArrowBackIcon
        sx={{
          fontSize: "30px",
        }}
      />
      <Typography sx={{ pl: 1, fontSize: "20px" }}>Board</Typography>
    </Box>
  );
};

export default BackToBoard;
