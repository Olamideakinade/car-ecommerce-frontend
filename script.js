// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    initializePageLoad();
    initializeHeaderAnimations();
    initializeScrollAnimations();
    initializeFavorites();
    initializeViewToggle();
    initializePagination();
    initializeLoadMore();
    initializeFilters();
    initializeMobileFilters();
    initializeCardHoverAnimations();
    initializeSortAndFilter();
    initializeParallaxEffects();
}

// ===== Page Load Animation =====
function initializePageLoad() {
    // Header fade and slide in
    gsap.from('.app-header', {
        duration: 0.8,
        opacity: 0,
        y: -30,
        ease: 'power2.out'
    });

    // Breadcrumbs fade in
    gsap.from('.breadcrumbs-section', {
        duration: 0.8,
        opacity: 0,
        delay: 0.2,
        ease: 'power2.out'
    });

    // Sidebar fade and slide in from left
    gsap.from('.sidebar-filters', {
        duration: 0.8,
        opacity: 0,
        x: -40,
        delay: 0.3,
        ease: 'power2.out'
    });

    // Products header fade and slide from right
    gsap.from('.products-header', {
        duration: 0.8,
        opacity: 0,
        x: 40,
        delay: 0.3,
        ease: 'power2.out'
    });

    // Stagger product cards
    const cards = document.querySelectorAll('.product-card');
    gsap.from(cards, {
        duration: 0.6,
        opacity: 0,
        y: 30,
        stagger: 0.1,
        delay: 0.4,
        ease: 'power2.out'
    });

    // Footer fade in
    gsap.from('.app-footer', {
        duration: 0.8,
        opacity: 0,
        y: 30,
        delay: 0.7,
        ease: 'power2.out'
    });
}

// ===== Header Animations =====
function initializeHeaderAnimations() {
    const headerBtn = document.querySelectorAll('.header-btn');
    
    headerBtn.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            gsap.to(this, {
                duration: 0.3,
                scale: 1.1,
                ease: 'power2.out'
            });
            gsap.to(this.querySelector('span'), {
                duration: 0.3,
                rotation: 5,
                ease: 'power2.out'
            });
        });

        btn.addEventListener('mouseleave', function() {
            gsap.to(this, {
                duration: 0.3,
                scale: 1,
                ease: 'power2.out'
            });
            gsap.to(this.querySelector('span'), {
                duration: 0.3,
                rotation: 0,
                ease: 'power2.out'
            });
        });
    });

    // Search input focus animation
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('focus', function() {
            gsap.to(this.closest('.search-input-wrapper'), {
                duration: 0.3,
                boxShadow: '0 0 20px rgba(244, 192, 37, 0.3)',
                ease: 'power2.out'
            });
        });

        searchInput.addEventListener('blur', function() {
            gsap.to(this.closest('.search-input-wrapper'), {
                duration: 0.3,
                boxShadow: 'none',
                ease: 'power2.out'
            });
        });
    }
}

// ===== Scroll Animations =====
function initializeScrollAnimations() {
    // Animate filter groups on scroll
    const filterGroups = document.querySelectorAll('.filter-group');
    filterGroups.forEach((group, index) => {
        gsap.from(group, {
            scrollTrigger: {
                trigger: group,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            duration: 0.6,
            opacity: 0,
            x: -30,
            delay: index * 0.1,
            ease: 'power2.out'
        });
    });

    // Animate products on scroll
    const cards = document.querySelectorAll('.product-card');
    cards.forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            duration: 0.6,
            opacity: 0,
            y: 40,
            rotation: 2,
            delay: (index % 3) * 0.1,
            ease: 'back.out(1.7)'
        });
    });

    // Animate pagination on scroll
    gsap.from('.pagination-section', {
        scrollTrigger: {
            trigger: '.pagination-section',
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.6,
        opacity: 0,
        y: 30,
        ease: 'power2.out'
    });
}

