import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer"
import Carousel from './components/organisms/Carousel/index';
import SliderCar from "./components/organisms/SliderCar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Notice from "./components/organisms/Notice";
import SearchCarType from "./components/organisms/Search/SearchCarType";
import SearchCompany from "./components/organisms/Search/SearchCompany";
import SearchWord from "./components/organisms/Search/SearchWord";
import { Link as Scroll } from 'react-scroll';
import HeaderSP from './components/organisms/Header/indexSP';

function App() {
  return (
    <>
      <div>
        <Header />
        <HeaderSP />
        <Carousel />
        <div className="mt-16 items-center">
          <h1 className="flex justify-center text-md lg:text-3xl">オススメの新型車(仮)</h1>
          <p className="flex justify-center text-xs lg:text-md text-gray-400">説明文、ダミーテキスト</p>
          <p className="flex justify-center text-xs lg:text-md text-gray-400">ダミーテキストダミーテキストダミーテキスト</p>
        </div>
        <div className="flex justify-center">
          <SliderCar />
        </div>
        <div className="lg:flex lg:justify-center mb-24 mx-5">
          <SearchCarType />
          <div>
            <SearchCompany />
            <SearchWord />
          </div>
        </div>
        <Notice />
        <Footer />
      </div>
      <Scroll to="top" smooth={true}>
        <div>
          <img className="fixed bottom-10 right-1 hover:opacity-75 z-10" src={`${process.env.PUBLIC_URL}/icon/backToTop.png`} alt="アイコン" />
        </div>
      </Scroll>
    </>
  );
}

export default App;
