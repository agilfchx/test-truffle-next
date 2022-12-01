import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="relative bg-gray-800 pt-8 pb-6 text-slate-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <Image
              src="/assets/img/logo-zakat.png"
              alt="Zakat Logo"
              width={80}
              height={80}
              className="mb-5"
            />
            <h5 className="text-lg mt-0 mb-2">
              Tugas Akhir S1 Teknologi Informasi
              <br />
              Muhamad Agil Fachrian - 1303190040
            </h5>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blue-100 text-md font-bold mb-2">
                  Quick Links
                </span>
                <ul>
                  <li>
                    <Link
                      className="hover:text-slate-500 font-semibold block pb-2 text-sm"
                      href="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-slate-500 font-semibold block pb-2 text-sm"
                      href="/payzakat"
                    >
                      Pay Zakat
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-slate-500 font-semibold block pb-2 text-sm"
                      href="/all-transactions"
                    >
                      All Transactions
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-slate-500 font-semibold block pb-2 text-sm"
                      href="/check-transactions"
                    >
                      Check Transactions
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-blue-100 text-md font-bold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="hover:text-slate-500 font-semibold block pb-2 text-sm"
                      href="https://github.com"
                    >
                      Github
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-white" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm font-semibold py-1">
              Copyright &copy; 2022 by Muhamad Agil Fachrian
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
