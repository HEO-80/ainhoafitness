(function() {
  // Theme toggle
  var html = document.documentElement;
  var toggle = document.getElementById('themeToggle');
  var saved = localStorage.getItem('af-theme') || 'dark';
  html.setAttribute('data-theme', saved);
  updateToggleLabel();

  toggle.addEventListener('click', function() {
    var next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('af-theme', next);
    updateToggleLabel();
  });

  function updateToggleLabel() {
    toggle.textContent = html.getAttribute('data-theme') === 'dark' ? 'Modo claro' : 'Modo oscuro';
  }

  // Header scroll
  var header = document.getElementById('siteHeader');
  window.addEventListener('scroll', function() {
    header.classList.toggle('scrolled', window.scrollY > 60);
  });

  // Burger menu
  var burger = document.getElementById('burger');
  var headerNav = document.getElementById('headerNav');
  burger.addEventListener('click', function() {
    headerNav.classList.toggle('open');
  });
  headerNav.querySelectorAll('a').forEach(function(a) {
    a.addEventListener('click', function() { headerNav.classList.remove('open'); });
  });

  // Reveal on scroll with staggered delay
  var reveals = document.querySelectorAll('.reveal');
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(function(el) { observer.observe(el); });

  // Contact form (demo)
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('formSuccess').style.display = 'block';
    this.reset();
    setTimeout(function() {
      document.getElementById('formSuccess').style.display = 'none';
    }, 5000);
  });

  // IMC calculator (live)
  function calcIMC() {
    var pesoEl = document.getElementById('imcPeso');
    var altEl = document.getElementById('imcAltura');
    var val = document.getElementById('imcVal');
    var cat = document.getElementById('imcCat');
    if (!pesoEl || !altEl || !val || !cat) return;
    var kg = parseFloat(pesoEl.value.replace(',', '.'));
    var cm = parseFloat(altEl.value.replace(',', '.'));
    if (!(kg > 0) || !(cm > 0)) {
      val.textContent = '—';
      cat.textContent = 'Introduce tus datos';
      return;
    }
    var imc = kg / Math.pow(cm / 100, 2);
    var c;
    if (imc < 18.5) c = 'Bajo peso';
    else if (imc < 25) c = 'Peso normal';
    else if (imc < 30) c = 'Sobrepeso';
    else c = 'Obesidad';
    val.textContent = imc.toFixed(1).replace('.', ',');
    cat.textContent = c;
  }
  var imcPesoEl = document.getElementById('imcPeso');
  var imcAltEl = document.getElementById('imcAltura');
  if (imcPesoEl) imcPesoEl.addEventListener('input', calcIMC);
  if (imcAltEl) imcAltEl.addEventListener('input', calcIMC);

  // Accessible tabs (tienda and videos)
  document.querySelectorAll('[role="tablist"]').forEach(function(list) {
    var tabs = Array.from(list.querySelectorAll('[role="tab"]'));
    var select = function(tab) {
      tabs.forEach(function(t) {
        var on = t === tab;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.tabIndex = on ? 0 : -1;
        var panel = document.getElementById(t.getAttribute('aria-controls'));
        panel.hidden = !on;
        if (on) panel.querySelectorAll('.reveal').forEach(function(el) { el.classList.add('visible'); });
      });
    };
    list.addEventListener('click', function(e) {
      var t = e.target.closest('[role="tab"]');
      if (t) select(t);
    });
    list.addEventListener('keydown', function(e) {
      var i = tabs.indexOf(document.activeElement);
      if (i < 0) return;
      var next = null;
      if (e.key === 'ArrowRight') next = tabs[(i + 1) % tabs.length];
      else if (e.key === 'ArrowLeft') next = tabs[(i - 1 + tabs.length) % tabs.length];
      else if (e.key === 'Home') next = tabs[0];
      else if (e.key === 'End') next = tabs[tabs.length - 1];
      if (next) { e.preventDefault(); next.focus(); select(next); }
    });
  });

  // Video facade: iframe created on click only
  document.querySelectorAll('.reel-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var id = btn.dataset.yt;
      if (!id || id.indexOf('REEMPLAZAR_') === 0) {
        var ph = btn.querySelector('.reel-ph');
        if (ph) ph.textContent = 'Vídeo pendiente';
        return;
      }
      var frame = document.createElement('iframe');
      frame.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) + '?autoplay=1&rel=0';
      frame.title = btn.dataset.title || 'Vídeo';
      frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      frame.allowFullscreen = true;
      frame.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;border:0';
      btn.parentElement.style.position = 'relative';
      btn.parentElement.style.aspectRatio = '16/10';
      btn.replaceWith(frame);
    });
  });

  // Counter animation for stats
  var statNumbers = document.querySelectorAll('.stat-number[data-count]');
  var statObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        var target = parseInt(e.target.dataset.count);
        var current = 0;
        var step = Math.ceil(target / 40);
        var timer = setInterval(function() {
          current += step;
          if (current >= target) { current = target; clearInterval(timer); }
          e.target.textContent = current;
        }, 30);
        statObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  statNumbers.forEach(function(el) { statObserver.observe(el); });
})();
