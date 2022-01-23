import { CarData } from './CarData';
import Select from './components/Select';

const SearchCarType = () => {
    return (
        <div className='lg:w-2/6 bg-gray-100 shadow-md lg:mr-24 pb-5'>
            <div className='text-xl md:text-2xl lg:text-3xl text-gray-400 ml-5'>
                <div className="md:flex md:justify-center flex justify-center lg:justify-start">
                    車種から探す    
                </div>
            </div>
            <div className='flex flex-wrap'>
                {CarData.map(data => {
                    return (
                        <div key={data.id} className='mx-auto lg:mx-4 my-3 lg:w-36'>
                            <img src={data.img} alt="車" />
                            <div className='flex justify-between'>
                                <div className='line-clamp-1'>{data.name}</div>
                                <div className="form-check">
                                    <input className="form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <Select />
        </div>
    );
};

export default SearchCarType;
