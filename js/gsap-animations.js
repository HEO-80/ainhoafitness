(function() {
  gsap.registerPlugin(ScrollTrigger);

  var handled = new Set();

  // 1. Fade-in + slide-up on sections (hero excluded — above fold)
  document.querySelectorAll('section:not(.hero)').forEach(function(sec) {
    gsap.fromTo(sec, { opacity: 0, y: 60 }, {
      opacity: 1, y: 0, duration: 0.9, ease: 'power2.out',
      scrollTrigger: { trigger: sec, start: 'top 85%', toggleActions: 'play none none none' }
    });
  });

  var statsBar = document.querySelector('.stats-bar');
  if (statsBar) {
    gsap.fromTo(statsBar, { opacity: 0, y: 60 }, {
      opacity: 1, y: 0, duration: 0.9, ease: 'power2.out',
      scrollTrigger: { trigger: statsBar, start: 'top 85%', toggleActions: 'play none none none' }
    });
  }

  // 2. Stagger on cards
  document.querySelectorAll('.servicios-grid, .metodo-grid, .plans-grid, .shop-grid, .recs-grid, .reels').forEach(function(parent) {
    var cards = parent.children;
    Array.from(cards).forEach(function(c) { handled.add(c); });
    gsap.fromTo(cards, { opacity: 0, y: 40, scale: 0.95 }, {
      opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.12, ease: 'back.out(1.4)',
      scrollTrigger: { trigger: parent, start: 'top 80%', toggleActions: 'play none none none' }
    });
  });

  // 3. Parallax on hero image
  var heroImg = document.querySelector('.hero-bg img');
  if (heroImg) {
    gsap.to(heroImg, {
      y: 80, ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.5 }
    });
  }

  // 4. Scale-in on competition photos
  document.querySelectorAll('.comp-gallery .af-glow-card').forEach(function(el, i) {
    handled.add(el);
    gsap.fromTo(el, { scale: 0.8, opacity: 0 }, {
      scale: 1, opacity: 1, duration: 0.7, delay: i * 0.1, ease: 'back.out(1.2)',
      scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
    });
  });

  // 5. h2 titles reveal
  document.querySelectorAll('h2').forEach(function(h2) {
    gsap.fromTo(h2, { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: h2, start: 'top 88%', toggleActions: 'play none none none' }
    });
  });

  // 6. CTA buttons bounce
  document.querySelectorAll('.btn-pink, .btn-border, .btn-wa-pink, .btn-wa-small, .btn-submit').forEach(function(btn) {
    gsap.fromTo(btn, { scale: 0.9, opacity: 0 }, {
      scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(2)',
      scrollTrigger: { trigger: btn, start: 'top 90%', toggleActions: 'play none none none' }
    });
  });

  // 7. Parallax on hero logo
  var brillos = document.querySelector('.hero-logo-wrap');
  if (brillos) {
    handled.add(brillos);
    gsap.fromTo(brillos, { opacity: 0 }, {
      opacity: 1, duration: 0.9, ease: 'power2.out',
      scrollTrigger: { trigger: brillos, start: 'top 85%', toggleActions: 'play none none none' }
    });
    gsap.to(brillos, {
      y: -40, ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.8 }
    });
  }

  // Generic reveal for remaining .reveal elements
  document.querySelectorAll('.reveal').forEach(function(el) {
    if (handled.has(el)) return;
    gsap.fromTo(el, { opacity: 0, y: 28 }, {
      opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
    });
  });
})();
