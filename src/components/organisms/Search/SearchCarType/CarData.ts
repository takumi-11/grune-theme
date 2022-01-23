type Data = {
    id: string;
    name: string;
    img: string;
}

export const CarData: Data[] = [
    {
        id: '1',
        name: '軽自動車',
        img: `${process.env.PUBLIC_URL}/content/car1.png`,
    },
    {
        id: '2',
        name: 'コンパクトカー',
        img: `${process.env.PUBLIC_URL}/content/car2.png`,
    },
    {
        id: '3',
        name: 'ミニバン',
        img: `${process.env.PUBLIC_URL}/content/car3.png`,
    },
    {
        id: '4',
        name: 'セダン',
        img: `${process.env.PUBLIC_URL}/content/car4.png`,
    },
    {
        id: '5',
        name: 'クーペ',
        img: `${process.env.PUBLIC_URL}/content/car5.png`,
    },
    {
        id: '6',
        name: 'ステーションワゴン',
        img: `${process.env.PUBLIC_URL}/content/car6.png`,
    },
    {
        id: '7',
        name: 'SUV・クロカン',
        img: `${process.env.PUBLIC_URL}/content/car7.png`,
    },
    {
        id: '8',
        name: 'オープンカー',
        img: `${process.env.PUBLIC_URL}/content/car8.png`,
    },
    {
        id: '9',
        name: 'ワンボックス',
        img: `${process.env.PUBLIC_URL}/content/car9.png`,
    },
]