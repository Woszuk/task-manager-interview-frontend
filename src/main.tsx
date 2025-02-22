import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Tasks from "src/components/pages/Tasks";
import Task from "src/components/pages/Task";
import { Container } from "@mui/material";
import Navbar from "src/components/organisms/Navbar";
import ErrorBoundary from "src/components/ErrorBoundary";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<Tasks />} />
            <Route path="/:id" element={<Task />} />
          </Routes>
        </Container>
      </ErrorBoundary>
    </QueryClientProvider>
  </BrowserRouter>
);
