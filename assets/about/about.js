gsap.registerPlugin(ScrollTrigger);

// HERO PARALLAX - Fixed background with scroll effect
gsap.to('.hero-bg', {
  scrollTrigger: {
    trigger: '.hero-section',
    start: 'top top',
    end: 'bottom top',
    scrub: 1.5,
    markers: false,
  },
  y: (index, target) => -ScrollTrigger.getVelocity() * 0.5,
  duration: 1,
  ease: 'power1.inOut'
});

// Hero content parallax (moves opposite direction)
gsap.to('.hero-content.parallax-text', {
  scrollTrigger: {
    trigger: '.hero-section',
    start: 'top top',
    end: 'bottom top',
    scrub: 1,
  },
  y: (index, target) => ScrollTrigger.getVelocity() * 0.3,
  opacity: 1,
  duration: 1
});

// Hero text scaling effect
gsap.to('.hero-title', {
  scrollTrigger: {
    trigger: '.hero-section',
    start: 'top top',
    end: 'center top',
    scrub: 1,
  },
  scale: 0.8,
  opacity: 0.6,
  duration: 1,
  ease: 'power1.inOut'
});

// IMAGE BREAKER PARALLAX - Fixed background with dramatic effect
gsap.to('.image-breaker-bg', {
  scrollTrigger: {
    trigger: '.image-breaker',
    start: 'top top',
    end: 'bottom top',
    scrub: 2,
    markers: false,
  },
  backgroundPosition: '50% 100%',
  duration: 1,
  ease: 'none'
});

// Image breaker overlay gradient animation
gsap.to('.image-breaker-overlay', {
  scrollTrigger: {
    trigger: '.image-breaker',
    start: 'top center',
    end: 'center center',
    scrub: 1,
  },
  backgroundImage: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 50%, rgba(34,30,16,0.7) 100%)',
  duration: 1
});

// Image breaker title - Mega parallax with rotation
gsap.to('.image-breaker-title.parallax-text', {
  scrollTrigger: {
    trigger: '.image-breaker',
    start: 'top center',
    end: 'center center',
    scrub: 1.5,
  },
  scale: 1.2,
  rotation: 3,
  textShadow: '0 30px 60px rgba(244,192,37,0.3)',
  duration: 1,
  ease: 'power1.inOut'
});

// Image breaker title secondary parallax (Y movement)
gsap.to('.image-breaker-title.parallax-text', {
  scrollTrigger: {
    trigger: '.image-breaker',
    start: 'top bottom',
    end: 'bottom top',
    scrub: 2,
  },
  y: -150,
  opacity: 0.7,
  duration: 1
});

// Floating animation on image breaker title
gsap.to('.image-breaker-title', {
  y: 20,
  duration: 3,
  repeat: -1,
  yoyo: true,
  ease: 'sine.inOut'
});

// Hero section parallax text lift effect
gsap.to('.hero-content.parallax-text', {
  scrollTrigger: {
    trigger: '.hero-section',
    start: 'top top',
    end: 'center top',
    scrub: 1,
  },
  letterSpacing: '0.1em',
  duration: 1
});

// Hero buttons stagger on scroll in
gsap.to('.hero-buttons button', {
  scrollTrigger: {
    trigger: '.hero-section',
    start: 'center center',
    end: 'bottom center',
    scrub: 0.5,
  },
  scale: 1.05,
  boxShadow: '0 20px 60px rgba(244,192,37,0.4)',
  duration: 1,
  stagger: 0.2
});

// Image breaker - Content fade in as you scroll to it
gsap.fromTo('.image-breaker-content',
  {
    opacity: 0,
    scale: 0.9,
  },
  {
    scrollTrigger: {
      trigger: '.image-breaker',
      start: 'top 80%',
      end: 'center center',
      scrub: 1,
    },
    opacity: 1,
    scale: 1,
    duration: 1.5,
    ease: 'back.out(1.2)'
  }
);

// Hero section - Pin effect
ScrollTrigger.create({
  trigger: '.hero-section',
  start: 'top top',
  end: 'center top',
  pin: false,
  onUpdate: (self) => {
    gsap.to('.hero-bg', {
      y: self.getVelocity() * -0.5,
      duration: 0.5,
      overwrite: 'auto'
    });
  }
});

// Image breaker - Pin effect
ScrollTrigger.create({
  trigger: '.image-breaker',
  start: 'top center',
  end: 'bottom center',
  pin: false,
  onUpdate: (self) => {
    gsap.to('.image-breaker-bg', {
      y: self.getVelocity() * -0.8,
      duration: 0.5,
      overwrite: 'auto'
    });
  }
});

