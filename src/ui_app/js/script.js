/* ========================================
   SATLUJ PUBLIC SCHOOL - MAIN SCRIPT
   Interactive Features & JavaScript
   ======================================== */

// ========== DARK MODE TOGGLE ==========
class DarkModeManager {
    constructor() {
        this.themeToggle = document.getElementById('themeToggle');
        this.htmlElement = document.documentElement;
        this.init();
    }

    init() {
        // Check localStorage for saved preference
        const savedTheme = localStorage.getItem('theme') || 'light';
        this.setTheme(savedTheme);

        // Listen to toggle button
        this.themeToggle.addEventListener('click', () => {
            const currentTheme = this.htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            this.setTheme(newTheme);
            localStorage.setItem('theme', newTheme);
        });

        // Listen to system preference changes
        if (window.matchMedia) {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                const newTheme = e.matches ? 'dark' : 'light';
                this.setTheme(newTheme);
                localStorage.setItem('theme', newTheme);
            });
        }
    }

    setTheme(theme) {
        this.htmlElement.setAttribute('data-theme', theme);
        const themeIcon = document.getElementById('themeIcon');
        if (themeIcon) {
            themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
        }
    }
}

// ========== MOBILE MENU TOGGLE ==========
class MobileMenuManager {
    constructor() {
        this.menuToggle = document.getElementById('menuToggle');
        this.navMenu = document.getElementById('navMenu');
        this.navLinks = this.navMenu?.querySelectorAll('a') || [];
        this.init();
    }

    init() {
        if (!this.menuToggle || !this.navMenu) return;

        // Toggle menu on button click
        this.menuToggle.addEventListener('click', () => {
            this.toggleMenu();
        });

        // Close menu on link click
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMenu();
            });
        });

        // Close menu on outside click
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.navbar')) return;
            if (e.target.closest('.menu-toggle')) return;
            this.closeMenu();
        });

        // Close menu on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeMenu();
            }
        });
    }

    toggleMenu() {
        const isActive = this.navMenu.classList.toggle('active');
        this.menuToggle.setAttribute('aria-expanded', isActive);

        // Update icon
        if (isActive) {
            this.menuToggle.innerHTML = '<span style="transform: rotate(45deg)">+</span>';
        } else {
            this.menuToggle.innerHTML = '<span></span><span></span><span></span>';
        }
    }

    closeMenu() {
        this.navMenu.classList.remove('active');
        this.menuToggle.setAttribute('aria-expanded', false);
        this.menuToggle.innerHTML = '<span></span><span></span><span></span>';
    }
}

// ========== STICKY NAVBAR ==========
class StickyNavbar {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.lastScrollPosition = 0;
        this.init();
    }

    init() {
        if (!this.navbar) return;

        document.addEventListener('scroll', () => this.handleScroll());
    }

    handleScroll() {
        const currentScroll = window.pageYOffset;

        // Show/hide navbar on scroll direction
        if (currentScroll > this.lastScrollPosition && currentScroll > 80) {
            // Scrolling down
            this.navbar.classList.add('hidden');
        } else {
            // Scrolling up
            this.navbar.classList.remove('hidden');
        }

        this.lastScrollPosition = currentScroll <= 0 ? 0 : currentScroll;
    }
}

// ========== NOTICE BOARD AUTO-SCROLL ==========
class NoticeBoardManager {
    constructor() {
        this.carousel = document.querySelector('.notice-carousel');
        this.items = document.querySelectorAll('.notice-item');
        this.prevBtn = document.getElementById('noticePrev');
        this.nextBtn = document.getElementById('noticeNext');
        this.indicators = document.querySelectorAll('.notice-indicators button');
        this.currentIndex = 0;
        this.autoPlayInterval = null;
        this.autoPlayDelay = 4000; // 4 seconds

        if (this.carousel) {
            this.init();
        }
    }

    init() {
        // Manual navigation
        if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.prev());
        if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.next());

        // Indicator dots
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });

        // Pause on hover
        this.carousel.addEventListener('mouseenter', () => this.pauseAutoPlay());
        this.carousel.addEventListener('mouseleave', () => this.startAutoPlay());

        // Auto-play
        this.startAutoPlay();
    }

    updateSlide() {
        // Hide all items
        this.items.forEach(item => item.classList.remove('active'));
        this.indicators.forEach(indicator => indicator.setAttribute('aria-selected', 'false'));

        // Show current item
        if (this.items[this.currentIndex]) {
            this.items[this.currentIndex].classList.add('active');
        }
        if (this.indicators[this.currentIndex]) {
            this.indicators[this.currentIndex].setAttribute('aria-selected', 'true');
        }
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.items.length;
        this.updateSlide();
        this.pauseAndRestart();
    }

    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
        this.updateSlide();
        this.pauseAndRestart();
    }

    goToSlide(index) {
        this.currentIndex = index;
        this.updateSlide();
        this.pauseAndRestart();
    }

    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => this.next(), this.autoPlayDelay);
    }

    pauseAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
        }
    }

    pauseAndRestart() {
        this.pauseAutoPlay();
        this.startAutoPlay();
    }
}

