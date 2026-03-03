document.addEventListener('DOMContentLoaded', () => {
    
    /* =========================================
       1. MOBILE MENU TOGGLE
       ========================================= */
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const bars = document.querySelectorAll('.bar');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Hamburger animation
            menuToggle.classList.toggle('open');
            if (navLinks.classList.contains('active')) {
                bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    }

    // Close menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        });
    });

    /* =========================================
       2. GSAP ANIMATIONS
       ========================================= */
    // Helper to register ScrollTrigger if we decide to use it later
    // gsap.registerPlugin(ScrollTrigger); 

    // Hero Section Animations
    const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });

    if (document.querySelector('.hero')) {
        heroTimeline
            .to('.hero-tagline', { opacity: 1, y: 0, duration: 0.8, delay: 0.2 })
            .to('.hero-title', { opacity: 1, y: 0, duration: 1, stagger: 0.2 }, "-=0.6")
            .to('.hero-subtitle', { opacity: 1, y: 0, duration: 1 }, "-=0.8")
            .to('.hero-buttons', { opacity: 1, y: 0, duration: 0.8 }, "-=0.6");
    }

    /* =========================================
       3. NAVIGATION ACTIVE STATE
       ========================================= */
    const currentPath = window.location.pathname;
    const navItems = document.querySelectorAll('.nav-link');
    
    navItems.forEach(item => {
        if (item.getAttribute('href') === currentPath.split('/').pop() || 
           (currentPath === '/' && item.getAttribute('href') === 'index.html')) {
            item.classList.add('active');
        }
    });

    /* =========================================
       4. GLOBAL UI EFFECTS
       ========================================= */
    
    // Optional: Add a subtle glow effect to cards on mouse move
    const cards = document.querySelectorAll('.skill-card, .project-card, .repo-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
});
