# Prompt para Claude Code — Ainhoa-Fitness (versión demo)

Copia todo lo que hay debajo de la línea y pégalo en Claude Code dentro del repo `ainhoafitness`.

---

Trabaja sobre `index.html` del repo (HTML, CSS y JS puros, sin frameworks ni librerías). Es una VERSIÓN DEMO para enseñársela a la clienta.

**Regla importante: NO toques las imágenes.** Deja exactamente los `src` de `/img` que ya hay en el repo (hero, sobre mí, competición, filosofía, vídeos, guías, material). No sustituyas ninguna ruta por URLs externas.

**No hagas en esta pasada:** páginas legales nuevas, Stripe, Formspree ni ningún envío real.

Haz todos los cambios en una sola pasada y al final dime qué has tocado.

## 1. Tienda sin cesta

- Elimina el botón "Cesta" del menú y todo el HTML, CSS y JS de carrito si queda algo.
- En cada plan deja **un solo botón**: "Consultar por WhatsApp", eliminando los enlaces de Stripe (`buy.stripe.com/...`) y sus comentarios TODO.
- Mensaje prellenado distinto por plan, a `https://wa.me/34626582377?text=...`:
  - Plan de Entrenamiento → `Hola%20Ainhoa%2C%20vengo%20de%20la%20web%20y%20me%20interesa%20el%20Plan%20de%20Entrenamiento`
  - Pack Integral Online → `Hola%20Ainhoa%2C%20vengo%20de%20la%20web%20y%20me%20interesa%20el%20Pack%20Integral%20Online`
  - Plan de Nutrición → `Hola%20Ainhoa%2C%20vengo%20de%20la%20web%20y%20me%20interesa%20el%20Plan%20de%20Nutrici%C3%B3n`
- Las guías digitales y el material: mismo criterio, botón "Consultar" a WhatsApp con el nombre del producto en el texto.
- Mantén el distintivo "Más elegido" y las pestañas Planes / Guías digitales / Material.
- Sustituye los textos que mencionan Stripe:
  - Bajo los planes: `Sin carrito ni pago online: me escribes por WhatsApp, vemos si el plan encaja contigo y te paso los detalles.`
  - Nota final de la tienda: `Todo se gestiona por WhatsApp: te confirmo disponibilidad, plazos y forma de pago antes de nada.`

Ejemplo del bloque de acciones de un plan:

```html
<div class="acts">
  <a class="btn btn-wa" href="https://wa.me/34626582377?text=Hola%20Ainhoa%2C%20vengo%20de%20la%20web%20y%20me%20interesa%20el%20Pack%20Integral%20Online" target="_blank" rel="noopener">Consultar por WhatsApp</a>
</div>
```

## 2. Hero

- Foto de fondo (la que ya está en `/img`) con overlay oscuro en degradado.
- Quita el `<video>` activo del hero y su JS asociado (`heroVideo`, `setupHeroVideo`, listeners de `prefers-reduced-motion` del vídeo). Déjalo **comentado** para el futuro:

```html
<!-- Foto de fondo con overlay (definida en .hero del CSS).
     TODO futuro: cuando haya vídeo propio, subir img/hero.mp4 y descomentar esto
<video autoplay muted loop playsinline poster="img/hero.jpg">
  <source src="img/hero.mp4" type="video/mp4">
</video>
-->
```

El overlay del CSS (ya existente, mantenlo):

```css
.hero .scrim{position:absolute;inset:0;background:linear-gradient(100deg,rgba(12,10,9,.92) 0%,rgba(12,10,9,.74) 45%,rgba(12,10,9,.3) 100%);pointer-events:none}
```

## 3. Vídeos

Sin cambios de formato, solo confirma que se cumple:

- Tarjetas verticales 9:16, **2 columnas en móvil y 4 en escritorio**.
- Pestañas Ejercicios / Testimonios.
- Facade: el `<iframe>` de `youtube-nocookie.com` se crea **al hacer clic**, nunca precargado.
- Cada tarjeta mantiene su TODO: `sustituir por ID de YouTube` (`data-yt="REEMPLAZAR_YT_1"`, etc.).

```css
.reels{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;margin-top:34px}
@media(min-width:900px){.reels{grid-template-columns:repeat(4,minmax(0,1fr))}}
.reel{position:relative;aspect-ratio:9/16;overflow:hidden}
```

## 4. Banner de versión demo

Justo después de `<body>` (antes del `<header>`):

```html
<div class="demo"><b>Versión demo</b> — contenido provisional</div>
```

```css
.demo{background:var(--ink);color:var(--cream);text-align:center;padding:9px 16px;font-size:10.5px;font-weight:700;letter-spacing:.24em;text-transform:uppercase}
.demo b{color:var(--coral);font-weight:700}
```

## 5. Menú

Añade "Recomendados" y "Calculadora" al `<nav>` (sirve también para el hamburguesa, es el mismo nav) y al listado "Web" del footer:

```html
<a href="#tienda">Tienda</a>
<a href="#recomendados">Recomendados</a>
<a href="#imc">Calculadora</a>
<a class="btn btn-primary" href="#contacto">Contactar</a>
```

**Importante:** el menú móvil estaba posicionado con `position:fixed;inset:59px 0 auto`, y con el banner demo arriba se descuadra. Cámbialo a posicionamiento relativo al header y sube el punto de ruptura a 980px (el menú tiene ahora más enlaces):

```css
@media(max-width:980px){
  .nav{position:absolute;top:100%;left:0;right:0;flex-direction:column;align-items:stretch;gap:0;padding:8px var(--pad) 20px;background:var(--cream);border-bottom:1px solid var(--line);display:none}
  .nav.open{display:flex}
  .nav a{padding:15px 0;border-bottom:1px solid var(--line)}
  .nav a.btn{margin-top:14px;border-bottom:0}
  .burger{display:flex}
}
```

## 6. Secciones nuevas

Orden final de la página: hero → stats → sobre mí → competición → servicios → filosofía → método + vídeos → tienda → **recomendados** → **calculadora IMC** → **guía gratis** → contacto → footer.

Inserta los tres bloques justo **antes** de `<section class="sec wrap contact" id="contacto">`:

```html
<!-- TODO: sustituir por productos reales y sus enlaces de afiliado -->
<section class="sec wrap" id="recomendados">
  <div class="center">
    <p class="eyebrow">Lo que uso</p>
    <h2 class="h2">Mis productos recomendados</h2>
    <p class="lede">Básicos sencillos que recomiendo a mis clientas. Nada imprescindible: primero el entrenamiento y la comida.</p>
  </div>
  <div class="recs">
    <article class="rec">
      <div class="ph">Foto del producto</div>
      <div class="body">
        <h3>Creatina monohidrato</h3>
        <p>El suplemento con más evidencia detrás. 3-5 g al día, a la hora que mejor te venga.</p>
        <a class="btn btn-ghost" href="#" rel="nofollow sponsored">Ver producto</a>
      </div>
    </article>
    <article class="rec">
      <div class="ph">Foto del producto</div>
      <div class="body">
        <h3>Proteína en polvo</h3>
        <p>Útil solo si no llegas a tu proteína diaria con comida real. Cómoda después de entrenar.</p>
        <a class="btn btn-ghost" href="#" rel="nofollow sponsored">Ver producto</a>
      </div>
    </article>
    <article class="rec">
      <div class="ph">Foto del producto</div>
      <div class="body">
        <h3>Bandas de resistencia</h3>
        <p>Para activar glúteo antes de entrenar y para las semanas que entrenes fuera de casa.</p>
        <a class="btn btn-ghost" href="#" rel="nofollow sponsored">Ver producto</a>
      </div>
    </article>
  </div>
  <p class="afil">Algunos enlaces son de afiliado: si compras, recibo una comisión sin coste extra para ti.</p>
</section>

<section class="sec imc" id="imc">
  <div class="wrap">
    <div class="center">
      <p class="eyebrow">Punto de partida</p>
      <h2 class="h2">Calculadora de IMC</h2>
      <p class="lede">Un primer dato para situarte. El cálculo se hace en tu navegador: no se guarda ni se envía nada.</p>
    </div>
    <div class="box">
      <form id="imcForm" novalidate>
        <div class="two">
          <label>Peso (kg)<input type="number" id="imcPeso" min="25" max="300" step="0.1" inputmode="decimal" placeholder="62"></label>
          <label>Altura (cm)<input type="number" id="imcAltura" min="100" max="230" step="1" inputmode="numeric" placeholder="165"></label>
        </div>
        <button class="btn btn-primary" type="submit" style="justify-self:start">Calcular</button>
      </form>
      <div class="out" aria-live="polite">
        <div class="val" id="imcVal">—</div>
        <div class="cat" id="imcCat">Introduce tus datos</div>
        <p class="hint" id="imcHint">Peso en kilogramos y altura en centímetros.</p>
        <p class="warn">Orientativo. El IMC no distingue músculo de grasa y no sustituye una valoración profesional.</p>
        <a class="btn btn-primary" href="#contacto">Reserva tu consulta gratuita</a>
      </div>
    </div>
  </div>
</section>

<section class="sec lead">
  <div class="wrap inner">
    <div>
      <p class="eyebrow">Gratis</p>
      <h2 class="h2">Descarga tu mini guía gratis</h2>
      <p class="lede">Siete páginas con lo básico para empezar a entrenar y comer mejor sin volverte loca: estructura de la semana, calentamiento y cómo montar tus platos.</p>
    </div>
    <!-- Demo: el formulario no envía nada. TODO: conectar el envío real más adelante. -->
    <form id="leadForm" novalidate>
      <div class="field">
        <input type="email" id="leadEmail" name="email" placeholder="tu@email.com" aria-label="Tu email" required>
        <button class="btn btn-primary" type="submit">Enviar</button>
      </div>
      <label class="consent">
        <input type="checkbox" id="leadOk" required>
        <span>Acepto la <a href="privacidad.html">política de privacidad</a> y recibir la guía por email.</span>
      </label>
      <p class="msg" id="leadMsg" aria-live="polite"></p>
    </form>
  </div>
</section>
```

Si en el repo no existe `privacidad.html`, deja el texto sin enlace (no crees la página en esta pasada).

## 7. CSS de las secciones nuevas

Añádelo al `<style>`, antes del bloque de media queries:

```css
/* ---------- calculadora IMC ---------- */
.imc{background:var(--panel);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.imc .box{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:clamp(28px,5vw,64px);align-items:start;margin-top:44px}
.imc form{gap:18px}
.imc .out{border:1px solid var(--line);background:var(--cream);padding:clamp(24px,4vw,36px);display:grid;gap:10px;align-content:start}
.imc .val{font-family:var(--serif);font-size:clamp(40px,7vw,62px);font-weight:700;line-height:1;color:var(--coral)}
.imc .cat{font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--ink)}
.imc .hint{margin:0;font-size:13px;line-height:1.7;color:var(--muted)}
.imc .warn{margin:6px 0 0;font-size:12.5px;line-height:1.6;color:var(--soft)}
.imc .out .btn{justify-self:start;margin-top:8px}

/* ---------- guía gratis ---------- */
.lead{background:var(--ink);color:var(--cream)}
.lead .inner{display:grid;grid-template-columns:repeat(auto-fit,minmax(290px,1fr));gap:clamp(28px,5vw,64px);align-items:center}
.lead h2{color:var(--cream)}
.lead p{color:#B8AEA3}
.lead form{gap:14px}
.lead .field{display:flex;flex-wrap:wrap;gap:10px}
.lead .field input{flex:1 1 200px;background:rgba(251,247,242,.06);border-color:rgba(251,247,242,.24);color:var(--cream)}
.lead .field input::placeholder{color:#8D8378}
.lead .consent{color:#B8AEA3}
.lead .consent a{color:#F0A88C}
.lead .msg{margin:0;font-size:13px;color:#7FBFA4;min-height:20px}

/* ---------- recomendados ---------- */
.recs{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:18px;margin-top:44px}
.rec{display:flex;flex-direction:column;border:1px solid var(--line);background:var(--panel)}
.rec .ph{aspect-ratio:4/3;display:flex;align-items:center;justify-content:center;background:var(--band);color:var(--soft);font-size:11px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;text-align:center;padding:12px}
.rec .body{display:flex;flex-direction:column;flex:1;padding:22px}
.rec h3{font-size:18px;font-weight:700}
.rec p{margin:10px 0 18px;font-size:13.5px;line-height:1.7;color:var(--muted);flex:1}
.rec .btn{align-self:start}
.afil{margin:26px auto 0;max-width:660px;text-align:center;font-size:12.5px;line-height:1.7;color:var(--muted)}
```