// ===== Card Hover Animations =====
function initializeCardHoverAnimations() {
    const cards = document.querySelectorAll('.product-card');

    cards.forEach(card => {
        const image = card.querySelector('.card-image-wrapper img');
        const badge = card.querySelector('.card-badge');
        const specs = card.querySelector('.card-specs');
        const actionBtn = card.querySelector('.card-action-btn');

        card.addEventListener('mouseenter', function() {
            // Card lift and glow
            gsap.to(card, {
                duration: 0.4,
                y: -15,
                boxShadow: '0 25px 40px rgba(244, 192, 37, 0.15)',
                ease: 'power2.out'
            });

            // Image zoom
            if (image) {
                gsap.to(image, {
                    duration: 0.5,
                    scale: 1.08,
                    ease: 'power2.out'
                });
            }

            // Badge animation
            if (badge) {
                gsap.to(badge, {
                    duration: 0.3,
                    scale: 1.1,
                    rotation: 3,
                    ease: 'back.out(2)'
                });
            }

            // Specs fade in
            if (specs) {
                gsap.to(specs, {
                    duration: 0.3,
                    opacity: 1,
                    ease: 'power2.out'
                });
            }

            // Action button pop in
            if (actionBtn) {
                gsap.to(actionBtn, {
                    duration: 0.3,
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    ease: 'back.out(2)'
                });
            }
        });

        card.addEventListener('mouseleave', function() {
            // Reset card
            gsap.to(card, {
                duration: 0.4,
                y: 0,
                boxShadow: 'none',
                ease: 'power2.out'
            });

            // Reset image
            if (image) {
                gsap.to(image, {
                    duration: 0.5,
                    scale: 1,
                    ease: 'power2.out'
                });
            }

            // Reset badge
            if (badge) {
                gsap.to(badge, {
                    duration: 0.3,
                    scale: 1,
                    rotation: 0,
                    ease: 'power2.out'
                });
            }

            // Reset action button
            if (actionBtn) {
                gsap.to(actionBtn, {
                    duration: 0.3,
                    opacity: 0,
                    y: 8,
                    scale: 0.95,
                    ease: 'power2.in'
                });
            }
        });

        // Click animation on action button
        if (actionBtn) {
            actionBtn.addEventListener('click', function() {
                gsap.to(this, {
                    duration: 0.1,
                    scale: 0.95,
                    ease: 'power2.out'
                });
                gsap.to(this, {
                    duration: 0.2,
                    scale: 1,
                    ease: 'back.out(2)',
                    delay: 0.1
                });

                // Ripple effect
                createRippleEffect(this);
            });
        }
    });
}

// ===== Ripple Effect =====
function createRippleEffect(element) {
    const ripple = document.createElement('span');
    ripple.style.position = 'absolute';
    ripple.style.pointerEvents = 'none';
    ripple.style.borderRadius = '50%';
    ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
    ripple.style.transform = 'scale(0)';

    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);

    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = '50%';
    ripple.style.top = '50%';
    ripple.style.marginLeft = ripple.style.marginTop = -size / 2 + 'px';

    gsap.to(ripple, {
        duration: 0.6,
        scale: 2,
        opacity: 0,
        ease: 'power2.out',
        onComplete: () => ripple.remove()
    });
}

// ===== Favorites System =====
function initializeFavorites() {
    const favoriteButtons = document.querySelectorAll('.card-favorite-btn');

    favoriteButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            this.classList.toggle('active');
            const span = this.querySelector('span');

            // Heart pop animation
            gsap.to(this, {
                duration: 0.1,
                scale: 1.3,
                ease: 'power2.out'
            });

            gsap.to(this, {
                duration: 0.2,
                scale: 1,
                ease: 'back.out(2)',
                delay: 0.1
            });

            // Icon rotation
            gsap.to(span, {
                duration: 0.3,
                rotation: this.classList.contains('active') ? 360 : 0,
                ease: 'back.out(2)'
            });

            // Particle effect
            createHeartParticles(this);
        });
    });
}

