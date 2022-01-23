type Data = {
    id: string;
    date: string;
    text: string;
    imgL: string;
    imgR: string;
}

export const NoticeData: Data[] = [
    {
        id: '1',
        date: '2017/01/01',
        text: 'タイトルが入ります。ダミーテキストダミーテキストダミーテキスト',
        imgL: `${process.env.PUBLIC_URL}/icon/delimiter.png`,
        imgR: `${process.env.PUBLIC_URL}/icon/arrowRight.png`
    },
    {
        id: '2',
        date: '2017/01/01',
        text: 'タイトルが入ります。ダミーテキストダミーテキストダミーテキスト',
        imgL: `${process.env.PUBLIC_URL}/icon/delimiter.png`,
        imgR: `${process.env.PUBLIC_URL}/icon/arrowRight.png`
    },
    {
        id: '3',
        date: '2017/01/01',
        text: 'タイトルが入ります。ダミーテキストダミーテキストダミーテキスト',
        imgL: `${process.env.PUBLIC_URL}/icon/delimiter.png`,
        imgR: `${process.env.PUBLIC_URL}/icon/arrowRight.png`
    },
    
]