const SearchBox = () => {
  return (
    <div className="flex w-full space-x-1 group">
      <input type="text" name="search" placeholder="Search for articles" />
      <div className="grid w-10 h-10 bg-blue-500 rounded-lg place-items-center">
        <svg
          className="w-6 h-6 text-white group-hover:text-gray-200"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default SearchBox;
