 gsap.registerPlugin(ScrollTrigger);

        // Dark Mode Toggle
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
            document.body.classList.add('dark');
        }

        // Page Load Animations
        window.addEventListener('load', () => {
            // Hero Title Animation
            gsap.from('.hero-title', {
                duration: 0.8,
                opacity: 0,
                y: 30,
                ease: 'power2.out'
            });

            // Hero Subtitle Animation
            gsap.from('.hero-subtitle', {
                duration: 0.8,
                opacity: 0,
                y: 20,
                delay: 0.1,
                ease: 'power2.out'
            });

            // Form Card Animation
            gsap.from('.form-card', {
                duration: 0.8,
                opacity: 0,
                y: 30,
                delay: 0.2,
                ease: 'power2.out'
            });

            // Info Cards Stagger Animation
            gsap.from('.info-card', {
                duration: 0.6,
                opacity: 0,
                y: 20,
                stagger: 0.1,
                delay: 0.3,
                ease: 'power2.out'
            });

            // Map Container Animation
            gsap.from('.map-container', {
                duration: 0.8,
                opacity: 0,
                y: 30,
                delay: 0.5,
                ease: 'power2.out'
            });

            // Header Animation
            gsap.from('header', {
                duration: 0.5,
                opacity: 0,
                y: -20,
                ease: 'power2.out'
            });
        });

        // Form Input Focus Animations
        const inputs = document.querySelectorAll('.form-input, .form-textarea, .form-select');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                gsap.to(this, {
                    duration: 0.3,
                    scale: 1.02,
                    ease: 'power2.out'
                });
            });

            input.addEventListener('blur', function() {
                gsap.to(this, {
                    duration: 0.3,
                    scale: 1,
                    ease: 'power2.out'
                });
            });
        });

        // Button Hover Animations
        const buttons = document.querySelectorAll('.btn-submit, .btn-signin, .btn-cart, .map-btn, .social-btn, .chat-btn');
        buttons.forEach(btn => {
            btn.addEventListener('mouseenter', function() {
                gsap.to(this, {
                    duration: 0.3,
                    scale: 1.05,
                    ease: 'power2.out'
                });
            });

            btn.addEventListener('mouseleave', function() {
                gsap.to(this, {
                    duration: 0.3,
                    scale: 1,
                    ease: 'power2.out'
                });
            });
        });

        // Submit Button Arrow Animation on Hover
        const submitBtn = document.querySelector('.btn-submit');
        if (submitBtn) {
            const arrow = submitBtn.querySelector('.material-symbols-outlined');
            submitBtn.addEventListener('mouseenter', function() {
                gsap.to(arrow, {
                    duration: 0.3,
                    x: 5,
                    ease: 'power2.out'
                });
            });

            submitBtn.addEventListener('mouseleave', function() {
                gsap.to(arrow, {
                    duration: 0.3,
                    x: 0,
                    ease: 'power2.out'
                });
            });
        }

        // Info Cards Hover Animations
        const infoCards = document.querySelectorAll('.info-card');
        infoCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                gsap.to(this, {
                    duration: 0.3,
                    scale: 1.02,
                    ease: 'power2.out'
                });
            });

            card.addEventListener('mouseleave', function() {
                gsap.to(this, {
                    duration: 0.3,
                    scale: 1,
                    ease: 'power2.out'
                });
            });
        });

        // Scroll Animations
        ScrollTrigger.create({
            trigger: '.content-wrapper',
            onEnter: () => {
                gsap.to('.form-card, .info-section', {
                    duration: 0.8,
                    opacity: 1,
                    y: 0,
                    stagger: 0.1,
                    ease: 'power2.out'
                });
            },
            once: true
        });

        // Footer Links Hover Animation
        const footerLinks = document.querySelectorAll('.footer-link');
        footerLinks.forEach(link => {
            link.addEventListener('mouseenter', function() {
                gsap.to(this, {
                    duration: 0.3,
                    x: 5,
                    ease: 'power2.out'
                });
            });

            link.addEventListener('mouseleave', function() {
                gsap.to(this, {
                    duration: 0.3,
                    x: 0,
                    ease: 'power2.out'
                });
            });
        });

        // Chat Button Pulse Effect
        const chatBtn = document.querySelector('.chat-btn');
        if (chatBtn) {
            gsap.to(chatBtn, {
                duration: 2,
                y: -10,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });
        }

        // Smooth Page Transitions
        document.addEventListener('DOMContentLoaded', () => {
            gsap.set(['.form-card', '.info-section'], {
                opacity: 0,
                y: 20
            });
        });