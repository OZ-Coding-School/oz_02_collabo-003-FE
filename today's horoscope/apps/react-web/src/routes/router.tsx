import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Mbti from '../pages/detail/mbti/Mbti';
import Star from '../pages/detail/star/Star';
import ZodiacMain from '../pages/detail/zodiac/Zodiac';
import Zodiac from '../pages/detail/components/textbox/zodi/Zodi_text';

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
]);

export default router;
