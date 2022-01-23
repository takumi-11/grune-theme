import { footerRouteLeft, footerRouteRight } from "./route";

const Footer = () => {
    const onClick = () => {
        console.log('click')
    }

    return (
        <div className="bg-black bg-opacity-60">
            <div className="pt-4 pb-8 flex justify-center">
                <div className="lg:w-3/4 lg:grid lg:grid-cols-2 lg:divide-x-8 lg:divide-cyan-300 md:grid md:grid-cols-2 md:divide-x-8 md:divide-cyan-300">
                    <div className="flex justify-center">
                        <div>
                            <img className="h-12 lg:h-16 md:mt-10 lg:mt-0" src={`${process.env.PUBLIC_URL}/logo/tc-black-logo.svg`} alt="ロゴ" />
                            <div>〒000-0000</div>
                            <div>○○県○○○市○○○○0-0-0</div>
                            <div>○○ビル ○F</div>
                        </div>
                    </div>
                    <div className="mt-10 lg:mt-0 lg:flex lg:justify-start lg:items-center">
                        <div className="ml-16">
                            {footerRouteLeft.map(route => {
                                return (
                                    <div 
                                        className="mr-10 mb-1 lg:mb-3 hover:opacity-25" 
                                        key={route.path} 
                                        onClick={onClick}
                                    >
                                        {route.name}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="ml-16 lg:ml-0">
                            {footerRouteRight.map(route => {
                                return (
                                    <div className="mr-10 mb-1 lg:mb-3 hover:opacity-25" key={route.path} onClick={onClick}>
                                        {route.name}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white h-5">
            </div>
            <div className="h-10 flex justify-center items-center text-2xl bg-cyan-100">
                Copylight
            </div>
        </div>
    );
};

export default Footer;
