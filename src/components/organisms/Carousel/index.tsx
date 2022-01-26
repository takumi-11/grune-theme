import Slider from "react-slick";

type Item = {
    text: string;
}

const Carousel = () => {
    const settings = {
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
    };

    const items: Item[] = [
        {
            text: 'ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト',
        },
        {
            text: 'ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト',
        },
        {
            text: 'ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト',
        },
        {
            text: 'ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト',
        },
        {
            text: 'ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト',
        }
    ]

    return (
        <Slider {...settings}>
            {items.map((item, i) => {
                return (
                    <div key={i}>
                        <div className="bg-gray-400 opacity-75 h-72 p-0 flex justify-center items-center text-gray-500 text-xs lg:text-xl">
                            <p className="text-xl w-1/2">{item.text}</p>
                        </div>
                    </div>
                )
            })}
        </Slider>
    );
};

export default Carousel;
