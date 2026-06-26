<div align="center">

<br/>

# 🏋️‍♀️ Ainhoa Fitness — Landing Page

### Marca personal · Entrenamiento · Nutrición

Página web de marca personal para entrenadora personal y nutricionista.
Diseño oscuro y elegante, orientada a captación de clientes y contacto directo.
Sin frameworks. Sin dependencias. Solo HTML, CSS y JS puro — lista para GitHub Pages.

<br/>

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-181717?style=for-the-badge&logo=github&logoColor=white)
![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=for-the-badge&logo=google&logoColor=white)

<br/>

> 🌐 **Live:** [ainhoa.github.io/ainhoa-fitness](https://ainhoa.github.io/ainhoa-fitness) &nbsp;·&nbsp; **Inspiración:** [saschafitness.com](https://saschafitness.com)

<br/>

</div>

---

## 📸 Preview

> *(Añade aquí una captura de pantalla del hero una vez subida a GitHub Pages)*

```
Hero fullscreen → Stats → Sobre mí → Servicios → Filosofía → Método → Contacto → Footer
```

---

## ✨ Características

- **Single page** — todo en un `index.html`, sin build tools ni dependencias locales
- **Dark design** — paleta negra + coral `#E8623A` + verde `#2A7A5E` con tipografía Playfair Display + Inter
- **Nav fija** con efecto blur al hacer scroll y menú hamburguesa en mobile
- **Hero fullscreen** con foto de fondo, overlay y línea diagonal como elemento firma
- **Barra de stats** animada (clientes, años, disponibilidad)
- **Sección Sobre mí** con imagen enmarcada con borde coral
- **3 tarjetas de servicios** con hover animado mediante línea inferior
- **Mosaico fotográfico** en sección de filosofía
- **Proceso en 4 pasos** con línea conectora
- **Formulario de contacto** funcional con validación y mensaje de éxito
- **Reveal on scroll** — animaciones de entrada mediante IntersectionObserver
- **100% responsive** — mobile, tablet y desktop

---

## 🗂️ Estructura

```
ainhoa-fitness/
│
├── index.html          # Todo el proyecto (HTML + CSS + JS inline)
└── README.md
```

> Por ahora todo está en un único archivo para máxima portabilidad en GitHub Pages.
> En la siguiente versión (Astro) se separará en componentes.

---

## 🚀 Deploy en GitHub Pages

### 1. Clona o descarga

```bash
git clone https://github.com/tuusuario/ainhoa-fitness.git
cd ainhoa-fitness
```

### 2. Previsualiza en local

Abre directamente `index.html` en el navegador — no necesita servidor.

### 3. Sube a GitHub Pages

```bash
git add .
git commit -m "feat: initial landing page"
git push origin main
```

Luego en GitHub: **Settings → Pages → Source: `main` / `root`**

URL resultado: `https://tuusuario.github.io/ainhoa-fitness`

---

## 🎨 Paleta de colores

| Token | Hex | Uso |
|---|---|---|
| `--black` | `#0D0D0D` | Fondo principal |
| `--grey` | `#1A1A1A` | Fondo secciones alternadas |
| `--coral` | `#E8623A` | Acento principal / CTAs |
| `--green` | `#2A7A5E` | Acento secundario / éxito |
| `--white` | `#F5F0EB` | Texto principal |
| `--light` | `#C8C0B8` | Texto secundario |

---

## ✏️ Personalización rápida

### Cambiar fotos
Las imágenes actuales son placeholders de Unsplash. Reemplaza las URLs por fotos propias:

```html
<!-- Hero background -->
background: url('TU-FOTO-AQUI.jpg') center/cover no-repeat;

<!-- Foto sobre mí -->
<img src="TU-FOTO-AQUI.jpg" alt="Ainhoa" />
```

### Cambiar datos de contacto
Busca en el HTML y reemplaza:

```
ainhoa@fitness.com        →  tu email real
+34 600 000 000           →  tu teléfono real
@ainhoa.fitness           →  tu Instagram real
```

### Cambiar stats
```html
<div class="stat-number">+200</div>   <!-- clientes -->
<div class="stat-number">5+</div>     <!-- años -->
```

---

## 🛣️ Roadmap

- [x] Landing page v1 — HTML/CSS/JS puro
- [ ] Añadir fotos reales de Ainhoa
- [ ] Conectar formulario a Formspree o EmailJS
- [ ] Sección de testimonios con slider
- [ ] v2 — Migración a **Astro** con componentes
- [ ] v2 — Blog de recetas y entrenos
- [ ] v2 — Integración con Instagram API

---

## 📬 Contacto

**Ainhoa** — Entrenadora Personal & Nutricionista

[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/ainhoa.fitness)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:ainhoa@fitness.com)

---

<div align="center">

*Hecho con ❤️ y mucho coral.*

</div>
