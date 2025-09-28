import React from "react";

const NavLink = ({route}) => {
  return (
    <li className=  "hover:bg-amber-500 rounded-xl md:rounded-sm md:p-2  ">
      <a className="px-3 " href={route.url}>{route.label}</a>{" "}
    </li>
  );
};

export default NavLink;
