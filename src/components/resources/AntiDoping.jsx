import React, { useState } from "react";
import { Navbar, Footer } from "../../components";
import { motion } from "framer-motion";
import { ShieldAlert, Eye, Download } from "lucide-react";

const antiDopingResources = [
  {
    id: 1,
    title: "Anti-Doping Policy 2025",
    description:
      "Official policy of the Rwanda Boxing Federation outlining anti-doping procedures, responsibilities, and sanctions in compliance with WADA regulations.",
    date: "2025-01-05",
    fileUrl: "https://example.com/anti-doping-policy-2025.pdf",
  },
  {
    id: 2,
    title: "Prohibited Substances List (WADA 2025)",
    description:
      "Comprehensive list of banned substances and methods for 2025. All athletes are required to familiarize themselves with this list to avoid violations.",
    date: "2025-01-15",
    fileUrl: "https://example.com/wada-prohibited-list-2025.pdf",
  },
  {
    id: 3,
    title: "Therapeutic Use Exemption (TUE) Guidelines",
    description:
      "Information and application process for athletes requiring therapeutic use exemptions for prescribed medications under medical supervision.",
    date: "2025-02-01",
    fileUrl: "https://example.com/tue-guidelines.pdf",
  },
  {
    id: 4,
    title: "Testing Procedures and Athlete Rights",
    description:
      "Detailed explanation of anti-doping testing procedures, athlete rights, and responsibilities during sample collection and analysis.",
    date: "2025-02-20",
    fileUrl: "https://example.com/testing-procedures.pdf",
  },
];

const AntiDoping = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredResources = antiDopingResources.filter((doc) =>
    doc.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-primary min-h-screen w-full overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="bg-primary px-6 md:px-20 flex justify-center">
        <div className="w-full max-w-6xl py-20">
          {/* Header + Search */}
          <section className="bg-black text-white py-10 px-6 md:px-10 rounded-3xl mb-12">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <h1 className="text-5xl font-extrabold tracking-wide mb-4 md:mb-0 text-white">
                Anti-Doping
              </h1>
              <div className="relative w-full md:w-1/3">
                <input
                  type="text"
                  placeholder="Search documents..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>
            </div>

            {/* Resources List */}
            {filteredResources.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
                {filteredResources.map((doc) => (
                  <motion.div
                    key={doc.id}
                    className="bg-gray-900 rounded-3xl p-6 shadow-lg hover:shadow-[0_0_40px_#1DA1F2] transition-all duration-500 flex flex-col justify-between"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <ShieldAlert size={40} className="text-sky-400" />
                      <div>
                        <h2 className="text-2xl font-bold text-white">{doc.title}</h2>
                        <p className="text-gray-400 text-sm">{doc.date}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6">{doc.description}</p>

                    <div className="flex gap-4">
                      <a
                        href={doc.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-500 text-white px-4 py-2 rounded-full transition-all"
                      >
                        <Eye size={18} />
                        View
                      </a>
                      <a
                        href={doc.fileUrl}
                        download
                        className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-full transition-all"
                      >
                        <Download size={18} />
                        Download
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-400 mt-12">No anti-doping documents found.</p>
            )}
          </section>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AntiDoping;
