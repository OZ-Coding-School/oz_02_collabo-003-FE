import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Mbti from '../pages/detail/mbti/Mbti';
import Star from '../pages/detail/star/Star';
import Zodiac from '../pages/detail/zodiac/Zodiac';

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
    path: '/detail-zodiac',
    element: <Zodiac />,
  },
]);

export default router;