// ========== GALLERY LIGHTBOX ==========
class GalleryLightbox {
    constructor() {
        this.galleryItems = document.querySelectorAll('.gallery-item img');
        this.init();
    }

    init() {
        if (this.galleryItems.length === 0) return;

        this.galleryItems.forEach((item, index) => {
            item.addEventListener('click', () => this.openLightbox(index));
        });
    }

    openLightbox(index) {
        const images = Array.from(this.galleryItems).map(img => ({
            src: img.src,
            alt: img.alt
        }));

        // Create lightbox HTML
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox-overlay';
        lightbox.innerHTML = `
            <div class="lightbox-container">
                <button class="lightbox-close" aria-label="Close lightbox">×</button>
                <button class="lightbox-prev" aria-label="Previous image">❮</button>
                <img src="${images[index].src}" alt="${images[index].alt}" class="lightbox-image">
                <button class="lightbox-next" aria-label="Next image">❯</button>
                <div class="lightbox-info">
                    <span class="lightbox-counter"><span class="current">${index + 1}</span>/<span class="total">${images.length}</span></span>
                    <button class="lightbox-download" aria-label="Download image">⬇</button>
                </div>
            </div>
        `;

        document.body.appendChild(lightbox);
        document.body.style.overflow = 'hidden';

        let currentIndex = index;

        // Close button
        lightbox.querySelector('.lightbox-close').addEventListener('click', () => {
            lightbox.remove();
            document.body.style.overflow = '';
        });

        // Overlay click to close
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.remove();
                document.body.style.overflow = '';
            }
        });

        // Navigation
        const updateImage = () => {
            const img = lightbox.querySelector('.lightbox-image');
            img.src = images[currentIndex].src;
            img.alt = images[currentIndex].alt;
            lightbox.querySelector('.current').textContent = currentIndex + 1;
        };

        lightbox.querySelector('.lightbox-next').addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            updateImage();
        });

        lightbox.querySelector('.lightbox-prev').addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateImage();
        });

        // Download
        lightbox.querySelector('.lightbox-download').addEventListener('click', () => {
            const link = document.createElement('a');
            link.href = images[currentIndex].src;
            link.download = `satluj-school-${currentIndex + 1}.jpg`;
            link.click();
        });

        // Keyboard navigation
        const handleKeyboard = (e) => {
            if (e.key === 'ArrowRight') currentIndex = (currentIndex + 1) % images.length;
            if (e.key === 'ArrowLeft') currentIndex = (currentIndex - 1 + images.length) % images.length;
            if (e.key === 'Escape') {
                lightbox.remove();
                document.body.style.overflow = '';
                document.removeEventListener('keydown', handleKeyboard);
            }
            updateImage();
        };

        document.addEventListener('keydown', handleKeyboard);
    }
}

// ========== FORM VALIDATION ==========
class FormValidator {
    constructor(formSelector) {
        this.form = document.querySelector(formSelector);
        if (!this.form) return;
        this.init();
    }

    init() {
        const inputs = this.form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('change', () => this.validateField(input));
            input.addEventListener('blur', () => this.validateField(input));
        });

        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    validateField(field) {
        const value = field.value.trim();
        const type = field.type;
        const name = field.name;
        let isValid = true;
        let errorMsg = '';

        // Required validation
        if (field.hasAttribute('required') && value === '') {
            isValid = false;
            errorMsg = `${this.getFieldLabel(name)} is required`;
        }

        // Email validation
        if (isValid && type === 'email' && value !== '') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMsg = 'Please enter a valid email address';
            }
        }

        // Phone validation
        if (isValid && type === 'tel' && value !== '') {
            const phoneRegex = /^[0-9]{10}$/;
            if (!phoneRegex.test(value.replace(/[-\s]/g, ''))) {
                isValid = false;
                errorMsg = 'Please enter a valid 10-digit phone number';
            }
        }

        // Min length validation
        if (isValid && field.hasAttribute('minlength')) {
            const minLength = field.getAttribute('minlength');
            if (value.length < minLength) {
                isValid = false;
                errorMsg = `${this.getFieldLabel(name)} must be at least ${minLength} characters`;
            }
        }

        // Update field styling
        this.updateFieldStatus(field, isValid, errorMsg);
        return isValid;
    }

    updateFieldStatus(field, isValid, errorMsg) {
        const errorElement = field.parentElement.querySelector('.error-message');

        if (isValid) {
            field.classList.remove('error');
            if (errorElement) {
                errorElement.classList.remove('show');
            }
        } else {
            field.classList.add('error');
            if (errorElement) {
                errorElement.textContent = errorMsg;
                errorElement.classList.add('show');
            }
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        const inputs = this.form.querySelectorAll('input, textarea, select');
        let isFormValid = true;

        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isFormValid = false;
            }
        });

        if (isFormValid) {
            this.showSuccessMessage();
            this.form.reset();
            // Save to localStorage
            this.saveFormData();
            // You can also send data to server here
        }
    }

    getFieldLabel(fieldName) {
        const label = this.form.querySelector(`label[for="${fieldName}"]`);
        return label ? label.textContent.replace('*', '').trim() : fieldName;
    }

    showSuccessMessage() {
        const message = document.createElement('div');
        message.className = 'success-message';
        message.innerHTML = `
            <div style="background-color: #D1FAE5; border: 1px solid #10B981; color: #047857; padding: 16px; border-radius: 6px; margin-bottom: 16px; display: flex; align-items: center; gap: 12px;">
                <span>✓</span>
                <span>Form submitted successfully! We will contact you soon.</span>
            </div>
        `;
        this.form.insertBefore(message, this.form.firstChild);
        setTimeout(() => message.remove(), 5000);
    }

    saveFormData() {
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData);
        localStorage.setItem('lastFormSubmission', JSON.stringify({
            timestamp: new Date().toISOString(),
            data: data
        }));
    }
}

