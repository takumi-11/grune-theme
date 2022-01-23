import { useState } from 'react'
import { slide as Menu } from "react-burger-menu";

const HeaderSP = () => {
    const [menu, setMenu] = useState(false)

    const onClick = () => {
        setMenu(!menu)
    }

    return (
        <div id='top' className="bg-cyan-700 p-5 flex justify-between">
            <Menu className='' >
                <div className="text-white mb-3" >
                    HOME
                </div>
                <div className="text-white mb-3" >
                    検索
                </div>
                <div className="text-white mb-3" >
                    お気に入り
                </div>
                <div className="text-white mb-3" >
                    お知らせ
                </div>
                <div className="text-white mb-3" >
                    サービスについて
                </div>
            </Menu>
            <img className="h-10 lg:h-16" src={`${process.env.PUBLIC_URL}/logo/tc-white-logo.svg`} alt="ロゴ" />
            <button onClick={onClick}>
                <img src={`${process.env.PUBLIC_URL}/icon/option.png`} alt="アイコン" />
            </button>
        </div>
    );
};

export default HeaderSP;