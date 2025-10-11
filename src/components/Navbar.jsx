import React, { useState } from "react";
import { Link } from "react-router-dom";
import { close, menu } from "../assets";

const menuItems = [
  { title: "Home", to: "/" },

  {
    title: "About",
    key: "about",
    children: [
      { title: "Who We Are", to: "/about" },
      { title: "Excom Team", to: "/about/excome" },
      { title: "Judges Team", to: "/about/Judges" },
      { title: "Projects", to: "/about/projects" },
      { title: "History & Hall of Fame", to: "/about/history" },
      { title: "Transparency & Reports", to: "/about/reports" },
      { title: "Partners & Sponsors", to: "/about/partners" },
    ],
  },

  {
    title: "Athletes",
    key: "athletes",
    children: [
      { title: "National Team", to: "/athletes/national-team" },
      { title: "Athlete Profiles", to: "/athletes/profiles" },
      { title: "National Rankings", to: "/athletes/rankings" },
    ],
  },

  {
    title: "Competitions",
    key: "competitions",
    children: [
      { title: "Upcoming Events & Matches", to: "/competitions/upcoming" },
      { title: "Results & Standings", to: "/competitions/results" },
    ],
  },

  {
    title: "Get Involved",
    key: "involved",
    children: [
      { title: "Find a Club", to: "/clubs" },
      { title: "Become a Member", to: "/membership" },
      { title: "Coach Education", to: "/coach-education" },
      { title: "Promoter Sanctioning", to: "/promoter" },
    ],
  },

  {
    title: "Media",
    key: "media",
    children: [
      { title: "Gallery", to: "/media/photos" },
      { title: "Matches", to: "/media/videos" },
      { title: "Press Kit / Media Resources", to: "/media/press-kit" },
    ],
  },
  {
    title: "Resources",
    key: "resources",
    children: [
      { title: "Documents & Forms", to: "/resources/documents" },
      { title: "Rules & Regulations", to: "/resources/rules" },
      { title: "Anti-Doping", to: "/resources/anti-doping" },
    ],
  },

  { title: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  const handleDropdown = (key) => {
    setDropdown((prev) => (prev === key ? null : key));
  };

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar relative bg-black px-6 sm:px-12">
      {/* Logo / Title */}
      <h1 className="font-bold text-white text-lg sm:text-xl tracking-wide">
        RWANDA BOXING FEDERATION
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex list-none flex-1 justify-end items-center gap-8">
        {menuItems.map((item) =>
          item.children ? (
            <li key={item.key} className="relative">
              <button
                onClick={() => handleDropdown(item.key)}
                className="font-poppins text-[16px] text-white hover:text-sky-400 transition"
                aria-expanded={dropdown === item.key}
              >
                {item.title} ▾
              </button>

              {dropdown === item.key && (
                <div className="absolute top-full mt-2 w-60 bg-black/90 backdrop-blur-lg rounded-lg shadow-lg z-50">
                  <ul className="flex flex-col p-3">
                    {item.children.map((c) => (
                      <li key={c.to}>
                        <Link
                          to={c.to}
                          className="block px-4 py-2 text-white hover:bg-sky-500/30 rounded-md transition"
                          onClick={() => setDropdown(null)}
                        >
                          {c.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ) : (
            <li key={item.title}>
              <Link
                to={item.to}
                className="font-poppins text-[16px] text-white hover:text-sky-400 transition"
              >
                {item.title}
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
          onClick={() => {
            setToggle((prev) => !prev);
            // close any open dropdown when closing mobile menu
            if (toggle) setDropdown(null);
          }}
        />

        {/* Fullscreen Mobile Menu */}
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } flex-col justify-start items-center fixed inset-0 bg-black/95 z-50 gap-8 pt-12 overflow-y-auto`}
        >
          {/* Close Icon */}
          <div className="w-full flex justify-end px-6">
            <img
              src={close}
              alt="close"
              className="w-8 h-8 object-contain cursor-pointer"
              onClick={() => {
                setToggle(false);
                setDropdown(null);
              }}
            />
          </div>

          {/* Menu Items */}
          <ul className="list-none flex flex-col justify-center items-center w-full gap-6 text-center mt-4 px-6">
            {menuItems.map((item) =>
              item.children ? (
                <li key={item.key} className="w-full">
                  <button
                    onClick={() => handleDropdown(item.key)}
                    className="w-full text-left font-poppins text-[20px] text-white hover:text-sky-400 transition flex justify-between items-center px-2 py-2"
                    aria-expanded={dropdown === item.key}
                  >
                    <span className="ml-2">{item.title}</span>
                    <span className="mr-2">
                      {dropdown === item.key ? "▴" : "▾"}
                    </span>
                  </button>

                  {dropdown === item.key && (
                    <ul className="mt-2 flex flex-col gap-3 text-center px-4 pb-4">
                      {item.children.map((c) => (
                        <li key={c.to} className="w-full">
                          <Link
                            to={c.to}
                            className="block w-full text-white font-medium text-[18px] py-2 hover:text-sky-400 transition"
                            onClick={() => {
                              setDropdown(null);
                              setToggle(false); // close mobile overlay after navigation
                            }}
                          >
                            {c.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.title} className="w-full">
                  <Link
                    to={item.to}
                    className="block w-full text-white font-poppins text-[20px] text-center py-2 hover:text-sky-400 transition"
                    onClick={() => {
                      setToggle(false);
                      setDropdown(null);
                    }}
                  >
                    {item.title}
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
