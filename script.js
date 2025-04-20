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
    
    // Load other projects from JSON
    loadOtherProjects();
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

    .error-message {
        color: #ff6b6b;
        text-align: center;
        padding: 2rem;
        font-size: 1.2rem;
        background: rgba(255, 107, 107, 0.1);
        border-radius: 10px;
        margin: 2rem 0;
    }
`;
document.head.appendChild(toolAnimation); 

// Function to load projects from JSON file
function loadOtherProjects() {
    console.log('Loading other projects...');
    
    // Manually add the projects from the JSON data
    const projectsData = [
        {
            "title": "Elite Hearts – Healthcare Experience",
            "description": "Elite Hearts is a web-based platform designed to simplify healthcare access for patients. From instant doctor consultations to quick appointment bookings, the platform eliminates typical hospital wait-time frustration through clean UI and thoughtful flows.",
            "image": "assets/Elitefinal.png",
            "alt": "Elite Hearts Healthcare App",
            "highlights": [
                "Direct Doctor Consultations",
                "One-Click Appointments",
                "User-First Design"
            ],
            "caseStudyLink": "https://medium.com/@Gangadevi12/elite-hearts-a-seamless-healthcare-experience-79f215fb23a8",
            "icons": ["fas fa-user-md", "fas fa-calendar-check", "fas fa-heartbeat"]
        },
        {
            "title": "UX Strategy Breakdown – Zepto",
            "description": "This case study explores how Zepto crafts an ultra-fast, intuitive grocery delivery experience. I deep-dived into the product's UX strategies — from their location-first approach to the seamless cart flow — analyzing how micro-decisions create a sense of urgency, trust, and convenience for the user.",
            "image": "assets/zepto.png",
            "alt": "Zepto UX Case Study",
            "highlights": [
                "Location-First Approach",
                "Speed-Driven UX",
                "Trust Through Microcopy"
            ],
            "caseStudyLink": "https://medium.com/@Gangadevi12/heres-my-observation-on-zepto-s-ux-strategyical-decisions-1cd23fe04bb3",
            "icons": ["fas fa-map-marker-alt", "fas fa-bolt", "fas fa-check-circle"]
        },
        {
            "title": "Sudha Boat Tour – Travel Booking Platform",
            "description": "Sudha Boat Tour is an intuitive travel booking platform designed to simplify boat trip planning around scenic locations like Papikondalu and Bhadrachalam. With a streamlined booking form, real-time trip pricing, and night-stay packages, it ensures a smooth and informative user experience — even for first-time travelers.",
            "image": "assets/Boat travelsfinal.png",
            "alt": "Sudha Boat Tour App",
            "highlights": [
                "Easy Booking Form",
                "Transparent Pricing",
                "Destination Packages"
            ],
            "caseStudyLink": "https://www.figma.com",
            "icons": ["fas fa-ship", "fas fa-tags", "fas fa-map-marked-alt"]
        },
        {
            "title": "MechanoHub – One Stop for Mechanical Engineers",
            "description": "MechanoHub is a community-based mobile application tailored for mechanical engineering students. Designed to bring everything under one roof — from academic resources to career opportunities — it bridges the gap between classroom learning and real-world growth.",
            "image": "assets/Mechanofinal.png",
            "alt": "MechanoHub App",
            "highlights": [
                "Department-Centric Platform",
                "Centralized Learning",
                "Community Driven"
            ],
            "caseStudyLink": "https://medium.com/@Gangadevi12/mechanohub-5d15dac6f0b2",
            "icons": ["fas fa-tools", "fas fa-book", "fas fa-users"]
        },
        {
            "title": "Tour Booking Web UI – My First Design Exploration",
            "description": "This single-page design was one of my earliest steps into UI/UX. Built to simplify tour bookings, it features clean form structures, structured pricing sections, and engaging visuals — all inspired by real-world use cases. It marked the beginning of my journey toward meaningful and user-friendly design.",
            "image": "assets/bike dark 2.jpg",
            "alt": "Tour Booking Web UI",
            "highlights": [
                "Early Learning",
                "Real-World Inspiration",
                "Growth Journey"
            ],
            "caseStudyLink": "https://medium.com/@Gangadevi12/its-a-short-story-because-i-haven-t-completed-the-whole-design-for-this-web-application-677b5e6baa2b",
            "icons": ["fas fa-lightbulb", "fas fa-compass", "fas fa-heart"]
        }
    ];

    const projectsContainer = document.getElementById('other-projects-container');
    const projectTemplate = document.getElementById('project-template');
    const highlightTemplate = document.getElementById('highlight-template');
    
    if (!projectsContainer || !projectTemplate || !highlightTemplate) {
        console.error('Required templates or container not found');
        return;
    }
    
    // Clear any existing content
    projectsContainer.innerHTML = '';
    
    // Create project cards for each project
    projectsData.forEach((project, index) => {
        // Clone the project template
        const projectCard = document.importNode(projectTemplate.content, true).querySelector('.project-card');
        
        // Set project image
        const img = projectCard.querySelector('.project-image img');
        img.src = project.image;
        img.alt = project.alt;
        
        // Set project title and description
        projectCard.querySelector('.project-title').textContent = project.title;
        projectCard.querySelector('.project-description').textContent = project.description;
        
        // Add highlights
        const highlightsContainer = projectCard.querySelector('.project-highlights');
        project.highlights.forEach((highlight, idx) => {
            const highlightItem = document.importNode(highlightTemplate.content, true).querySelector('.highlight-item');
            
            // Set icon and text
            const icon = highlightItem.querySelector('i');
            icon.className = project.icons[idx] || 'fas fa-check';
            
            highlightItem.querySelector('span').textContent = highlight;
            highlightsContainer.appendChild(highlightItem);
        });
        
        // Set link
        const link = projectCard.querySelector('.view-project');
        link.href = project.caseStudyLink;
        
        // Determine link text based on URL
        const linkText = project.caseStudyLink.includes('figma.com') ? 'View Design File' : 'Read Full Case Study';
        link.querySelector('.link-text').textContent = linkText;
        
        // Add to container with staggered animation
        projectsContainer.appendChild(projectCard);
        
        // Add animation with delay
        setTimeout(() => {
            projectCard.style.opacity = '1';
            projectCard.style.transform = 'translateY(0)';
        }, 100 * (index + 1));
    });
    
    console.log('All project cards created successfully');
}

// Ensure the projects are loaded when the script runs
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadOtherProjects);
} else {
    loadOtherProjects();
}