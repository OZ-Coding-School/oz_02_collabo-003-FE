import './Home.scss';
import Carousel from './components/Carousel';

function Home() {
  return (
    <div className="main">
      <div className="mainLogo">오늘의 운세</div>
      <Carousel />
    </div>
  );
}

export default Home;
