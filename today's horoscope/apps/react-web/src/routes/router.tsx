import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Mbti from '../pages/detail/main/mbti/Mbti';
import Star from '../pages/detail/main/star/Star';
import ZodiacMain from '../pages/detail/main/zodiac/Zodiac';
import Login from '../pages/login/Login';
import EditInfo from '../pages/edit-info/EditInfo';
import Version from '../pages/version/Version';
import TextImage from '../pages/detail/components/textbox/zodi/ZodiacText';

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
    path: '/detail-zodiac/textimage/:zodiac/:imageSrc',
    element: <TextImage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/edit-info',
    element: <EditInfo />,
  },
  {
    path: '/version',
    element: <Version />,
  },
]);

export default router;
