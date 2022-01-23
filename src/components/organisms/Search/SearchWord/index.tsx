const SearchWord = () => {
  return (
      <div className='p-3 shadow-md mt-3'>
          <div className='text-xl md:text-2xl lg:text-3xl flex justify-center lg:flex-none lg:justify-start text-gray-400 ml-5'>フリーワード検索</div>
          <input type="text" id="username-success" className="border-2 my-3 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" />
          <div className="flex justify-center my-5">
              <button className="flex bg-cyan-600 px-20 py-2 lg:text-xl text-white hover:opacity-75">
                  <div>
                      検索
                  </div>
              </button>
          </div>
      </div>
  );
};

export default SearchWord;