// Enhanced hover effects
document.querySelectorAll('.image-breaker-title').forEach(title => {
  title.addEventListener('mouseenter', () => {
    gsap.to(title, {
      scale: 1.3,
      duration: 0.5,
      ease: 'power2.out'
    });
  });
  
  title.addEventListener('mouseleave', () => {
    gsap.to(title, {
      scale: 1,
      duration: 0.5,
      ease: 'power2.out'
    });
  });
});

// 1. HEADER ANIMATION - Slide down on load
gsap.from('header', {
  y: -100,
  opacity: 0,
  duration: 0.8,
  ease: 'power3.out'
});

// 2. HERO SECTION ANIMATIONS
gsap.to('.hero-bg', {
  scrollTrigger: {
    trigger: '.hero-section',
    start: 'top top',
    scrub: 1,
  },
  scale: 1.1,
  duration: 1
});

// Staggered hero text animation
gsap.from('.hero-title', {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: 'power3.out',
  delay: 0.3
});

gsap.from('.hero-subtitle', {
  opacity: 0,
  y: 30,
  duration: 0.8,
  ease: 'power2.out',
  delay: 0.6
});

// Hero buttons - staggered entrance with bounce
gsap.from('.hero-buttons button', {
  opacity: 0,
  scale: 0.8,
  y: 20,
  duration: 0.6,
  stagger: 0.15,
  ease: 'back.out(1.5)',
  delay: 0.9
});

// Button hover effect
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    gsap.to(btn, {
      scale: 1.05,
      duration: 0.3,
      ease: 'power2.out'
    });
  });
  
  btn.addEventListener('mouseleave', () => {
    gsap.to(btn, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out'
    });
  });
});

// 3. STATS SECTION - Counter animation
const statNumbers = document.querySelectorAll('.stat-number');
statNumbers.forEach((stat, index) => {
  const finalValue = stat.textContent;
  const numericValue = parseInt(finalValue);
  
  gsap.fromTo(stat,
    { textContent: 0 },
    {
      textContent: numericValue,
      duration: 2,
      snap: { textContent: 1 },
      ease: 'power2.out',
      delay: index * 0.2,
      scrollTrigger: {
        trigger: '.stats-section',
        start: 'top 80%',
        once: true
      }
    }
  );
});

// Stats items - slide in from sides
gsap.from('.stat-item', {
  opacity: 0,
  x: (index) => index % 2 === 0 ? -50 : 50,
  duration: 0.8,
  stagger: 0.15,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '.stats-section',
    start: 'top 85%'
  }
});

// 4. TIMELINE ANIMATIONS
gsap.from('.timeline-dot', {
  opacity: 0,
  scale: 0,
  duration: 0.6,
  stagger: 0.3,
  ease: 'back.out(1.2)',
  scrollTrigger: {
    trigger: '.timeline',
    start: 'top 80%'
  }
});

gsap.from('.timeline-item-content', {
  opacity: 0,
  x: -50,
  duration: 0.7,
  stagger: 0.25,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.timeline',
    start: 'top 80%'
  }
});

// Timeline line grow animation
gsap.from('.timeline-line', {
  height: 0,
  duration: 1.5,
  stagger: 0.2,
  ease: 'power1.inOut',
  scrollTrigger: {
    trigger: '.timeline',
    start: 'top 75%'
  }
});

// 5. IMAGE BREAKER - Parallax + text fade
gsap.to('.image-breaker-title', {
  scrollTrigger: {
    trigger: '.image-breaker',
    start: 'top 80%',
    scrub: 0.5
  },
  scale: 1.1,
  opacity: 0.8,
  duration: 1
});

gsap.from('.image-breaker-title', {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '.image-breaker',
    start: 'top 80%'
  }
});

// 6. VALUES SECTION - Card flip animation
document.querySelectorAll('.value-card').forEach((card, index) => {
  gsap.from(card, {
    opacity: 0,
    rotationX: 90,
    y: 50,
    duration: 0.8,
    delay: index * 0.2,
    ease: 'back.out(1)',
    scrollTrigger: {
      trigger: '.values-section',
      start: 'top 80%'
    }
  });

  // Hover 3D effect
  card.addEventListener('mouseenter', () => {
    gsap.to(card, {
      scale: 1.05,
      rotationY: 5,
      duration: 0.4,
      ease: 'power2.out'
    });
  });

  card.addEventListener('mouseleave', () => {
    gsap.to(card, {
      scale: 1,
      rotationY: 0,
      duration: 0.4,
      ease: 'power2.out'
    });
  });
});

// 7. LEADERSHIP SECTION - Image grayscale to color
document.querySelectorAll('.team-member').forEach((member, index) => {
  const img = member.querySelector('.member-image img');
  
  gsap.from(member, {
    opacity: 0,
    y: 60,
    duration: 0.7,
    delay: index * 0.15,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.leadership-section',
      start: 'top 80%'
    }
  });

  member.addEventListener('mouseenter', () => {
    gsap.to(member, {
      scale: 1.08,
      duration: 0.5,
      ease: 'power2.out'
    });
  });

  member.addEventListener('mouseleave', () => {
    gsap.to(member, {
      scale: 1,
      duration: 0.5,
      ease: 'power2.out'
    });
  });
});