// ========== TEACHER SEARCH FILTER ==========
class TeacherSearch {
    constructor() {
        this.searchInput = document.getElementById('staffSearch');
        this.departmentFilter = document.getElementById('departmentFilter');
        this.staffContainer = document.querySelector('.staff-grid');
        this.staffItems = this.staffContainer?.querySelectorAll('.staff-card') || [];

        if (this.searchInput) {
            this.init();
        }
    }

    init() {
        this.searchInput.addEventListener('input', (e) => this.debounce(() => this.filter(), 300));
        if (this.departmentFilter) {
            this.departmentFilter.addEventListener('change', () => this.filter());
        }
    }

    filter() {
        const searchTerm = this.searchInput.value.toLowerCase();
        const selectedDept = this.departmentFilter?.value || '';
        let visibleCount = 0;

        this.staffItems.forEach(item => {
            const name = item.querySelector('h3')?.textContent.toLowerCase() || '';
            const dept = item.dataset.department?.toLowerCase() || '';
            const matches = (name.includes(searchTerm) || searchTerm === '') &&
                           (dept === selectedDept || selectedDept === '');

            item.style.display = matches ? 'block' : 'none';
            if (matches) visibleCount++;
        });

        // Show no results message
        this.updateNoResults(visibleCount === 0);
    }

    updateNoResults(show) {
        let noResults = this.staffContainer?.querySelector('.no-results');
        if (show && !noResults) {
            noResults = document.createElement('div');
            noResults.className = 'no-results';
            noResults.textContent = 'No staff members found.';
            noResults.style.cssText = 'text-align: center; padding: 48px 16px; color: #9CA3AF; font-size: 18px;';
            this.staffContainer.appendChild(noResults);
        } else if (!show && noResults) {
            noResults.remove();
        }
    }

    debounce(func, delay) {
        clearTimeout(this.debounceTimer);
        this.debounceTimer = setTimeout(func, delay);
    }
}

// ========== BACK TO TOP BUTTON ==========
class BackToTop {
    constructor() {
        this.button = document.getElementById('backToTop');
        if (!this.button) return;
        this.init();
    }

    init() {
        document.addEventListener('scroll', () => this.handleScroll());
        this.button.addEventListener('click', () => this.scrollTop());
    }

    handleScroll() {
        if (window.pageYOffset > 300) {
            this.button.style.display = 'flex';
        } else {
            this.button.style.display = 'none';
        }
    }

    scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// ========== COLLAPSIBLE FAQ ==========
class FAQManager {
    constructor() {
        this.faqItems = document.querySelectorAll('.faq-item');
        this.init();
    }

    init() {
        this.faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');

            if (question) {
                question.addEventListener('click', () => this.toggleFAQ(item, answer));
            }
        });
    }

    toggleFAQ(item, answer) {
        const isOpen = item.classList.contains('active');

        // Close all other FAQs
        this.faqItems.forEach(faq => {
            faq.classList.remove('active');
        });

        // Toggle current
        if (!isOpen) {
            item.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
            answer.style.maxHeight = '0';
        }
    }
}

// ========== TIMETABLE COMPONENT ==========
class TimetableManager {
    constructor() {
        this.classSelector = document.getElementById('classSelector');
        this.viewToggle = document.querySelectorAll('.view-toggle button');
        this.timetableContainer = document.querySelector('.timetable-grid');

        if (this.classSelector) {
            this.init();
        }
    }

