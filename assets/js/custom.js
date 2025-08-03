// Airikai - Sacred Warrior Training Custom JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add active class to current navigation item
    const currentLocation = location.pathname;
    const menuItems = document.querySelectorAll('.navbar-nav .nav-link');
    
    menuItems.forEach(item => {
        if(item.getAttribute('href') === currentLocation){
            item.classList.add('active');
        }
    });

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    // Lazy loading images
    const images = document.querySelectorAll('img[data-src]');
    const imageOptions = {
        threshold: 0,
        rootMargin: "0px 0px 50px 0px"
    };

    const imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    }, imageOptions);

    images.forEach(img => imageObserver.observe(img));
});

// Add navbar scrolled styles
const style = document.createElement('style');
style.textContent = `
    .navbar-scrolled {
        background: rgba(13, 17, 23, 0.95) !important;
        backdrop-filter: blur(10px);
        box-shadow: 0 4px 6px rgba(0,0,0,.1);
        padding: 0.5rem 0;
        transition: all 0.3s ease;
    }
`;
document.head.appendChild(style);