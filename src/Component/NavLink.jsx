import React from "react";

const NavLink = ({route}) => {
  return (
    <li>
      <a href={route.url}>{route.label}</a>{" "}
    </li>
  );
};

export default NavLink;
