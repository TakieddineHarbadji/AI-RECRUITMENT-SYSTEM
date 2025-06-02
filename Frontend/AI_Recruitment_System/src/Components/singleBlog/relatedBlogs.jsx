import React, { useState, useEffect, useRef } from 'react';
import board from '../../assets/images/checkerboard.png';

const RelatedBlog = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Start with middle card active
  const [slideDirection, setSlideDirection] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Blog post data
  const blogPosts = [
    {
      id: 1,
      image: board,
      title: "1. Donec accumsan volutpat interdum. Nunc tellus enim.",
      excerpt: "Sed sed sollicitudin tortor. Nulla ut risus lectus. Integer ipsum velit, cursus sed sit amet faucibus ipsum, ut consequat sem.",
      link: "#"
    },
    {
      id: 2,
      image: board,
      title: "2. Praesent tristique sagittis malesuada. Nulla vulputate pretium",
      excerpt: "Donec nulla velit, aliquet volutpat nulla nec, consectetur eleifend nisi. Etiam lorem eros, sodales sit eu placerat id, eleifend in urna.",
      link: "#"
    },
    {
      id: 3,
      image: board,
      title: "3. Pharetra vel sapien vel, sagittis pulvinar orci. Pellentesque.",
      excerpt: "Nunc vel ligula lectus. Curabitur et volutpat augue in nisl. Nam eget purus molestie, pellentesque sapien ante, pulvinar eget magna id.",
      link: "#"
    },
    {
      id: 4,
      image:board,
      title: "4. Integer posuere nisi eu risus eleifend, vel commodo.",
      excerpt: "Curabitur faucibus sem quis nulla finibus, in dictum leo pharetra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.",
      link: "#"
    },
    {
      id: 5,
      image: board,
      title: "5. Suspendisse potenti fringilla ullamcorper dui nec.",
      excerpt: "Mauris vitae magna eu nisi faucibus consectetur. Praesent scelerisque bibendum turpis, ut commodo eros facilisis vel.",
      link: "#"
    }
  ];

  // Get visible cards
  const getVisibleCards = () => {
    // Always show 3 cards
    return [
      blogPosts[Math.max(0, activeIndex - 1)], 
      blogPosts[activeIndex], 
      blogPosts[Math.min(blogPosts.length - 1, activeIndex + 1)]
    ].filter(Boolean);
  };

  const visibleCards = getVisibleCards();

  // Handle sliding animation
  const slideLeft = () => {
    if (!isAnimating && activeIndex < blogPosts.length - 1) {
      setIsAnimating(true);
      setSlideDirection('left');
      setTimeout(() => {
        setActiveIndex(prev => prev + 1);
      }, 300);
      setTimeout(() => {
        setIsAnimating(false);
        setSlideDirection(null);
      }, 600);
    }
  };

  const slideRight = () => {
    if (!isAnimating && activeIndex > 0) {
      setIsAnimating(true);
      setSlideDirection('right');
      setTimeout(() => {
        setActiveIndex(prev => prev - 1);
      }, 300);
      setTimeout(() => {
        setIsAnimating(false);
        setSlideDirection(null);
      }, 600);
    }
  };

  // Custom hook for hover state
  const useHover = () => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
    
    return {
      isHovered,
      hoverProps: {
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave
      },
      arrowStyle: isHovered ? { transform: 'translateX(3px)', transition: 'transform 0.2s' } : { transition: 'transform 0.2s' }
    };
  };

  // Styles
  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      color: '#333',
      overflow: 'hidden', // Hide overflow for slider effect
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
    },
    title: {
      fontSize: '24px',
      fontWeight: '600',
      margin: 0,
    },
    navButtons: {
      display: 'flex',
      gap: '10px',
    },
    navButton: {
      width: '32px',
      height: '32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f0f0f0',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      color: '#333',
      fontSize: '18px',
      transition: 'background-color 0.2s, transform 0.2s',
    },
    navButtonActive: {
      transform: 'scale(0.95)',
      backgroundColor: '#e0e0e0',
    },
    navButtonDisabled: {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
    sliderContainer: {
      position: 'relative',
      overflow: 'hidden',
    },
    slider: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      transition: 'transform 0.5s ease-in-out',
      transform: slideDirection === 'left' 
        ? isAnimating ? 'translateX(-100%)' : 'translateX(0)'
        : slideDirection === 'right'
          ? isAnimating ? 'translateX(100%)' : 'translateX(0)'
          : 'translateX(0)',
    },
    cardContainer: {
      flex: '0 0 auto',
      width: 'calc(33.33% - 14px)',
      transition: 'all 0.3s ease',
    },
    cardContainerMiddle: {
      transform: 'scale(1.05)',
      zIndex: 10,
    },
    cardContainerSide: {
      transform: 'scale(0.95)',
      opacity: 0.9,
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
      transition: 'transform 0.3s, box-shadow 0.3s',
      height: '100%',
    },
    cardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
    },
    image: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      backgroundColor: '#6c757d',
    },
    content: {
      padding: '20px',
    },
    postTitle: {
      fontSize: '18px',
      fontWeight: '600',
      marginTop: 0,
      marginBottom: '10px',
      color: '#333',
    },
    excerpt: {
      fontSize: '14px',
      color: '#666',
      lineHeight: '1.5',
      marginBottom: '15px',
    },
    readMore: {
      display: 'flex',
      alignItems: 'center',
      color: '#3b82f6',
      fontSize: '14px',
      fontWeight: '500',
      textDecoration: 'none',
      marginTop: '10px',
    },
    arrow: {
      marginLeft: '5px',
      transition: 'transform 0.2s',
    },
    arrowHover: {
      transform: 'translateX(3px)',
    },
    dotsContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '20px',
      gap: '8px',
    },
    dot: {
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      backgroundColor: '#ccc',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    dotActive: {
      backgroundColor: '#3b82f6',
    },
  };

  // Apply responsive styles
  const getResponsiveStyles = () => {
    if (typeof window === 'undefined') return {};
    
    const width = window.innerWidth;
    
    if (width <= 480) {
      return {
        cardContainer: {
          ...styles.cardContainer,
          width: '100%',
        }
      };
    } else if (width <= 768) {
      return {
        cardContainer: {
          ...styles.cardContainer,
          width: 'calc(50% - 10px)',
        }
      };
    }
    
    return {};
  };

  const responsiveStyles = typeof window !== 'undefined' ? getResponsiveStyles() : {};

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Related Blog</h2>
        <div style={styles.navButtons}>
          <button 
            onClick={slideRight} 
            disabled={activeIndex === 0 || isAnimating}
            style={
              activeIndex === 0 
                ? {...styles.navButton, ...styles.navButtonDisabled} 
                : isAnimating && slideDirection === 'right'
                  ? {...styles.navButton, ...styles.navButtonActive}
                  : styles.navButton
            }
            aria-label="Previous card"
          >
            ‹
          </button>
          <button 
            onClick={slideLeft} 
            disabled={activeIndex >= blogPosts.length - 1 || isAnimating}
            style={
              activeIndex >= blogPosts.length - 1 
                ? {...styles.navButton, ...styles.navButtonDisabled} 
                : isAnimating && slideDirection === 'left'
                  ? {...styles.navButton, ...styles.navButtonActive}
                  : styles.navButton
            }
            aria-label="Next card"
          >
            ›
          </button>
        </div>
      </div>
      
      <div style={styles.sliderContainer}>
        <div style={styles.slider}>
          {visibleCards.map((post, index) => {
            const { hoverProps, arrowStyle } = useHover();
            const isMiddle = index === 1;
            
            return (
              <div 
                key={post.id} 
                style={{
                  ...styles.cardContainer,
                  ...responsiveStyles.cardContainer,
                  ...(isMiddle ? styles.cardContainerMiddle : styles.cardContainerSide)
                }}
              >
                <div 
                  {...hoverProps}
                  style={hoverProps.isHovered ? {...styles.card, ...styles.cardHover} : styles.card}
                >
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    style={styles.image} 
                  />
                  <div style={styles.content}>
                    <h3 style={styles.postTitle}>{post.title}</h3>
                    <p style={styles.excerpt}>{post.excerpt}</p>
                    <a href={post.link} style={styles.readMore}>
                      Read more
                      <span style={arrowStyle}>→</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Dots indicator */}
      <div style={styles.dotsContainer}>
        {blogPosts.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setSlideDirection(index > activeIndex ? 'left' : 'right');
                setTimeout(() => {
                  setActiveIndex(index);
                }, 300);
                setTimeout(() => {
                  setIsAnimating(false);
                  setSlideDirection(null);
                }, 600);
              }
            }}
            style={index === activeIndex ? {...styles.dot, ...styles.dotActive} : styles.dot}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedBlog;