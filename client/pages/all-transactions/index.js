import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AllTransactions = () => {
  return (
    <div className="flex flex-col justify-center mt-4 mb-12 min-w-96">
      <div className="flex justify-center m-4">
        <h1 className="text-4xl font-bold">All Transactions</h1>
      </div>
      <div className="overflow-x-auto relative mx-36">
        <div className="pb-4 ml-1">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative mt-1">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
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
              id="table-search"
              className="block p-2 pl-10 w-80 text-sm rounded-lg border bg-white border-black focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search for name"
            />
          </div>
        </div>
        <table className="w-full text-sm text-left">
          <thead className="text-xs uppercase bg-gray-800 text-white">
            <tr>
              <th scope="col" className="py-3 px-6">
                Address
              </th>
              <th scope="col" className="py-3 px-6">
                Name
              </th>
              <th scope="col" className="py-3 px-6">
                Nominal
              </th>
              <th scope="col" className="py-3 px-6">
                Date
              </th>
              <th scope="col" className="py-3 px-6">
                Invoice
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border border-gray-400">
              <th scope="row" className="px-6 font-medium">
                0x74D3JH2...FD5A
              </th>
              <td className="py-4 px-6">Mr. John Wick</td>
              <td className="py-4 px-6">Rp500.000</td>
              <td className="py-4 px-6">20 November 2022</td>
              <td className="py-4 px-6">
                <a href="#" className="font-bold text-blue-600 hover:underline">
                  <FontAwesomeIcon
                    icon={faDownload}
                    className="text-2xl"
                    width={20}
                  />
                </a>
              </td>
            </tr>
            <tr className="border-b bg-slate-300 border-gray-700">
              <th scope="row" className="px-6 font-medium">
                0x74D3JH2...FD5A
              </th>
              <td className="py-4 px-6">Mrs. Pevita Pearce</td>
              <td className="py-4 px-6">Rp800.000</td>
              <td className="py-4 px-6">20 November 2022</td>
              <td className="py-4 px-6">
                <a href="#" className="font-bold text-blue-600 hover:underline">
                  <FontAwesomeIcon
                    icon={faDownload}
                    className="text-2xl"
                    width={20}
                  />
                </a>
              </td>
            </tr>
            <tr className="bg-white border border-gray-400">
              <th scope="row" className="px-6 font-medium">
                0x74D3JH2...FD5A
              </th>
              <td className="py-4 px-6">Mr. John Wick</td>
              <td className="py-4 px-6">Rp500.000</td>
              <td className="py-4 px-6">20 November 2022</td>
              <td className="py-4 px-6">
                <a href="#" className="font-bold text-blue-600 hover:underline">
                  <FontAwesomeIcon
                    icon={faDownload}
                    className="text-2xl"
                    width={20}
                  />
                </a>
              </td>
            </tr>
            <tr className="border-b bg-slate-300 border-gray-700">
              <th scope="row" className="px-6 font-medium">
                0x74D3JH2...FD5A
              </th>
              <td className="py-4 px-6">Mrs. Pevita Pearce</td>
              <td className="py-4 px-6">Rp800.000</td>
              <td className="py-4 px-6">20 November 2022</td>
              <td className="py-4 px-6">
                <a href="#" className="font-bold text-blue-600 hover:underline">
                  <FontAwesomeIcon
                    icon={faDownload}
                    className="text-2xl"
                    width={20}
                  />
                </a>
              </td>
            </tr>
            <tr className="bg-white border border-gray-400">
              <th scope="row" className="px-6 font-medium">
                0x74D3JH2...FD5A
              </th>
              <td className="py-4 px-6">Mr. John Wick</td>
              <td className="py-4 px-6">Rp500.000</td>
              <td className="py-4 px-6">20 November 2022</td>
              <td className="py-4 px-6">
                <a href="#" className="font-bold text-blue-600 hover:underline">
                  <FontAwesomeIcon
                    icon={faDownload}
                    className="text-2xl"
                    width={20}
                  />
                </a>
              </td>
            </tr>
            <tr className="border-b bg-slate-300 border-gray-700">
              <th scope="row" className="px-6 font-medium">
                0x74D3JH2...FD5A
              </th>
              <td className="py-4 px-6">Mrs. Pevita Pearce</td>
              <td className="py-4 px-6">Rp800.000</td>
              <td className="py-4 px-6">20 November 2022</td>
              <td className="py-4 px-6">
                <a href="#" className="font-bold text-blue-600 hover:underline">
                  <FontAwesomeIcon
                    icon={faDownload}
                    className="text-2xl"
                    width={20}
                  />
                </a>
              </td>
            </tr>
            <tr className="bg-white border border-gray-400">
              <th scope="row" className="px-6 font-medium">
                0x74D3JH2...FD5A
              </th>
              <td className="py-4 px-6">Mr. John Wick</td>
              <td className="py-4 px-6">Rp500.000</td>
              <td className="py-4 px-6">20 November 2022</td>
              <td className="py-4 px-6">
                <a href="#" className="font-bold text-blue-600 hover:underline">
                  <FontAwesomeIcon
                    icon={faDownload}
                    className="text-2xl"
                    width={20}
                  />
                </a>
              </td>
            </tr>
            <tr className="border-b bg-slate-300 border-gray-700">
              <th scope="row" className="px-6 font-medium">
                0x74D3JH2...FD5A
              </th>
              <td className="py-4 px-6">Mrs. Pevita Pearce</td>
              <td className="py-4 px-6">Rp800.000</td>
              <td className="py-4 px-6">20 November 2022</td>
              <td className="py-4 px-6">
                <a href="#" className="font-bold text-blue-600 hover:underline">
                  <FontAwesomeIcon
                    icon={faDownload}
                    className="text-2xl"
                    width={20}
                  />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTransactions;
