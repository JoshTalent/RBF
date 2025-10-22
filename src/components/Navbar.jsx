import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
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
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setToggle(false);
    setDropdown(null);
  }, [location.pathname]);

  const handleDropdown = (key) => {
    setDropdown((prev) => (prev === key ? null : key));
  };

  const closeMobileMenu = () => {
    setToggle(false);
    setDropdown(null);
  };

  // Active item detection
  const isActiveItem = (item) => {
    if (item.to === "/") {
      return location.pathname === "/";
    }
    if (item.to) {
      return location.pathname.startsWith(item.to);
    }
    if (item.children) {
      return item.children.some(child => location.pathname.startsWith(child.to));
    }
    return false;
  };

  const isActiveChild = (child) => {
    return location.pathname.startsWith(child.to);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-xl shadow-2xl py-3 border-b border-blue-500/20"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-3 group"
          onClick={closeMobileMenu}
        >
          <div className="w-10 h-10 bg-blue-gradient rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
            <span className="text-white font-bold text-sm">RBF</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-white text-lg tracking-tight leading-5">
              RWANDA BOXING
            </span>
            <span className="text-blue-200/80 text-xs font-medium tracking-wider">
              FEDERATION
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-1">
          {menuItems.map((item) => (
            <div key={item.key || item.title} className="relative">
              {item.children ? (
                <div className="relative">
                  <button
                    onClick={() => handleDropdown(item.key)}
                    className={`flex items-center space-x-1 px-4 py-3 rounded-lg font-medium text-[15px] transition-all duration-300 ${
                      isActiveItem(item)
                        ? "text-blue-400 bg-white/10 border border-blue-500/30"
                        : "text-white/90 hover:text-blue-300 hover:bg-white/5"
                    }`}
                  >
                    <span>{item.title}</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${
                        dropdown === item.key ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {dropdown === item.key && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-slate-900/95 backdrop-blur-xl rounded-xl shadow-2xl border border-blue-500/20 overflow-hidden">
                      <div className="p-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.to}
                            to={child.to}
                            className={`flex items-center px-4 py-3 rounded-lg transition-all duration-300 ${
                              isActiveChild(child)
                                ? "bg-blue-500/20 text-blue-400 border-l-2 border-blue-400"
                                : "text-white/80 hover:bg-white/5 hover:text-blue-300"
                            }`}
                            onClick={() => setDropdown(null)}
                          >
                            <span className="font-medium text-sm">{child.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={item.to}
                  className={`px-4 py-3 rounded-lg font-medium text-[15px] transition-all duration-300 ${
                    isActiveItem(item)
                      ? "text-blue-400 bg-white/10 border border-blue-500/30"
                      : "text-white/90 hover:text-blue-300 hover:bg-white/5"
                  }`}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </div>
        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setToggle(!toggle)}
            className="p-2 rounded-lg bg-white/5 hover:bg-blue-500/20 transition-all duration-300 border border-white/10 hover:border-blue-400/30"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute top-1/2 left-1/2 w-5 h-0.5 bg-white transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                  toggle ? "rotate-45" : "-translate-y-2"
                }`}
              />
              <span
                className={`absolute top-1/2 left-1/2 w-5 h-0.5 bg-white transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                  toggle ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute top-1/2 left-1/2 w-5 h-0.5 bg-white transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                  toggle ? "-rotate-45" : "translate-y-2"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {toggle && (
          <div className="lg:hidden fixed inset-0 z-50">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-slate-900/95 backdrop-blur-sm"
              onClick={closeMobileMenu}
            />
            
            {/* Menu Panel */}
            <div className="absolute top-0 right-0 h-full w-80 max-w-full bg-slate-900/98 backdrop-blur-2xl border-l border-blue-500/20 shadow-2xl overflow-y-auto">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-blue-500/20 sticky top-0 bg-slate-900/95 backdrop-blur-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-gradient rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xs">RBF</span>
                  </div>
                  <span className="text-white font-bold text-sm">RWANDA BOXING</span>
                </div>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 rounded-lg hover:bg-blue-500/20 transition-colors duration-300 border border-white/10"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Menu Items */}
              <div className="p-4">
                <ul className="space-y-2">
                  {menuItems.map((item) => (
                    <li key={item.key || item.title}>
                      {item.children ? (
                        <div className="mb-2">
                          <button
                            onClick={() => handleDropdown(item.key)}
                            className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-left transition-all duration-300 border ${
                              isActiveItem(item)
                                ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                                : "text-white/90 hover:text-blue-300 hover:bg-white/5 border-white/10"
                            }`}
                          >
                            <span className="font-medium text-sm">{item.title}</span>
                            <svg
                              className={`w-4 h-4 transition-transform duration-300 ${
                                dropdown === item.key ? "rotate-180" : ""
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>

                          {dropdown === item.key && (
                            <div className="mt-2 ml-4 space-y-1">
                              {item.children.map((child) => (
                                <Link
                                  key={child.to}
                                  to={child.to}
                                  className={`block px-4 py-3 rounded-lg text-sm transition-all duration-300 border ${
                                    isActiveChild(child)
                                      ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                                      : "text-white/70 hover:text-blue-300 hover:bg-white/5 border-white/5"
                                  }`}
                                  onClick={closeMobileMenu}
                                >
                                  {child.title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          to={item.to}
                          className={`block px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 border ${
                            isActiveItem(item)
                              ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                              : "text-white/90 hover:text-blue-300 hover:bg-white/5 border-white/10"
                          }`}
                          onClick={closeMobileMenu}
                        >
                          {item.title}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;