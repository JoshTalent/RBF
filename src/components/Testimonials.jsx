import React, { useState, useRef, useEffect } from 'react';
import { feedback } from '../constants';
import styles from '../style';
import Feedback from './Feedback';

const Testimonials = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleCards, setVisibleCards] = useState(3);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef(null);
  const autoPlayRef = useRef(null);

  // Debug: Check feedback data structure
  console.log('Feedback data:', feedback);
  
  // Safely extract categories with error handling
  const getCategories = () => {
    try {
      const allCategories = feedback
        .map(item => item?.category) // Safe access with optional chaining
        .filter(category => category != null && category !== ''); // Remove null/undefined/empty
      
      const uniqueCategories = [...new Set(allCategories)];
      return ['all', ...uniqueCategories];
    } catch (error) {
      console.error('Error extracting categories:', error);
      return ['all'];
    }
  };

  const categories = getCategories();

  // Filter feedback based on active filter with safe access
  const filteredFeedback = activeFilter === 'all' 
    ? feedback 
    : feedback.filter(item => item?.category === activeFilter);

  // Handle load more
  const handleLoadMore = () => {
    setVisibleCards(prev => Math.min(prev + 3, filteredFeedback.length));
  };

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying || !carouselRef.current) return;

    autoPlayRef.current = setInterval(() => {
      setVisibleCards(prev => {
        const next = prev + 1;
        return next > filteredFeedback.length ? 3 : next;
      });
    }, 4000);

    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlaying, filteredFeedback.length]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  // Reset visible cards when filter changes
  useEffect(() => {
    setVisibleCards(3);
  }, [activeFilter]);

  const displayedFeedback = filteredFeedback.slice(0, visibleCards);
  const hasMore = visibleCards < filteredFeedback.length;

  // Safe category name formatting
  const formatCategoryName = (category) => {
    if (!category || typeof category !== 'string') return 'Unknown';
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <section 
      id='clients' 
      className={`${styles.paddingY} ${styles.flexce} flex-col relative`}
    >
      {/* Enhanced Background Elements */}
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40'/>
      <div className='absolute z-[0] w-[40%] h-[40%] -left-[20%] rounded-full pink__gradient top-20 opacity-70'/>
      
      {/* Header Section */}
      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <div className='flex-1 flex flex-col'>
          <h2 className={styles.heading2}>What People Say About Us</h2>
          <p className={`${styles.paragraph} max-w-[450px] mt-5`}>
            Discover why thousands of clients trust our services and achieve their goals with our team.
          </p>
        </div>

        {/* Filter Controls - Fixed with safe category access */}
        <div className='flex flex-wrap gap-2 mt-4 md:mt-0'>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {formatCategoryName(category)}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Bar */}
      <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 relative z-[1]'>
        <div className='text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg'>
          <div className='text-2xl font-bold text-white'>{feedback.length}+</div>
          <div className='text-gray-300 text-sm'>Testimonials</div>
        </div>
        <div className='text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg'>
          <div className='text-2xl font-bold text-white'>4.9/5</div>
          <div className='text-gray-300 text-sm'>Average Rating</div>
        </div>
        <div className='text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg'>
          <div className='text-2xl font-bold text-white'>98%</div>
          <div className='text-gray-300 text-sm'>Satisfaction Rate</div>
        </div>
        <div className='text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg'>
          <div className='text-2xl font-bold text-white'>2K+</div>
          <div className='text-gray-300 text-sm'>Happy Clients</div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div 
        ref={carouselRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className='flex flex-wrap justify-center w-full feedback-container relative z-[1] gap-6'
      >
        {displayedFeedback.map((card, index) => (
          <div 
            key={card.id} 
            className={`transform transition-all duration-500 ease-out ${
              index % 2 === 0 ? 'hover:-translate-y-2' : 'hover:translate-y-2'
            } hover:scale-105`}
            style={{
              animationDelay: `${index * 100}ms`
            }}
          >
            <Feedback {...card} />
          </div>
        ))}
        
        {/* Fallback if no testimonials */}
        {displayedFeedback.length === 0 && (
          <div className='text-center py-12 col-span-full'>
            <p className='text-gray-500 text-lg'>No testimonials found for this category.</p>
          </div>
        )}
      </div>

      {/* Load More & Controls */}
      <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mt-12 relative z-[1]'>
        {hasMore && filteredFeedback.length > 0 && (
          <button
            onClick={handleLoadMore}
            className='px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300'
          >
            Load More Testimonials ({filteredFeedback.length - visibleCards} remaining)
          </button>
        )}
        
        {/* Auto-play Toggle */}
        {filteredFeedback.length > 3 && (
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              isAutoPlaying 
                ? 'bg-green-500 text-white hover:bg-green-600' 
                : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
            }`}
          >
            {isAutoPlaying ? '❚❚ Pause' : '▶ Play'} Auto
          </button>
        )}

        {/* View All Link */}
        {!hasMore && filteredFeedback.length > 3 && (
          <button
            onClick={() => setVisibleCards(3)}
            className='px-6 py-3 text-blue-400 font-semibold hover:text-blue-300 transition-colors duration-300'
          >
            Show Less
          </button>
        )}
      </div>

      {/* Progress Indicator */}
      {filteredFeedback.length > 0 && (
        <div className='w-full max-w-2xl mx-auto mt-8 relative z-[1]'>
          <div className='flex justify-between items-center text-sm text-gray-400 mb-2'>
            <span>Showing {Math.min(visibleCards, filteredFeedback.length)} of {filteredFeedback.length} testimonials</span>
            <span>{formatCategoryName(activeFilter)} category</span>
          </div>
          <div className='w-full bg-gray-700 rounded-full h-2'>
            <div 
              className='bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500'
              style={{ 
                width: `${(Math.min(visibleCards, filteredFeedback.length) / filteredFeedback.length) * 100}%` 
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;