import { NoticeData } from "./NoticeData";

const Notice = () => {
    const onClick = () => {
        console.log('click')
    }

    return (
        <div className="mx-5 lg:w-1/2 lg:mx-auto mb-24">
            <div className="flex justify-between">
                <div className="lg:text-4xl ml-3">
                    お知らせ
                </div>
                <button className="bg-cyan-600 lg:px-10 px-2 py-2 text-xs lg:text-xl text-white hover:opacity-75">
                    一覧はこちら
                </button>
            </div>
            <div className="mt-2 h-2 bg-cyan-800"></div>
            {
                NoticeData.map(data => {
                    return (
                        <div key={data.id} onClick={onClick} className="cursor-pointer hover:opacity-75">
                            <div className="flex justify-between" key={data.id}>
                                <div className="flex">
                                    <div>
                                        <img className="w-2 h-12 my-3" src={data.imgL} alt="アイコン" />
                                    </div>
                                    <div className="text-gray-400 text-xs lg:text-lg ml-3 my-2">
                                        <p>{data.date}</p>
                                        <p>{data.text}</p>
                                    </div>

                                </div>
                                <div>
                                    <img className="h-8 my-4" src={data.imgR} alt="アイコン" />
                                </div>
                            </div>
                            <div className="h-[1px] bg-cyan-800"></div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Notice;
