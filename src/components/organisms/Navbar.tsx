import { Box, Typography } from "@mui/material";
import AddTask from "src/components/molecules/AddTask";

const Navbar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        my: 3,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        Task Manager
      </Typography>
      <Box sx={{ marginLeft: "auto" }}>
        <AddTask />
      </Box>
    </Box>
  );
};

export default Navbar;
