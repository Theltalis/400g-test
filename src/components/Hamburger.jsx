import React from "react";
import { NavLink } from "react-router-dom";

const Hamburger = ({ closeMenu }) => {
  const handleItemClick = () => {
    closeMenu();
  };

  return (
    <div className="bg-white absolute left-0 top-14 shadow-lg">
      <ul className="text-base text-black pt-2">
        <li>
          <NavLink
            className="p-4 block border-b border-gray-800 hover:bg-red-300"
            onClick={handleItemClick}
          >
            Market Dashboards
          </NavLink>
        </li>
        <li>
          <NavLink
            className="p-4 block border-b border-gray-800 hover:bg-red-300"
            onClick={handleItemClick}
          >
            Circuit Order Builder
          </NavLink>
        </li>
        <li>
          <NavLink
            className="p-4 block border-b border-gray-800 hover:bg-red-300"
            onClick={handleItemClick}
          >
            Circuit Builder
          </NavLink>
        </li>
        <li>
          <NavLink
            className="p-4 block border-gray-800 hover:bg-red-300"
            onClick={handleItemClick}
          >
            Card Subslot Planning
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Hamburger;
