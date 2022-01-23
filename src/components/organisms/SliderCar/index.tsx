import { SliderData } from "./sliderData";
import Slider from "react-slick";
import SlideItem from './components/SlideItem';

const SliderCar = () => {
    const settings = {
        slidesToShow: 4,
        arrows: true,
    };

    return (
        <Slider className="w-5/6 mt-16 mb-24" {...settings} >
            {SliderData.map((data) => {
                return (
                    <SlideItem key={data} data={data} />
                )
            })}
        </Slider>
    );
};

export default SliderCar;
