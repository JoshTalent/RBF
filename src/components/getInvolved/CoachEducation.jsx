import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../Navbar";
import Footer from "../Footer";
import {
  Award,
  Calendar,
  Users,
  Target,
  BookOpen,
  Star,
  Clock,
  TrendingUp,
  CheckCircle,
  PlayCircle,
  Download,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Crown,
  Shield,
  GraduationCap,
  BarChart3
} from "lucide-react";

// Enhanced training programs data
const trainingPrograms = [
  {
    id: 1,
    title: "National Level Coaching Certification",
    description: "Comprehensive official program designed for aspiring boxing coaches across Rwanda. Covers athlete safety, fundamental techniques, competition preparation, and sports psychology.",
    duration: "3 Months",
    level: "Beginner to Intermediate",
    price: "75,000 RWF",
    seats: 25,
    upcomingDate: "March 15, 2025",
    status: "enrolling",
    features: [
      "AIBA Certified Curriculum",
      "Practical Training Sessions",
      "Sports Science Fundamentals",
      "Injury Prevention & Safety",
      "Competition Rules & Regulations",
      "Final Certification Exam"
    ],
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=500&h=300&fit=crop",
    instructor: "Coach Jean Bosco",
    rating: 4.8,
    reviews: 124
  },
  {
    id: 2,
    title: "Advanced Technical Coaching",
    description: "For certified coaches looking to enhance tactical and analytical boxing knowledge. Includes video analysis, advanced training methodologies, and performance optimization.",
    duration: "2 Months",
    level: "Advanced",
    price: "120,000 RWF",
    seats: 15,
    upcomingDate: "April 5, 2025",
    status: "enrolling",
    features: [
      "Advanced Tactical Analysis",
      "Video Breakdown Sessions",
      "Performance Metrics",
      "Strength & Conditioning",
      "Sports Psychology Advanced",
      "International Standards"
    ],
    image: "https://images.unsplash.com/photo-1599058917765-780d56d1beb3?w=500&h=300&fit=crop",
    instructor: "Coach Innocent Mugabo",
    rating: 4.9,
    reviews: 89
  },
  {
    id: 3,
    title: "Refresher & Development Workshops",
    description: "Short-term intensive workshops for current coaches to stay updated with international boxing trends, fitness methods, and latest AIBA regulations.",
    duration: "2 Weeks",
    level: "All Certified Coaches",
    price: "45,000 RWF",
    seats: 30,
    upcomingDate: "February 20, 2025",
    status: "limited",
    features: [
      "Latest Rule Updates",
      "Modern Training Techniques",
      "Equipment Innovation",
      "Nutrition & Recovery",
      "Youth Development Strategies",
      "Networking Sessions"
    ],
    image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500&h=300&fit=crop",
    instructor: "Coach Aimable Nkurunziza",
    rating: 4.7,
    reviews: 156
  },
  {
    id: 4,
    title: "Youth Coaching Specialization",
    description: "Specialized program focusing on training coaches who work with youth boxers, emphasizing safety, discipline, foundational skills, and character development.",
    duration: "1 Month",
    level: "Youth Coaches",
    price: "60,000 RWF",
    seats: 20,
    upcomingDate: "May 10, 2025",
    status: "upcoming",
    features: [
      "Child Psychology Basics",
      "Age-appropriate Training",
      "Safety Protocols",
      "Talent Identification",
      "Parent Communication",
      "Youth Competition Prep"
    ],
    image: "https://images.unsplash.com/photo-1596704013025-1c0b1a9c6a2c?w=500&h=300&fit=crop",
    instructor: "Coach Marie Claire Uwase",
    rating: 4.8,
    reviews: 92
  },
  {
    id: 5,
    title: "Elite Performance Coaching",
    description: "Master-level program for coaches working with national and international level athletes. Focus on high-performance training and competition strategy.",
    duration: "4 Months",
    level: "Master",
    price: "200,000 RWF",
    seats: 12,
    upcomingDate: "June 1, 2025",
    status: "premium",
    features: [
      "High-Performance Planning",
      "International Competition Prep",
      "Advanced Analytics",
      "Elite Athlete Management",
      "Sports Medicine Integration",
      "World Championship Strategies"
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
    instructor: "National Head Coach",
    rating: 5.0,
    reviews: 45
  },
  {
    id: 6,
    title: "Women in Boxing Coaching",
    description: "Specialized program to increase female representation in coaching. Focus on women's boxing development and creating inclusive training environments.",
    duration: "6 Weeks",
    level: "All Levels",
    price: "55,000 RWF",
    seats: 18,
    upcomingDate: "March 30, 2025",
    status: "enrolling",
    features: [
      "Women's Boxing Specifics",
      "Inclusive Coaching Methods",
      "Gender in Sports Science",
      "Role Model Development",
      "Community Building",
      "Leadership Skills"
    ],
    image: "https://images.unsplash.com/photo-1549060279-7e168fce7090?w=500&h=300&fit=crop",
    instructor: "Coach Sarah Uwase",
    rating: 4.9,
    reviews: 67
  }
];

const programStatus = {
  enrolling: { color: "from-green-500 to-emerald-600", text: "Enrolling Now" },
  limited: { color: "from-yellow-500 to-amber-600", text: "Limited Seats" },
  upcoming: { color: "from-blue-500 to-sky-600", text: "Coming Soon" },
  premium: { color: "from-purple-500 to-pink-600", text: "Premium Program" }
};

const ProgramCard = ({ program }) => {
  const [isHovered, setIsHovered] = useState(false);
  const status = programStatus[program.status];

  return (
    <motion.div
      className="relative group cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Background Glow */}
      <div className={`absolute -inset-4 rounded-3xl bg-gradient-to-r ${status.color} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}></div>
      
      <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl border border-gray-800 overflow-hidden transition-all duration-500 group-hover:border-sky-500/50 group-hover:shadow-2xl group-hover:shadow-sky-500/20">
        {/* Program Image */}
        <div className="relative h-40 overflow-hidden">
          <motion.img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover transition-transform duration-700"
            animate={{ scale: isHovered ? 1.1 : 1 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          
          {/* Status Badge */}
          <div className={`absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${status.color} text-white text-xs font-bold backdrop-blur-sm`}>
            <Star className="w-3 h-3" />
            <span>{status.text}</span>
          </div>

          {/* Rating */}
          <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/80 backdrop-blur-sm px-2 py-1 rounded-full">
            <Star className="w-3 h-3 text-yellow-400 fill-current" />
            <span className="text-white text-sm font-semibold">{program.rating}</span>
            <span className="text-gray-300 text-xs">({program.reviews})</span>
          </div>
        </div>

        {/* Program Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors flex-1 pr-4">
              {program.title}
            </h3>
            <motion.button
              className="p-2 text-gray-400 hover:text-sky-400 hover:bg-sky-500/10 rounded-lg transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <BookOpen className="w-4 h-4" />
            </motion.button>
          </div>

          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
            {program.description}
          </p>

          {/* Program Details Grid */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Clock className="w-4 h-4 text-sky-400" />
              <span>{program.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Users className="w-4 h-4 text-green-400" />
              <span>{program.seats} Seats</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Calendar className="w-4 h-4 text-purple-400" />
              <span>{program.upcomingDate}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Target className="w-4 h-4 text-yellow-400" />
              <span>{program.level}</span>
            </div>
          </div>

          {/* Instructor & Price */}
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm">
              <span className="text-gray-400">Instructor: </span>
              <span className="text-white font-semibold">{program.instructor}</span>
            </div>
            <div className="text-lg font-bold text-green-400">
              {program.price}
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-2 mb-4">
            {program.features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-gray-400">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>{feature}</span>
              </div>
            ))}
            {program.features.length > 3 && (
              <div className="text-xs text-sky-400 font-semibold">
                +{program.features.length - 3} more features
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <motion.button
              className="flex-1 px-4 py-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-lg text-sm font-semibold hover:from-sky-600 hover:to-blue-700 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Apply Now
            </motion.button>
            <motion.button
              className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg text-sm font-semibold hover:bg-gray-700 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CoachEducation = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const levels = ["All", "Beginner to Intermediate", "Advanced", "Youth Coaches", "Master", "All Levels"];
  const statuses = ["All", "Enrolling Now", "Limited Seats", "Coming Soon", "Premium Program"];

  const filteredPrograms = useMemo(() => {
    return trainingPrograms.filter(program => {
      const matchesSearch = program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          program.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          program.instructor.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesLevel = selectedLevel === "All" || program.level === selectedLevel;
      const matchesStatus = selectedStatus === "All" || 
                          programStatus[program.status].text === selectedStatus;
      
      return matchesSearch && matchesLevel && matchesStatus;
    });
  }, [searchTerm, selectedLevel, selectedStatus]);

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
            <GraduationCap className="w-5 h-5 text-sky-400" />
            <span className="text-sky-300 font-semibold">COACH DEVELOPMENT</span>
          </motion.div>
          
          <h1 className="text-5xl sm:text-7xl font-black bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent mb-6">
            Coach Education
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transform your coaching career with Rwanda Boxing Federation's certified programs. 
            Develop elite coaching skills and shape the next generation of champions.
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
              { number: "500+", label: "Coaches Certified", icon: <Award className="w-8 h-8" /> },
              { number: "98%", label: "Success Rate", icon: <TrendingUp className="w-8 h-8" /> },
              { number: "15", label: "Expert Instructors", icon: <Users className="w-8 h-8" /> },
              { number: "5", label: "International Partners", icon: <Shield className="w-8 h-8" /> }
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
        {/* Search and Filters */}
        <motion.div 
          className="flex flex-col lg:flex-row gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="relative flex-1">
            <Target className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search programs, instructors, or topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 backdrop-blur-sm transition-all"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="px-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 appearance-none"
            >
              {levels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>

            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 appearance-none"
            >
              {statuses.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Programs Count */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-gray-400">
            Showing <span className="text-white font-semibold">{filteredPrograms.length}</span> programs
            {selectedLevel !== "All" && ` for ${selectedLevel}`}
          </p>
        </motion.div>

        {/* Programs Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <AnimatePresence mode="wait">
            {filteredPrograms.length > 0 ? (
              filteredPrograms.map((program) => (
                <ProgramCard key={program.id} program={program} />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20 col-span-3"
              >
                <div className="text-6xl mb-4">🎓</div>
                <h3 className="text-2xl font-bold text-white mb-2">No Programs Found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.section 
          className="mt-20 relative rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-sky-600 via-blue-600 to-purple-600"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
          
          <div className="relative z-10 text-center py-16 px-6">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30 mb-6"
            >
              <Crown className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">BECOME CERTIFIED</span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Ready to Elevate Your Coaching Career?
            </h2>
            <p className="text-gray-100 text-lg mb-8 max-w-2xl mx-auto">
              Join Rwanda's most comprehensive coach education program. Get internationally recognized certification and transform athletes' careers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-white text-sky-600 font-bold rounded-xl hover:bg-gray-100 transition-all shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply for Certification
                <ChevronRight className="w-5 h-5 ml-2" />
              </motion.button>
              <motion.button
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Brochure
              </motion.button>
            </div>
          </div>
        </motion.section>

        {/* Contact Info */}
        <motion.section 
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {[
            {
              icon: <Mail className="w-8 h-8" />,
              title: "Email Us",
              info: "coaching@rwandaboxing.rw",
              description: "Send us your questions about certification"
            },
            {
              icon: <Phone className="w-8 h-8" />,
              title: "Call Us",
              info: "+250 788 123 456",
              description: "Available Monday-Friday, 8AM-5PM"
            },
            {
              icon: <MapPin className="w-8 h-8" />,
              title: "Visit Office",
              info: "Kigali Arena, Rwanda",
              description: "Schedule a consultation meeting"
            }
          ].map((contact, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-black/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-sky-500/50 transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="text-sky-400 mb-4 flex justify-center">
                {contact.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{contact.title}</h3>
              <p className="text-lg text-gray-300 mb-2">{contact.info}</p>
              <p className="text-gray-400 text-sm">{contact.description}</p>
            </motion.div>
          ))}
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default CoachEducation;