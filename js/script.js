// Scroll Behavior & Mobile Menu Toggle

// 1. Legacy Global Scroll Behavior (kept safe in case other elements use topHeader)
let lastScrollTop = 0;
const topHeader = document.getElementById('topHeader');
const navbar = document.getElementById('navbar');

if (topHeader && navbar) {
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop) {
            // Scrolling down -> Hide header
            topHeader.style.transform = 'translateY(-100%)';
            navbar.style.top = '0px';
        } else {
            // Scrolling up -> Show header
            topHeader.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
}

// 2. Legacy Global Mobile Menu (kept safe with checks so it won't crash if missing)
const mobileMenu = document.getElementById('mobile-menu');
const legacyNavLinks = document.getElementById('navLinks');

if (mobileMenu && legacyNavLinks) {
    mobileMenu.addEventListener('click', function() {
        legacyNavLinks.classList.toggle('active');
    });
}

// 3. Main DOMContentLoaded Block (Handles your actual HTML elements: hamburger-btn & nav-menu)
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');
    const mainNavbar = document.getElementById('navbar');

    // Mobile Menu Toggle
    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking a link on mobile
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // Sticky & Hiding Header on Scroll (Main handler)
    let currentLastScrollTop = 0;
    if (mainNavbar) {
        window.addEventListener('scroll', () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > currentLastScrollTop && scrollTop > 100) {
                // Scroll Down -> Hide Navbar
                mainNavbar.classList.add('header-hidden');
            } else {
                // Scroll Up -> Show Navbar
                mainNavbar.classList.remove('header-hidden');
            }
            currentLastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        });
    }
});