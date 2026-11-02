(function() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal').forEach(function(el) {
      el.style.opacity = '1';
    });
    return;
  }

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

  // 5. h2 titles reveal (exclude SplitText h2)
  document.querySelectorAll('h2:not(#af-text-reveal)').forEach(function(h2) {
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

  // ── GLOW & COLOR EFFECTS ──────────────────────────────────

  // 8. Glow orbs — each section gets a pink orb on scroll
  document.querySelectorAll('[data-glow]').forEach(function(sec) {
    var orb = document.createElement('div');
    var positions = [
      { x: '20%', y: '30%' }, { x: '75%', y: '25%' }, { x: '50%', y: '40%' },
      { x: '30%', y: '50%' }, { x: '65%', y: '35%' }, { x: '40%', y: '45%' },
      { x: '55%', y: '30%' }, { x: '25%', y: '40%' }
    ];
    var idx = parseInt(sec.dataset.glow) - 1;
    var pos = positions[idx % positions.length];

    Object.assign(orb.style, {
      position: 'absolute',
      left: pos.x,
      top: pos.y,
      width: '500px',
      height: '500px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(191,42,124,0.35) 0%, rgba(191,42,124,0.08) 40%, transparent 70%)',
      transform: 'translate(-50%,-50%) scale(0)',
      opacity: '0',
      pointerEvents: 'none',
      zIndex: '0',
      filter: 'blur(60px)',
      mixBlendMode: 'screen'
    });
    sec.appendChild(orb);

    gsap.to(orb, {
      opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out',
      scrollTrigger: { trigger: sec, start: 'top 75%', toggleActions: 'play none none none' }
    });

    gsap.to(orb, {
      y: -20, x: 15, duration: 4, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 1.2
    });
  });

  // 9. Color morph — section borders glow pink on scroll
  var glowSections = document.querySelectorAll('section[data-glow]');
  glowSections.forEach(function(sec, i) {
    if (i === 0) return;
    var computed = getComputedStyle(sec);
    if (computed.borderTopWidth !== '0px') {
      gsap.fromTo(sec,
        { borderTopColor: 'transparent' },
        {
          borderTopColor: 'rgba(191,42,124,0.25)',
          duration: 0.8, ease: 'power1.inOut',
          scrollTrigger: { trigger: sec, start: 'top 90%', end: 'top 50%', scrub: 0.6 }
        }
      );
    }
  });

  // 10. Focal spotlight on commercial sections
  ['#servicios', '#tienda', '#contacto'].forEach(function(sel) {
    var sec = document.querySelector(sel);
    if (!sec) return;

    var spot = document.createElement('div');
    Object.assign(spot.style, {
      position: 'absolute',
      left: '50%',
      top: '0',
      width: '800px',
      height: '400px',
      borderRadius: '50%',
      background: 'radial-gradient(ellipse, rgba(242,46,154,0.12) 0%, transparent 70%)',
      transform: 'translateX(-50%)',
      pointerEvents: 'none',
      zIndex: '0',
      filter: 'blur(40px)',
      opacity: '0'
    });
    sec.appendChild(spot);

    gsap.to(spot, {
      top: '100%', opacity: 1, ease: 'none',
      scrollTrigger: { trigger: sec, start: 'top bottom', end: 'bottom top', scrub: 0.5 }
    });
  });

  // 11. SplitText reveal — "Hola, soy Ainhoa"
  var revealH2 = document.querySelector('#af-text-reveal');
  var revealEyebrow = document.querySelector('#af-text-reveal-eyebrow');
  var revealP1 = document.querySelector('#af-text-reveal-p1');
  var revealP2 = document.querySelector('#af-text-reveal-p2');
  var revealP3 = document.querySelector('#af-text-reveal-p3');

  if (revealH2) {
    var ainhoaSpan = revealH2.querySelector('.sobre-title-cursive');
    var prefix = 'Hola, soy ';
    var charsHTML = '';

    for (var i = 0; i < prefix.length; i++) {
      var ch = prefix[i] === ' ' ? '&nbsp;' : prefix[i];
      charsHTML += '<span class="af-char" style="display:inline-block;opacity:0;transform:translateY(40px) rotateX(-90deg)">' + ch + '</span>';
    }

    if (ainhoaSpan) {
      var name = ainhoaSpan.textContent;
      for (var j = 0; j < name.length; j++) {
        charsHTML += '<span class="af-char sobre-title-cursive" style="display:inline-block;opacity:0;transform:translateY(40px) rotateX(-90deg)">' + name[j] + '</span>';
      }
    }

    revealH2.innerHTML = charsHTML;
    var chars = revealH2.querySelectorAll('.af-char');

    gsap.set([revealEyebrow, revealP1, revealP2, revealP3], { opacity: 0, y: 20 });

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: revealH2,
        start: 'top 82%',
        toggleActions: 'play none none none'
      }
    });

    if (revealEyebrow) tl.to(revealEyebrow, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }, 0);

    tl.to(chars, {
      opacity: 1, y: 0, rotateX: 0,
      duration: 0.6, stagger: 0.04, ease: 'back.out(1.7)',
      transformOrigin: '50% 50% -20px'
    }, 0.2);

    if (revealP1) tl.to(revealP1, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3');
    if (revealP2) tl.to(revealP2, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4');
    if (revealP3) tl.to(revealP3, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4');
  }
})();
