document.addEventListener("DOMContentLoaded", () => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
        tl.from(".header", { y: -50, opacity: 0, duration: 0.5 })
            .from(".sidebar", { x: -50, opacity: 0, duration: 0.5 }, "-=0.4");
    
        tl.from(".sidebar-profile", { opacity: 0, y: 10, duration: 0.35 }, "-=0.3")
            .from(".nav-item", { x: -20, opacity: 0, stagger: 0.06, duration: 0.4 }, "-=0.25")
            .from(".separator", { scaleX: 0, transformOrigin: "left", duration: 0.25 }, "-=0.3");
    
        tl.from(".header-text-content", { y: 20, opacity: 0, duration: 0.4 }, "-=0.4")
            .from(".btn-edit-profile", { scale: 0.9, opacity: 0, duration: 0.35 }, "-=0.3");
    
    tl.from(".stat-card", { y: 30, opacity: 0, stagger: 0.08, duration: 0.5, ease: "back.out(1.7)" }, "-=0.15");
    
    document.querySelectorAll('.counter').forEach(counter => {
        let target = parseInt(counter.getAttribute('data-target'));
        tl.to(counter, {
            innerHTML: target,
            duration: 1,
            snap: { innerHTML: 1 },
            ease: "power1.inOut"
        }, "<");
    });
    
        tl.from(".section-title", { opacity: 0, x: -10, duration: 0.3, stagger: 0.12 }, "-=0.8");

        tl.from(".activity-container", { clipPath: "inset(0 0 100% 0)", duration: 0.5, ease: "power2.inOut" }, "-=0.6")
            .from(".activity-item", { y: 20, opacity: 0, stagger: 0.09, duration: 0.4 }, "-=0.3");
    
    tl.from(".garage-card", { y: 40, opacity: 0, stagger: 0.14, duration: 0.5 }, "-=0.4");

    tl.from(".right-sidebar > div", { y: 30, opacity: 0, stagger: 0.12, duration: 0.5 }, "-=0.6");
    
    // Nav hover effects
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach(item => {
        const isActive = item.classList.contains('active');
        if (!isActive) {
            item.addEventListener("mouseenter", () => {
                gsap.to(item, { x: 5, backgroundColor: "#393528", color: "#fff", duration: 0.2 });
                gsap.to(item.querySelector('.material-symbols-outlined'), { scale: 1.2, color: "#f4c025", duration: 0.2 });
            });
            item.addEventListener("mouseleave", () => {
                gsap.to(item, { x: 0, backgroundColor: "transparent", color: "#bab29c", duration: 0.2 });
                gsap.to(item.querySelector('.material-symbols-outlined'), { scale: 1, color: "inherit", duration: 0.2 });
            });
        } else {
            item.addEventListener("mouseenter", () => {
                gsap.to(item, { scale: 1.02, duration: 0.2 });
            });
            item.addEventListener("mouseleave", () => {
                gsap.to(item, { scale: 1, duration: 0.2 });
            });
        }
    });
    
    // Stat cards hover
    const statCards = document.querySelectorAll(".stat-card");
    statCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            gsap.to(card, { y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)", duration: 0.2 });
        });
        card.addEventListener("mouseleave", () => {
            gsap.to(card, { y: 0, boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)", duration: 0.2 });
        });
    });
    
    // Activity items hover
    const activityItems = document.querySelectorAll(".activity-item");
    activityItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            gsap.to(item, { x: 5, duration: 0.2 });
            gsap.to(item.querySelector('.material-symbols-outlined'), { rotate: 10, scale: 1.1, duration: 0.2 });
        });
        item.addEventListener("mouseleave", () => {
            gsap.to(item, { x: 0, duration: 0.2 });
            gsap.to(item.querySelector('.material-symbols-outlined'), { rotate: 0, scale: 1, duration: 0.2 });
        });
    });
    
    // Checkbox animation
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach(box => {
        box.addEventListener("change", function() {
            if (this.checked) {
                gsap.fromTo(this, { scale: 1 }, { scale: 1.25, duration: 0.1, yoyo: true, repeat: 1 });
            }
        });
    });
    
    // Link hover effects
    const links = document.querySelectorAll(".track-btn, .edit-full-btn, .redeem-btn, .view-all-link, .nav-link-top");
    links.forEach(link => {
        link.addEventListener("mouseenter", () => {
            gsap.to(link, { letterSpacing: "1px", color: "#f4c025", duration: 0.2 });
        });
        link.addEventListener("mouseleave", () => {
            gsap.to(link, { letterSpacing: "normal", clearProps: "color", duration: 0.2 });
        });
    });
    
    // Primary buttons
    const buttons = document.querySelectorAll(".save-btn, .btn-edit-profile");
    buttons.forEach(btn => {
        btn.addEventListener("mousedown", () => {
            gsap.to(btn, { scale: 0.96, duration: 0.06 });
        });
        btn.addEventListener("mouseup", () => {
            gsap.to(btn, { scale: 1, duration: 0.3, ease: "elastic.out(1, 0.3)" });
        });
    });
    
    // Bookmark button
    const bmkBtns = document.querySelectorAll(".bookmark-btn");
    bmkBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            gsap.fromTo(btn, { scale: 0.85 }, { scale: 1.15, duration: 0.15, yoyo: true, repeat: 1 });
            const icon = btn.querySelector('span');
            if (icon.classList.contains('filled')) {
                icon.style.fontVariationSettings = "'FILL' 0";
                icon.classList.remove('filled');
                btn.style.backgroundColor = "rgba(0,0,0,0.5)";
                btn.style.color = "white";
            } else {
                icon.style.fontVariationSettings = "'FILL' 1";
                icon.classList.add('filled');
                btn.style.backgroundColor = "#f4c025";
                btn.style.color = "black";
            }
        });
    });
    
    // Logo animation
    const logo = document.querySelector('.logo-container');
    logo.addEventListener('mouseenter', () => {
        gsap.to('.logo-icon', { rotate: 180, duration: 0.4, ease: "back.out(1.7)" });
    });
    logo.addEventListener('mouseleave', () => {
        gsap.to('.logo-icon', { rotate: 0, duration: 0.4, ease: "back.out(1.7)" });
    });
    // ensure any inline properties GSAP set for the entrance are cleared
    // so elements return to their natural, visible CSS state after entrance
    tl.call(() => gsap.set([
        '.header', '.sidebar', '.sidebar-profile', '.nav-item',
        '.header-text-content', '.btn-edit-profile', '.stat-card',
        '.section-title', '.activity-item', '.garage-card', '.right-sidebar > div'
    ], { clearProps: 'all' }));

});