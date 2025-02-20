import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TaskBoard from "src/components/templates/TaskBoard";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TaskBoard />
    </QueryClientProvider>
  );
}

export default App;
