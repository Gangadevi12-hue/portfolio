// Menu toggle functionality
const menuToggle = document.querySelector('.menu-toggle');
const menuOverlay = document.querySelector('.menu-overlay');
const menuLinks = document.querySelectorAll('.menu-content a');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    document.body.style.overflow = menuOverlay.classList.contains('active') ? 'hidden' : 'auto';
});

// Close menu when clicking menu links
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Animate elements on scroll with enhanced timing
const observerOptions = {
    threshold: 0.2,
    rootMargin: '50px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            
            // Add stagger effect to child elements
            const children = entry.target.querySelectorAll('.skill-tag, .project-card, .experience-card, .highlight-card');
            children.forEach((child, index) => {
                setTimeout(() => {
                    child.style.opacity = '1';
                    child.style.transform = 'translateY(0)';
                }, index * 150);
            });
        }
    });
}, observerOptions);

// Observe all sections and initialize stagger animations
document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-out');
    observer.observe(section);
    
    // Initialize stagger effect elements
    const staggerElements = section.querySelectorAll('.skill-tag, .project-card, .experience-card, .highlight-card');
    staggerElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.8s ease';
    });
});

// Parallax effect for blob shape with smoother movement
window.addEventListener('mousemove', (e) => {
    const blob = document.querySelector('.blob-shape');
    const { clientX, clientY } = e;
    const moveX = (clientX - window.innerWidth / 2) * 0.005;
    const moveY = (clientY - window.innerHeight / 2) * 0.005;
    
    blob.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Add glitch effect on hover for main title
const glitchText = document.querySelector('.glitch');
if (glitchText) {
    glitchText.addEventListener('mouseover', () => {
        glitchText.style.animation = 'none';
        setTimeout(() => {
            glitchText.style.animation = 'glitch 3s infinite';
        }, 10);
    });
}

// Floating animation for detail cards
const detailCards = document.querySelectorAll('.detail-card');
detailCards.forEach((card, index) => {
    card.style.animation = `float 6s ease-in-out ${index * -3}s infinite`;
});

// Add hover effect to project cards with scale
document.querySelectorAll('.project-card, .highlight-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add CSS for enhanced animations
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
    }
    
    .fade-out {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }
    
    .fade-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .project-card, .highlight-card, .experience-card {
        transition: transform 0.5s ease, box-shadow 0.5s ease;
    }
    
    .project-card:hover, .highlight-card:hover, .experience-card:hover {
        box-shadow: 0 10px 30px rgba(138, 43, 226, 0.2);
    }
`;
document.head.appendChild(style);

// Add scroll-based navbar transparency
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        return;
    }
    
    if (currentScroll > lastScroll) {
        // Scrolling down
        navbar.style.background = 'rgba(255, 255, 255, 0.8)';
    } else {
        // Scrolling up
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
    lastScroll = currentScroll;
});

// Counter Animation
function animateCounter(element) {
    if (element.hasAnimated) return;
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 800;
    const startTime = performance.now();
    element.hasAnimated = true;

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(easeOutQuart * target);

        element.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = target + '+';
        }
    }

    requestAnimationFrame(update);
}

// Intersection Observer for counter animation
const observeCounters = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.number');
                counters.forEach(counter => animateCounter(counter));
            }
        });
    }, { threshold: 0.5 });

    const floatingDetails = document.querySelector('.floating-details');
    if (floatingDetails) {
        observer.observe(floatingDetails);
    }
};

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    observeCounters();
    
    // Animate tech cards with delay
    document.querySelectorAll('.tech-card').forEach((card, index) => {
        card.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.1 + 0.3}s`;
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
    });
});

// Add animation for tool cards
document.querySelectorAll('.tool-card').forEach((card, index) => {
    card.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.1}s`;
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
});

// Add CSS animation for tool cards
const toolAnimation = document.createElement('style');
toolAnimation.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(toolAnimation); 