// Project 1 functions
function showProject1(event) {
    event.preventDefault();
    const projectContent = document.getElementById('project1-content');
    projectContent.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    gsap.fromTo(projectContent, 
        {
            x: '100%',
            opacity: 0
        },
        {
            x: '0%',
            opacity: 1,
            duration: 0.8,
            ease: 'power2.inOut'
        }
    );
}

function hideProject1(event) {
    event.preventDefault();
    const projectContent = document.getElementById('project1-content');
    
    gsap.to(projectContent, {
        x: '100%',
        opacity: 0,
        duration: 0.8,
        ease: 'power2.inOut',
        onComplete: () => {
            projectContent.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Project 2 functions
function showProject2(event) {
    event.preventDefault();
    const projectContent = document.getElementById('project2-content');
    projectContent.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    gsap.fromTo(projectContent, 
        {
            x: '100%',
            opacity: 0
        },
        {
            x: '0%',
            opacity: 1,
            duration: 0.8,
            ease: 'power2.inOut'
        }
    );
}

function hideProject2(event) {
    event.preventDefault();
    const projectContent = document.getElementById('project2-content');
    
    gsap.to(projectContent, {
        x: '100%',
        opacity: 0,
        duration: 0.8,
        ease: 'power2.inOut',
        onComplete: () => {
            projectContent.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Project 3 functions
function showProject3(event) {
    event.preventDefault();
    const projectContent = document.getElementById('project3-content');
    projectContent.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    gsap.fromTo(projectContent, 
        {
            x: '100%',
            opacity: 0
        },
        {
            x: '0%',
            opacity: 1,
            duration: 0.8,
            ease: 'power2.inOut'
        }
    );
}

function hideProject3(event) {
    event.preventDefault();
    const projectContent = document.getElementById('project3-content');
    
    gsap.to(projectContent, {
        x: '100%',
        opacity: 0,
        duration: 0.8,
        ease: 'power2.inOut',
        onComplete: () => {
            projectContent.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Add click event listeners to menubars when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add click event listeners to menubars
    const project1Menubar = document.querySelector('#project1-content .menubar');
    const project2Menubar = document.querySelector('#project2-content .menubar');
    const project3Menubar = document.querySelector('#project3-content .menubar');

    if (project1Menubar) {
        project1Menubar.addEventListener('click', function(event) {
            event.preventDefault();
            const projectContent = document.getElementById('project1-content');
            projectContent.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    if (project2Menubar) {
        project2Menubar.addEventListener('click', function(event) {
            event.preventDefault();
            const projectContent = document.getElementById('project2-content');
            projectContent.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    if (project3Menubar) {
        project3Menubar.addEventListener('click', function(event) {
            event.preventDefault();
            const projectContent = document.getElementById('project3-content');
            projectContent.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
}); 