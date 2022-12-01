import { useState } from 'react';
import Image from 'next/image';
export default function ConnectMetamask() {
  const [accountAddress, setAccountAddress] = useState('');
  async function connectMetamask() {
    if (window.ethereum) {
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
  return (
    <div className="mt-14 flex flex-col justify-center items-center">
      <Image
        src="/assets/img/metamask.svg"
        alt="Metamask Logo"
        className="w-72 h-72"
        width={300}
        height={300}
      />
      <h1 className="text-2xl font-bold mt-10">Connect Metamask to Continue</h1>
      <button
        className="focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-gray-600 bg-gray-800 border-gray-700 text-white hover:bg-gray-700 mt-8 mb-[4.6rem]"
        onClick={connectMetamask}
      >
        Connect
      </button>
    </div>
  );
}
