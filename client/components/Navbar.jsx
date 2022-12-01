import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [accountAddress, setAccountAddress] = useState('');

  async function connectMetamask() {
    if (window.ethereum) {
      console.log('Metamask is detected');
      try {
        const account = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        setAccountAddress(account[0]);
      } catch (err) {
        console.log('Error Connecting');
      }
    } else {
      alert('Metamask is not installed');
    }
  }

  const ButtonLogin = () => {
    return (
      <button
        type="button"
        className="focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-gray-600 bg-gray-800 border-gray-700 text-white hover:bg-gray-700 mr-2 mb-2"
        onClick={connectMetamask}
      >
        <Image
          src="/assets/img/metamask.svg"
          width={20}
          height={20}
          alt="Metamask"
          className="mr-2"
        />
        Connect with MetaMask
      </button>
    );
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', function (accounts) {
        setAccountAddress(accounts[0]);
      });
    }
  }, []);

  return (
    <nav className="py-2 sm:px-4 bg-gray-900 sticky w-full z-20 top-0 left-0 ">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="flex justify-start w-[245px]">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/img/logo-zakat.png"
              className="mr-3 h-12 sm:h-14"
              alt="Zakat Logo"
              width={50}
              height={50}
            />
          </Link>
        </div>
        <div className="flex md:order-2">
          {accountAddress ? (
            <p className="focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-gray-600 bg-gray-800 border-gray-700 text-white hover:bg-gray-700 mr-2 mb-2">
              {accountAddress.slice(0, 16)}...{accountAddress.slice(37, 42)}
            </p>
          ) : (
            <ButtonLogin />
          )}
        </div>
        <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium ">
            <li>
              <Link
                href="/"
                className="py-2 pr-4 pl-3 md:p-0 text-gray-400 hover:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/payzakat"
                className="py-2 pr-4 pl-3 md:p-0 text-gray-400 hover:text-white"
              >
                Pay Zakat
              </Link>
            </li>
            <li>
              <Link
                href="/all-transactions"
                className="py-2 pr-4 pl-3 md:p-0 text-gray-400 hover:text-white"
              >
                All Transactions
              </Link>
            </li>
            <li>
              <Link
                href="/check-transactions"
                className="py-2 pr-4 pl-3 md:p-0 text-gray-400 hover:text-white"
              >
                Check Transactions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
