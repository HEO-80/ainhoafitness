# Handoff: Ainhoa Bikini Fitness — Web Completa

## Overview
Página web profesional para Ainhoa Villalba, entrenadora personal y asesora de nutrición deportiva, campeona de Bikini Fitness. La web incluye modo oscuro (por defecto) y modo claro, con cambio dinámico vía botón.

## Sobre los archivos de diseño
Los archivos de este paquete son **prototipos de diseño creados en HTML** — referencias visuales que muestran el aspecto y comportamiento final. La tarea es **recrear estos diseños en el framework del proyecto** (Next.js, Astro, etc.) usando Tailwind CSS u otro sistema de estilos que ya exista en el repo.

## Fidelidad
**Alta fidelidad (hifi)** — Los prototipos tienen colores, tipografías, espaciados e interacciones finales. Recrear pixel-perfect.

---

## Estructura de secciones

### 1. Header (sticky)
- Logo: icono de pesa SVG en cuadrado redondeado (10px radius) + "Ainhoa Villalba" en Great Vibes cursiva (32px)
- Nav: links uppercase 12px Montserrat 600, letter-spacing 0.14em
- Botón "Contactar": fondo fucsia con sombra glow
- Fondo: semitransparente con backdrop-blur 14px
- **Light mode**: icono pesa con fondo blanco/rosa claro

### 2. Hero
- Imagen de fondo a pantalla completa (image-slot reemplazable)
- Overlay gradiente oscuro de izquierda a derecha
- Texto: "Tu mejor versión" en Bebas Neue uppercase ~clamp(52px,8vw,100px)
- "empieza aquí" en Montserrat italic 600
- Logo brillantes (af-logo-brillos-negro.jpg) con mix-blend-mode: screen + máscara radial
- Botones CTA: "Quiero empezar" (fucsia) + "Ver planes y precios" (borde)
- Stats bar debajo: 10 años / 100% / Online

### 3. Sobre mí
- Grid 2 columnas: foto Ainhoa (escenario azul) + texto
- Foto con border-radius 12px y hover glow
- Título "Hola, soy Ainhoa" en Bebas Neue
- Texto con línea separadora punteada fucsia

### 4. Competición — Campeona Bikini Fitness
- Logo caballo con hover glow (border-radius 999px)
- "Campeona" en Bebas Neue + "Bikini Fitness" en Montserrat italic
- Grid 4 fotos (aspect-ratio 3/4) con hover glow y border-radius 12px

### 5. Servicios
- 3 cards en grid con 1px gap, fondo --af-card
- Cada card: número (01/02/03), icono, título Montserrat 19px bold, descripción
- Cards con border-radius 16px, hover glow (.af-glow-card)

### 6. Filosofía
- Cita grande en Bebas Neue uppercase: "Todo esfuerzo tiene su recompensa"
- "recompensa" en color fucsia
- Firma "Ainhoa" en Great Vibes con separadores punteados y corazón

### 7. El Método Ainhoa
- Título en Bebas Neue
- Grid 2x2 de cards con pasos 1-4
- Cada paso: número en círculo fucsia, título 19px, descripción 14.5px
- Cards: border-radius 16px, hover glow, fondo --af-card
- **Light mode**: fondo con gradiente radial fucsia sutil centrado en cards

### 8. Vídeos — Ejercicios y Testimonios
- Tabs: Ejercicios / Testimonios
- 4 video cards en grid fijo 4 columnas
- Cards: border-radius 16px, hover glow, botón play fucsia, duración overlay
- Testimonios: 3 cards verticales (aspect-ratio 9/13)

### 9. Tienda — Elige tu punto de partida
- Tabs: Packs / Guías digitales / Material
- **Packs Online** (3 cards, grid 3 col):
  - Tabla entrenamiento: 150€/trimestre
  - Plan nutricional: 150€/trimestre  
  - Pack integral online: 195€/trimestre (DESTACADO — border fucsia, fondo --af-highlight-card, badge "Más completo")
- **Presencial** (2 cards):
  - Sesión suelta: 25€
  - Bono 10 sesiones: 225€ (DESTACADO — badge "Recomendado")
- Cards: border-radius 20px, hover glow
- Botones: "Pedir por WhatsApp" (fucsia, radius 12px) + "Usar el formulario" (borde, radius 12px)

### 10. Herramientas y Recomendados (tabs)
- Tab "Mis imprescindibles": 3 cards verticales (proteína, bandas, botella) con imagen aspect-ratio 4/3
- Tab "Calculadora IMC": inputs peso/altura + resultado grande + etiqueta

### 11. Contacto
- Grid 2 col: info contacto + formulario
- 3 cards de contacto (email, whatsapp, instagram): fondo --af-deep, border-radius 16px, icono con fondo fucsia translúcido, hover glow
- Formulario: fondo --af-deep, border-radius 20px, sombra, inputs radius 12px
- Checkbox privacidad + botón enviar full-width fucsia con sombra
- Título "Formulario de solicitud"

### 12. Footer
- Logo "Ainhoa Bikini Fitness" en Great Vibes
- "Asesora de entrenamiento y nutrición deportiva"
- Copyright + links nav
- Fondo: --af-deep

---

## Design Tokens

### Tipografías
- **Bebas Neue** — títulos principales (uppercase, weight 400, letter-spacing 0.02em)
- **Great Vibes** — logo header, logo footer, firma filosofía (cursiva)
- **Montserrat** (400, 500, 600, 700, 800) — todo lo demás

### Colores — Dark Mode (por defecto)
```css
--af-bg: #09080A;
--af-card: #141216;
--af-alt: #121014;
--af-deep: #050406;
--af-line: #2B2530;
--af-ink: #F5F0F5;
--af-mut: #B9B2BC;      /* texto secundario */
--af-mut3: #8F8893;     /* texto terciario */
--af-pink: #BF2A7C;     /* fucsia principal */
--af-pink2: #73194A;    /* fucsia hover */
--af-highlight-card: #2E2E30;
--af-highlight-ink: #F5F0F5;
--af-head: rgba(4,3,5,0.96);  /* header backdrop */
```

### Colores — Light Mode
```css
--af-bg: #FFF7FB;
--af-card: #FFFFFF;
--af-deep: #F3E4EC;
--af-line: #EBD3E0;
--af-ink: #1A1418;
--af-mut: #5E5260;
--af-mut3: #716475;
--af-pink: #D6127A;
--af-pink2: #B80F68;
--af-highlight-card: #2A2030;
--af-highlight-ink: #fff;
--af-head: rgba(255,247,251,0.92);
```

### Gradientes de fondo (glow por sección)
Dark mode: `rgba(160,30,100, 0.20-0.25)` radial gradients
Light mode: `rgba(214,18,122, 0.10-0.14)` radial gradients
Cada sección tiene un punto de luz diferente (20% 40%, 80% 30%, 50% 20%)

### Sombras y efectos
- Hover glow cards: `border-color: rgba(191,42,124,0.5); box-shadow: 0 0 20px rgba(191,42,124,0.15)`
- Logo icon hover: `box-shadow: 0 0 28px rgba(242,46,154,0.6), 0 0 56px rgba(242,46,154,0.2)`
- Botón fucsia: `box-shadow: 0 0 18px rgba(242,46,154,0.45)`
- Pack destacado: `box-shadow: 0 12px 40px rgba(191,42,124,0.2)`

### Border radius
- Cards servicios/método/vídeos/testimonios/recomendados: 16px
- Cards packs/precios: 20px
- Formulario: 20px
- Inputs: 12px
- Botones: 12px
- Logo icon: 10px
- Fotos competición: 12px

---

## Interacciones y transiciones

### Hover effects
- **af-glow-card**: transition border-color 0.3s, box-shadow 0.3s → borde fucsia + sombra glow
- **Logo icon pesa**: transition 0.6s ease → glow más intenso
- **Logo caballo**: mismo efecto 0.6s
- Botones: hover cambia background a --af-pink2
- Video cards: imagen scale 1.05 en hover (CSS group-hover)
- Links contacto: borde se ilumina fucsia

### Cambio de tema
- Clase `af-light` en `<html>` activa light mode
- Persistir en localStorage key `af-theme`
- Botón fijo (position: fixed) alterna entre modos

### Tabs
- Vídeos: Ejercicios / Testimonios
- Tienda: Packs / Guías digitales / Material
- Extras: Mis imprescindibles / Calculadora IMC
- Estilo tab activo: fondo fucsia, texto blanco
- Estilo tab inactivo: fondo transparente/card, texto muted

### Formulario
- Select con opciones de todos los packs
- Textarea para objetivo
- Checkbox de privacidad obligatorio
- Envío → toast "Mensaje enviado (demo)"
- WhatsApp links: `https://wa.me/34626582377?text=...`

### Modal vídeo
- Click en video card → modal overlay con placeholder
- Botón cerrar + click fuera cierra
- Animación fadeIn 0.18s

### Calculadora IMC
- Inputs peso (kg) y altura (cm)
- Cálculo: peso / (altura_m²)
- Etiquetas: Bajo peso / Peso normal / Sobrepeso / Obesidad

---

## Assets (carpeta img/)
- `af-logo-brillos-negro.jpg` — Logo brillantes con fondo negro (hero, mix-blend-mode: screen)
- `af-logo-completo.png` — Logo completo fondo transparente
- `af-horse.png` — Icono caballo/competición
- `ainhoa-escenario-azul.png` — Foto Ainhoa en escenario (sección Sobre mí)
- `ainhoa-escenario.png` — Foto Ainhoa escenario púrpura
- `ainhoa-posing.jpeg` — Foto Ainhoa posando
- `rec-proteina.png` — Imagen proteína whey
- `rec-bandas.png` — Imagen bandas elásticas
- `rec-botella.png` — Imagen botellas de agua

## Archivos de referencia
- `Ainhoa Fitness Brillos.dc.html` — Diseño completo (template + lógica + estilos)

---

## Datos de contacto (para links y formulario)
- WhatsApp: +34 626 58 23 77
- Email: info@ainhoavillalba.com (pendiente)
- Instagram: @ainhoavillalba_bikini (pendiente)

## Precios actuales
| Pack | Precio |
|------|--------|
| Tabla entrenamiento | 150€/trimestre |
| Plan nutricional | 150€/trimestre |
| Pack integral online | 195€/trimestre |
| Sesión presencial | 25€/sesión |
| Bono 10 sesiones | 225€ |

## Notas
- Los vídeos son placeholders — pendientes de grabar
- Email e Instagram pendientes de crear cuentas
- Enlaces a productos en Recomendados pendientes
- Términos legales y política de privacidad pendientes de asesoramiento
- Guías digitales y material son productos futuros
