/* Module-adapted version of the original script.js
   Export an initUiApp() function which instantiates the managers.
   This file is intended to be called from React (once) after the DOM mounts.
*/

// NOTE: This file is a near-copy of the original site script but avoids
// running on load automatically. Call initUiApp() to initialize behaviors.

export function initUiApp() {
  // Dark Mode Manager
  class DarkModeManager {
    constructor() {
      this.themeToggle = document.getElementById('themeToggle');
      this.htmlElement = document.documentElement;
    }

    init() {
      const savedTheme = localStorage.getItem('theme') || 'light';
      this.setTheme(savedTheme);

      if (this.themeToggle) {
        this.themeToggle.addEventListener('click', () => {
          const currentTheme = this.htmlElement.getAttribute('data-theme');
          const newTheme = currentTheme === 'light' ? 'dark' : 'light';
          this.setTheme(newTheme);
          localStorage.setItem('theme', newTheme);
        });
      }

      if (window.matchMedia) {
        try {
          window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            const newTheme = e.matches ? 'dark' : 'light';
            this.setTheme(newTheme);
            localStorage.setItem('theme', newTheme);
          });
        } catch (e) {
          // some browsers use addListener
        }
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

  // Mobile Menu Manager
  class MobileMenuManager {
    constructor() {
      this.menuToggle = document.getElementById('menuToggle');
      this.navMenu = document.getElementById('navMenu');
      this.navLinks = this.navMenu?.querySelectorAll('a') || [];
    }

    init() {
      if (!this.menuToggle || !this.navMenu) return;

      this.menuToggle.addEventListener('click', () => this.toggleMenu());

      this.navLinks.forEach(link => {
        link.addEventListener('click', () => this.closeMenu());
      });

      document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar')) return;
        if (e.target.closest('.menu-toggle')) return;
        this.closeMenu();
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.closeMenu();
        }
      });
    }

    toggleMenu() {
      const isActive = this.navMenu.classList.toggle('active');
      this.menuToggle.setAttribute('aria-expanded', isActive);

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

  // Sticky Navbar
  class StickyNavbar {
    constructor() {
      this.navbar = document.querySelector('.navbar');
      this.lastScrollPosition = 0;
    }

    init() {
      if (!this.navbar) return;
      document.addEventListener('scroll', () => this.handleScroll());
    }

    handleScroll() {
      const currentScroll = window.pageYOffset;
      if (currentScroll > this.lastScrollPosition && currentScroll > 80) {
        this.navbar.classList.add('hidden');
      } else {
        this.navbar.classList.remove('hidden');
      }
      this.lastScrollPosition = currentScroll <= 0 ? 0 : currentScroll;
    }
  }

  // Notice Board Manager (simple)
  class NoticeBoardManager {
    constructor() {
      this.carousel = document.querySelector('.notice-carousel');
      this.items = document.querySelectorAll('.notice-item');
      this.prevBtn = document.getElementById('noticePrev');
      this.nextBtn = document.getElementById('noticeNext');
      this.indicators = document.querySelectorAll('.notice-indicators button');
      this.currentIndex = 0;
      this.autoPlayInterval = null;
      this.autoPlayDelay = 4000;
    }

    init() {
      if (!this.carousel) return;
      if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.prev());
      if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.next());
      this.indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => this.goToSlide(index));
      });
      this.carousel.addEventListener('mouseenter', () => this.pauseAutoPlay());
      this.carousel.addEventListener('mouseleave', () => this.startAutoPlay());
      this.startAutoPlay();
      this.updateSlide();
    }

    updateSlide() {
      this.items.forEach(item => item.classList.remove('active'));
      this.indicators.forEach(ind => ind.setAttribute('aria-selected', 'false'));
      if (this.items[this.currentIndex]) this.items[this.currentIndex].classList.add('active');
      if (this.indicators[this.currentIndex]) this.indicators[this.currentIndex].setAttribute('aria-selected', 'true');
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
      if (this.autoPlayInterval) clearInterval(this.autoPlayInterval);
    }

    pauseAndRestart() {
      this.pauseAutoPlay();
      this.startAutoPlay();
    }
  }

  // Minimal BackToTop
  class BackToTop {
    constructor() { this.button = document.getElementById('backToTop'); }
    init() { if (!this.button) return; document.addEventListener('scroll', () => this.handleScroll()); this.button.addEventListener('click', () => this.scrollTop()); }
    handleScroll() { if (window.pageYOffset > 300) this.button.style.display = 'flex'; else this.button.style.display = 'none'; }
    scrollTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }
  }

  // Initialize all managers
  try {
    const dark = new DarkModeManager(); dark.init();
    const mobile = new MobileMenuManager(); mobile.init();
    const sticky = new StickyNavbar(); sticky.init();
    const notice = new NoticeBoardManager(); notice.init();
    const back = new BackToTop(); back.init();
    // other managers from the original script can be added here as needed
    // Expose a lightweight utils object used by some inline code
    window.utils = window.utils || {};
    console.log('UI module initialized');
  } catch (e) {
    console.warn('initUiApp() error', e);
  }
}
