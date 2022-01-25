import { slide as Menu } from "react-burger-menu";
import MediaQuery from "react-responsive"

const HeaderSP = () => {
    const styles = {
        bmBurgerButton: {
            position: 'fixed',
            width: '36px',
            height: '30px',
            right: '36px',
            top: '25px'
        },
        bmBurgerBars: {
            background: '#373a47'
        },
        bmBurgerBarsHover: {
            background: '#a90000'
        },
        bmCrossButton: {
            height: '24px',
            width: '24px'
        },
        bmCross: {
            background: '#bdc3c7'
        },
        bmMenuWrap: {
            position: 'fixed',
            height: '100%'
        },
        bmMenu: {
            background: '#373a47',
            padding: '2.5em 1.5em 0',
            fontSize: '1.15em'
        },
        bmMorphShape: {
            fill: '#373a47'
        },
        bmItemList: {
            color: '#b8b7ad',
            padding: '0.8em'
        },
        bmItem: {
            display: 'inline-block'
        },
        bmOverlay: {
            background: 'rgba(0, 0, 0, 0.3)'
        }
    }

    return (
        <MediaQuery query="(max-width: 767px)">
            <Menu styles={styles} >
                <div className='flex col-auto'>
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
                </div>
            </Menu>
            <div id='top' className="bg-cyan-700 p-5 flex justify-between">
                <img className="h-10 lg:h-16" src={`${process.env.PUBLIC_URL}/logo/tc-white-logo.svg`} alt="ロゴ" />
            </div>
        </MediaQuery>
    );
};

export default HeaderSP;