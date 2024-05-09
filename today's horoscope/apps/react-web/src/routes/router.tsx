// text
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Login from '../pages/login/Login';
import EditInfo from '../pages/edit-info/EditInfo';

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
  {
    path: '/edit-info',
    element: <EditInfo />,
  },
]);

export default router;
