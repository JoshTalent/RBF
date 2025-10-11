import React, { useState } from "react";
import { Navbar, Footer } from "../../components";
import { motion } from "framer-motion";
import { FileCheck, Eye, Download } from "lucide-react";

const rulesList = [
  {
    id: 1,
    title: "Official Competition Rules 2025",
    description:
      "Comprehensive rulebook outlining official boxing regulations, weight categories, scoring criteria, and competition procedures for 2025.",
    date: "2025-01-10",
    fileUrl: "https://example.com/competition-rules-2025.pdf",
  },
  {
    id: 2,
    title: "Athlete Code of Conduct",
    description:
      "Guidelines for professional behavior, discipline, and fair play expected from all registered athletes and team representatives.",
    date: "2025-02-18",
    fileUrl: "https://example.com/athlete-code.pdf",
  },
  {
    id: 3,
    title: "Health & Safety Regulations",
    description:
      "Rules and standards to ensure safety and well-being during training, sparring, and official matches, including medical clearance requirements.",
    date: "2025-03-12",
    fileUrl: "https://example.com/health-safety.pdf",
  },
  {
    id: 4,
    title: "Event Sanctioning Guidelines",
    description:
      "Procedures, responsibilities, and compliance standards for promoters and organizers to obtain official event sanctioning.",
    date: "2025-04-22",
    fileUrl: "https://example.com/event-guidelines.pdf",
  },
];

const RulesRegulations = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRules = rulesList.filter((rule) =>
    rule.title.toLowerCase().includes(searchTerm.toLowerCase())
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
                Rules & Regulations
              </h1>
              <div className="relative w-full md:w-1/3">
                <input
                  type="text"
                  placeholder="Search rules..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>
            </div>

            {/* Rules List */}
            {filteredRules.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
                {filteredRules.map((rule) => (
                  <motion.div
                    key={rule.id}
                    className="bg-gray-900 rounded-3xl p-6 shadow-lg hover:shadow-[0_0_40px_#1DA1F2] transition-all duration-500 flex flex-col justify-between"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <FileCheck size={40} className="text-sky-400" />
                      <div>
                        <h2 className="text-2xl font-bold text-white">{rule.title}</h2>
                        <p className="text-gray-400 text-sm">{rule.date}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6">{rule.description}</p>

                    <div className="flex gap-4">
                      <a
                        href={rule.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-500 text-white px-4 py-2 rounded-full transition-all"
                      >
                        <Eye size={18} />
                        View
                      </a>
                      <a
                        href={rule.fileUrl}
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
              <p className="text-center text-gray-400 mt-12">No rules found.</p>
            )}
          </section>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default RulesRegulations;
