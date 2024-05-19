import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Mbti from '../pages/detail/main/mbti/Mbti';
import Star from '../pages/detail/main/star/Star';
import ZodiacMain from '../pages/detail/main/zodiac/Zodiac';
import Zodiac from '../pages/detail/components/textbox/zodi/ZodiText';
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
    path: '/detail-mbti',
    element: <Mbti />,
  },
  {
    path: '/detail-star',
    element: <Star />,
  },
  {
    path: '/detail-zodiac/main',
    element: <ZodiacMain />,
  },
  {
    path: '/detail-zodiac/textimage',
    element: <Zodiac />,
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
