import React, { useState } from "react";
import { FaBars, FaSearch, FaShoppingBag, FaTimes, FaUser } from "react-icons/fa";
import logo from "/logo.svg";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    
  const navItems = [

    { title: "Shop", path: "/" },
    { title: "New Collection", path: "/new" },
    { title: "Men", path: "/men" },
    { title: "Women", path: "/women" },
    { title: "Men & Women", path: "/menwomen" },
    { title: "Kids", path: "/kids" },
    // { title: "Sale", path: "/sale" },
    // { title: "Craft Supplies & Tools", path: "/" },
  ];
  return (
    <header className="max-w-screen-2xl xl:px-28 px-4 absolute top-0 left-0 right-0">
      <nav className="flex justify-between items-center container md:py-4 pt-6 pb-3">
        <FaSearch className="text-Black w-6 h-6 cursor-pointer hidden md:block" />
        {/* <a href="/" className="">
          <img src={logo} alt="" />
        </a> */}

        {/* account and shopping btn */}
        <div className="text-lg text-Black flex items-center gap-4 ">
          <Link to='/signup' className="flex items-center gap-2 ">
            <FaUser /> Account
          </Link>
          <Link to="/cart" className="flex items-center gap-2 container ">
            <FaShoppingBag /> Shoping
          </Link>
        </div>

        <div className="sm:hidden">
            <button onClick={toggleMenu}>
                {
                    isMenuOpen ? <FaTimes className="w-6 h-6 text-black"/> : <FaBars className="w-6 h-6 text-black"/>
                }
            </button>
        </div>
      </nav>
      <hr />
      {/* nav items */}
      <div className="pt-4">
        <ul className="md:flex items-center justify-around text-black hidden">
          {navItems.map(({ title, path}) => (
            <li key={title} className=" hover:text-orange-500">
              <NavLink
                to={path}
                className={({ isActive}) => isActive ? "active" : ""}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* mobile menu items */}
      <div>
        <ul className={`bg-black text-white px-4 py-2 rounded ${isMenuOpen ? "" : "hidden"}`}>
          {navItems.map(({ title, path }) => (
            <li key={title} className=" hover:text-orange-500 my-3 cursor-pointer">
              <Link
                to={path}
                onClick={toggleMenu}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        </div>
      
    </header>
  );
};

export default Navbar;
