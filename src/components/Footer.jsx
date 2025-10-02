import React from "react";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black via-gray-900 to-black text-gray-300 pt-20 pb-10 px-6 md:px-20 border-t border-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
        {/* Brand + About */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-2xl font-bold text-white tracking-wide">
              Rwanda Boxing Federation
            </h2>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Building champions, inspiring the nation, and promoting the spirit
            of boxing across Rwanda. Join us as we shape the future of the sport.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4 border-b border-sky-500 pb-2">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {footerLinks.map((link) =>
              link.links.map((item) => (
                <li
                  key={item.name}
                  className="hover:text-sky-400 transition-colors cursor-pointer"
                >
                  {item.name}
                </li>
              ))
            )}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4 border-b border-green-500 pb-2">
            Contact Us
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-sky-400" />
              Amahoro Stadium, Kigali, Rwanda
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-sky-400" />
              +250 788 123 456
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-sky-400" />
              info@rbf.rw
            </li>
          </ul>
          {/* Mini Map */}
          <iframe
            title="RBF Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.752003769383!2d30.1123!3d-1.9536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca425b4b3a2a7%3A0x8cf6a1c5b812d8c7!2sAmahoro%20Stadium!5e0!3m2!1sen!2srw!4v1234567890"
            width="100%"
            height="120"
            className="rounded-lg mt-4 border border-gray-700"
            loading="lazy"
          ></iframe>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4 border-b border-yellow-500 pb-2">
            Stay Updated
          </h4>
          <p className="text-gray-400 mb-3 text-sm">
            Get the latest news, events, and updates from RBF.
          </p>
          <form className="flex bg-gray-800/60 rounded-full overflow-hidden border border-gray-700 focus-within:border-sky-500 transition">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="px-5 py-2 bg-gradient-to-r from-sky-600 to-blue-500 hover:from-blue-700 hover:to-sky-700 transition-colors font-semibold text-white"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

   
      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Rwanda Boxing Federation. All Rights Reserved. <span className="font-bold text-white"> System by GNA IntelleX </span>
        </p>
        <div className="flex gap-6 mt-4 md:mt-0">
          {socialMedia.map((social, index) => (
            <a
              key={social.id}
              href={social.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 hover:text-sky-400 transition-transform"
            >
              <img
                src={social.icon}
                alt={social.id}
                className="w-6 h-6 object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