Depende de variables ya existentes (`--ink`, `--cream`, `--panel`, `--band`, `--line`, `--muted`, `--soft`, `--coral`, `--serif`) y de las clases `.sec`, `.wrap`, `.center`, `.eyebrow`, `.h2`, `.lede`, `.two`, `.consent`, `.btn`. Si alguna no existe en el repo, créala igual que en el resto de la página en vez de inventar estilos nuevos.

## 8. JS de las secciones nuevas

Dentro del IIFE existente, junto al resto de bloques:

```js
/* ---------- calculadora de IMC (todo en el navegador) ---------- */
var imcForm = document.getElementById("imcForm");
imcForm.addEventListener("submit", function(e){
  e.preventDefault();
  var kg = parseFloat(document.getElementById("imcPeso").value.replace(",", "."));
  var cm = parseFloat(document.getElementById("imcAltura").value.replace(",", "."));
  var val = document.getElementById("imcVal"), cat = document.getElementById("imcCat"), hint = document.getElementById("imcHint");
  if (!(kg > 0) || !(cm > 0)) { val.textContent = "—"; cat.textContent = "Faltan datos"; hint.textContent = "Escribe tu peso en kg y tu altura en cm."; return; }
  var imc = kg / Math.pow(cm / 100, 2);
  var c, h;
  if (imc < 18.5) { c = "Peso insuficiente"; h = "Por debajo del rango de referencia. Merece la pena revisarlo con calma."; }
  else if (imc < 25) { c = "Peso normal"; h = "Dentro del rango de referencia para población adulta general."; }
  else if (imc < 30) { c = "Sobrepeso"; h = "Por encima del rango. Con un plan realista se trabaja bien desde aquí."; }
  else { c = "Obesidad"; h = "Conviene valorarlo con un profesional sanitario antes de empezar."; }
  val.textContent = imc.toFixed(1);
  cat.textContent = c;
  hint.textContent = h;
});

/* ---------- guía gratis: solo maquetado, no envía nada ---------- */
var leadForm = document.getElementById("leadForm");
leadForm.addEventListener("submit", function(e){
  e.preventDefault();
  var msg = document.getElementById("leadMsg");
  var email = document.getElementById("leadEmail").value.trim();
  if (!email || email.indexOf("@") < 1) { msg.style.color = "#F0A88C"; msg.textContent = "Escribe un email válido."; return; }
  if (!document.getElementById("leadOk").checked) { msg.style.color = "#F0A88C"; msg.textContent = "Marca la casilla de privacidad."; return; }
  msg.style.color = "";
  msg.textContent = "Demo: aquí se conectaría el envío.";
});
```

Nada de esto guarda ni envía datos: el IMC se calcula en el navegador y el formulario de la guía solo muestra un mensaje.

## 9. Comprobaciones finales

- 375px de ancho: sin scroll horizontal, botones completos sin romperse ni desbordar.
- El menú hamburguesa abre por debajo del header, con el banner demo visible y con la página scrolleada.
- Los anclas `#recomendados` e `#imc` funcionan desde el menú y desde el footer.
- No queda ninguna URL de `buy.stripe.com` ni referencia a cesta/carrito.
- Ninguna ruta de `/img` modificada.
