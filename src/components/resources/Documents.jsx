import React, { useState } from "react";
import { Navbar, Footer } from "../../components";
import { motion } from "framer-motion";
import { FileText, Download, Eye } from "lucide-react";

const sampleDocuments = [
  {
    id: 1,
    title: "Membership Application Form",
    description: "Complete this form to become an official member of the association.",
    date: "2025-07-10",
    fileUrl: "https://example.com/membership-form.pdf",
  },
  {
    id: 2,
    title: "Event Sanctioning Application",
    description: "Submit this document for official event approval and sanctioning.",
    date: "2025-06-02",
    fileUrl: "https://example.com/event-sanctioning.pdf",
  },
  {
    id: 3,
    title: "Coach License Renewal Form",
    description: "Required for renewing your annual coach license certification.",
    date: "2025-05-15",
    fileUrl: "https://example.com/coach-renewal.pdf",
  },
  {
    id: 4,
    title: "Athlete Medical Clearance",
    description: "All athletes must submit this signed form before participation.",
    date: "2025-04-18",
    fileUrl: "https://example.com/medical-clearance.pdf",
  },
];

const DocumentsForms = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDocs = sampleDocuments.filter((doc) =>
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
                Documents & Forms
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

            {/* Documents List */}
            {filteredDocs.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
                {filteredDocs.map((doc) => (
                  <motion.div
                    key={doc.id}
                    className="bg-gray-900 rounded-3xl p-6 shadow-lg hover:shadow-[0_0_40px_#1DA1F2] transition-all duration-500 flex flex-col justify-between"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <FileText size={40} className="text-sky-400" />
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
              <p className="text-center text-gray-400 mt-12">No documents found.</p>
            )}
          </section>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default DocumentsForms;
