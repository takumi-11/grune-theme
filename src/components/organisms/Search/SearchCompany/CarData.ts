type Data = {
    id: string;
    name: string;
    img: string;
}

export const CarData: Data[] = [
    {
        id: '1',
        name: 'デイズ ルークス',
        img: `${process.env.PUBLIC_URL}/content/car1.png`,
    },
    {
        id: '2',
        name: 'スイフト',
        img: `${process.env.PUBLIC_URL}/content/car2.png`,
    },
    {
        id: '3',
        name: 'アルファード',
        img: `${process.env.PUBLIC_URL}/content/car9.png`,
    },
]