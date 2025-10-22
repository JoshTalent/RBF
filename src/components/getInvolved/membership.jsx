import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../Navbar";
import Footer from "../Footer";
import {
  User,
  Mail,
  Phone,
  Users,
  Award,
  Shield,
  Star,
  CheckCircle,
  Clock,
  Target,
  Crown,
  TrendingUp,
  MapPin,
  Send,
  FileText,
  Download,
  ArrowRight
} from "lucide-react";

const Membership = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    club: "",
    membershipType: "athlete",
    experience: "",
    message: "",
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const membershipTypes = [
    {
      id: "athlete",
      title: "Athlete Member",
      description: "For active boxers competing in tournaments",
      price: "15,000 RWF/year",
      features: ["Tournament Eligibility", "National Ranking", "Training Access", "Insurance Coverage"]
    },
    {
      id: "coach",
      title: "Coach Member",
      description: "For certified boxing coaches and trainers",
      price: "25,000 RWF/year",
      features: ["Coaching Certification", "Event Access", "Networking", "Resource Library"]
    },
    {
      id: "club",
      title: "Club Membership",
      description: "For boxing clubs and training centers",
      price: "100,000 RWF/year",
      features: ["Club Recognition", "Multiple Coaches", "Event Hosting", "Marketing Support"]
    },
    {
      id: "associate",
      title: "Associate Member",
      description: "For supporters and boxing enthusiasts",
      price: "10,000 RWF/year",
      features: ["Event Tickets", "Newsletter", "Community Access", "Merchandise Discounts"]
    }
  ];

  const experienceLevels = [
    "Beginner (0-1 years)",
    "Intermediate (1-3 years)",
    "Advanced (3-5 years)",
    "Professional (5+ years)"
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setSubmitted(true);
  };

  const steps = [
    { number: 1, title: "Membership Type", icon: <Target className="w-5 h-5" /> },
    { number: 2, title: "Personal Info", icon: <User className="w-5 h-5" /> },
    { number: 3, title: "Review & Submit", icon: <Send className="w-5 h-5" /> }
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
            <Shield className="w-5 h-5 text-sky-400" />
            <span className="text-sky-300 font-semibold">JOIN THE FEDERATION</span>
          </motion.div>
          
          <h1 className="text-5xl sm:text-7xl font-black bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent mb-6">
            Become a Member
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join Rwanda's premier boxing community. Access exclusive benefits, training resources, and competitive opportunities with official federation membership.
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
              { number: "2,500+", label: "Active Members", icon: <Users className="w-8 h-8" /> },
              { number: "98%", label: "Satisfaction Rate", icon: <Star className="w-8 h-8" /> },
              { number: "50+", label: "Clubs Registered", icon: <Award className="w-8 h-8" /> },
              { number: "24/7", label: "Member Support", icon: <Clock className="w-8 h-8" /> }
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
      <main className="flex-grow py-16 px-6 md:px-12 max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Membership Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 shadow-2xl overflow-hidden"
            >
              {/* Progress Steps */}
              <div className="p-6 border-b border-gray-800 bg-black/50">
                <div className="flex items-center justify-between">
                  {steps.map((step, index) => (
                    <div key={step.number} className="flex items-center">
                      <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                        currentStep >= step.number 
                          ? 'bg-sky-500 border-sky-500 text-white' 
                          : 'border-gray-600 text-gray-400'
                      } transition-all`}>
                        {currentStep > step.number ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          step.icon
                        )}
                      </div>
                      {index < steps.length - 1 && (
                        <div className={`w-16 h-0.5 mx-2 ${
                          currentStep > step.number ? 'bg-sky-500' : 'bg-gray-600'
                        }`} />
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-2">
                  {steps.map(step => (
                    <span 
                      key={step.number}
                      className={`text-sm ${
                        currentStep === step.number ? 'text-sky-400 font-semibold' : 'text-gray-400'
                      }`}
                    >
                      {step.title}
                    </span>
                  ))}
                </div>
              </div>

              {/* Form Content */}
              <div className="p-8">
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.form
                      key={currentStep}
                      onSubmit={handleSubmit}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      {/* Step 1: Membership Type */}
                      {currentStep === 1 && (
                        <div className="space-y-6">
                          <h3 className="text-2xl font-bold text-white mb-6">Select Membership Type</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {membershipTypes.map((type) => (
                              <motion.div
                                key={type.id}
                                className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                                  formData.membershipType === type.id
                                    ? 'border-sky-500 bg-sky-500/20'
                                    : 'border-gray-700 bg-gray-800/50 hover:border-sky-400'
                                }`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setFormData({...formData, membershipType: type.id})}
                              >
                                <div className="flex items-start justify-between mb-3">
                                  <h4 className="font-semibold text-white">{type.title}</h4>
                                  {formData.membershipType === type.id && (
                                    <CheckCircle className="w-5 h-5 text-sky-400" />
                                  )}
                                </div>
                                <p className="text-gray-400 text-sm mb-3">{type.description}</p>
                                <div className="text-sky-400 font-bold text-lg mb-3">{type.price}</div>
                                <ul className="space-y-1">
                                  {type.features.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
                                      <CheckCircle className="w-4 h-4 text-green-400" />
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Step 2: Personal Information */}
                      {currentStep === 2 && (
                        <div className="space-y-6">
                          <h3 className="text-2xl font-bold text-white mb-6">Personal Information</h3>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <label className="block text-gray-300 mb-2 font-semibold">
                                Full Name *
                              </label>
                              <div className="relative">
                                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                  type="text"
                                  name="fullName"
                                  value={formData.fullName}
                                  onChange={handleChange}
                                  required
                                  className="w-full pl-10 pr-4 py-3 bg-black/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 text-white placeholder-gray-400"
                                  placeholder="Enter your full name"
                                />
                              </div>
                            </div>

                            <div>
                              <label className="block text-gray-300 mb-2 font-semibold">
                                Email Address *
                              </label>
                              <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                  type="email"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                  required
                                  className="w-full pl-10 pr-4 py-3 bg-black/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 text-white placeholder-gray-400"
                                  placeholder="your@email.com"
                                />
                              </div>
                            </div>

                            <div>
                              <label className="block text-gray-300 mb-2 font-semibold">
                                Phone Number *
                              </label>
                              <div className="relative">
                                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                  type="tel"
                                  name="phone"
                                  value={formData.phone}
                                  onChange={handleChange}
                                  required
                                  className="w-full pl-10 pr-4 py-3 bg-black/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 text-white placeholder-gray-400"
                                  placeholder="+250 7XX XXX XXX"
                                />
                              </div>
                            </div>

                            <div>
                              <label className="block text-gray-300 mb-2 font-semibold">
                                Experience Level
                              </label>
                              <select
                                name="experience"
                                value={formData.experience}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 text-white"
                              >
                                <option value="">Select experience level</option>
                                {experienceLevels.map(level => (
                                  <option key={level} value={level}>{level}</option>
                                ))}
                              </select>
                            </div>
                          </div>

                          <div>
                            <label className="block text-gray-300 mb-2 font-semibold">
                              Boxing Club (Optional)
                            </label>
                            <div className="relative">
                              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                              <input
                                type="text"
                                name="club"
                                value={formData.club}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-3 bg-black/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 text-white placeholder-gray-400"
                                placeholder="Enter your boxing club name"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-gray-300 mb-2 font-semibold">
                              Additional Message (Optional)
                            </label>
                            <textarea
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              rows="4"
                              className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 text-white placeholder-gray-400"
                              placeholder="Tell us about your boxing background and goals..."
                            />
                          </div>
                        </div>
                      )}

                      {/* Step 3: Review & Submit */}
                      {currentStep === 3 && (
                        <div className="space-y-6">
                          <h3 className="text-2xl font-bold text-white mb-6">Review Your Application</h3>
                          
                          <div className="bg-gray-800/50 rounded-xl p-6 space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <span className="text-gray-400">Membership Type:</span>
                                <p className="text-white font-semibold">
                                  {membershipTypes.find(t => t.id === formData.membershipType)?.title}
                                </p>
                              </div>
                              <div>
                                <span className="text-gray-400">Price:</span>
                                <p className="text-green-400 font-semibold">
                                  {membershipTypes.find(t => t.id === formData.membershipType)?.price}
                                </p>
                              </div>
                              <div>
                                <span className="text-gray-400">Name:</span>
                                <p className="text-white font-semibold">{formData.fullName}</p>
                              </div>
                              <div>
                                <span className="text-gray-400">Email:</span>
                                <p className="text-white font-semibold">{formData.email}</p>
                              </div>
                              <div>
                                <span className="text-gray-400">Phone:</span>
                                <p className="text-white font-semibold">{formData.phone}</p>
                              </div>
                              {formData.experience && (
                                <div>
                                  <span className="text-gray-400">Experience:</span>
                                  <p className="text-white font-semibold">{formData.experience}</p>
                                </div>
                              )}
                            </div>
                            
                            {formData.message && (
                              <div>
                                <span className="text-gray-400">Message:</span>
                                <p className="text-white mt-1">{formData.message}</p>
                              </div>
                            )}
                          </div>

                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span>Your information is secure and encrypted</span>
                          </div>
                        </div>
                      )}

                      {/* Navigation Buttons */}
                      <div className="flex justify-between pt-6">
                        {currentStep > 1 && (
                          <motion.button
                            type="button"
                            onClick={prevStep}
                            className="px-6 py-3 border border-gray-600 text-gray-300 rounded-xl hover:border-sky-400 hover:text-sky-400 transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Previous
                          </motion.button>
                        )}
                        
                        <div className="ml-auto">
                          {currentStep < 3 ? (
                            <motion.button
                              type="button"
                              onClick={nextStep}
                              className="px-6 py-3 bg-sky-600 text-white rounded-xl hover:bg-sky-700 transition-all flex items-center gap-2"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              Continue
                              <ArrowRight className="w-4 h-4" />
                            </motion.button>
                          ) : (
                            <motion.button
                              type="submit"
                              disabled={isLoading}
                              className="px-8 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all flex items-center gap-2 disabled:opacity-50"
                              whileHover={{ scale: isLoading ? 1 : 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              {isLoading ? (
                                <>
                                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                  Processing...
                                </>
                              ) : (
                                <>
                                  <Send className="w-4 h-4" />
                                  Submit Application
                                </>
                              )}
                            </motion.button>
                          )}
                        </div>
                      </div>
                    </motion.form>
                  ) : (
                    /* Success Message */
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-green-400" />
                      </div>
                      <h2 className="text-3xl font-bold text-white mb-4">Application Submitted!</h2>
                      <p className="text-gray-300 text-lg mb-6 max-w-md mx-auto">
                        Thank you for your interest in joining the Rwanda Boxing Federation. 
                        We'll review your application and contact you within 2-3 business days.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.button
                          className="px-6 py-3 bg-sky-600 text-white rounded-xl hover:bg-sky-700 transition-all"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => window.location.reload()}
                        >
                          Apply Again
                        </motion.button>
                        <motion.button
                          className="px-6 py-3 border border-gray-600 text-gray-300 rounded-xl hover:border-sky-400 hover:text-sky-400 transition-all flex items-center gap-2"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Download className="w-4 h-4" />
                          Download Brochure
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          {/* Benefits Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Benefits Card */}
              <div className="bg-gradient-to-br from-sky-900/50 to-blue-900/50 rounded-2xl border border-sky-500/30 p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Crown className="w-5 h-5 text-yellow-400" />
                  Member Benefits
                </h3>
                <ul className="space-y-3">
                  {[
                    "Official Federation Certification",
                    "Tournament Eligibility & Registration",
                    "National Ranking Inclusion",
                    "Insurance Coverage During Events",
                    "Training Resources & Materials",
                    "Coach & Athlete Networking",
                    "Exclusive Event Access",
                    "Discounts on Equipment & Merchandise"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support Card */}
              <div className="bg-black/50 rounded-2xl border border-gray-800 p-6">
                <h3 className="text-xl font-bold text-white mb-4">Need Help?</h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <p>Contact our membership team:</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-sky-400" />
                      <span>membership@rwandaboxing.rw</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-green-400" />
                      <span>+250 788 123 456</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-yellow-400" />
                      <span>Mon-Fri, 8:00 AM - 5:00 PM</span>
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

export default Membership;