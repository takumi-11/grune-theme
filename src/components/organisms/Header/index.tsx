import MediaQuery from "react-responsive";
import { Button } from '../../atoms/CustomButton';
import { headerRoute } from './route';


const Header = () => {


    const onClick = () => {
        console.log('click')
    }


    return (
        <MediaQuery query="(min-width: 767px)">
            <div id='top' className="bg-cyan-700 p-5 flex justify-between">
                <img className="h-10 lg:h-16" src={`${process.env.PUBLIC_URL}/logo/tc-white-logo.svg`} alt="ロゴ" />
                <div>
                    <div className='flex justify-end'>
                        <Button kind={'primary'} arrow='white' onClick={onClick}>お気に入り一覧</Button>
                    </div>
                    <div className='flex mt-3'>
                        {headerRoute.map(route => {
                            return (
                                <div
                                    className='text-white ml-10 text-lg hover:opacity-50'
                                    key={route.path}
                                    onClick={onClick}
                                >
                                    {route.name}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </MediaQuery>
    );

};

export default Header;
