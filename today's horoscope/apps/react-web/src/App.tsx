import { RouterProvider } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import router from './routes/router';

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <GlobalStyles />
    </>
  );
}

export default App;
