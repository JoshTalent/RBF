import React from 'react'
import { stats } from '../constants'
import styles from '../style'
import { TrendingUp, Users, Award, Target } from 'lucide-react'

const Stats = () => {
  const getIcon = (title) => {
    const titleLower = title.toLowerCase();
    if (titleLower.includes('coach') || titleLower.includes('member')) return Users;
    if (titleLower.includes('medal') || titleLower.includes('award')) return Award;
    if (titleLower.includes('growth') || titleLower.includes('rate')) return TrendingUp;
    return Target;
  };

  const formatValue = (value) => {
    if (value.includes('+')) return value;
    if (value.includes('%')) return value;
    return value;
  };

  return (
    <section className="relative py-20 px-6 sm:px-12 lg:px-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-sky-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-900/10 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
              Federation Metrics
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Excellence in <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">Numbers</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Quantifying our impact and tracking progress in Rwanda's boxing ecosystem
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = getIcon(stat.title);
            return (
              <div
                key={stat.id}
                className="group relative"
              >
                {/* Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/40 to-gray-900/60 rounded-3xl border border-gray-700/50 group-hover:border-sky-500/30 transition-all duration-500 backdrop-blur-sm"></div>
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-sky-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative p-8 h-full flex flex-col justify-between min-h-[220px]">
                  {/* Top Section - Icon and Title */}
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-gradient-to-br from-gray-700/50 to-gray-800/50 group-hover:from-sky-500/10 group-hover:to-blue-500/10 transition-all duration-500 mb-4">
                      <IconComponent className="w-6 h-6 text-sky-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <p className="text-gray-400 font-medium text-sm uppercase tracking-wider">
                      {stat.title}
                    </p>
                  </div>

                  {/* Bottom Section - Value */}
                  <div className="space-y-2">
                    <h3 className="text-4xl lg:text-5xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-blue-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                      {formatValue(stat.value)}
                    </h3>
                    
                    {/* Progress Indicator */}
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-sky-400 to-blue-500 rounded-full transition-all duration-1000 delay-300"
                          style={{ 
                            width: `${Math.min(100, 70 + (index * 10))}%` 
                          }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-500 font-medium">
                        +{Math.min(100, 12 + (index * 3))}% YoY
                      </span>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-sky-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-sky-500/10 to-blue-500/10 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 pt-8 border-t border-gray-800/50">
          <p className="text-gray-400 text-lg">
            Join <span className="text-white font-semibold">{stats.find(s => s.title.toLowerCase().includes('member'))?.value || '250+'}</span> professionals shaping the future of Rwandan boxing
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <button className="px-8 py-3 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 rounded-2xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/25">
              Join Federation
            </button>
            <button className="px-8 py-3 border border-gray-700 hover:border-sky-500/50 rounded-2xl font-semibold text-gray-300 hover:text-white transition-all duration-300 backdrop-blur-sm">
              View Report
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats