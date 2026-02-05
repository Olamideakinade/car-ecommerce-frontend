document.addEventListener('DOMContentLoaded', function() {
  // Header entrance with stagger
  gsap.from('.header-inner', { 
    y: -30, opacity: 0, duration: 1, ease: 'elastic.out(1, 0.5)' 
  });

  // Breadcrumb cascade
  gsap.from('.breadcrumbs', { 
    y: 12, opacity: 0, duration: 0.6, ease: 'back.out(1.4)' 
  });

  // Title group with sophisticated stagger
  const tl = gsap.timeline({ delay: 0.2 });
  tl.from('.status-strip', { 
    x: -20, opacity: 0, duration: 0.5, ease: 'power3.out' 
  }, 0)
  .from('.product-title', { 
    y: 30, opacity: 0, duration: 0.8, ease: 'back.out(1.2)', 
    skewY: 2 
  }, 0.1)
  .from('.product-sub', { 
    y: 15, opacity: 0, duration: 0.6, ease: 'power2.out' 
  }, 0.3)
  .from('.title-actions .icon-group', { 
    scale: 0, opacity: 0, duration: 0.5, stagger: 0.08, 
    ease: 'back.out(1.5)' 
  }, 0.25);

  // Gallery entrance with rotation
  gsap.from('.main-view', { 
    y: 40, opacity: 0, rotationX: 8, duration: 1.1, 
    delay: 0.5, ease: 'power2.out',
    transformOrigin: 'center center'
  });

  // Thumbnail stagger entrance
  gsap.from('.thumbnails .thumb', { 
    scale: 0.8, opacity: 0, duration: 0.5, 
    stagger: 0.06, delay: 0.7, ease: 'back.out(1.3)' 
  });

  // Stats counter animation + entrance
  gsap.from('.stat', { 
    y: 30, opacity: 0, duration: 0.7, 
    stagger: 0.1, delay: 0.9, ease: 'power3.out' 
  });
  document.querySelectorAll('.stat .value').forEach(el => {
    const text = el.textContent;
    const match = text.match(/(\d+)/);
    if (match) {
      const num = parseInt(match[1]);
      const counter = { value: 0 };
      gsap.to(counter, {
        value: num,
        duration: 1.2,
        delay: 1.1,
        ease: 'power2.out',
        onUpdate: () => {
          const displayText = Math.floor(counter.value).toString().padStart(match[1].length, '0');
          el.textContent = text.replace(match[1], displayText);
        }
      });
    }
  });

  // Right column stagger entrance
  gsap.from('.price-card', { 
    x: 40, opacity: 0, duration: 0.8, 
    delay: 1, ease: 'power2.out',
    skewX: 4
  });
  gsap.from('.calc-card', { 
    x: 40, opacity: 0, duration: 0.8, 
    delay: 1.15, ease: 'power2.out',
    skewX: 4
  });

  // Similar vehicles grid with wave effect
  gsap.from('.similar-grid .vehicle', { 
    y: 50, opacity: 0, duration: 0.8, 
    stagger: 0.12, delay: 1.2, ease: 'back.out(1.2)',
    rotationZ: 3
  });

  // Hover animations for interactive elements
  document.querySelectorAll('.stat').forEach(stat => {
    stat.addEventListener('mouseenter', () => {
      gsap.to(stat, { 
        y: -8, boxShadow: '0 20px 40px rgba(244,192,37,0.2)', 
        duration: 0.3, ease: 'power2.out' 
      });
      gsap.to(stat.querySelector('.meta span:first-child'), { 
        color: 'var(--primary)', duration: 0.3 
      });
    });
    stat.addEventListener('mouseleave', () => {
      gsap.to(stat, { 
        y: 0, boxShadow: 'none', duration: 0.3, ease: 'power2.out' 
      });
      gsap.to(stat.querySelector('.meta span:first-child'), { 
        color: 'var(--muted)', duration: 0.3 
      });
    });
  });

  // Vehicle card hover with scale + shine
  document.querySelectorAll('.vehicle').forEach(vehicle => {
    const imgDiv = vehicle.querySelector('[style*="aspect-ratio"]');
    vehicle.addEventListener('mouseenter', () => {
      gsap.to(vehicle, { 
        y: -12, duration: 0.35, ease: 'power2.out' 
      });
      if (imgDiv) {
        gsap.to(imgDiv, { 
          backgroundSize: '130%', duration: 0.5, ease: 'power2.out' 
        });
      }
      const badge = vehicle.querySelector('[style*="top:-12px"]');
      if (badge) {
        gsap.to(badge, { 
          opacity: 1, y: 0, duration: 0.3, ease: 'back.out(1.2)' 
        });
      }
    });
    vehicle.addEventListener('mouseleave', () => {
      gsap.to(vehicle, { 
        y: 0, duration: 0.35, ease: 'power2.out' 
      });
      if (imgDiv) {
        gsap.to(imgDiv, { 
          backgroundSize: 'cover', duration: 0.5, ease: 'power2.out' 
        });
      }
      const badge = vehicle.querySelector('[style*="top:-12px"]');
      if (badge) {
        gsap.to(badge, { 
          opacity: 0, y: 8, duration: 0.25, ease: 'power2.in' 
        });
      }
    });
  });

  // GALLERY - NO GSAP ANIMATIONS, SIMPLE CSS-ONLY TRANSITIONS
  const images = Array.from(document.querySelectorAll('.gallery-image'));
  const radios = Array.from(document.querySelectorAll('input[name="car-view"]'));
  
  // Set initial state without GSAP
  images.forEach((img, i) => {
    if (i === 0) {
      img.style.opacity = '1';
      img.style.zIndex = '20';
      img.style.transform = 'scale(1.05)';
    } else {
      img.style.opacity = '0';
      img.style.zIndex = '0';
      img.style.transform = 'scale(1)';
    }
  });

  function showImage(index) {
    images.forEach((img, i) => {
      if (i === index) {
        img.style.opacity = '1';
        img.style.zIndex = '20';
        img.style.transform = 'scale(1.05)';
        img.style.filter = 'brightness(1)';
      } else {
        img.style.opacity = '0';
        img.style.zIndex = '0';
        img.style.transform = 'scale(0.98)';
        img.style.filter = 'brightness(0.7)';
      }
    });
  }
  
  radios.forEach((r, idx) => {
    r.addEventListener('change', () => { showImage(idx); });
  });

  // Thumbnail hover preview with scale
  const thumbs = Array.from(document.querySelectorAll('.thumbnails label.thumb'));
  thumbs.forEach(thumb => {
    const targetId = thumb.getAttribute('for');
    const index = radios.findIndex(r => r.id === targetId);
    if (index >= 0) {
      thumb.addEventListener('mouseenter', () => {
        showImage(index);
        gsap.to(thumb, { scale: 1.12, duration: 0.25, ease: 'power2.out' });
      });
      thumb.addEventListener('mouseleave', () => {
        const checked = radios.findIndex(r => r.checked);
        showImage(checked >= 0 ? checked : 0);
        gsap.to(thumb, { scale: 1, duration: 0.25, ease: 'power2.out' });
      });
      thumb.addEventListener('click', () => {
        radios[index].checked = true;
        radios[index].dispatchEvent(new Event('change'));
        gsap.to(thumb, { 
          boxShadow: '0 0 20px rgba(244,192,37,0.5)', 
          duration: 0.4, ease: 'power2.out' 
        });
        setTimeout(() => { gsap.to(thumb, { boxShadow: 'none', duration: 0.3 }); }, 400);
        thumb.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      });
    }
  });

  // Control buttons with pulse effect
  document.querySelectorAll('.control-btn').forEach(btn => {
    const action = btn.querySelector('.material-symbols-outlined')?.textContent === 'chevron_left' ? 'prev' : 'next';
    btn.addEventListener('mouseenter', () => { gsap.to(btn, { scale: 1.15, duration: 0.2, ease: 'power2.out' }); });
    btn.addEventListener('mouseleave', () => { gsap.to(btn, { scale: 1, duration: 0.2, ease: 'power2.out' }); });
    btn.addEventListener('click', () => {
      gsap.to(btn, { scale: 0.95, duration: 0.1, yoyo: true, repeat: 1 });
      const current = radios.findIndex(r => r.checked);
      const len = radios.length;
      let next = current;
      if (action === 'prev') next = (current - 1 + len) % len;
      if (action === 'next') next = (current + 1) % len;
      radios[next].checked = true;
      radios[next].dispatchEvent(new Event('change'));
      const thumb = document.querySelector('.thumb-' + (next + 1));
      if (thumb) thumb.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    });
  });

  // Keyboard navigation with visual feedback
  let modalOpen = false;
  let chatOpen = false;
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && !modalOpen && !chatOpen) {
      const prevBtn = Array.from(document.querySelectorAll('.control-btn'))[0];
      if (prevBtn) { gsap.to(prevBtn, { x: -4, duration: 0.15, yoyo: true, repeat: 1 }); prevBtn.click(); }
    }
    if (e.key === 'ArrowRight' && !modalOpen && !chatOpen) {
      const nextBtn = Array.from(document.querySelectorAll('.control-btn'))[1];
      if (nextBtn) { gsap.to(nextBtn, { x: 4, duration: 0.15, yoyo: true, repeat: 1 }); nextBtn.click(); }
    }
    if (e.key === 'Escape') {
      if (modalOpen) closeModal();
      if (chatOpen) closeChat();
    }
  });

  // Modal: quote
  const modal = document.getElementById('quote-modal');
  const modalBackdrop = modal && modal.querySelector('.modal-backdrop');
  const modalPanel = modal && modal.querySelector('.modal-panel');
  const modalCloseBtns = modal && modal.querySelectorAll('.modal-close');
  const modalForm = modal && modal.querySelector('#quote-form');
  const requestBtn = document.getElementById('request-quote-btn');
  
  function openModal() {
    if (!modal) return;
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
    gsap.fromTo(modalBackdrop, { opacity: 0 }, { opacity: 0.6, duration: 0.3 });
    gsap.fromTo(modalPanel, 
      { y: 50, opacity: 0, scale: 0.95, rotationX: 10 }, 
      { y: 0, opacity: 1, scale: 1, rotationX: 0, duration: 0.5, ease: 'back.out(1.4)', transformOrigin: 'center top' }
    );
    gsap.from(modalForm.querySelectorAll('input, textarea'), {
      y: 10, opacity: 0, duration: 0.4, stagger: 0.05, delay: 0.2, ease: 'power2.out'
    });
    modalPanel.focus();
    modalOpen = true;
  }
  
  function closeModal() {
    if (!modal) return;
    gsap.to(modalPanel, { y: 30, opacity: 0, scale: 0.9, duration: 0.3, ease: 'back.in(1.2)', transformOrigin: 'center top' });
    gsap.to(modalBackdrop, { opacity: 0, duration: 0.25, onComplete: () => { modal.style.display = 'none'; modal.setAttribute('aria-hidden', 'true'); } });
    modalOpen = false;
  }
  
  if (requestBtn) {
    requestBtn.addEventListener('mouseenter', () => { gsap.to(requestBtn, { scale: 1.05, duration: 0.2, ease: 'power2.out' }); });
    requestBtn.addEventListener('mouseleave', () => { gsap.to(requestBtn, { scale: 1, duration: 0.2, ease: 'power2.out' }); });
    requestBtn.addEventListener('click', openModal);
  }
  
  if (modalCloseBtns) modalCloseBtns.forEach(b => b.addEventListener('click', closeModal));
  if (modalBackdrop) modalBackdrop.addEventListener('click', (e) => { if (e.target === modalBackdrop) closeModal(); });
  
  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submit = modalForm.querySelector('button[type="submit"]');
      const inputs = modalForm.querySelectorAll('input, textarea');
      submit.disabled = true;
      gsap.to(submit, { 
        scale: 0.95, duration: 0.1, yoyo: true, repeat: 1,
        background: 'var(--primary)'
      });
      gsap.to(inputs, { 
        opacity: 0.5, pointerEvents: 'none', duration: 0.2 
      });
      setTimeout(() => {
        gsap.to(submit, { 
          background: 'var(--primary)', 
          scale: 1, opacity: 0, y: -10, duration: 0.3, 
          onComplete: () => { submit.disabled = false; closeModal(); }
        });
      }, 500);
    });
  }

  // Chat drawer with slide animation
  const chatBtn = document.getElementById('chat-btn');
  const chatDrawer = document.getElementById('chat-drawer');
  const chatClose = document.getElementById('chat-close');
  const chatForm = document.getElementById('chat-form');
  const chatBody = document.querySelector('#chat-drawer .chat-body');
  
  function openChat() {
    if (!chatDrawer) return;
    chatDrawer.style.display = 'flex';
    gsap.fromTo(chatDrawer, { x: 400, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out' });
    gsap.from(chatForm, { 
      opacity: 0, y: 20, duration: 0.4, delay: 0.2, ease: 'power2.out' 
    });
    chatOpen = true;
  }
  
  function closeChat() {
    if (!chatDrawer) return;
    gsap.to(chatDrawer, { x: 400, opacity: 0, duration: 0.4, ease: 'power2.in', onComplete: () => { chatDrawer.style.display = 'none'; } });
    chatOpen = false;
  }
  
  if (chatBtn) {
    chatBtn.addEventListener('mouseenter', () => { gsap.to(chatBtn, { scale: 1.05, duration: 0.2, ease: 'power2.out' }); });
    chatBtn.addEventListener('mouseleave', () => { gsap.to(chatBtn, { scale: 1, duration: 0.2, ease: 'power2.out' }); });
    chatBtn.addEventListener('click', openChat);
  }
  
  if (chatClose) chatClose.addEventListener('click', closeChat);
  
  if (chatForm) {
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = chatForm.querySelector('input[name="message"]');
      const text = input.value.trim();
      if (!text) { gsap.to(input, { x: -5, duration: 0.1, yoyo: true, repeat: 3 }); return; }
      const msg = document.createElement('div');
      msg.className = 'chat-msg user';
      msg.textContent = text;
      chatBody.appendChild(msg);
      gsap.from(msg, { 
        opacity: 0, y: 15, x: 20, duration: 0.35, ease: 'power2.out' 
      });
      gsap.to(input, { opacity: 0.6, duration: 0.2 });
      input.value = '';
      input.disabled = true;
      setTimeout(() => {
        const reply = document.createElement('div');
        reply.className = 'chat-msg bot';
        reply.textContent = 'Thanks — a specialist will reach out shortly.';
        reply.style.color = "var(--color)";
        chatBody.appendChild(reply);
        gsap.from(reply, { 
          opacity: 0, y: 15, x: -20, duration: 0.4, ease: 'back.out(1.2)' 
        });
        input.disabled = false;
        gsap.to(input, { opacity: 1, duration: 0.2 });
        chatBody.scrollTop = chatBody.scrollHeight;
      }, 800);
    });
  }

  // Initial image render
  const checkedIndex = radios.findIndex(r => r.checked);
  showImage(checkedIndex >= 0 ? checkedIndex : 0);

  // Parallax on scroll for main-view
  window.addEventListener('scroll', () => {
    const mainView = document.querySelector('.main-view');
    if (mainView) {
      const rect = mainView.getBoundingClientRect();
      const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      gsap.to(mainView, { 
        y: (progress - 0.5) * 20, 
        duration: 0.2, 
        overwrite: 'auto' 
      });
    }
  });
});
