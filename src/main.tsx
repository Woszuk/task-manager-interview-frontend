import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Tasks from "src/components/pages/Tasks";
import Task from "src/components/pages/Task";
import { Container, Typography } from "@mui/material";

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
        <Typography variant="h4" gutterBottom>
          Task Manager
        </Typography>

        <Routes>
          <Route path="/" element={<Tasks />} />
          <Route path="/:id" element={<Task />} />
        </Routes>
      </Container>
    </QueryClientProvider>
  </BrowserRouter>
);
