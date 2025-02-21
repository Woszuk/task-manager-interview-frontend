import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Tasks from "src/components/pages/Tasks";
import Task from "src/components/pages/Task";
import { Box, Container, Typography } from "@mui/material";
import AddTask from "src/components/organisms/AddTask";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "1440px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            position: "relative",
            mb: 3,
            textAlign: "center",
          }}
        >
          <Typography variant="h4">Task Manager</Typography>
          <AddTask />
        </Box>

        <Routes>
          <Route path="/" element={<Tasks />} />
          <Route path="/:id" element={<Task />} />
        </Routes>
      </Container>
    </QueryClientProvider>
  </BrowserRouter>
);