// 8. CTA SECTION - Icon pulse + text reveal
gsap.from('.cta-icon', {
  opacity: 0,
  scale: 0,
  duration: 0.8,
  ease: 'back.out(1.2)',
  scrollTrigger: {
    trigger: '.cta-section',
    start: 'top 80%'
  }
});

gsap.from('.cta-title', {
  opacity: 0,
  y: 40,
  duration: 0.8,
  ease: 'power3.out',
  delay: 0.2,
  scrollTrigger: {
    trigger: '.cta-section',
    start: 'top 80%'
  }
});

gsap.from('.cta-subtitle', {
  opacity: 0,
  y: 30,
  duration: 0.7,
  ease: 'power2.out',
  delay: 0.35,
  scrollTrigger: {
    trigger: '.cta-section',
    start: 'top 80%'
  }
});

// CTA icon pulse animation
gsap.to('.cta-icon', {
  repeat: -1,
  scale: 1.1,
  duration: 2,
  ease: 'sine.inOut'
});

// 9. FOOTER - Staggered slide in
gsap.from('.footer-column', {
  opacity: 0,
  y: 40,
  duration: 0.7,
  stagger: 0.15,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: 'footer',
    start: 'top 90%'
  }
});

// 10. SCROLL PROGRESS - Dynamic background shift
let tl = gsap.timeline();
gsap.to('body', {
  scrollTrigger: {
    trigger: 'body',
    start: 'top top',
    scrub: 0.1
  },
  duration: 1
});

// 11. SMOOTH SCROLL TRIGGER ON LOAD
window.addEventListener('load', () => {
  gsap.from('.main-wrapper', {
    opacity: 0,
    duration: 0.5,
    ease: 'power2.out'
  });
});

// 12. SECTION REVEAL WITH UNDERLINE
gsap.utils.toArray('.section-title').forEach(title => {
  gsap.from(title, {
    opacity: 0,
    x: -40,
    duration: 0.7,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: title,
      start: 'top 85%',
      once: true
    }
  });
});

// 13. TEXT CHARACTER ANIMATION (Hero Title)
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
  const text = heroTitle.textContent;
  heroTitle.innerHTML = text.split('').map(char => 
    `<span style="display: inline-block; opacity: 0;">${char}</span>`
  ).join('');
  
  gsap.to('.hero-title span', {
    opacity: 1,
    duration: 0.05,
    stagger: 0.05,
    delay: 0.3,
    ease: 'power1.out'
  });
}

// 14. INTERACTIVE SCROLL EFFECTS
ScrollTrigger.create({
  trigger: '.hero-section',
  onEnter: () => gsap.to('header', { background: 'rgba(34, 30, 16, 0.95)', duration: 0.3 }),
  onLeaveBack: () => gsap.to('header', { background: 'rgba(248, 248, 245, 0.95)', duration: 0.3 })
});

// 15. STAT SECTION - Background color shift
gsap.to('.stats-section', {
  scrollTrigger: {
    trigger: '.stats-section',
    start: 'top center',
    scrub: 1
  },
  backgroundColor: 'rgba(42, 38, 26, 0.8)',
  duration: 1
});

// 16. VALUE CARD ICONS - Rotation on hover
document.querySelectorAll('.value-icon').forEach(icon => {
  icon.parentElement.addEventListener('mouseenter', () => {
    gsap.to(icon, {
      rotation: 360,
      duration: 0.6,
      ease: 'back.out(1.5)'
    });
  });
});

// 17. FOOTER LINKS - Underline animation
document.querySelectorAll('.footer-link').forEach(link => {
  const underline = document.createElement('span');
  underline.style.cssText = 'display: block; height: 2px; background: var(--primary); width: 0; transition: width 0.3s ease;';
  
  link.addEventListener('mouseenter', () => {
    gsap.to(link, {
      color: 'var(--primary)',
      duration: 0.3,
      ease: 'power2.out'
    });
  });
  
  link.addEventListener('mouseleave', () => {
    gsap.to(link, {
      color: '#9ca3af',
      duration: 0.3,
      ease: 'power2.out'
    });
  });
});

// 18. NAVIGATION LINKS - Active state animation
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('mouseenter', () => {
    gsap.to(link, {
      color: 'var(--primary)',
      scale: 1.1,
      duration: 0.3,
      ease: 'power2.out'
    });
  });
  
  link.addEventListener('mouseleave', () => {
    if (!link.classList.contains('active')) {
      gsap.to(link, {
        color: 'var(--text-white)',
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    }
  });
});
