document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Show body content
    document.body.style.visibility = 'visible';
    
    // --- Add to Cart Toast Notification ---
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Create toast notification
            const toast = document.createElement('div');
            toast.className = 'cart-toast';
            toast.innerHTML = '<span class="material-symbols-outlined" style="font-size: 20px;">check_circle</span><span>Successfully added to cart!</span>';
            document.body.appendChild(toast);
            
            // Remove toast after 3 seconds
            setTimeout(() => {
                toast.classList.add('closing');
                setTimeout(() => {
                    toast.remove();
                }, 300);
            }, 3000);
        });
    });
    
    // --- Wishlist/Favorite Toggle ---
    document.querySelectorAll('.group\\/heart').forEach(button => {
        let isAdded = false;
        const icon = button.querySelector('.material-symbols-outlined');
        
        button.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            isAdded = !isAdded;
            
            // Toggle fill state
            if (isAdded) {
                icon.style.fontVariationSettings = '"FILL" 1';
                button.style.backgroundColor = 'rgba(239, 68, 68, 0.6)';
            } else {
                icon.style.fontVariationSettings = '"FILL" 0';
                button.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
            }
            
            // Create toast notification
            const toast = document.createElement('div');
            toast.className = 'wishlist-toast';
            const message = isAdded ? 'Added to wishlist!' : 'Removed from wishlist';
            const icon_type = isAdded ? 'favorite' : 'favorite_border';
            toast.innerHTML = `<span class="material-symbols-outlined" style="font-size: 20px;">${icon_type}</span><span>${message}</span>`;
            document.body.appendChild(toast);
            
            // Remove toast after 3 seconds
            setTimeout(() => {
                toast.classList.add('closing');
                setTimeout(() => {
                    toast.remove();
                }, 300);
            }, 3000);
        });
    });
    
    // --- Audio Logic ---
    const audio = document.getElementById('engine-start');
    const audioControl = document.querySelector('.audio-control');
    let hasPlayed = false;
    
    const playAudio = async () => {
        if (hasPlayed) return;
        try {
            audio.volume = 0.6;
            await audio.play();
            hasPlayed = true;
            audioControl.classList.add('playing');
            // Show audio control
            gsap.to(audioControl, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                delay: 0.5
            });
            // Fade out audio slightly after main startup sound
            setTimeout(() => {
                gsap.to(audio, { volume: 0.2, duration: 2 });
            }, 4000);
        } catch (err) {
            console.log("Autoplay blocked, waiting for interaction");
        }
    };

    const enableAudio = () => {
        playAudio();
        document.removeEventListener('click', enableAudio);
        document.removeEventListener('scroll', enableAudio);
    };
    document.addEventListener('click', enableAudio);
    document.addEventListener('scroll', enableAudio);

    if(audioControl) {
        audioControl.addEventListener('click', () => {
            if (audio.paused) {
                audio.play();
                audioControl.classList.add('playing');
                gsap.to(audio, { volume: 0.6, duration: 0.5 });
            } else {
                gsap.to(audio, { volume: 0, duration: 0.5, onComplete: () => {
                    audio.pause();
                    audioControl.classList.remove('playing');
                }});
            }
        });
    }

    // --- Enhanced Hero Section Animations ---
    const heroTl = gsap.timeline();
    
    heroTl.to(".hero-bg", {
        scale: 1,
        duration: 2.8,
        ease: "power2.inOut"
    })
    .to(".hero-glow", {
        opacity: 0.8,
        duration: 0.1,
        ease: "power1.in"
    }, "<0.1")
    .to(".hero-glow", {
        opacity: 0.2,
        duration: 0.3,
        ease: "power1.out"
    })
    .to(".hero-glow", {
        opacity: 0.6,
        duration: 0.1,
        delay: 0.2
    })
    .to(".hero-glow", {
        opacity: 0,
        duration: 1.5,
        ease: "power2.out"
    });

    heroTl.to(".hero-title-line", {
        y: 0,
        duration: 1.6,
        stagger: 0.15,
        ease: "power4.out"
    }, "-=1.8"); 

    heroTl.to(".hero-desc", {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out"
    }, "-=1.0");
    
    heroTl.to(".hero-cta", {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "back.out(1.0)"
    }, "-=0.9");
    
    heroTl.to(".hero-stats", {
        opacity: 1,
        x: 0,
        duration: 1.4,
        ease: "power4.out"
    }, "-=1.1");
    
    // Update selector here
    gsap.to(".search-container-wrapper", {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 2.2
    });

    // --- Scroll Trigger Animations ---
    gsap.utils.toArray('.section-header-1').forEach(header => {
        const underline = header.querySelector('.section-underline');
        if(underline) {
            gsap.to(underline, {
                width: "100%",
                duration: 1.5,
                ease: "power3.inOut",
                scrollTrigger: {
                    trigger: header,
                    start: "top 85%"
                }
            });
        }
    });

    // --- Featured Section Animation (Index) ---
    if (document.querySelector('.featured-grid')) {
        gsap.utils.toArray('.featured-grid .car-card').forEach((card, i) => {
            gsap.fromTo(card, 
                { y: 80, opacity: 0, rotationX: 5 },
                {
                    scrollTrigger: {
                        trigger: ".featured-grid",
                        start: "top 80%",
                    },
                    y: 0,
                    opacity: 1,
                    rotationX: 0,
                    duration: 1.2,
                    delay: i * 0.1,
                    ease: "power3.out"
                }
            );
        });
    }

    // --- Recommended Add-ons Animation (Cart) ---
    if (document.querySelector('.recommended-grid')) {
        gsap.utils.toArray('.recommended-grid .car-card').forEach((card, i) => {
            gsap.fromTo(card, 
                { y: 50, opacity: 0, scale: 0.95 },
                {
                    scrollTrigger: {
                        trigger: ".recommended-grid",
                        start: "top 90%", // Trigger slightly earlier
                    },
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1.0,
                    delay: 0.2 + (i * 0.15), // Staggered start
                    ease: "back.out(1.2)" // Amazing bounce effect
                }
            );
        });
    }

    gsap.utils.toArray('.deal-card').forEach((card, i) => {
        gsap.fromTo(card, 
            { x: 50, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: ".deals-carousel",
                    start: "top 85%",
                },
                x: 0,
                opacity: 1,
                duration: 1.0,
                delay: i * 0.15,
                ease: "power2.out"
            }
        );
    });

    gsap.utils.toArray('.testimonial-card').forEach((card, i) => {
        gsap.fromTo(card, 
            { scale: 0.9, opacity: 0, y: 30 },
            {
                scrollTrigger: {
                    trigger: ".testimonials-section",
                    start: "top 75%",
                },
                scale: 1,
                opacity: 1,
                y: 0,
                duration: 1.0,
                delay: i * 0.15,
                ease: "power3.out"
            }
        );
    });

    gsap.to(".newsletter-container", {
        scrollTrigger: {
            trigger: ".newsletter-section",
            start: "top 85%",
        },
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "power4.out"
    });

    gsap.utils.toArray('.footer-col').forEach((col, i) => {
         gsap.to(col, {
            scrollTrigger: {
                trigger: "footer",
                start: "top 95%",
            },
            y: 0,
            opacity: 1,
            duration: 1,
            delay: i * 0.1,
            ease: "power2.out"
        });
    });

    // --- Micro-interactions ---
    document.querySelectorAll('.car-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -3;
            const rotateY = ((x - centerX) / centerX) * 3;
            gsap.to(card, {
                rotationX: rotateX,
                rotationY: rotateY,
                duration: 0.6,
                ease: "power1.out",
                transformPerspective: 1000
            });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                rotationX: 0,
                rotationY: 0,
                y: 0,
                duration: 0.6,
                ease: "power2.out"
            });
            const img = card.querySelector('.car-bg');
            if(img) gsap.to(img, { scale: 1, duration: 0.8, ease: "power2.out" });
        });
        card.addEventListener('mouseenter', () => {
             const img = card.querySelector('.car-bg');
             if(img) gsap.to(img, { scale: 1.05, duration: 1.2, ease: "power2.out" });
        });
    });

    document.querySelectorAll('.btn-ripple').forEach(button => {
        button.addEventListener('mouseenter', function(e) {
            const existingRipple = this.querySelector('.ripple-circle');
            if (existingRipple) existingRipple.remove(); // Reset logic handles removal but good safety
            
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const circle = document.createElement('div');
            circle.classList.add('ripple-circle');
            circle.style.left = `${x}px`;
            circle.style.top = `${y}px`;
            this.appendChild(circle);
            
            gsap.fromTo(circle, 
                { scale: 0, opacity: 0.4 },
                { 
                    scale: 4, 
                    opacity: 0, 
                    duration: 1.0, 
                    ease: "power2.out",
                    onComplete: () => {
                        circle.remove();
                    }
                }
            );
        });
    });

    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');

    if (mobileMenuToggle && mobileNav) {
      mobileNav.classList.add('hidden');
      mobileMenuToggle.classList.remove('active');
      
      mobileMenuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileNav.classList.toggle('hidden');
        mobileMenuToggle.classList.toggle('active');
        
        if (!mobileNav.classList.contains('hidden')) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
      });

      const mobileNavLinks = mobileNav.querySelectorAll('a');
      mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileNav.classList.add('hidden');
          mobileMenuToggle.classList.remove('active');
          document.body.style.overflow = 'auto';
        });
      });

      document.addEventListener('click', (e) => {
        if (!mobileNav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
          if (!mobileNav.classList.contains('hidden')) {
            mobileNav.classList.add('hidden');
            mobileMenuToggle.classList.remove('active');
            document.body.style.overflow = 'auto';
          }
        }
      });
    }

    // Newsletter form handling
    const newsletterForm = document.getElementById('newsletterForm');
    const newsletterEmail = document.getElementById('newsletterEmail');
    const successModal = document.querySelector('.newsletter-success-modal');
    const modalEmail = document.querySelector('.modal-email');
    const modalCloseButtons = document.querySelectorAll('.modal-close');

    if (newsletterForm) {
      newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = newsletterEmail.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(email)) {
          // Changed from classList toggle to style
          newsletterEmail.style.borderColor = 'var(--red-600)';
          setTimeout(() => {
            newsletterEmail.style.borderColor = '';
          }, 2000);
          return;
        }
        
        modalEmail.textContent = email;
        successModal.classList.remove('hidden');
        successModal.classList.add('active');
        successModal.classList.remove('closing');
        
        newsletterForm.reset();
      });
      
      modalCloseButtons.forEach(button => {
        button.addEventListener('click', closeModal);
      });
      
      successModal.addEventListener('click', (e) => {
        if (e.target === successModal || e.target.closest('.modal-backdrop')) {
          closeModal();
        }
      });
      
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && successModal.classList.contains('active')) {
          closeModal();
        }
      });
      
      function closeModal() {
        successModal.classList.add('closing');
        setTimeout(() => {
          successModal.classList.remove('active');
          successModal.classList.remove('closing');
          successModal.classList.add('hidden');
        }, 300);
      }
    }
});
