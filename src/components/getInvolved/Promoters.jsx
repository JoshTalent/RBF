import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../Navbar";
import Footer from "../Footer";
import {
  FileText,
  Shield,
  Award,
  Clock,
  Users,
  DollarSign,
  CheckCircle,
  Calendar,
  MapPin,
  Download,
  Send,
  ArrowRight,
  Star,
  Target,
  BarChart3,
  TrendingUp,
  Eye,
  FileCheck,
  ClipboardList,
  Building
} from "lucide-react";

const Promoter = () => {
  const [activeTab, setActiveTab] = useState("requirements");
  const [selectedEventType, setSelectedEventType] = useState("");

  const eventTypes = [
    {
      id: "amateur",
      title: "Amateur Events",
      description: "Local and regional amateur boxing competitions",
      fee: "50,000 RWF",
      timeline: "30 days",
      requirements: ["RBF Member Promoter", "Medical Staff", "Standard Safety"]
    },
    {
      id: "professional",
      title: "Professional Events",
      description: "Professional boxing matches and title fights",
      fee: "150,000 RWF",
      timeline: "45 days",
      requirements: ["RBF Pro License", "Advanced Medical", "Broadcast Standards"]
    },
    {
      id: "international",
      title: "International Events",
      description: "Events featuring international boxers and audiences",
      fee: "300,000 RWF",
      timeline: "60 days",
      requirements: ["International Standards", "VIP Security", "Multi-language Support"]
    },
    {
      id: "youth",
      title: "Youth & Development",
      description: "Events focused on youth development and talent discovery",
      fee: "25,000 RWF",
      timeline: "21 days",
      requirements: ["Youth Safety Protocols", "Parental Consent", "Educational Components"]
    }
  ];

  const requirements = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "RBF Membership",
      description: "Valid RBF promoter membership with clean disciplinary record"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Event Proposal",
      description: "Detailed event proposal submitted at least 30 days in advance"
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Venue Safety",
      description: "Certified venue safety inspection and emergency protocols"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Medical Readiness",
      description: "Licensed medical staff and ambulance presence on-site"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Participant Licenses",
      description: "All boxers must hold valid RBF competition licenses"
    },
    {
      icon: <ClipboardList className="w-6 h-6" />,
      title: "Regulatory Compliance",
      description: "Adherence to all RBF and international boxing regulations"
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Application Submission",
      description: "Complete and submit the official promoter application form",
      duration: "1-2 days",
      icon: <FileCheck className="w-6 h-6" />
    },
    {
      step: 2,
      title: "Document Review",
      description: "RBF committee reviews all submitted documents and requirements",
      duration: "3-5 days",
      icon: <Eye className="w-6 h-6" />
    },
    {
      step: 3,
      title: "Fee Payment",
      description: "Pay applicable sanctioning and administrative fees",
      duration: "1 day",
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      step: 4,
      title: "Final Approval",
      description: "Receive official sanctioning certificate and event ID",
      duration: "2-3 days",
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  const benefits = [
    "Official RBF recognition and branding",
    "Access to national boxer database",
    "RBF official assignments (referees, judges)",
    "Event listing on RBF official calendar",
    "Media and marketing support",
    "Insurance coverage for participants",
    "Post-event ranking updates",
    "International recognition for results"
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-sky-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-900/20 via-transparent to-transparent"></div>
      </div>

      <Navbar />

      {/* Header Section */}
      <motion.header 
        className="relative py-28 px-6 text-center z-10 overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900/40 via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-3 bg-sky-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-sky-500/30 mb-6"
          >
            <Award className="w-5 h-5 text-sky-400" />
            <span className="text-sky-300 font-semibold">OFFICIAL SANCTIONING</span>
          </motion.div>
          
          <h1 className="text-5xl sm:text-7xl font-black bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent mb-6">
            Promoter Sanctioning
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Elevate your boxing events with official Rwanda Boxing Federation sanctioning. 
            Gain national recognition, ensure regulatory compliance, and access professional resources.
          </p>
        </div>
      </motion.header>

      {/* Stats Section */}
      <motion.section 
        className="py-16 px-6 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "150+", label: "Events Sanctioned", icon: <Calendar className="w-8 h-8" /> },
              { number: "98%", label: "Approval Rate", icon: <TrendingUp className="w-8 h-8" /> },
              { number: "7", label: "Days Average Processing", icon: <Clock className="w-8 h-8" /> },
              { number: "50+", label: "Active Promoters", icon: <Users className="w-8 h-8" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-black/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-sky-500/50 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-sky-400 mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <main className="flex-grow py-16 px-6 md:px-12 max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs Navigation */}
            <motion.div 
              className="flex flex-wrap gap-2 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {[
                { id: "requirements", label: "Requirements", icon: <CheckCircle className="w-4 h-4" /> },
                { id: "process", label: "Process", icon: <BarChart3 className="w-4 h-4" /> },
                { id: "benefits", label: "Benefits", icon: <Star className="w-4 h-4" /> },
                { id: "events", label: "Event Types", icon: <Target className="w-4 h-4" /> }
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all ${
                    activeTab === tab.id
                      ? "bg-sky-500 text-white shadow-lg shadow-sky-500/25"
                      : "bg-black/50 text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-700"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tab.icon}
                  {tab.label}
                </motion.button>
              ))}
            </motion.div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              {/* Requirements Tab */}
              {activeTab === "requirements" && (
                <motion.div
                  key="requirements"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 p-8 shadow-2xl"
                >
                  <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <Shield className="w-8 h-8 text-sky-400" />
                    Sanctioning Requirements
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-8">
                    To ensure the highest standards of safety, fairness, and professionalism, 
                    all promoters must meet these comprehensive requirements for RBF sanctioning.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {requirements.map((req, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-sky-500/50 transition-all"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="text-sky-400 mt-1">{req.icon}</div>
                        <div>
                          <h3 className="font-semibold text-white mb-2">{req.title}</h3>
                          <p className="text-gray-400 text-sm">{req.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="bg-sky-500/10 border border-sky-500/30 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-sky-400 mb-3">Important Notes:</h4>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li>• All documents must be submitted at least <strong>30 days</strong> before the event date</li>
                      <li>• International events require <strong>60 days</strong> advance notice</li>
                      <li>• Additional requirements may apply based on event scale and type</li>
                      <li>• Promoters must maintain active RBF membership throughout the process</li>
                    </ul>
                  </div>
                </motion.div>
              )}

              {/* Process Tab */}
              {activeTab === "process" && (
                <motion.div
                  key="process"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 p-8 shadow-2xl"
                >
                  <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <BarChart3 className="w-8 h-8 text-sky-400" />
                    Sanctioning Process
                  </h2>

                  <div className="space-y-6">
                    {processSteps.map((step, index) => (
                      <motion.div
                        key={step.step}
                        className="flex items-start gap-6 p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-sky-500/50 transition-all"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-sky-500 text-white font-bold text-lg flex-shrink-0">
                          {step.step}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                              <Clock className="w-4 h-4" />
                              {step.duration}
                            </div>
                          </div>
                          <p className="text-gray-300 mb-4">{step.description}</p>
                          <div className="flex items-center gap-2 text-sky-400">
                            {step.icon}
                            <span className="text-sm font-semibold">Step {step.step}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-green-400 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      Total Processing Time: 7-11 Business Days
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Most applications are processed within one week. International events may require additional time for verification.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Benefits Tab */}
              {activeTab === "benefits" && (
                <motion.div
                  key="benefits"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 p-8 shadow-2xl"
                >
                  <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <Star className="w-8 h-8 text-yellow-400" />
                    Promoter Benefits
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-8">
                    RBF sanctioning provides promoters with comprehensive support and recognition, 
                    ensuring your events meet international standards while maximizing their impact.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-green-500/50 transition-all"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-blue-400 mb-3">Additional Support</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
                      <div>• Dedicated promoter support manager</div>
                      <div>• Access to international sanctioning bodies</div>
                      <div>• Marketing and promotional materials</div>
                      <div>• Post-event results certification</div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Event Types Tab */}
              {activeTab === "events" && (
                <motion.div
                  key="events"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 p-8 shadow-2xl"
                >
                  <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <Target className="w-8 h-8 text-sky-400" />
                    Event Types & Fees
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-8">
                    Choose the appropriate sanctioning category for your event. Each type has specific 
                    requirements, timelines, and fee structures tailored to different competition levels.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {eventTypes.map((event) => (
                      <motion.div
                        key={event.id}
                        className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                          selectedEventType === event.id
                            ? 'border-sky-500 bg-sky-500/20'
                            : 'border-gray-700 bg-gray-800/50 hover:border-sky-400'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedEventType(event.id)}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                          {selectedEventType === event.id && (
                            <CheckCircle className="w-6 h-6 text-sky-400" />
                          )}
                        </div>
                        <p className="text-gray-400 mb-4">{event.description}</p>
                        
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400">Sanctioning Fee:</span>
                            <span className="text-green-400 font-bold">{event.fee}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400">Processing Time:</span>
                            <span className="text-yellow-400 font-semibold">{event.timeline}</span>
                          </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-gray-700">
                          <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Requirements:</h4>
                          <ul className="space-y-1">
                            {event.requirements.map((req, index) => (
                              <li key={index} className="text-xs text-gray-500">• {req}</li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-sky-600 to-blue-700 rounded-2xl p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-4">Ready to Apply?</h3>
                <p className="text-gray-100 mb-6 text-sm">
                  Start your sanctioning application today and join Rwanda's premier boxing promoters network.
                </p>
                <motion.button
                  className="w-full py-3 bg-white text-sky-600 font-bold rounded-xl hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-5 h-5" />
                  Apply Now
                </motion.button>
              </div>

              {/* Resources Card */}
              <div className="bg-black/50 rounded-2xl border border-gray-800 p-6">
                <h3 className="text-xl font-bold text-white mb-4">Resources</h3>
                <div className="space-y-3">
                  {[
                    { name: "Application Form", icon: <FileText className="w-4 h-4" /> },
                    { name: "Regulations Guide", icon: <ClipboardList className="w-4 h-4" /> },
                    { name: "Fee Schedule", icon: <DollarSign className="w-4 h-4" /> },
                    { name: "Safety Checklist", icon: <Shield className="w-4 h-4" /> }
                  ].map((resource, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      className="flex items-center gap-3 p-3 text-gray-300 hover:text-sky-400 hover:bg-sky-500/10 rounded-lg transition-all"
                      whileHover={{ x: 5 }}
                    >
                      {resource.icon}
                      <span>{resource.name}</span>
                      <Download className="w-4 h-4 ml-auto" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Support Card */}
              <div className="bg-black/50 rounded-2xl border border-gray-800 p-6">
                <h3 className="text-xl font-bold text-white mb-4">Support</h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-sky-400" />
                    <span>RBF Headquarters, Kigali</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span>Mon-Fri, 8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="pt-3 border-t border-gray-700">
                    <div className="font-semibold text-white mb-1">Sanctioning Department</div>
                    <div className="flex items-center gap-2">
                      <span>Email: sanctioning@rwandaboxing.rw</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>Phone: +250 788 123 456</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Promoter;