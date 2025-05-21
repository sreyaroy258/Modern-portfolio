import React from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLink from "./NavbarLink";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  return (
    <>
      <nav className="max-w-[1300px] mx-auto w-full px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
        {/* Main navbar container */}
        <div className="flex justify-between w-full bg-black items-center p-4 rounded-full border-orange border-[0.5px]">
          {/* Logo */}
          <NavbarLogo />

          {/* Links (visible on large screens and toggle on mobile) */}
          <div className={`${menuOpen ? "block" : "hidden"} sm:block lg:flex`}>
            <NavbarLink />
          </div>

          {/* Button (e.g., login/signup) */}
          <NavbarBtn />

          {/* Mobile toggler button */}
          <div className="lg:hidden sm:block">
            <NavbarToggler />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarMain;