// ===== Heart Particles =====
function createHeartParticles(element) {
    for (let i = 0; i < 5; i++) {
        const particle = document.createElement('div');
        particle.innerHTML = '♥';
        particle.style.position = 'fixed';
        particle.style.pointerEvents = 'none';
        particle.style.color = '#f4c025';
        particle.style.fontSize = '12px';
        particle.style.fontWeight = 'bold';
        particle.style.zIndex = '1000';

        const rect = element.getBoundingClientRect();
        particle.style.left = rect.left + rect.width / 2 + 'px';
        particle.style.top = rect.top + rect.height / 2 + 'px';

        document.body.appendChild(particle);

        const angle = (Math.PI * 2 * i) / 5;
        const velocity = 50 + Math.random() * 50;

        gsap.to(particle, {
            duration: 0.8,
            x: Math.cos(angle) * velocity,
            y: Math.sin(angle) * velocity - 50,
            opacity: 0,
            scale: 0,
            ease: 'power2.out',
            onComplete: () => particle.remove()
        });
    }
}

// ===== View Toggle =====
function initializeViewToggle() {
    const viewButtons = document.querySelectorAll('.view-btn');
    const grid = document.querySelector('.products-grid');

    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            viewButtons.forEach(btn => {
                gsap.to(btn, {
                    duration: 0.2,
                    scale: 1,
                    ease: 'power2.out'
                });
                btn.classList.remove('active');
            });

            this.classList.add('active');
            gsap.to(this, {
                duration: 0.3,
                scale: 1.1,
                ease: 'back.out(2)'
            });

            const viewType = this.dataset.view;
            const cards = document.querySelectorAll('.product-card');

            // Fade out cards
            gsap.to(cards, {
                duration: 0.3,
                opacity: 0,
                y: 10,
                ease: 'power2.in'
            });

            // Change layout after fade
            setTimeout(() => {
                if (viewType === 'list') {
                    grid.classList.add('list-view');
                    grid.style.gridTemplateColumns = '1fr';
                } else {
                    grid.classList.remove('list-view');
                    grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(300px, 1fr))';
                }

                // Fade in cards
                gsap.to(cards, {
                    duration: 0.4,
                    opacity: 1,
                    y: 0,
                    stagger: 0.05,
                    ease: 'power2.out'
                });
            }, 300);
        });
    });
}

// ===== Pagination =====
function initializePagination() {
    const paginationBtns = document.querySelectorAll('.pagination-btn');

    paginationBtns.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            if (!this.disabled) {
                gsap.to(this, {
                    duration: 0.2,
                    scale: 1.15,
                    ease: 'back.out(2)'
                });
            }
        });

        btn.addEventListener('mouseleave', function() {
            gsap.to(this, {
                duration: 0.2,
                scale: 1,
                ease: 'power2.out'
            });
        });

        btn.addEventListener('click', function() {
            if (!this.disabled && !this.classList.contains('active')) {
                const cards = document.querySelectorAll('.product-card');

                // Fade and slide out
                gsap.to(cards, {
                    duration: 0.3,
                    opacity: 0,
                    y: 20,
                    ease: 'power2.in'
                });

                // Update active state
                setTimeout(() => {
                    paginationBtns.forEach(b => b.classList.remove('active'));
                    this.classList.add('active');

                    // Fade and slide in
                    gsap.from(cards, {
                        duration: 0.5,
                        opacity: 0,
                        y: -20,
                        stagger: 0.05,
                        ease: 'power2.out'
                    });
                }, 300);
            }
        });
    });
}

// ===== Load More Button =====
function initializeLoadMore() {
    const loadMoreBtn = document.querySelector('.load-more-btn');

    if (loadMoreBtn) {
        const spinner = loadMoreBtn.querySelector('span:first-child');

        loadMoreBtn.addEventListener('mouseenter', function() {
            gsap.to(this, {
                duration: 0.3,
                scale: 1.05,
                ease: 'back.out(2)'
            });
        });

        loadMoreBtn.addEventListener('mouseleave', function() {
            gsap.to(this, {
                duration: 0.3,
                scale: 1,
                ease: 'power2.out'
            });
        });

        loadMoreBtn.addEventListener('click', function() {
            gsap.to(this, {
                duration: 0.2,
                scale: 0.95,
                ease: 'power2.out'
            });

            gsap.to(this, {
                duration: 0.3,
                scale: 1,
                ease: 'back.out(2)',
                delay: 0.1
            });

            // Spinner rotation
            gsap.to(spinner, {
                duration: 1.5,
                rotation: 360,
                ease: 'linear'
            });

            // Simulate loading
            setTimeout(() => {
                gsap.to(spinner, {
                    duration: 0.5,
                    rotation: 0,
                    ease: 'power2.out'
                });
            }, 1500);
        });
    }
}

