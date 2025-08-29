import React, { useState } from "react";
import { Link } from "react-router-dom";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar relative bg-black px-6 sm:px-12">
      {/* Logo / Title */}
      <h1 className="font-bold text-white text-lg sm:text-xl tracking-wide">
        RWANDA BOXING FEDERATION
      </h1>

      {/* Desktop Menu */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 gap-8">
        {navLinks.map((nav, i) =>
          nav.title === "News & Media" ? (
            <li key={nav.id} className="relative group">
              <button
                onClick={() => setDropdown(!dropdown)}
                className="font-poppins font-normal cursor-pointer text-[16px] text-white hover:text-sky-400 transition"
              >
                {nav.title} ▾
              </button>

              {/* Dropdown */}
              {dropdown && (
                <div className="absolute top-full mt-2 w-48 bg-black/90 backdrop-blur-lg rounded-lg shadow-lg z-50">
                  <ul className="flex flex-col p-3">
                    <li>
                      <Link
                        to="/news/posts"
                        className="block px-4 py-2 text-white hover:bg-sky-500/30 rounded-md transition"
                        onClick={() => setDropdown(false)}
                      >
                        Posts
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/news/matches"
                        className="block px-4 py-2 text-white hover:bg-sky-500/30 rounded-md transition"
                        onClick={() => setDropdown(false)}
                      >
                        Matches
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/news/latest"
                        className="block px-4 py-2 text-white hover:bg-sky-500/30 rounded-md transition"
                        onClick={() => setDropdown(false)}
                      >
                        News
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/news/clubs"
                        className="block px-4 py-2 text-white hover:bg-sky-500/30 rounded-md transition"
                        onClick={() => setDropdown(false)}
                      >
                        Affliated Clubs
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          ) : (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white hover:text-sky-400 transition`}
            >
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
          onClick={() => setToggle((previous) => !previous)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black/95 absolute top-20 right-4 min-w-[200px] rounded-xl sidebar shadow-xl`}
        >
          <ul className="list-none flex flex-col justify-end items-start w-full gap-4">
            {navLinks.map((nav) =>
              nav.title === "News & Media" ? (
                <li key={nav.id} className="w-full">
                  <button
                    onClick={() => setDropdown(!dropdown)}
                    className="w-full text-left font-poppins font-normal text-[16px] text-white hover:text-sky-400 transition"
                  >
                    {nav.title} ▾
                  </button>
                  {dropdown && (
                    <ul className="ml-4 mt-2 flex flex-col gap-2">
                      <li>
                        <Link
                          to="/news/posts"
                          className="text-white hover:text-sky-400 transition"
                          onClick={() => {
                            setDropdown(false);
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
                            setDropdown(false);
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
                            setDropdown(false);
                            setToggle(false);
                          }}
                        >
                          News
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/news/clubs"
                          className="text-white hover:text-sky-400 transition"
                          onClick={() => {
                            setDropdown(false);
                            setToggle(false);
                          }}
                        >
                          Affliated Clubs
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              ) : (
                <li key={nav.id}>
                  <Link
                    to={`/${nav.id}`}
                    className="font-poppins font-normal text-[16px] text-white hover:text-sky-400 transition"
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
