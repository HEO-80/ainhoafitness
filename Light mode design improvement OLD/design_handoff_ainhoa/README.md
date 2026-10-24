# Handoff: Ainhoa Bikini Fitness — Web personal

## Overview
Web personal de **Ainhoa Villalba**, asesora de entrenamiento y nutrición deportiva, competidora de Bikini Fitness. Página single-page con modo dark (principal) y modo light. Sin cesta ni pagos online — toda la contratación se hace por WhatsApp o formulario de contacto.

## Sobre los archivos de diseño
Los archivos de este paquete son **prototipos de diseño en HTML** que muestran el aspecto y comportamiento deseado. NO son código de producción para copiar directamente. La tarea es **recrear estos diseños en el repo existente** (HTML/CSS/JS vanilla o el framework que se use), respetando la estructura y estilos documentados aquí.

## Fidelidad
**Alta fidelidad (hifi)**: los colores, tipografías, tamaños y espaciados son los definitivos. Recrear pixel-perfect.

---

## Tipografía

| Uso | Familia | Pesos | Ejemplo |
|-----|---------|-------|---------|
| Títulos decorativos, nombre "Ainhoa" | **Great Vibes** (cursiva) | 400 | Logo, "empieza aquí", dividers |
| Todo lo demás | **Montserrat** | 400, 500, 600, 700, 800 | Cuerpo, botones, labels |

```
Google Fonts: https://fonts.googleapis.com/css2?family=Great+Vibes&family=Montserrat:wght@400;500;600;700;800&display=swap
```

Tamaños clave:
- Labels de sección: 11px, weight 700, letter-spacing 0.26em, uppercase
- Títulos h2: clamp(30px, 4.2vw, 50px), weight 700
- Cuerpo: 15px, line-height 1.7
- Precios: 44px, weight 800
- Botones: 12px, weight 700, letter-spacing 0.14em, uppercase
- Mínimo en toda la página: 10px (labels pequeños)

---

## Paleta de colores

### Modo Dark (principal)

| Token | Hex | Uso |
|-------|-----|-----|
| `--af-bg` | `#09080A` | Fondo de página y secciones |
| `--af-card` | `#141216` | Fondo de tarjetas |
| `--af-line` | `#2B2530` | Bordes, líneas de separación |
| `--af-ink` | `#F5F0F5` | Texto principal |
| `--af-mut` | `#B9B2BC` | Texto secundario |
| `--af-mut3` | `#8F8893` | Texto terciario / labels |
| `--af-pink` | `#F22E9A` | Acento principal (botones, labels, precios) |
| `--af-pink2` | `#BF2A7C` | Hover del acento |
| `--af-highlight-card` | `#2E2E30` | Fondo tarjetas destacadas (Pack integral, Bono) |
| `--af-head` | `rgba(9,8,10,0.9)` | Header sticky (con backdrop-filter: blur) |
| `--af-tint` | `rgba(242,240,242,0.04)` | Fondo sutil de tarjetas |
| `--af-tint2` | `rgba(242,240,242,0.22)` | Bordes de tarjetas |

### Modo Light

| Token | Hex | Uso |
|-------|-----|-----|
| `--af-bg` | `#FFF7FB` | Fondo de página |
| `--af-card` | `#FFFFFF` | Fondo de tarjetas |
| `--af-line` | `#EBD3E0` | Bordes, líneas |
| `--af-ink` | `#1A1418` | Texto principal |
| `--af-mut` | `#5E5260` | Texto secundario |
| `--af-pink` | `#D6127A` | Acento principal |
| `--af-pink2` | `#B80F68` | Hover |
| `--af-highlight-card` | `#3A3040` | Tarjetas destacadas (texto blanco) |
| `--af-head` | `rgba(255,247,251,0.92)` | Header sticky |

### Fondos de sección en Light

| Sección | Color |
|---------|-------|
| Sobre mí | `#FFFFFF` |
| Competición | `#F5F3F4` (gris suave) |
| Servicios | `#FFFFFF` |
| Filosofía | `#F5F3F4` |
| Método | `#FFFFFF` |
| Packs (tienda) | `#FDF0F6` (rosa suave — la más importante) |
| Vídeos | `#FFFFFF` |
| Recomendados | `#F5F3F4` |
| IMC | `#F0EDEE` (gris) |
| Contacto | `#F5F3F4` |

En dark mode, **todas las secciones** usan `#09080A` uniforme.

---

## Estructura de secciones (de arriba a abajo)

### 1. Header (sticky)
- Logo: "Ainhoa Villalba" en Great Vibes 32px, "Ainhoa" en rosa, "Villalba" en blanco/negro
- Nav: Sobre mí, Servicios, Método, Packs, IMC + botón "Contactar" en rosa
- Menú hamburguesa en móvil (< 700px)
- `position: sticky; top: 0; backdrop-filter: blur(14px)`

