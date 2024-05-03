import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Login from '../pages/login/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export default router;
