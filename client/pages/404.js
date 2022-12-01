import Link from 'next/link';

const NotFoundPage = () => (
  <main className="h-[35.1rem] w-full flex flex-col justify-center items-center">
    <h1 className="text-9xl font-extrabold text-black tracking-widest">404</h1>
    <div className="bg-red-500 text-white font-bold px-2 text-sm rounded rotate-12 absolute">
      Page Not Found
    </div>
    <button className="mt-5">
      <Link
        className="relative inline-block text-sm font-mediumgroup active:text-gray-400 focus:outline-none focus:ring"
        href="/"
      >
        <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-gray-400 group-hover:translate-y-0 group-hover:translate-x-0"></span>

        <span className="relative block px-8 py-3 bg-white border border-current ">
          <p>Go Home</p>
        </span>
      </Link>
    </button>
  </main>
);
export default NotFoundPage;
