/**
 * TechVision Portfolio - Main JavaScript
 * Modern 2025 Design with animations and interactivity
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initParticles();
    initNavigation();
    initScrollEffects();
    initProjectFilter();
    initTestimonialsSlider();
    initContactForm();
    initAOS();
});

/**
 * Initialize Particles.js background
 */
function initParticles() {
    if (typeof particlesJS === 'undefined') return;
    
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#6366f1'
            },
            shape: {
                type: 'circle'
            },
            opacity: {
                value: 0.3,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#6366f1',
                opacity: 0.1,
                width: 1
            },
            move: {
                enable: true,
                speed: 1,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 0.3
                    }
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });
}

/**
 * Initialize Navigation
 */
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Scroll effect for navbar
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Close menu when clicking on links
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Active link highlighting
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', function() {
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

/**
 * Initialize Scroll Effects
 */
function initScrollEffects() {
    // Parallax effect for hero shapes
    const shapes = document.querySelectorAll('.shape');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.scrollY;
        
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.1;
            shape.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
    
    // Reveal elements on scroll
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = function() {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('revealed');
            }
        });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
}

/**
 * Initialize Project Filter
 */
function initProjectFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn[data-filter]');
    const projectCards = document.querySelectorAll('.project-card[data-category]');
    
    if (filterBtns.length === 0 || projectCards.length === 0) return;
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

/**
 * Initialize Testimonials Slider
 */
function initTestimonialsSlider() {
    const track = document.querySelector('.testimonials-track');
    const prevBtn = document.querySelector('.testimonials-nav .prev');
    const nextBtn = document.querySelector('.testimonials-nav .next');
    const dotsContainer = document.querySelector('.testimonials-dots');
    
    if (!track) return;
    
    const cards = track.querySelectorAll('.testimonial-card');
    let currentIndex = 0;
    const cardWidth = cards[0]?.offsetWidth + 30 || 430; // card width + gap
    
    // Create dots
    if (dotsContainer && cards.length > 0) {
        cards.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.className = `dot ${index === 0 ? 'active' : ''}`;
            dot.setAttribute('aria-label', `Go to testimonial ${index + 1}`);
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });
    }
    
    const dots = dotsContainer?.querySelectorAll('.dot');
    
    function updateDots() {
        dots?.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    function goToSlide(index) {
        currentIndex = index;
        track.scrollTo({
            left: cardWidth * currentIndex,
            behavior: 'smooth'
        });
        updateDots();
    }
    
    function goToPrev() {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        goToSlide(currentIndex);
    }
    
    function goToNext() {
        currentIndex = (currentIndex + 1) % cards.length;
        goToSlide(currentIndex);
    }
    
    prevBtn?.addEventListener('click', goToPrev);
    nextBtn?.addEventListener('click', goToNext);
    
    // Auto-play
    let autoplayInterval = setInterval(goToNext, 5000);
    
    track.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
    track.addEventListener('mouseleave', () => {
        autoplayInterval = setInterval(goToNext, 5000);
    });
    
    // Touch/swipe support
    let startX = 0;
    let scrollStart = 0;
    
    track.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        scrollStart = track.scrollLeft;
    }, { passive: true });
    
    track.addEventListener('touchmove', (e) => {
        const diff = startX - e.touches[0].clientX;
        track.scrollLeft = scrollStart + diff;
    }, { passive: true });
    
    track.addEventListener('touchend', () => {
        const scrollPos = track.scrollLeft;
        currentIndex = Math.round(scrollPos / cardWidth);
        goToSlide(currentIndex);
    });
}

/**
 * Initialize Contact Form
 */
function initContactForm() {
    const form = document.getElementById('contact-form');
    const messageDiv = document.getElementById('form-message');
    
    if (!form) return;
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitBtn = form.querySelector('.btn-submit');
        const originalText = submitBtn.innerHTML;
        
        // Loading state
        submitBtn.classList.add('loading');
        submitBtn.innerHTML = '<span>Sending...</span>';
        submitBtn.disabled = true;
        
        // Reset message
        if (messageDiv) {
            messageDiv.className = 'form-message';
            messageDiv.textContent = '';
        }
        
        try {
            const formData = new FormData(form);
            
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            });
            
            const data = await response.json();
            
            if (data.success) {
                // Success
                if (messageDiv) {
                    messageDiv.className = 'form-message success';
                    messageDiv.textContent = data.message || 'Thank you! Your message has been sent successfully.';
                }
                form.reset();
            } else {
                // Error
                if (messageDiv) {
                    messageDiv.className = 'form-message error';
                    messageDiv.textContent = data.errors?.join(', ') || 'An error occurred. Please try again.';
                }
            }
        } catch (error) {
            console.error('Form submission error:', error);
            if (messageDiv) {
                messageDiv.className = 'form-message error';
                messageDiv.textContent = 'An error occurred. Please try again.';
            }
        } finally {
            // Reset button
            submitBtn.classList.remove('loading');
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
    
    // Real-time validation
    const inputs = form.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateInput(this);
        });
        
        input.addEventListener('input', function() {
            if (this.classList.contains('invalid')) {
                validateInput(this);
            }
        });
    });
    
    function validateInput(input) {
        const value = input.value.trim();
        let isValid = true;
        
        if (input.hasAttribute('required') && !value) {
            isValid = false;
        }
        
        if (input.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            isValid = emailRegex.test(value);
        }
        
        input.classList.toggle('invalid', !isValid);
        input.classList.toggle('valid', isValid && value);
        
        return isValid;
    }
}

/**
 * Initialize AOS (Animate On Scroll)
 */
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 50,
            disable: 'mobile'
        });
    }
}

/**
 * Typing Effect for Hero Title (Optional)
 */
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

/**
 * Counter Animation for Stats
 */
function animateCounters() {
    const counters = document.querySelectorAll('.stat-value');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current) + '+';
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + '+';
            }
        };
        
        updateCounter();
    });
}

// Initialize counter animation when hero section is visible
const heroSection = document.querySelector('.hero');
if (heroSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.disconnect();
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(heroSection);
}

/* Dot styles for testimonials */
const style = document.createElement('style');
style.textContent = `
    .testimonials-dots .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: var(--border-color);
        border: none;
        cursor: pointer;
        transition: var(--transition-base);
    }
    
    .testimonials-dots .dot.active {
        background: var(--accent-primary);
        width: 30px;
        border-radius: 5px;
    }
    
    .form-group input.invalid,
    .form-group textarea.invalid {
        border-color: #ef4444;
    }
    
    .form-group input.valid,
    .form-group textarea.valid {
        border-color: var(--accent-success);
    }
`;
document.head.appendChild(style);