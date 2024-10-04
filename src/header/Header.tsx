import { Link, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="w-full shadow-sm p-6  bg-stone-900 border-b-stone-700">
        <div className="max-w-7xl items-center flex justify-between mx-auto">
          <Link to="/">
            <h1 className="text-2xl text-[#2596BE] uppercase font-bold">
              Invoice generator
            </h1>
          </Link>
          <Link to="/preview">
            <span className="text-stone-300 font-[500] text-xl hover:text-slate-200">
              Preview
            </span>
          </Link>
        </div>
      </div>

      <main>
        <Outlet />
      </main>
    </>
  );
}
