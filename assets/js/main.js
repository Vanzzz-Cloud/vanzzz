/* ============================================
   Vanzzz Portfolio — Main JavaScript
   ============================================ */

// ========== Init Lucide Icons ==========
function initIcons() {
    if (typeof lucide !== 'undefined') lucide.createIcons();
}
initIcons();

// ========== Theme Toggle ==========
const themeToggle = document.getElementById('theme-toggle');
const themeIcon   = document.getElementById('theme-icon');

function setTheme(isDark) {
    document.documentElement.classList.toggle('dark', isDark);
    if (themeIcon) themeIcon.setAttribute('data-lucide', isDark ? 'sun' : 'moon');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    initIcons();
}

const savedTheme  = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
setTheme(savedTheme ? savedTheme === 'dark' : prefersDark);

themeToggle?.addEventListener('click', () => {
    setTheme(!document.documentElement.classList.contains('dark'));
});
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) setTheme(e.matches);
});

// ========== Mobile Menu ==========
const menuBtn     = document.getElementById('menu-btn');
const closeMenuBtn = document.getElementById('close-menu');
const mobileMenu  = document.getElementById('mobile-menu');
const menuOverlay = document.getElementById('menu-overlay');

function openMenu() {
    mobileMenu?.classList.add('open');
    menuOverlay?.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    menuBtn?.setAttribute('aria-expanded', 'true');
    menuBtn?.classList.add('open');
}
function closeMenu() {
    mobileMenu?.classList.remove('open');
    menuOverlay?.classList.add('hidden');
    document.body.style.overflow = '';
    menuBtn?.setAttribute('aria-expanded', 'false');
    menuBtn?.classList.remove('open');
}

menuBtn?.addEventListener('click', openMenu);
closeMenuBtn?.addEventListener('click', closeMenu);
menuOverlay?.addEventListener('click', closeMenu);
document.querySelectorAll('.mobile-link').forEach(l => l.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

// ========== Fade Up on Scroll ==========
function handleFadeUp() {
    document.querySelectorAll('.fade-up:not(.visible)').forEach(el => {
        if (el.getBoundingClientRect().top <= window.innerHeight * 0.88)
            el.classList.add('visible');
    });
}
window.addEventListener('scroll', handleFadeUp, { passive: true });
window.addEventListener('load', handleFadeUp);
requestAnimationFrame(handleFadeUp);

// ========== Progress Bars ==========
function animateProgressBars() {
    document.querySelectorAll('.progress-fill').forEach(bar => {
        if (bar.getBoundingClientRect().top <= window.innerHeight * 0.9)
            bar.style.width = bar.getAttribute('data-width') || '0%';
    });
}
window.addEventListener('scroll', animateProgressBars, { passive: true });
window.addEventListener('load', animateProgressBars);
setTimeout(animateProgressBars, 600);

// ========== Active Nav Link ==========
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link[data-section]');

function updateActiveNav() {
    let current = '';
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 120)
            current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('data-section') === current);
    });
}
window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();

// ========== Scroll to Top ==========
const scrollTopBtn = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
    scrollTopBtn?.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });
scrollTopBtn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ========== Smooth Scroll ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const top = target.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});

// ========== Typewriter Effect ==========
(function () {
    const texts = ["Hi, I'm Vanzzz", "Full Stack Developer", "UI/UX Designer"];
    let textIndex = 0, charIndex = 0, isDeleting = false;
    const el = document.getElementById('typewriter-text');
    if (!el) return;

    function type() {
        const currentText = texts[textIndex];
        el.textContent = currentText.substring(0, isDeleting ? charIndex - 1 : charIndex + 1);
        isDeleting ? charIndex-- : charIndex++;

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(type, 2800);
            return;
        }
        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }
        setTimeout(type, isDeleting ? 45 : 95);
    }
    setTimeout(type, 600);
})();

// ========== Particles ==========
(function () {
    const container = document.getElementById('particles');
    if (!container) return;
    for (let i = 0; i < 40; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        const size = Math.random() * 6 + 2;
        Object.assign(p.style, {
            width:             size + 'px',
            height:            size + 'px',
            left:              Math.random() * 100 + '%',
            animationDelay:    Math.random() * 20 + 's',
            animationDuration: (Math.random() * 15 + 12) + 's',
            opacity:           (Math.random() * 0.3 + 0.1).toString()
        });
        container.appendChild(p);
    }
})();

// ========== Navbar Shadow on Scroll ==========
window.addEventListener('scroll', () => {
    document.querySelector('nav')?.classList.toggle('shadow-xl', window.scrollY > 30);
}, { passive: true });

// ========== Toast Notification ==========
function showToast(msg, type = 'success') {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.style.background = type === 'success' ? '#22c55e' : '#ef4444';
    toast.style.color = 'white';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
}

// ========== Contact Form Validation ==========
const form      = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const btnText   = document.getElementById('btn-text');
const formMsg   = document.getElementById('form-message');
const fields    = ['name', 'email', 'subject', 'message'];

function setError(id, msg) {
    const err   = document.getElementById(id + '-error');
    const input = document.getElementById(id);
    if (err) { err.textContent = msg; err.classList.remove('hidden'); }
    input?.classList.add('error');
}
function clearError(id) {
    document.getElementById(id + '-error')?.classList.add('hidden');
    document.getElementById(id)?.classList.remove('error');
}

fields.forEach(id => document.getElementById(id)?.addEventListener('input', () => clearError(id)));

form?.addEventListener('submit', async function (e) {
    e.preventDefault();

    const name    = document.getElementById('name')?.value.trim()    || '';
    const email   = document.getElementById('email')?.value.trim()   || '';
    const subject = document.getElementById('subject')?.value.trim() || '';
    const message = document.getElementById('message')?.value.trim() || '';
    let valid = true;

    formMsg?.classList.add('hidden');

    if (!name || name.length < 2)
        { setError('name', 'Please enter your full name (at least 2 characters)'); valid = false; }
    if (!email)
        { setError('email', 'Please enter your email address'); valid = false; }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
        { setError('email', 'Please enter a valid email address'); valid = false; }
    if (!subject || subject.length < 3)
        { setError('subject', 'Please enter a subject (at least 3 characters)'); valid = false; }
    if (!message)
        { setError('message', 'Please write your message'); valid = false; }
    else if (message.length < 10)
        { setError('message', 'Message is too short (at least 10 characters)'); valid = false; }

    if (!valid) return;

    submitBtn.disabled = true;
    if (btnText) btnText.textContent = 'Sending...';

    try {
        // TODO: Replace with real endpoint e.g. Formspree:
        // const res = await fetch('https://formspree.io/f/YOUR_ID', {
        //   method: 'POST', headers: {'Content-Type':'application/json'},
        //   body: JSON.stringify({ name, email, subject, message })
        // });
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulated

        if (formMsg) {
            formMsg.textContent = "✓ Message sent! I'll get back to you within 24 hours.";
            formMsg.className = 'text-center py-3 rounded-xl text-sm font-medium bg-green-100 text-green-700';
            formMsg.classList.remove('hidden');
        }
        form.reset();
        showToast('Message sent successfully! 🎉');
        setTimeout(() => formMsg?.classList.add('hidden'), 6000);
    } catch {
        if (formMsg) {
            formMsg.textContent = '✗ Failed to send. Please email me directly at hello@vanzzz.com';
            formMsg.className = 'text-center py-3 rounded-xl text-sm font-medium bg-red-100 text-red-700';
            formMsg.classList.remove('hidden');
        }
    } finally {
        submitBtn.disabled = false;
        if (btnText) btnText.textContent = 'Send Message';
    }
});
