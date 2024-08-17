import { Link, Outlet } from "react-router-dom";
import { SelectTranslate } from "./components/translate/translate";
import { Suspense } from "react";

export function UserTemplate({ children }) {
  return (
    <>
      <header className="h-24 px-16 bg-white text-black sticky flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link to={"/"}>
            <img className="h-[6.5rem]" src="/bitis_logo.png" alt="logo" />
          </Link>

          <nav className="flex gap-6">
            <Link to="/">Trang Chủ</Link>
            <Link to="/showing-movie">Men</Link>
            <Link to="/coming-movie">Women</Link>
          </nav>
        </div>
        <div>
          <SelectTranslate />
        </div>
      </header>
      <Suspense fallback={<>Loading....</>}>
        <Outlet />
      </Suspense>
    </>
  );
}
