type Route = {
    path: string;
    name: string;
}

export const footerRouteLeft: Route[] = [
    {
        path: '/search',
        name: '試乗車検索',
    },
    {
        path: '/favorite', 
        name: 'お気に入り検索',
    },
    {
        path: '/notice',
        name: 'お知らせ',
    }
]

export const footerRouteRight: Route[] = [
    {
        path: '/service',
        name: 'サービスについて',
    },
    {
        path: '/privacy',
        name: 'プライバシポリシー',
    },
    {
        path: '/terms',
        name: '利用規約',
    }
]