### 2. Hero
- Foto de fondo a sangre completa (oscurecida con gradiente)
- Siempre oscura en ambos modos (`data-dark`)
- Izquierda: subtítulo "Asesora personal de entrenamiento y nutrición deportiva", título "Tu mejor versión" + "empieza aquí" en Great Vibes rosa
- Derecha: imagen `af-logo-brillos.png` con `mix-blend-mode: screen` y `mask-image: radial-gradient`
- Dos botones CTA: "Ver planes y precios" (rosa lleno) y "Saber más" (borde blanco)

### 3. Barra de estadísticas
- 3 columnas: "10 Años de experiencia", "100% Planes personalizados", "Online Desde cualquier lugar"
- Todo en rosa, separados por líneas verticales
- Fondo `--af-alt` (#121014 dark / #FCEFF6 light)

### 4. Sobre mí
- Grid 2 columnas: foto a la izquierda, texto a la derecha
- Título: "Hola, soy Ainhoa"
- Primer párrafo en bold: "Soy una apasionada del Fitness como estilo de vida."
- Segundo y tercer párrafo en `--af-mut`, separados por línea punteada rosa

### 5. Competición (Campeona Bikini Fitness)
- Icono del caballito (`af-horse.png`) circular con sombra rosa
- Texto con "TODO ESFUERZO TIENE SU RECOMPENSA" en bold rosa
- Galería: grid 2 columnas — foto grande a la izquierda (grid-row: 1/3), dos fotos apiladas a la derecha
- `border-top: 1px solid var(--af-line)`

### 6. Servicios
- 3 tarjetas en grid con separadores (gap: 1px, background del grid = `--af-line`)
- Cada tarjeta: número (01, 02, 03), icono rosa, título, descripción
- Los 3 servicios: Plan de Entrenamiento, Plan de Nutrición, Pack Integral Online
- `border-top: 1px solid var(--af-line)`

### 7. Filosofía
- Cita: "TODO ESFUERZO TIENE SU RECOMPENSA" — Montserrat 800, uppercase, clamp(26px, 4vw, 48px)
- "recompensa" en rosa
- Subtexto: "Sé fiel y constante y los resultados llegarán solos."
- Divider decorativo: líneas punteadas rosa + corazones ♥ + "Ainhoa" en Great Vibes
- Resplandor rosa radial detrás (sutil, decorativo)

### 8. El método Ainhoa
- 4 pasos en grid 2×2
- Cada paso: número en círculo con borde rosa, título en bold, descripción
- Pasos: Primera consulta → Plan personalizado → Te acompaño → Seguimiento continuo
- `border-top: 1px solid var(--af-line)`

### 9. Vídeos ("En vídeo · Mira cómo se entrena y qué dicen ellas")
- Tabs: Ejercicios / Testimonios
- Grid 4 columnas (2 en móvil)
- 8 tarjetas de ejercicios, 4 de testimonios
- Cada tarjeta: miniatura con aspect-ratio 9/14, overlay gradiente, botón play rosa, duración
- Debajo: zona (label rosa uppercase), nombre, descripción
- Los vídeos son placeholder — al hacer click muestran un iframe de YouTube (facade pattern)

### 10. Packs ("Elige tu punto de partida")
- Tabs: Packs / Guías digitales / Material
- **Online** (3 tarjetas en fila):
  - Tabla de entrenamiento: 150 €/trimestre
  - Plan nutricional: 150 €/trimestre
  - Pack integral online: 195 €/trimestre ← **DESTACADA** (borde 2px rosa, fondo más claro en dark `#2E2E30`, fondo oscuro en light `#3A3040` con texto blanco, badge "Más completo")
- **Presencial** (2 tarjetas):
  - Sesión presencial: 25 €/sesión
  - Bono 10 sesiones: 225 € ← **DESTACADA** (badge "Recomendado")
- Cada tarjeta: tag, título (min-height 2 líneas), línea punteada rosa, precio grande, lista con ✦, botón "Pedir por WhatsApp" (rosa), botón "Usar el formulario" (borde)
- Nota: "Los entrenos presenciales serán en Zaragoza capital."
- WhatsApp abre `wa.me/34626582377` con mensaje prefijado
- "Usar el formulario" scrollea a contacto y preselecciona el pack

### 11. Recomendados ("Mis imprescindibles")
- 3 tarjetas: Proteína, Bandas elásticas, Botella
- Cada una: foto, título, descripción, botón "Enlace pendiente" (placeholder)

### 12. Calculadora IMC
- Grid 2 columnas: texto explicativo + calculadora
- Inputs: Peso (kg) y Altura (cm)
- Resultado: número grande en rosa + etiqueta (Bajo peso / Normal / Sobrepeso / Obesidad)
- Cálculo client-side, sin envío

### 13. Contacto ("¿Lista para empezar?")
- Grid 2 columnas: info de contacto + formulario
- Info: Email (próximamente), WhatsApp +34 626 58 23 77, Instagram (próximamente)
- Iconos: cuadrados rosas con icono blanco
- Formulario: Nombre, Email, Select (packs), Textarea, botón "Enviar mensaje"
- En light mode: formulario con fondo blanco sobre sección gris
- El formulario es demo — muestra un toast "Mensaje enviado" pero no envía nada

### 14. Footer
- Logo: "Ainhoa Bikini Fitness" (Great Vibes) + "Asesora de imagen personal"
- Links: Sobre mí, Servicios, Método, Packs, Contacto
- © 2026 Ainhoa Bikini Fitness

### 15. Botón modo claro/oscuro
- `position: fixed`, arriba a la derecha, debajo del header
- Rosa, cuadrado (border-radius: 2px), uppercase
- Persiste en localStorage (`af-theme`)

---

## Interacciones y transiciones RECOMENDADAS

El prototipo es estático. Al implementar en producción, añadir estas animaciones para dar vida:

### Hover states
- **Botones rosa** → `background: var(--af-pink2)` con `transition: background 0.2s ease`
- **Botones borde** → `border-color: var(--af-pink); color: var(--af-pink)` con `transition: 0.2s`
- **Links del nav** → `color: var(--af-pink)` con `transition: color 0.15s`
- **Tarjetas de vídeo** → `transform: translateY(-4px); box-shadow: 0 8px 24px rgba(0,0,0,0.3)` con `transition: 0.25s ease`
- **Tarjetas de servicios** → sutil `background` ligeramente más claro al hover
- **Tarjetas de packs** → `border-color: var(--af-pink)` al hover en las no destacadas
- **Tarjetas de recomendados** → misma elevación que vídeos
- **Iconos de contacto** → `transform: scale(1.1)` con `transition: 0.2s`

### Scroll animations (IntersectionObserver)
- **Secciones**: fade-in + translateY(30px → 0) al entrar en viewport, `transition: 0.6s ease`
- **Tarjetas en grid**: staggered entry — cada tarjeta con delay de 0.1s × index
- **Barra de estadísticas**: counter animation de 0 al valor final (10, 100)
- **Título "empieza aquí"**: slide-in from left con delay 0.3s tras el título principal
- **Logo de brillos**: fade-in + scale(0.9 → 1) con delay 0.5s

### Transiciones de tema
- `transition: background-color 0.3s ease, color 0.3s ease` en body y secciones principales
- El cambio dark ↔ light debería sentirse suave, no instantáneo

### Otros
- **Header**: añadir `box-shadow` sutil al hacer scroll (detectar con `scrollY > 50`)
- **Formulario**: validación visual con bordes rosa en error
- **Toast "Mensaje enviado"**: slide-in desde abajo, auto-dismiss en 3s
- **Tabs (Packs, Vídeos)**: underline animada que se desliza al tab activo
- **Galería competición**: hover con leve zoom en las fotos (`transform: scale(1.03)`)

---

## WhatsApp
Teléfono: `+34 626 58 23 77`
URL base: `https://wa.me/34626582377?text=...`
El mensaje se prefija con el nombre del pack seleccionado.

---

## Assets incluidos

| Archivo | Descripción |
|---------|-------------|
| `assets/af-logo-brillos.png` | Logo "Ainhoa Villalba Bikini Fitness Master" con brillos. Recortado de foto, fondo no transparente — usar con `mix-blend-mode: screen` sobre fondo oscuro y `mask-image: radial-gradient(ellipse at center, #000 62%, transparent 100%)` |
| `assets/af-horse.png` | Icono del caballito rosa en círculo, 180×180px |

**Fotos provisionales**: todas las fotos son de Unsplash y deben sustituirse por fotos reales de Ainhoa. Las URLs están en el HTML.

---

## Archivos de referencia

| Archivo | Descripción |
|---------|-------------|
| `Ainhoa Fitness Brillos.dc.html` | Prototipo completo (abrir en navegador) |
| `screenshots/01-dark-*.jpg` a `08-dark-*.jpg` | Capturas modo dark |
| `screenshots/01-light-*.jpg` a `08-light-*.jpg` | Capturas modo light |

---

## TODOs pendientes (fuera de diseño)

- [ ] Sustituir fotos de Unsplash por fotos reales de Ainhoa
- [ ] YouTube: poner los IDs reales de los vídeos cuando estén grabados
- [ ] Recomendados: añadir enlaces de afiliados cuando estén definidos
- [ ] Contacto: email e Instagram reales
- [ ] Formulario: conectar a backend (Formspree, Netlify Forms, etc.)
- [ ] Textos legales: aviso legal, política de privacidad, cookies (requiere asesoría)
- [ ] Guías digitales y Material: contenido real en esas pestañas
