import React, { useState } from "react";
import { Navbar, Footer } from "../../components";
import { motion } from "framer-motion";
import { FileText, Eye, Download } from "lucide-react";

const reportsList = [
  {
    id: 1,
    title: "Annual Financial Report 2024",
    description:
      "Detailed financial statement including income, expenditures, and budget allocations for the year 2024.",
    date: "2025-01-15",
    fileUrl: "https://example.com/annual-financial-2024.pdf",
  },
  {
    id: 2,
    title: "Annual Activity Report 2024",
    description:
      "Overview of all events, tournaments, and initiatives carried out by Rwanda Boxing Federation in 2024.",
    date: "2025-02-10",
    fileUrl: "https://example.com/activity-report-2024.pdf",
  },
  {
    id: 3,
    title: "Audit Report 2024",
    description:
      "Independent audit findings on finances, governance, and operational performance for transparency purposes.",
    date: "2025-03-05",
    fileUrl: "https://example.com/audit-report-2024.pdf",
  },
];

const TransparencyReports = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredReports = reportsList.filter((report) =>
    report.title.toLowerCase().includes(searchTerm.toLowerCase())
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
                Transparency & Reports
              </h1>
              <div className="relative w-full md:w-1/3">
                <input
                  type="text"
                  placeholder="Search reports..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>
            </div>

            {/* Reports List */}
            {filteredReports.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
                {filteredReports.map((report) => (
                  <motion.div
                    key={report.id}
                    className="bg-gray-900 rounded-3xl p-6 shadow-lg hover:shadow-[0_0_40px_#1DA1F2] transition-all duration-500 flex flex-col justify-between"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <FileText size={40} className="text-sky-400" />
                      <div>
                        <h2 className="text-2xl font-bold text-white">{report.title}</h2>
                        <p className="text-gray-400 text-sm">{report.date}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6">{report.description}</p>

                    <div className="flex gap-4">
                      <a
                        href={report.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-500 text-white px-4 py-2 rounded-full transition-all"
                      >
                        <Eye size={18} />
                        View
                      </a>
                      <a
                        href={report.fileUrl}
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
              <p className="text-center text-gray-400 mt-12">No reports found.</p>
            )}
          </section>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default TransparencyReports;
