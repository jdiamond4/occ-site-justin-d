// Smooth scrolling for navigation links
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

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(1, 36, 139, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#01248b';
        navbar.style.backdropFilter = 'none';
    }
});

// Video placeholder click handler
document.querySelector('.video-placeholder').addEventListener('click', function() {
    alert('Video functionality will be implemented when you add your video file.');
});

// Calendar day click handlers
document.querySelectorAll('.day').forEach(day => {
    day.addEventListener('click', function() {
        // Remove selected class from all days
        document.querySelectorAll('.day').forEach(d => d.classList.remove('selected'));
        // Add selected class to clicked day
        this.classList.add('selected');
    });
});

// Resource card hover effects
document.querySelectorAll('.resource-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 5px 20px rgba(0,0,0,0.2)';
        this.style.transition = 'all 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    });
});

// Phone mockup hover effects
document.querySelectorAll('.phone-mockup').forEach(phone => {
    phone.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) rotateY(5deg)';
        this.style.transition = 'all 0.3s ease';
    });
    
    phone.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotateY(0deg)';
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.feature-section, .about-item, .video-content');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
});

// Add some interactive calendar functionality
document.querySelectorAll('.month-nav').forEach(nav => {
    nav.addEventListener('click', function() {
        // Simple month navigation simulation
        const monthYear = document.querySelector('.month-year');
        const currentMonth = monthYear.textContent;
        // This would normally update the calendar
        console.log('Month navigation clicked:', currentMonth);
    });
});

// Add ripple effect to buttons and interactive elements
function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
        ripple.remove();
    }

    button.appendChild(circle);
}

// Add ripple effect CSS
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .video-placeholder,
    .phone-mockup,
    .resource-card {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);

// Add ripple effect to interactive elements
document.querySelectorAll('.video-placeholder, .day, .resource-card').forEach(element => {
    element.addEventListener('click', createRipple);
});

// Simple loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});