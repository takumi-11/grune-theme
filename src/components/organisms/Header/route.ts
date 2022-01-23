type Route = {
    path: string;
    name: string;
}

export const headerRoute: Route[] = [
    {
        path: '/',
        name: 'HOME',
    },
    {
        path: '/search',
        name: '検索',
    },
    {
        path: '/favorite',
        name: 'お気に入り',
    },
    {
        path: '/notice',
        name: 'お知らせ',
    },
    {
        path: '/service',
        name: 'サービスについて',
    }
]