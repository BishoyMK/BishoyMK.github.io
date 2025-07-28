// Function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
        rect.bottom >= 0
    );
}

// Function to handle scroll animations
function handleScrollAnimations() {
    // Get all sections
    const sections = document.querySelectorAll('#about, #services, #skills, #portfolio, #blog, #contact');
    const headings = document.querySelectorAll('.about-header, .services-heading, .skills-header, .portfolio-header, .blog-header, .contact-header');
    const elements = document.querySelectorAll('.service, .skill-html, .portfolio-text, .blogs, .contact-info, .contact-form');

    // Check each section
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('active');
        }
    });

    // Check each heading
    headings.forEach(heading => {
        if (isInViewport(heading)) {
            heading.classList.add('active');
        }
    });

    // Check each element with delay
    elements.forEach((element, index) => {
        if (isInViewport(element)) {
            setTimeout(() => {
                element.classList.add('active');
            }, index * 100); // Add 100ms delay between each element
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', handleScrollAnimations);

// Initial check for elements in viewport
document.addEventListener('DOMContentLoaded', handleScrollAnimations); 