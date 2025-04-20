// Auto-scroll functionality for the Other Projects section
document.addEventListener('DOMContentLoaded', function() {
    // Wait for a moment to ensure all content is loaded
    setTimeout(() => {
        initAutoScroll();
    }, 1000);
    
    function initAutoScroll() {
        console.log('Initializing auto-scroll');
        
        // Get the container element
        const projectsContainer = document.getElementById('other-projects-container');
        
        if (!projectsContainer) {
            console.error('Projects container not found');
            return;
        }
        
        // Variables for scrolling
        let isScrolling = false;
        let isPaused = false;
        let scrollPosition = 0;
        const scrollSpeed = 0.5; // Slower speed (pixels per frame)
        
        // Function to animate the scroll
        function animateScroll() {
            if (isPaused) return;
            
            // Calculate new scroll position
            scrollPosition += scrollSpeed;
            
            // Check if we've reached the end
            const maxScroll = projectsContainer.scrollWidth - projectsContainer.clientWidth;
            
            if (scrollPosition >= maxScroll) {
                // Reset to beginning with a small delay
                scrollPosition = 0;
            }
            
            // Apply the scroll
            projectsContainer.scrollLeft = scrollPosition;
            
            // Continue animation
            requestAnimationFrame(animateScroll);
        }
        
        // Start scrolling
        function startScrolling() {
            if (isScrolling) return;
            
            console.log('Starting auto-scroll');
            isScrolling = true;
            requestAnimationFrame(animateScroll);
        }
        
        // Pause scrolling
        function pauseScrolling() {
            console.log('Pausing auto-scroll');
            isPaused = true;
        }
        
        // Resume scrolling
        function resumeScrolling() {
            console.log('Resuming auto-scroll');
            isPaused = false;
        }
        
        // Event listeners
        projectsContainer.addEventListener('mouseenter', pauseScrolling);
        projectsContainer.addEventListener('mouseleave', resumeScrolling);
        
        // Handle touch events for mobile
        projectsContainer.addEventListener('touchstart', pauseScrolling);
        projectsContainer.addEventListener('touchend', () => {
            // Resume after a short delay
            setTimeout(resumeScrolling, 3000);
        });
        
        // Update scroll position when user manually scrolls
        projectsContainer.addEventListener('scroll', () => {
            if (!isPaused) return; // Only update if paused (user is scrolling)
            scrollPosition = projectsContainer.scrollLeft;
        });
        
        // Start scrolling
        startScrolling();
        
        // Log container dimensions for debugging
        console.log('Container width:', projectsContainer.clientWidth);
        console.log('Content width:', projectsContainer.scrollWidth);
        console.log('Is scrollable:', projectsContainer.scrollWidth > projectsContainer.clientWidth);
    }
});
