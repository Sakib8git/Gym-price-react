import React, { use, useState } from "react";
import NavLink from "./NavLink";
import { CircleChevronDown, Menu } from "lucide-react";

const Navbar = ({ navPromise }) => {
  const navData = use(navPromise);
  const [openMenu, setOpenMenu] = useState(true);
  const links = navData.map((route) => (
    <NavLink key={route.id} route={route}></NavLink>
  ));

  return (
    <nav className=" navbar flex justify-between items-center container mx-auto p-4">
      <span className="flex items-center gap-2">
        <span onClick={() => setOpenMenu(!openMenu)}>
          {openMenu ? (
            <CircleChevronDown className="md:hidden" />
          ) : (
            <Menu className="md:hidden"></Menu>
          )}
        </span>
        {/* //!small device */}
        <ul className={`md:hidden absolute bg-amber-300 md:p-3 duration-1000  rounded-xl
           ${openMenu? "top-14 left-3": "-top-64 left-3"} ` }>{links}</ul>
        <h1 className="font-bold text-2xl">My Gym</h1>
      </span>
      <ul className="md:flex gap-5 hidden">{links}</ul>
      <button className="btn">Sign In</button>
    </nav>
  );
};

export default Navbar;
