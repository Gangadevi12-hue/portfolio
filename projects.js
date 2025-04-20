// Standalone script to load projects
document.addEventListener('DOMContentLoaded', function() {
    console.log('Projects script loaded');
    
    // Get the container
    const container = document.getElementById('other-projects-container');
    
    if (!container) {
        console.error('Project container not found!');
        return;
    }
    
    // Show loading message
    container.innerHTML = '<div style="text-align: center; padding: 2rem;">Loading projects...</div>';
    
    // Fetch projects from JSON file
    fetch('data/otherprojects.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Projects data loaded:', data);
            
            // Clear loading message
            container.innerHTML = '';
            
            // Check if data has projects
            if (!data.projects || data.projects.length === 0) {
                container.innerHTML = '<div style="text-align: center; padding: 2rem;">No projects found</div>';
                return;
            }
            
            // Define icon mappings for each project type
            const iconMappings = {
                'Elite Hearts': ['fas fa-user-md', 'fas fa-calendar-check', 'fas fa-heartbeat'],
                'Zepto': ['fas fa-map-marker-alt', 'fas fa-bolt', 'fas fa-check-circle'],
                'Boat Tour': ['fas fa-ship', 'fas fa-tags', 'fas fa-map-marked-alt'],
                'MechanoHub': ['fas fa-tools', 'fas fa-book', 'fas fa-users'],
                'Tour Booking': ['fas fa-lightbulb', 'fas fa-compass', 'fas fa-heart']
            };
            
            // Process and display projects
            data.projects.forEach((project, index) => {
                // Determine which icons to use based on project title
                let icons = ['fas fa-check', 'fas fa-star', 'fas fa-thumbs-up']; // Default icons
                
                // Check project title against our mappings
                for (const [key, iconSet] of Object.entries(iconMappings)) {
                    if (project.title.includes(key)) {
                        icons = iconSet;
                        break;
                    }
                }
                
                // Create project card
                const card = document.createElement('div');
                card.className = 'project-card';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
                
                // Create HTML structure
                let html = `
                    <div class="project-image">
                        <img src="${project.image}" alt="${project.alt}" />
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-description">${project.description}</p>
                        <div class="project-highlights">`;
                
                // Add highlights
                project.highlights.forEach((highlight, idx) => {
                    const iconClass = icons[idx] || 'fas fa-check';
                    html += `
                        <div class="highlight-item">
                            <i class="${iconClass}"></i>
                            <span>${highlight}</span>
                        </div>`;
                });
                
                // Add link
                const linkText = project.caseStudyLink.includes('figma.com') ? 'View Design File' : 'Read Full Case Study';
                html += `
                        </div>
                        <a href="${project.caseStudyLink}" class="view-project" target="_blank" rel="noopener noreferrer">
                            ${linkText}
                            <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                `;
                
                card.innerHTML = html;
                container.appendChild(card);
                
                // Add stagger animation with delay
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100 * (index + 1));
            });
            
            console.log('Projects added successfully!');
        })
        .catch(error => {
            console.error('Error loading projects:', error);
            container.innerHTML = `<div style="text-align: center; padding: 2rem; color: #ff6b6b;">Error loading projects: ${error.message}</div>`;
        });
});