    init() {
        this.classSelector.addEventListener('change', () => this.updateTimetable());
        this.viewToggle.forEach(btn => {
            btn.addEventListener('click', (e) => this.toggleView(e.target.dataset.view));
        });
    }

    updateTimetable() {
        const selectedClass = this.classSelector.value;
        // Update timetable based on selected class
        console.log('Timetable updated for class:', selectedClass);
    }

    toggleView(view) {
        if (view === 'grid') {
            this.timetableContainer?.classList.remove('list-view');
            this.timetableContainer?.classList.add('grid-view');
        } else {
            this.timetableContainer?.classList.remove('grid-view');
            this.timetableContainer?.classList.add('list-view');
        }
    }
}

// ========== SMOOTH SCROLL NAVIGATION ==========
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href === '#') return;

                e.preventDefault();
                const target = document.querySelector(href);

                if (target) {
                    const offsetTop = target.offsetTop - 80; // Account for sticky navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// ========== NEWSLETTER SUBSCRIPTION ==========
class NewsletterManager {
    constructor() {
        this.form = document.querySelector('.newsletter-form');
        if (!this.form) return;
        this.init();
    }

    init() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    handleSubmit(e) {
        e.preventDefault();
        const emailInput = this.form.querySelector('input[type="email"]');
        const email = emailInput.value.trim();

        if (!this.isValidEmail(email)) {
            this.showMessage('Please enter a valid email', 'error');
            return;
        }

        // Check if already subscribed
        const subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]');
        if (subscribers.includes(email)) {
            this.showMessage('You are already subscribed!', 'info');
            return;
        }

        // Add subscriber
        subscribers.push(email);
        localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers));

        this.showMessage('Successfully subscribed to our newsletter!', 'success');
        emailInput.value = '';
    }

    isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    showMessage(text, type) {
        let message = this.form.querySelector('.message');
        if (!message) {
            message = document.createElement('div');
            message.className = 'message';
            this.form.insertBefore(message, this.form.firstChild);
        }

        message.textContent = text;
        message.className = `message ${type}`;
        message.style.cssText = `
            padding: 12px 16px;
            border-radius: 6px;
            margin-bottom: 16px;
            display: block;
        `;

        if (type === 'success') {
            message.style.backgroundColor = '#D1FAE5';
            message.style.color = '#047857';
            message.style.border = '1px solid #10B981';
        } else if (type === 'error') {
            message.style.backgroundColor = '#FEE2E2';
            message.style.color = '#991B1B';
            message.style.border = '1px solid #EF4444';
        }

        setTimeout(() => {
            message.remove();
        }, 5000);
    }
}

// ========== READ MORE/LESS ==========
class ReadMore {
    constructor() {
        this.readMoreButtons = document.querySelectorAll('.read-more-btn');
        this.init();
    }

    init() {
        this.readMoreButtons.forEach(btn => {
            btn.addEventListener('click', () => this.toggleText(btn));
        });
    }

    toggleText(button) {
        const content = button.previousElementSibling;
        const isExpanded = button.getAttribute('aria-expanded') === 'true';

        if (isExpanded) {
            content.style.maxHeight = '3em';
            button.textContent = 'Read More';
            button.setAttribute('aria-expanded', 'false');
        } else {
            content.style.maxHeight = 'none';
            button.textContent = 'Read Less';
            button.setAttribute('aria-expanded', 'true');
        }
    }
}

// ========== LAZY LOADING IMAGES ==========
class LazyLoader {
    constructor() {
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }
}

// ========== INITIALIZE ALL COMPONENTS ==========
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all managers
    new DarkModeManager();
    new MobileMenuManager();
    new StickyNavbar();
    new NoticeBoardManager();
    new GalleryLightbox();
    new FormValidator('form');
    new TeacherSearch();
    new BackToTop();
    new FAQManager();
    new TimetableManager();
    new SmoothScroll();
    new NewsletterManager();
    new ReadMore();
    new LazyLoader();

    console.log('✓ All components initialized successfully');
});

// ========== UTILITY FUNCTIONS ==========
window.utils = {
    // Format date
    formatDate: (date) => {
        return new Intl.DateTimeFormat('en-IN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(new Date(date));
    },

    // Generate unique ID
    generateID: () => {
        return '_' + Math.random().toString(36).substr(2, 9);
    },

    // Check if element is in viewport
    isInViewport: (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },

    // Scroll to element
    scrollToElement: (selector, offset = 80) => {
        const element = document.querySelector(selector);
        if (element) {
            const offsetTop = element.offsetTop - offset;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
    }
};

// ========== ERROR HANDLING ==========
window.addEventListener('error', (e) => {
    console.error('Error:', e.message);
});

// ========== PERFORMANCE MONITORING ==========
if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('📊 Page Load Time: ' + pageLoadTime + 'ms');
    });
}
