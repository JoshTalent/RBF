import React, { useState } from "react";
import { Link } from "react-router-dom";
import { close, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [dropdown, setDropdown] = useState(null);

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
      <ul className="hidden sm:flex list-none flex-1 justify-end items-center gap-8">
        {navLinks.map((nav) =>
          nav.title === "News & Media" ? (
            <li key={nav.id} className="relative">
              <button
                onClick={() => handleDropdown("news")}
                className="font-poppins text-[16px] text-white hover:text-sky-400 transition"
              >
                {nav.title} ▾
              </button>
              {dropdown === "news" && (
                <div className="absolute top-full mt-2 w-48 bg-black/90 backdrop-blur-lg rounded-lg shadow-lg z-50">
                  <ul className="flex flex-col p-3">
                    <li>
                      <Link
                        to="/news/posts"
                        className="block px-4 py-2 text-white hover:bg-sky-500/30 rounded-md transition"
                        onClick={() => setDropdown(null)}
                      >
                        Posts
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/news/matches"
                        className="block px-4 py-2 text-white hover:bg-sky-500/30 rounded-md transition"
                        onClick={() => setDropdown(null)}
                      >
                        Matches
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/news/latest"
                        className="block px-4 py-2 text-white hover:bg-sky-500/30 rounded-md transition"
                        onClick={() => setDropdown(null)}
                      >
                        News
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          ) : nav.title === "Portifolio" ? (
            <li key={nav.id} className="relative">
              <button
                onClick={() => handleDropdown("portfolio")}
                className="font-poppins text-[16px] text-white hover:text-sky-400 transition"
              >
                {nav.title} ▾
              </button>
              {dropdown === "portfolio" && (
                <div className="absolute top-full mt-2 w-56 bg-black/90 backdrop-blur-lg rounded-lg shadow-lg z-50">
                  <ul className="flex flex-col p-3">
                    <li>
                      <Link
                        to="/Portifolio"
                        className="block px-4 py-2 text-white hover:bg-sky-500/30 rounded-md transition"
                        onClick={() => setDropdown(null)}
                      >
                        Boxers Portfolio
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/news/clubs"
                        className="block px-4 py-2 text-white hover:bg-sky-500/30 rounded-md transition"
                        onClick={() => setDropdown(null)}
                      >
                        Affiliated Clubs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/judges"
                        className="block px-4 py-2 text-white hover:bg-sky-500/30 rounded-md transition"
                        onClick={() => setDropdown(null)}
                      >
                        Our judges
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          ) : nav.title === "Meet us" ? (
            <li key={nav.id} className="relative">
              <button
                onClick={() => handleDropdown("meetus")}
                className="font-poppins text-[16px] text-white hover:text-sky-400 transition"
              >
                {nav.title} ▾
              </button>
              {dropdown === "meetus" && (
                <div className="absolute top-full mt-2 w-48 bg-black/90 backdrop-blur-lg rounded-lg shadow-lg z-50">
                  <ul className="flex flex-col p-3">
                    <li>
                      <Link
                        to="/excome"
                        className="block px-4 py-2 text-white hover:bg-sky-500/30 rounded-md transition"
                        onClick={() => setDropdown(null)}
                      >
                        Excom Team
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contact"
                        className="block px-4 py-2 text-white hover:bg-sky-500/30 rounded-md transition"
                        onClick={() => setDropdown(null)}
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          ) : (
            <li key={nav.id}>
              <Link
                to={`/${nav.id}`}
                className="font-poppins text-[16px] text-white hover:text-sky-400 transition"
              >
                {nav.title}
              </Link>
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

        {/* Fullscreen Mobile Menu */}
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } flex-col justify-start items-center fixed inset-0 bg-black/95 z-50 gap-8 pt-12`}
        >
          {/* Close Icon */}
          <div className="w-full flex justify-end px-6">
            <img
              src={close}
              alt="close"
              className="w-8 h-8 object-contain cursor-pointer"
              onClick={() => setToggle(false)}
            />
          </div>

          {/* Menu Items */}
          <ul className="list-none flex flex-col justify-center items-center w-full gap-6 text-center mt-4">
            {navLinks.map((nav) =>
              nav.title === "News & Media" ? (
                <li key={nav.id} className="w-full">
                  <button
                    onClick={() => handleDropdown("news")}
                    className="w-full text-center font-poppins text-[20px] text-white hover:text-sky-400 transition"
                  >
                    {nav.title} ▾
                  </button>
                  {dropdown === "news" && (
                    <ul className="mt-4 flex flex-col gap-4 text-center">
                      <li>
                        <Link
                          to="/news/posts"
                          className="text-white hover:text-sky-400 transition"
                          onClick={() => {
                            setDropdown(null);
                            setToggle(false);
                          }}
                        >
                          Posts
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/news/matches"
                          className="text-white hover:text-sky-400 transition"
                          onClick={() => {
                            setDropdown(null);
                            setToggle(false);
                          }}
                        >
                          Matches
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/news/latest"
                          className="text-white hover:text-sky-400 transition"
                          onClick={() => {
                            setDropdown(null);
                            setToggle(false);
                          }}
                        >
                          News
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              ) : nav.title === "Portifolio" ? (
                <li key={nav.id} className="w-full">
                  <button
                    onClick={() => handleDropdown("portfolio")}
                    className="w-full text-center font-poppins text-[20px] text-white hover:text-sky-400 transition"
                  >
                    {nav.title} ▾
                  </button>
                  {dropdown === "portfolio" && (
                    <ul className="mt-4 flex flex-col gap-4 text-center">
                      <li>
                        <Link
                          to="/Portifolio/"
                          className="text-white hover:text-sky-400 transition"
                          onClick={() => {
                            setDropdown(null);
                            setToggle(false);
                          }}
                        >
                          Boxers Portfolio
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/news/clubs"
                          className="text-white hover:text-sky-400 transition"
                          onClick={() => {
                            setDropdown(null);
                            setToggle(false);
                          }}
                        >
                          Clubs Portfolio
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/judges"
                          className="text-white hover:text-sky-400 transition"
                          onClick={() => {
                            setDropdown(null);
                            setToggle(false);
                          }}
                        >
                          Our judges
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              ) : nav.title === "Meet us" ? (
                <li key={nav.id} className="w-full">
                  <button
                    onClick={() => handleDropdown("meetus")}
                    className="w-full text-center font-poppins text-[20px] text-white hover:text-sky-400 transition"
                  >
                    {nav.title} ▾
                  </button>
                  {dropdown === "meetus" && (
                    <ul className="mt-4 flex flex-col gap-4 text-center">
                      <li>
                        <Link
                          to="/excome"
                          className="text-white hover:text-sky-400 transition"
                          onClick={() => {
                            setDropdown(null);
                            setToggle(false);
                          }}
                        >
                          Excom Team
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/contact"
                          className="text-white hover:text-sky-400 transition"
                          onClick={() => {
                            setDropdown(null);
                            setToggle(false);
                          }}
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              ) : (
                <li key={nav.id}>
                  <Link
                    to={`/${nav.id}`}
                    className="font-poppins text-[20px] text-white hover:text-sky-400 transition"
                    onClick={() => setToggle(false)}
                  >
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
