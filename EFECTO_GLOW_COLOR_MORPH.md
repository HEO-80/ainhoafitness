# Efectos GSAP Glow + Color Morph — Instrucciones para Claude Code

## Resumen
Añadir 3 efectos GSAP+ScrollTrigger a todas las secciones de la página: orbes de luz fucsia, color morph en bordes, y spotlight focal.

## Dependencias
Ya cargadas: GSAP 3.12.5 + ScrollTrigger

## 1. Preparar secciones HTML

Añadir a cada `<section>` principal estos atributos:
- `data-glow="N"` (N = 1,2,3... según orden)
- `position: relative; overflow: hidden` en el style

Secciones (en orden):
1. `#sobre` → `data-glow="1"`
2. Campeona Bikini Fitness → `id="competicion" data-glow="2"`
3. Mi Filosofía → `id="filosofia" data-glow="3"`
4. `#servicios` → `data-glow="4"`
5. `#metodo` → `data-glow="5"`
6. `#tienda` → `data-glow="6"`
7. `#recomendados` → `data-glow="7"`
8. `#contacto` → `data-glow="8"`

## 2. JavaScript — Glow Orbs (efecto principal)

Después de `gsap.registerPlugin(ScrollTrigger)`:

```js
// === GLOW & COLOR EFFECTS ===

// 1. Glow orbs — cada sección tiene un orbe fucsia que aparece al scroll
document.querySelectorAll('[data-glow]').forEach(sec => {
  const orb = document.createElement('div');
  const positions = [
    { x: '20%', y: '30%' }, { x: '75%', y: '25%' }, { x: '50%', y: '40%' },
    { x: '30%', y: '50%' }, { x: '65%', y: '35%' }, { x: '40%', y: '45%' },
    { x: '55%', y: '30%' }, { x: '25%', y: '40%' }
  ];
  const idx = parseInt(sec.dataset.glow) - 1;
  const pos = positions[idx % positions.length];

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

  // Aparece al scroll (solo la primera vez)
  gsap.to(orb, {
    opacity: 1,
    scale: 1,
    duration: 1.2,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: sec,
      start: 'top 75%',
      toggleActions: 'play none none none'
    }
  });

  // Flotación sutil continua después del reveal
  gsap.to(orb, {
    y: -20,
    x: 15,
    duration: 4,
    ease: 'sine.inOut',
    yoyo: true,
    repeat: -1,
    delay: 1.2
  });
});
```

## 3. JavaScript — Color Morph (bordes suaves entre secciones)

```js
// 2. Color morph — bordes entre secciones se iluminan suavemente
const allSections = document.querySelectorAll('section[data-glow]');
allSections.forEach((sec, i) => {
  if (i === 0) return;
  if (sec.style.borderTop) {
    gsap.fromTo(sec,
      { borderTopColor: 'transparent' },
      {
        borderTopColor: 'rgba(191,42,124,0.25)',
        duration: 0.8,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: sec,
          start: 'top 90%',
          end: 'top 50%',
          scrub: 0.6
        }
      }
    );
  }
});
```

## 4. JavaScript — Focal Spotlight (secciones clave)

```js
// 3. Spotlight focal en secciones comerciales
const spotSections = ['#servicios', '#tienda', '#contacto'];
spotSections.forEach(sel => {
  const sec = document.querySelector(sel);
  if (!sec) return;

  const spot = document.createElement('div');
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

  // El spot sigue el scroll dentro de la sección
  gsap.to(spot, {
    top: '100%',
    opacity: 1,
    ease: 'none',
    scrollTrigger: {
      trigger: sec,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 0.5
    }
  });
});
```

## Resultado visual
- **Glow orbs**: cada sección "se enciende" con un orbe fucsia difuminado que aparece al llegar y luego flota suavemente
- **Color morph**: las líneas separadoras entre secciones pasan de invisible a fucsia sutil, suavizando las transiciones
- **Focal spotlight**: en servicios, tienda y contacto, un foco de luz acompaña el scroll

## Colores usados
- Fucsia principal: `rgba(191,42,124,0.35)` (orbs)
- Fucsia borde: `rgba(191,42,124,0.25)` (morph)
- Fucsia spotlight: `rgba(242,46,154,0.12)` (focal)
- Blend mode: `screen` (funciona mejor en fondos oscuros)

## Notas
- `toggleActions: 'play none none none'` = solo se ejecuta la primera vez
- `scrub` = se mueve con el scroll (no una sola vez)
- Los orbes tienen `pointer-events: none` y `z-index: 0` para no interferir con clicks
- Asegurar que las secciones padre tengan `position: relative; overflow: hidden`
