import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import ConnectMetamask from '../../components/ConnectMetamask';

const PayZakat = () => {
  const [nominal, setNominal] = useState(0);
  const [isConnected, setIsConnected] = useState(false);

  const calculateZakat = (nominal) => {
    const zakat = nominal * 0.025;
    return zakat.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  useEffect(() => {
    if (window.ethereum) {
      try {
        window.ethereum.request({ method: 'eth_accounts' }).then((accounts) => {
          if (accounts.length > 0) {
            setIsConnected(true);
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex flex-col items-center justify-center w-1/2 h-1/2">
        {isConnected ? (
          <>
            <h1 className="text-4xl font-bold mt-8">Pay Zakat</h1>
            <div className="m-8">
              <form className="flex flex-col items-center justify-center w-full h-full">
                <div>
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900"
                    htmlFor="income"
                  >
                    Income
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm  rounded-l-md border border-r-0 bg-gray-300 border-black font-bold">
                      Rp.
                    </span>
                    <input
                      type="number"
                      className="rounded-none rounded-r-lg border block flex-1 w-96 text-sm p-2.5 bg-white border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your income"
                      onChange={(e) => setNominal(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      className="block mb-2 text-sm font-medium text-gray-900 pt-2"
                      htmlFor="nominal"
                    >
                      Zakat Nominal
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 text-sm  rounded-l-md border border-r-0 bg-gray-300 border-black font-bold">
                        Rp.
                      </span>
                      <input
                        type="text"
                        className="rounded-none rounded-r-lg border block flex-1 w-96 text-sm p-2.5 bg-slate-100 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                        disabled={true}
                        value={calculateZakat(nominal)}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center w-full h-full mt-4">
                    <p className="text-sm text-gray-500">
                      —Fill the field above for your personal data—
                    </p>
                  </div>

                  <h3 className="block mb-2 text-sm font-medium text-gray-900 pt-2">
                    Title
                  </h3>
                  <ul className="grid gap-6 w-full md:grid-cols-2">
                    <li>
                      <input
                        type="radio"
                        id="mister"
                        name="title"
                        value="mister"
                        className="hidden peer"
                        required
                      />
                      <label
                        htmlFor="mister"
                        className="inline-flex justify-between items-center px-2 py-1 w-full rounded-lg border cursor-pointer border-gray-700  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-slate-400 text-slate-300 bg-gray-800 hover:bg-gray-700"
                      >
                        <div className="block">
                          <div className="w-full text-lg font-semibold">
                            Mr.
                          </div>
                        </div>
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="miss"
                        name="title"
                        value="miss"
                        className="hidden peer"
                      />
                      <label
                        htmlFor="miss"
                        className="inline-flex justify-between items-center px-2 py-1 w-full rounded-lg border cursor-pointer border-gray-700  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-slate-400 text-slate-300 bg-gray-800 hover:bg-gray-700"
                      >
                        <div className="block">
                          <div className="w-full text-lg font-semibold">
                            Mrs.
                          </div>
                        </div>
                      </label>
                    </li>
                  </ul>

                  <div>
                    <label
                      className="block mb-2 text-sm font-medium text-gray-900 pt-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-[1.1rem] text-sm rounded-l-md border border-r-0 bg-gray-300 border-black font-bold">
                        <FontAwesomeIcon icon={faUser} />
                      </span>
                      <input
                        type="text"
                        className="rounded-none rounded-r-lg border block flex-1 w-96 text-sm p-2.5 bg-white border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label
                        className="block mb-2 text-sm font-medium text-gray-900 pt-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <div className="flex">
                        <span className="inline-flex items-center px-[1.1rem] text-sm rounded-l-md border border-r-0 bg-gray-300 border-black font-bold">
                          <FontAwesomeIcon icon={faEnvelope} />
                        </span>
                        <input
                          type="email"
                          className="rounded-none rounded-r-lg border block flex-1 w-96 text-sm p-2.5 bg-white border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        className="block mb-2 text-sm font-medium text-gray-900 pt-2"
                        htmlFor="phone"
                      >
                        Phone
                      </label>
                      <div className="flex">
                        <span className="inline-flex items-center px-[1.1rem] text-sm rounded-l-md border border-r-0 bg-gray-300 border-black font-bold">
                          <FontAwesomeIcon icon={faPhone} />
                        </span>
                        <input
                          type="phone"
                          className="rounded-none rounded-r-lg border block flex-1 w-96 text-sm p-2.5 bg-white border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter your phone"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    className="focus:ring-4 focus:ring-gray-600 bg-gray-800 border-gray-700 text-white hover:bg-gray-700 w-[436px] p-2.5 my-4 font-medium rounded-lg text-lg "
                    type="submit"
                  >
                    Pay
                  </button>
                </div>
              </form>
            </div>
          </>
        ) : (
          <ConnectMetamask />
        )}
      </div>
    </div>
  );
};

export default PayZakat;
