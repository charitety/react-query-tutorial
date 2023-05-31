import { QueryClient, QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from "react-query-devtools";
import Repositories from "./components/Repositories";

const queryClient = new QueryClient({});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools initialIsOpen={true} /> */}
      <Repositories/>
    </QueryClientProvider>
  );
};

export default App;
