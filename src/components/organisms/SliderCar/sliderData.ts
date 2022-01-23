type Car = {
    id: string,
    name: string;
    type: string;
    img: string;
}

export const SliderData: Car[] = [
    {
        id: '1',
        name: 'マツダ',
        type: 'CX-5 XD(4WD)',
        img: `${process.env.PUBLIC_URL}/slideshow/car1.png`,
    },
    {
        id: '2',
        name: 'トヨタ',
        type: 'アルファード ハイブリッド',
        img: `${process.env.PUBLIC_URL}/slideshow/car2.png`,
    },
    {
        id: '3',
        name: 'トヨタ',
        type: 'ハリアー プレミアム',
        img: `${process.env.PUBLIC_URL}/slideshow/car3.png`,
    },
    {
        id: '4',
        name: 'トヨタ',
        type: 'ハイラックスサーフ',
        img: `${process.env.PUBLIC_URL}/slideshow/car4.png`,
    },
    {
        id: '5',
        name: 'ホンダ',
        type: 'CITY',
        img: `${process.env.PUBLIC_URL}/slideshow/car5.png`,
    },
]