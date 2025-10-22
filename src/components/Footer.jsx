import React from "react";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import { Mail, Phone, MapPin, Send, ChevronRight, Shield, Award, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-300 pt-28 pb-16 px-6 md:px-20 border-t border-gray-800">
      {/* Sophisticated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-sky-900/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-900/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%)] bg-[size:20px_20px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 mb-20">
          {/* Brand & Mission Section */}
          <div className="xl:col-span-4 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-sky-400 to-blue-500 rounded-full"></div>
                <h2 className="text-3xl font-bold text-white tracking-tight">
                  Rwanda Boxing<br />Federation
                </h2>
              </div>
              <div className="w-20 h-0.5 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full"></div>
            </div>
            
            <p className="text-gray-400 leading-relaxed text-lg font-light">
              Dedicated to excellence in boxing, we cultivate champions while promoting 
              discipline, sportsmanship, and national pride across Rwanda's sporting landscape.
            </p>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Shield className="w-4 h-4 text-sky-400" />
                <span>Official Federation</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Award className="w-4 h-4 text-sky-400" />
                <span>Certified</span>
              </div>
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="xl:col-span-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white tracking-wide uppercase text-sm letter-spacing-wider">
                Navigation
              </h4>
              <ul className="space-y-3">
                {footerLinks.slice(0, 2).map((section) =>
                  section.links.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.link || "#"}
                        className="group flex items-center py-2 text-gray-400 hover:text-white transition-all duration-300 border-b border-gray-800 hover:border-sky-500/30"
                      >
                        <div className="w-1.5 h-1.5 bg-sky-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <span className="text-sm font-medium tracking-wide">{item.name}</span>
                      </a>
                    </li>
                  ))
                )}
              </ul>
            </div>

            {/* Programs */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white tracking-wide uppercase text-sm letter-spacing-wider">
                Programs
              </h4>
              <ul className="space-y-3">
                {footerLinks.slice(2, 4).map((section) =>
                  section.links.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.link || "#"}
                        className="group flex items-center py-2 text-gray-400 hover:text-white transition-all duration-300 border-b border-gray-800 hover:border-sky-500/30"
                      >
                        <div className="w-1.5 h-1.5 bg-sky-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <span className="text-sm font-medium tracking-wide">{item.name}</span>
                      </a>
                    </li>
                  ))
                )}
              </ul>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white tracking-wide uppercase text-sm letter-spacing-wider">
                Contact
              </h4>
              <div className="space-y-4">
                <div className="group flex items-start gap-3 p-3 rounded-xl hover:bg-gray-800/30 transition-all duration-300">
                  <div className="p-2 bg-gray-800/50 rounded-lg group-hover:bg-sky-500/10 transition-colors">
                    <MapPin className="w-4 h-4 text-sky-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Headquarters</p>
                    <p className="text-xs text-gray-400 mt-1">Amahoro Stadium, Kigali</p>
                  </div>
                </div>

                <div className="group flex items-start gap-3 p-3 rounded-xl hover:bg-gray-800/30 transition-all duration-300">
                  <div className="p-2 bg-gray-800/50 rounded-lg group-hover:bg-sky-500/10 transition-colors">
                    <Phone className="w-4 h-4 text-sky-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">+250 788 123 456</p>
                    <p className="text-xs text-gray-400 mt-1">Mon-Fri, 8AM-5PM</p>
                  </div>
                </div>

                <div className="group flex items-start gap-3 p-3 rounded-xl hover:bg-gray-800/30 transition-all duration-300">
                  <div className="p-2 bg-gray-800/50 rounded-lg group-hover:bg-sky-500/10 transition-colors">
                    <Mail className="w-4 h-4 text-sky-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">info@rbf.rw</p>
                    <p className="text-xs text-gray-400 mt-1">Official Communications</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter & Social */}
          <div className="xl:col-span-2 space-y-8">
            {/* Newsletter */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white tracking-wide uppercase text-sm letter-spacing-wider">
                Newsletter
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Receive official updates, event announcements, and federation news.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="professional@email.com"
                  className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/30 transition-all duration-300"
                  required
                />
                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 rounded-xl font-semibold text-white text-sm transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/20 flex items-center justify-center gap-2 group"
                >
                  <span>Subscribe</span>
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </form>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white tracking-wide uppercase text-sm letter-spacing-wider">
                Connect
              </h4>
              <div className="flex gap-3">
                {socialMedia.map((social) => (
                  <a
                    key={social.id}
                    href={social.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 bg-gray-800/50 rounded-xl hover:bg-sky-500/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/10"
                  >
                    <img
                      src={social.icon}
                      alt={social.id}
                      className="w-4 h-4 object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 group-hover:brightness-100 group-hover:invert-0 transition-all"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Rwanda Boxing Federation. All rights reserved.
              </p>
              <p className="text-gray-600 text-xs mt-1">
                Official National Sporting Federation • Recognized by Ministry of Sports
              </p>
            </div>

            {/* Technical Partner */}
            <div className="text-center">
              <p className="text-gray-500 text-sm">
                Technical Partner:{" "}
                <span className="font-semibold text-white bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
                  GNA IntelleX 
                </span>
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-xs">
              <a href="#" className="text-gray-500 hover:text-sky-400 transition-colors font-medium">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-sky-400 transition-colors font-medium">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-sky-400 transition-colors font-medium">
                Compliance
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;