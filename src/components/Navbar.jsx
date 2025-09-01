import React, { useState } from "react";
import { Link } from "react-router-dom";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [dropdown, setDropdown] = useState(null); // track which dropdown is open

  const handleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar relative bg-black px-6 sm:px-12">
      {/* Logo / Title */}
      <h1 className="font-bold text-white text-lg sm:text-xl tracking-wide">
        RWANDA BOXING FEDERATION
      </h1>

      {/* Desktop Menu */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 gap-8">
        {navLinks.map((nav) =>
          nav.title === "News & Media" ? (
            // ✅ News Dropdown
            <li key={nav.id} className="relative group">
              <button
                onClick={() => handleDropdown("news")}
                className="font-poppins font-normal cursor-pointer text-[16px] text-white hover:text-sky-400 transition"
              >
                {nav.title} ▾
              </button>
              {dropdown === "news" && (
                <div className="absolute top-full mt-2 w-48 bg-black/90 backdrop-blur-lg rounded-lg shadow-lg z-50">
                  <ul className="flex flex-col p-3">
                    <li>
                      <Link to="/news/posts" className="block px-4 py-2 text-white hover:bg-sky-500/30 rounded-md transition" onClick={() => setDropdown(null)}>Posts</Link>
                    </li>
                    <li>
                      <Link to="/news/matches" className="block px-4 py-2 text-white hover:bg-sky-500/30 rounded-md transition" onClick={() => setDropdown(null)}>Matches</Link>
                    </li>
                    <li>
                      <Link to="/news/latest" className="block px-4 py-2 text-white hover:bg-sky-500/30 rounded-md transition" onClick={() => setDropdown(null)}>News</Link>
                    </li>
              
                  </ul>
                </div>
              )}
            </li>
          ) : nav.title === "Portifolio" ? (
            // ✅ Portfolio Dropdown
            <li key={nav.id} className="relative group">
              <button
                onClick={() => handleDropdown("portfolio")}
                className="font-poppins font-normal cursor-pointer text-[16px] text-white hover:text-sky-400 transition"
              >
                {nav.title} ▾
              </button>
              {dropdown === "portfolio" && (
                <div className="absolute top-full mt-2 w-56 bg-black/90 backdrop-blur-lg rounded-lg shadow-lg z-50">
                  <ul className="flex flex-col p-3">
                    <li>
                      <Link to="/Portifolio" className="block px-4 py-2 text-white hover:bg-sky-500/30 rounded-md transition" onClick={() => setDropdown(null)}>Boxers Portfolio</Link>
                    </li>
                    <li>
                      <Link to="/news/clubs" className="block px-4 py-2 text-white hover:bg-sky-500/30 rounded-md transition" onClick={() => setDropdown(null)}>Affiliated Clubs</Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          ) : nav.title === "Meet us" ? (
            // ✅ Meet us Dropdown
            <li key={nav.id} className="relative group">
              <button
                onClick={() => handleDropdown("meetus")}
                className="font-poppins font-normal cursor-pointer text-[16px] text-white hover:text-sky-400 transition"
              >
                {nav.title} ▾
              </button>
              {dropdown === "meetus" && (
                <div className="absolute top-full mt-2 w-48 bg-black/90 backdrop-blur-lg rounded-lg shadow-lg z-50">
                  <ul className="flex flex-col p-3">
                    <li>
                      <Link to="/excome" className="block px-4 py-2 text-white hover:bg-sky-500/30 rounded-md transition" onClick={() => setDropdown(null)}>Excom Team</Link>
                    </li>
                    <li>
                      <Link to="/contact" className="block px-4 py-2 text-white hover:bg-sky-500/30 rounded-md transition" onClick={() => setDropdown(null)}>Contact</Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          ) : (
            // Default menu item
            <li key={nav.id} className="font-poppins font-normal cursor-pointer text-[16px] text-white hover:text-sky-400 transition">
              <Link to={`/${nav.id}`}>{nav.title}</Link>
            </li>
          )
        )}
      </ul>

      {/* Mobile Menu */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${toggle ? "flex" : "hidden"} p-6 bg-black/95 absolute top-20 right-4 min-w-[220px] rounded-xl sidebar shadow-xl`}
        >
          <ul className="list-none flex flex-col justify-end items-start w-full gap-4">
            {navLinks.map((nav) =>
              nav.title === "News & Media" ? (
                // ✅ News dropdown mobile
                <li key={nav.id} className="w-full">
                  <button
                    onClick={() => handleDropdown("news")}
                    className="w-full text-left font-poppins text-[16px] text-white hover:text-sky-400 transition"
                  >
                    {nav.title} ▾
                  </button>
                  {dropdown === "news" && (
                    <ul className="ml-4 mt-2 flex flex-col gap-2">
                      <li><Link to="/news/posts" className="text-white hover:text-sky-400 transition" onClick={() => { setDropdown(null); setToggle(false); }}>Posts</Link></li>
                      <li><Link to="/news/matches" className="text-white hover:text-sky-400 transition" onClick={() => { setDropdown(null); setToggle(false); }}>Matches</Link></li>
                      <li><Link to="/news/latest" className="text-white hover:text-sky-400 transition" onClick={() => { setDropdown(null); setToggle(false); }}>News</Link></li>
                    </ul>
                  )}
                </li>
              ) : nav.title === "Portifolio" ? (
                // ✅ Portfolio dropdown mobile
                <li key={nav.id} className="w-full">
                  <button
                    onClick={() => handleDropdown("portfolio")}
                    className="w-full text-left font-poppins text-[16px] text-white hover:text-sky-400 transition"
                  >
                    {nav.title} ▾
                  </button>
                  {dropdown === "portfolio" && (
                    <ul className="ml-4 mt-2 flex flex-col gap-2">
                      <li><Link to="/Portfolio/" className="text-white hover:text-sky-400 transition" onClick={() => { setDropdown(null); setToggle(false); }}>Boxers Portfolio</Link></li>
                      <li><Link to="/news/clubs" className="text-white hover:text-sky-400 transition" onClick={() => { setDropdown(null); setToggle(false); }}>Clubs Portfolio</Link></li>
                    </ul>
                  )}
                </li>
              ) : nav.title === "Meet us" ? (
                // ✅ Meet us dropdown mobile
                <li key={nav.id} className="w-full">
                  <button
                    onClick={() => handleDropdown("meetus")}
                    className="w-full text-left font-poppins text-[16px] text-white hover:text-sky-400 transition"
                  >
                    {nav.title} ▾
                  </button>
                  {dropdown === "meetus" && (
                    <ul className="ml-4 mt-2 flex flex-col gap-2">
                      <li><Link to="/excome" className="text-white hover:text-sky-400 transition" onClick={() => { setDropdown(null); setToggle(false); }}>Excom Team</Link></li>
                      <li><Link to="/contact" className="text-white hover:text-sky-400 transition" onClick={() => { setDropdown(null); setToggle(false); }}>Contact</Link></li>
                    </ul>
                  )}
                </li>
              ) : (
                <li key={nav.id}>
                  <Link to={`/${nav.id}`} className="font-poppins font-normal text-[16px] text-white hover:text-sky-400 transition" onClick={() => setToggle(false)}>
                    {nav.title}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
