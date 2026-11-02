# Efecto SplitText Reveal — "Hola, soy Ainhoa"

## Dependencias
Ya tienes GSAP + ScrollTrigger cargados. No necesitas SplitText (plugin de pago), lo hacemos manual.

## Dónde aplicar
En la sección "Sobre mí", el `<h2>` que dice "Hola, soy Ainhoa" y los 3 párrafos debajo.

## Añadir IDs al HTML
```html
<h2 id="af-text-reveal" ...>Hola, soy <span style="...estilos del nombre Ainhoa...">Ainhoa</span></h2>
<p id="af-text-reveal-p1" ...>Soy una apasionada del Fitness como estilo de vida.</p>
<p id="af-text-reveal-p2" ...>Puedo ayudarte a mejorar tu físico...</p>
<p id="af-text-reveal-p3" ...>La clave del éxito está en encontrar el plan...</p>
```

## JavaScript (después de gsap.registerPlugin(ScrollTrigger))
```js
// SplitText-style reveal for "Hola, soy Ainhoa"
const revealH2 = document.querySelector('#af-text-reveal');
const revealP1 = document.querySelector('#af-text-reveal-p1');
const revealP2 = document.querySelector('#af-text-reveal-p2');
const revealP3 = document.querySelector('#af-text-reveal-p3');

if (revealH2) {
  // Obtener el span de Ainhoa y su estilo
  const ainhoaSpan = revealH2.querySelector('span');
  const prefix = 'Hola, soy ';
  let charsHTML = '';

  // Split "Hola, soy " en caracteres individuales
  for (let i = 0; i < prefix.length; i++) {
    const ch = prefix[i] === ' ' ? '&nbsp;' : prefix[i];
    charsHTML += '<span class="af-char" style="display:inline-block;opacity:0;transform:translateY(40px) rotateX(-90deg)">' + ch + '</span>';
  }

  // Split "Ainhoa" en caracteres con el estilo rosa/cursivo
  if (ainhoaSpan) {
    const name = ainhoaSpan.textContent;
    const sty = ainhoaSpan.getAttribute('style');
    for (let i = 0; i < name.length; i++) {
      charsHTML += '<span class="af-char" style="display:inline-block;opacity:0;transform:translateY(40px) rotateX(-90deg);' + sty + '">' + name[i] + '</span>';
    }
  }

  // Reemplazar contenido del h2 con los chars
  revealH2.innerHTML = charsHTML;
  const chars = revealH2.querySelectorAll('.af-char');

  // Ocultar párrafos inicialmente
  [revealP1, revealP2, revealP3].forEach(p => {
    if (p) {
      p.style.opacity = '0';
      p.style.transform = 'translateY(20px)';
    }
  });

  // Timeline animada con ScrollTrigger
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: revealH2,
      start: 'top 82%',
      toggleActions: 'play none none none'
    }
  });

  // Letras aparecen una por una con efecto 3D
  tl.to(chars, {
    opacity: 1,
    y: 0,
    rotateX: 0,
    duration: 0.6,
    stagger: 0.04,
    ease: 'back.out(1.7)',
    transformOrigin: '50% 50% -20px'
  });

  // Párrafos entran en cascada
  if (revealP1) tl.to(revealP1, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3');
  if (revealP2) tl.to(revealP2, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4');
  if (revealP3) tl.to(revealP3, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4');
}
```

## Resultado
- Las letras de "Hola, soy " aparecen una por una con rotación 3D (rotateX + translateY)
- "Ainhoa" mantiene su estilo cursivo rosa y se revela con el mismo efecto
- Los 3 párrafos se deslizan después en cascada con fade-in
- Todo se activa al hacer scroll hasta esa sección (start: top 82%)
- Se ejecuta una sola vez (toggleActions: play none none none)

## Nota importante
Excluir este h2 de la animación genérica de h2 para que no se duplique:
```js
// En la animación genérica de h2, añadir :not(#af-text-reveal)
document.querySelectorAll('h2:not(#af-text-reveal)').forEach(h2 => { ... });
```