// ===== Filters =====
function initializeFilters() {
    const bodyTypeButtons = document.querySelectorAll('.body-type-btn');

    bodyTypeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Animate button click
            gsap.to(this, {
                duration: 0.1,
                scale: 0.9,
                ease: 'power2.out'
            });

            gsap.to(this, {
                duration: 0.2,
                scale: 1,
                ease: 'back.out(2)',
                delay: 0.1
            });

            // Update active state
            bodyTypeButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Icon animation
            const icon = this.querySelector('span:first-child');
            gsap.to(icon, {
                duration: 0.3,
                rotation: 360,
                ease: 'back.out(2)'
            });
        });
    });

    // Brand checkboxes animation
    const brandCheckboxes = document.querySelectorAll('.brand-checkbox');
    brandCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const label = this.closest('.checkbox-label');
            if (this.checked) {
                gsap.to(label, {
                    duration: 0.2,
                    x: 5,
                    ease: 'power2.out'
                });
                gsap.to(label, {
                    duration: 0.2,
                    x: 0,
                    ease: 'power2.out',
                    delay: 0.1
                });
            }
        });
    });

    // Reset filters button
    const resetBtn = document.querySelector('.reset-filters-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            gsap.to(this, {
                duration: 0.1,
                scale: 0.9,
                ease: 'power2.out'
            });

            gsap.to(this, {
                duration: 0.2,
                scale: 1,
                ease: 'back.out(2)',
                delay: 0.1
            });
        });
    }

    // Range slider animation
    const rangeSlider = document.querySelector('.range-slider');
    if (rangeSlider) {
        rangeSlider.addEventListener('input', function() {
            gsap.to(this, {
                duration: 0.1,
                boxShadow: '0 0 15px rgba(244, 192, 37, 0.4)',
                ease: 'power2.out'
            });

            gsap.to(this, {
                duration: 0.3,
                boxShadow: 'none',
                ease: 'power2.out',
                delay: 0.2
            });
        });
    }
}

// ===== Mobile Filters =====
function initializeMobileFilters() {
    const mobileFilterBtn = document.querySelector('.mobile-filters-btn');

    if (mobileFilterBtn) {
        mobileFilterBtn.addEventListener('click', function() {
            gsap.to(this, {
                duration: 0.2,
                scale: 0.95,
                ease: 'power2.out'
            });

            gsap.to(this, {
                duration: 0.2,
                scale: 1,
                ease: 'back.out(2)',
                delay: 0.1
            });
        });
    }
}

// ===== Sort and Filter Animation =====
function initializeSortAndFilter() {
    const sortSelect = document.querySelector('.sort-select');

    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            const cards = document.querySelectorAll('.product-card');

            // Shuffle animation
            gsap.to(cards, {
                duration: 0.3,
                opacity: 0,
                y: 10,
                stagger: 0.02,
                ease: 'power2.in'
            });

            setTimeout(() => {
                gsap.from(cards, {
                    duration: 0.4,
                    opacity: 0,
                    y: -10,
                    stagger: 0.02,
                    ease: 'power2.out'
                });
            }, 300);
        });
    }
}

// ===== Parallax Effects =====
function initializeParallaxEffects() {
    const images = document.querySelectorAll('.card-image-wrapper img');

    images.forEach(img => {
        gsap.to(img, {
            scrollTrigger: {
                trigger: img.closest('.product-card'),
                start: 'top center',
                end: 'bottom center',
                scrub: 1,
                markers: false
            },
            y: 20,
            ease: 'none'
        });
    });
}
