import React, { use } from "react";
import NavLink from "./NavLink";

const Navbar = ({ navPromise }) => {
  const navData = use(navPromise);
  //   console.log(navData);
  return (
    <nav className=" navbar flex justify-between items-center container mx-auto">
      <h1 className="font-bold text-2xl">My Gym</h1>
      <ul className="flex gap-5">
        {navData.map((route) => (
          <NavLink key={route.id} route={route}></NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
