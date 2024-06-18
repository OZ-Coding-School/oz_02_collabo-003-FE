import { RouterProvider } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import router from './routes/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <GlobalStyles />
    </QueryClientProvider>
  );
}

export default App;
