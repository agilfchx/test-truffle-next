import Hero from '../components/Hero';
import IPFSLogo from '../public/assets/img/logo-ipfs.png';
import XenditLogo from '../public/assets/img/logo-xendit.png';
import CreaditCardLogo from '../public/assets/img/logo-credit_card.png';
import VAlogo from '../public/assets/img/logo-va.png';
import AlfaLogo from '../public/assets/img/logo-alfamart.png';
import OVOlogo from '../public/assets/img/logo-ovo.png';
import MandiriLogo from '../public/assets/img/logo-mandiri.png';
import Image from 'next/image';

export default function Main() {
  return (
    <>
      <Hero />
      <section className="w-full pt-4 pb-20 bg-gray-100">
        <div className="flex flex-col max-w-6xl mx-auto lg:flex-row">
          <div className="px-4 bg-gray-100 lg:w-1/2 sm:px-6 md:px-8 lg:order-2">
            <div className="flex flex-col justify-center h-full max-w-xl py-6 mx-auto md:py-8 lg:py-20">
              <h2 className="text-3xl text-gray-800">
                Xendit as payment gateway
              </h2>
              <p className="mt-6 text-lg text-gray-600">
                Pay using any payment method provided by{' '}
                <a
                  href="https://www.xendit.co/id/products/metode-pembayaran/"
                  className="text-blue-500"
                >
                  Xendit
                </a>
              </p>
              <div className="flex flex-wrap mt-6 space-x-4">
                <Image
                  src="/assets/img/logo-va.png"
                  width={60}
                  height={60}
                  alt="VA"
                  className="object-contain"
                />
                <Image
                  src="/assets/img/logo-credit_card.png"
                  width={60}
                  height={60}
                  alt="CC"
                  className="object-contain"
                />
                <Image
                  src="/assets/img/logo-ovo.png"
                  width={60}
                  height={60}
                  alt="OVO"
                  className="object-contain"
                />
                <Image
                  src="/assets/img/logo-alfamart.png"
                  width={60}
                  height={60}
                  alt="alfamart"
                  className="object-contain"
                />
                <Image
                  src="/assets/img/logo-mandiri.png"
                  width={60}
                  height={60}
                  alt="mandiri"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div className="px-4 pt-6 sm:px-6 md:px-8 lg:w-1/2 sm:p-0">
            <div className="flex flex-col max-w-xl mx-auto overflow-hidden transition duration-150 ease-in-out rounded-lg lg:max-w-md focus-within:-translate-y-2 focus-within:shadow-lg">
              <Image
                src="/assets/img/logo-xendit.png"
                width={200}
                height={200}
                alt="xendit"
                className="ml-20 w-72"
              />
            </div>
          </div>
        </div>
      </section>

      <hr className="mx-auto" />

      <section className="w-full pt-8 pb-20 bg-gray-100">
        <div className="flex flex-col max-w-6xl mx-auto lg:flex-row">
          <div className="flex flex-col justify-center h-full max-w-xl py-6 mx-auto md:py-8 lg:py-20">
            <h2 className="text-3xl text-gray-800">
              Store your Invoice on IPFS
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              A peer-to-peer hypermedia protocol designed to preserve and grow
              humanity&apos;s knowledge by making the web upgradeable,
              resilient, and more open.
            </p>
          </div>
          <div className="px-4 bg-gray-100 lg:w-1 sm:px-6 md:px-8 lg:order-2"></div>
          <div className="px-4 pt-6 sm:px-6 md:px-8 lg:w-1/2 sm:p-0">
            <div className="flex flex-col max-w-xl mx-auto overflow-hidden transition duration-150 ease-in-out rounded-lg lg:max-w-md focus-within:-translate-y-2 focus-within:shadow-lg">
              <Image
                src="/assets/img/logo-ipfs.png"
                width={200}
                height={200}
                alt="xendit"
                className="ml-20 w-72"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
