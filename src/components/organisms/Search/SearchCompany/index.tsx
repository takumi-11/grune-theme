import { CarData } from './CarData';

const SearchCompany = () => {
  return (
    <div className='p-3 shadow-md'>
      <div className='text-xl flex justify-center lg:flex-none lg:justify-start md:text-2xl lg:text-3xl text-gray-400 mx-5'>メーカーから探す</div>
      <div className='flex justify-around mt-5'>
        <div>
          メーカー
        </div>
        <div className="mb-3">
          <select
            className="
                                    form-select
                                    px-3
                                    py-[2px]
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-label="Default select example"
          >
            <option>日産</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div>
          車種
        </div>
        <div className="mb-3">
          <select
            className="
                                    form-select
                                    px-3
                                    py-[2px]
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-label="Default select example"
          >
            <option>軽自動車</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
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
      <div className='mt-4'>
        <div className='flex'>
          <img className='w-1 h-7 my-auto ml-5' src={`${process.env.PUBLIC_URL}/icon/delimiter.png`} alt="" />
          <div className='text-2xl  ml-2'>
            オプション検索
          </div>
        </div>
        <div className='flex ml-8 mt-3'>
          <div className='mr-4'>
            排気量
          </div>
          <div className="mb-3">
            <select
              className="
                                    form-select
                                    px-3
                                    py-[2px]
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
            >
              <option>660cc</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div className='flex ml-8 mt-3'>
          <div className='mr-4'>
            AT/MT
          </div>
          <div className="inline-flex rounded-md shadow-sm " role="group">
            <button type="button" className="py-1 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
              AT
            </button>
            <button type="button" className="py-1 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
              MT
            </button>
          </div>
        </div>
        <div className="flex justify-center my-5">
          <button className="flex bg-cyan-600 pl-10 pr-3 py-2 lg:text-xl text-white hover:opacity-75">
            <div>
              一覧はこちら
            </div>
            <img className="h-5 my-auto ml-7" src={`${process.env.PUBLIC_URL}/icon/arrowButton.png`} alt="アイコン" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchCompany;
