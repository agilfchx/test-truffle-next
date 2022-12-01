import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export default function CheckTransactions() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex items-center justify-center w-full text-center m-4">
        <h1 className="text-4xl font-bold">Check Transactions</h1>
      </div>
      <div className="flex flex-col items-center justify-center  max-w-7xl px-4 py-6 space-y-4 bg-white border border-gray-300 rounded-md shadow-md">
        <div className="flex flex-col items-center justify-center w-full space-y-2">
          <form className="flex items-center">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="border text-sm rounded-lg block w-[35rem] pl-10 p-2.5 bg-white border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search Address"
                required
              />
            </div>
            <button
              type="submit"
              className="p-2.5 ml-2 text-sm font-medium text-white  rounded-full border border-blue-700 focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-col px-4 py-6 space-y-4 bg-white w-[500px] border border-gray-900/50 rounded-md shadow-lg m-8">
        <p className="text-xl font-semibold uppercase">
          Transactions Information
        </p>
        <div>
          <p className="uppercase font-bold text-sm">Transaction Hash</p>
          <p className="text-slate-800">0x5AD712D...14JL</p>
        </div>
        <div>
          <p className="uppercase font-bold text-sm">User Address</p>
          <p className="text-slate-800">0x74D3JH2...FD5A</p>
        </div>
        <div>
          <p className="uppercase font-bold text-sm">Name</p>
          <p className="text-slate-800">Asep Resing</p>
        </div>
        <div>
          <p className="uppercase font-bold text-sm">Nominal</p>
          <p className="text-slate-800">Rp150.000</p>
        </div>
        <div>
          <p className="uppercase font-bold text-sm">Status</p>
          <p className="text-slate-800">PAID</p>
        </div>
        <div className="flex justify-between">
          <p className="uppercase font-bold text-sm">Invoice</p>
          <p>
            <FontAwesomeIcon
              icon={faDownload}
              className="text-2xl"
              width={20}
            />
          </p>
        </div>
      </div>
    </div>
  );
}
