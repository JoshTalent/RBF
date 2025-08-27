import React from "react";
import { Navbar, Footer } from "../components";
import styles from "../style";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-primary w-full overflow-hidden min-h-screen">
      {/* Navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* Contact Section */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} py-16`}>
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl font-extrabold text-white mb-4">
              Contact Rwanda Boxing Federation
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Get in touch with us for inquiries, partnerships, or support. We
              are here to grow boxing together.
            </p>
          </motion.div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Side - Contact Info & Map */}
            <motion.div
              className="bg-gray-900 rounded-2xl shadow-xl p-8 flex flex-col justify-between"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              {/* Info */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  Contact Information
                </h2>

                <div className="flex items-center text-gray-300 mb-4">
                  <Phone className="w-5 h-5 text-sky-500 mr-3" />
                  +250 788 111 222
                </div>
                <div className="flex items-center text-gray-300 mb-4">
                  <Mail className="w-5 h-5 text-sky-500 mr-3" />
                  info@rwaboxingfed.rw
                </div>
                <div className="flex items-center text-gray-300 mb-6">
                  <MapPin className="w-5 h-5 text-sky-500 mr-3" />
                  Kigali Arena, Kigali, Rwanda
                </div>

                {/* Social Links */}
                <div className="flex space-x-4 mt-4">
                  <a
                    href="#"
                    className="p-2 rounded-full bg-sky-600 hover:bg-sky-700 transition"
                  >
                    <Facebook className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="#"
                    className="p-2 rounded-full bg-sky-600 hover:bg-sky-700 transition"
                  >
                    <Twitter className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="#"
                    className="p-2 rounded-full bg-sky-600 hover:bg-sky-700 transition"
                  >
                    <Instagram className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 h-64 w-full rounded-xl overflow-hidden shadow-lg">
                <iframe
                  title="Rwanda Boxing Federation Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.738264919104!2d30.06188411475358!3d-1.9440729985740167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6e2d9dd2a81%3A0x7f89c0f45c7cf9b!2sBK%20Arena!5e0!3m2!1sen!2srw!4v1674245335978!5m2!1sen!2srw"
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                  className="border-0"
                ></iframe>
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              className="bg-gray-900 rounded-2xl shadow-xl p-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-3 bg-sky-600 text-white font-bold rounded-lg hover:bg-sky-700 transition"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>

          {/* Footer */}
          <div className="mt-20">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
