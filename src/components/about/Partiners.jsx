import React, { useState } from "react";
import { Navbar, Footer } from "../../components";
import { motion } from "framer-motion";
import { Users, Globe } from "lucide-react";

const partnersList = [
  {
    id: 1,
    name: "Rwanda Development Board",
    logo: "https://via.placeholder.com/150x100?text=RDB",
    website: "https://www.rdb.rw",
    description: "Supports sports development in Rwanda, including boxing programs.",
  },
  {
    id: 2,
    name: "Bank of Kigali",
    logo: "https://via.placeholder.com/150x100?text=BoK",
    website: "https://www.bk.rw",
    description: "Main sponsor for national boxing events and tournaments.",
  },
  {
    id: 3,
    name: "MTN Rwanda",
    logo: "https://via.placeholder.com/150x100?text=MTN",
    website: "https://www.mtn.co.rw",
    description: "Provides communication support and promotional coverage for boxing events.",
  },
  {
    id: 4,
    name: "Airtel Rwanda",
    logo: "https://via.placeholder.com/150x100?text=Airtel",
    website: "https://www.airtel.co.rw",
    description: "Sponsors athletes and supports grassroots boxing programs.",
  },
];

const PartnersSponsors = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPartners = partnersList.filter((partner) =>
    partner.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-primary min-h-screen w-full overflow-hidden">
      <Navbar />

      <div className="bg-primary px-6 md:px-20 flex justify-center">
        <div className="w-full max-w-6xl py-20">
          {/* Header + Search */}
          <section className="bg-black text-white py-10 px-6 md:px-10 rounded-3xl mb-12">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <h1 className="text-5xl font-extrabold tracking-wide mb-4 md:mb-0 text-white">
                Partners & Sponsors
              </h1>
              <div className="relative w-full md:w-1/3">
                <input
                  type="text"
                  placeholder="Search partners..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>
            </div>

            {/* Partners List */}
            {filteredPartners.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
                {filteredPartners.map((partner) => (
                  <motion.div
                    key={partner.id}
                    className="bg-gray-900 rounded-3xl p-6 shadow-lg hover:shadow-[0_0_40px_#1DA1F2] transition-all duration-500 flex flex-col justify-between items-center text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex flex-col items-center mb-4">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-36 h-20 object-contain mb-4"
                      />
                      <h2 className="text-2xl font-bold text-white">{partner.name}</h2>
                    </div>
                    <p className="text-gray-300 mb-6">{partner.description}</p>
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white px-4 py-2 rounded-full transition-all"
                    >
                      <Globe size={18} />
                      Visit Website
                    </a>
                  </motion.div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-400 mt-12">No partners found.</p>
            )}
          </section>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default PartnersSponsors;
