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

  // IMC calculator
  document.getElementById('imcForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var kg = parseFloat(document.getElementById('imcPeso').value.replace(',', '.'));
    var cm = parseFloat(document.getElementById('imcAltura').value.replace(',', '.'));
    var val = document.getElementById('imcVal');
    var cat = document.getElementById('imcCat');
    var hint = document.getElementById('imcHint');

    if (!(kg > 0) || !(cm > 0)) {
      val.textContent = '—';
      cat.textContent = 'Faltan datos';
      hint.textContent = 'Escribe tu peso en kg y tu altura en cm.';
      return;
    }

    var imc = kg / Math.pow(cm / 100, 2);
    var c, h;
    if (imc < 18.5) { c = 'Peso insuficiente'; h = 'Por debajo del rango de referencia. Merece la pena revisarlo con calma.'; }
    else if (imc < 25) { c = 'Peso normal'; h = 'Dentro del rango de referencia para población adulta general.'; }
    else if (imc < 30) { c = 'Sobrepeso'; h = 'Por encima del rango. Con un plan realista se trabaja bien desde aquí.'; }
    else { c = 'Obesidad'; h = 'Conviene valorarlo con un profesional sanitario antes de empezar.'; }

    val.textContent = imc.toFixed(1);
    cat.textContent = c;
    hint.textContent = h;
  });

  // Lead form (demo)
  document.getElementById('leadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var msg = document.getElementById('leadMsg');
    var email = document.getElementById('leadEmail').value.trim();
    if (!email || email.indexOf('@') < 1) {
      msg.style.color = '#F0A88C';
      msg.textContent = 'Escribe un email válido.';
      return;
    }
    if (!document.getElementById('leadOk').checked) {
      msg.style.color = '#F0A88C';
      msg.textContent = 'Marca la casilla de privacidad.';
      return;
    }
    msg.style.color = '';
    msg.textContent = 'Demo: aquí se conectaría el envío.';
  });

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
