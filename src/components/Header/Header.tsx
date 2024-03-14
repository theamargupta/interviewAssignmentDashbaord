const Header: React.FC = () => {
  return (
    <header className="bg-white shadow py-4 px-6 flex space-x-20">
      <div className="flex-none items-center justify-around ">
        <div className="text-gray-900 text-xl font-semibold">ClarityUI</div>
      </div>
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Type to search..."
          className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <svg
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="20"
          height="20"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <div className="flex items-center">
        <div className="relative">
          <img
            src="/avatar.png"
            alt="User Avatar"
            className="w-10 h-10 rounded-full cursor-pointer"
          />
          <span className="absolute top-0 right-0 block h-3 w-3 bg-green-500 rounded-full"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
