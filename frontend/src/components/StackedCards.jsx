import React, { useEffect } from 'react';

const StackedCards = () => {
  useEffect(() => {
    let cleanup = null;
    
    const timer = setTimeout(() => {
      try {
        const cardStacks = document.querySelectorAll('.errand-story-card-stack');
        const navDots = document.querySelectorAll('.errand-story-nav-dot');
        const cardSelectors = document.querySelectorAll('.errand-card-selector');
        
        if (cardStacks.length === 0) return;
        
        let currentIndex = 0;
        let autoRotateInterval = null;
        
        const updateCardPositions = (activeIndex) => {
          cardStacks.forEach((stack, index) => {
            if (index === activeIndex) {
              stack.style.zIndex = '5';
              stack.style.transform = 'translateX(-50%) translateY(0px) scale(1)';
              stack.style.opacity = '1';
              stack.classList.add('active');
            } else {
              const offset = ((index - activeIndex + cardStacks.length) % cardStacks.length) * 20;
              const scale = 1 - (((index - activeIndex + cardStacks.length) % cardStacks.length) * 0.05);
              const opacity = 1 - (((index - activeIndex + cardStacks.length) % cardStacks.length) * 0.2);
              
              stack.style.zIndex = String(5 - ((index - activeIndex + cardStacks.length) % cardStacks.length));
              stack.style.transform = `translateX(-50%) translateY(${offset}px) scale(${scale})`;
              stack.style.opacity = String(Math.max(0.2, opacity));
              stack.classList.remove('active');
            }
          });
          
          // Update navigation dots
          navDots.forEach((dot, index) => {
            if (index === activeIndex) {
              dot.classList.add('active');
            } else {
              dot.classList.remove('active');
            }
          });
          
          // Update card selector buttons
          cardSelectors.forEach((selector, index) => {
            if (index === activeIndex) {
              selector.classList.add('active');
            } else {
              selector.classList.remove('active');
            }
          });
        };
        
        // Navigation dots click handlers
        navDots.forEach((dot, index) => {
          const handleDotClick = () => {
            console.log(`Clicked nav dot ${index}`);
            currentIndex = index;
            updateCardPositions(currentIndex);
          };
          dot.addEventListener('click', handleDotClick);
        });
        
        // Card selector buttons click handlers
        cardSelectors.forEach((selector, index) => {
          const handleSelectorClick = () => {
            console.log(`Clicked card selector ${index}`);
            currentIndex = index;
            updateCardPositions(currentIndex);
          };
          selector.addEventListener('click', handleSelectorClick);
        });
        
        // Auto-rotate
        autoRotateInterval = setInterval(() => {
          currentIndex = (currentIndex + 1) % cardStacks.length;
          updateCardPositions(currentIndex);
        }, 6000);
        
        // Initialize
        updateCardPositions(0);
        
        // Cleanup function
        cleanup = () => {
          if (autoRotateInterval) {
            clearInterval(autoRotateInterval);
          }
        };
        
      } catch (error) {
        console.error('StackedCards error:', error);
      }
    }, 100);
    
    return () => {
      clearTimeout(timer);
      if (cleanup) cleanup();
    };
  }, []);

  return null;
};

export default StackedCards;
