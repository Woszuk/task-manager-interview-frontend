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
        justifyContent: "space-between",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          position: { md: "initial", lg: "absolute" },
          left: { md: "initial", lg: "50%" },
          transform: { md: "initial", lg: "translateX(-50%)" },
        }}
      >
        Task Manager
      </Typography>
      <Box sx={{ marginLeft: { md: "initial", lg: "auto" } }}>
        <AddTask />
      </Box>
    </Box>
  );
};

export default Navbar;
