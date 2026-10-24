// Theme management, data, and interactions
// Convert to your framework (React hooks, Vue composables, etc.)

class Component extends DCLogic {
  componentDidMount() { let t = 'dark'; try { t = localStorage.getItem('af-theme') || 'dark'; } catch (e) {} this.applyTheme(t); this.alignToggle(); window.addEventListener('resize', this.alignToggle); window.addEventListener('load', this.alignToggle); let n = 0; this._alignT = setInterval(() => { this.alignToggle(); if (++n > 10) clearInterval(this._alignT); }, 500); }
  componentWillUnmount() { document.documentElement.classList.remove('af-light'); window.removeEventListener('resize', this.alignToggle); window.removeEventListener('load', this.alignToggle); clearInterval(this._alignT); }
  alignToggle = () => {
    const b = document.querySelector('[data-af-send]'); if (!b) return;
    const d = Math.round(document.documentElement.scrollHeight - (b.getBoundingClientRect().bottom + window.scrollY));
    document.documentElement.style.setProperty('--af-toggle-bottom', Math.max(16, d) + 'px');
  };
  applyTheme(t) { document.documentElement.classList.toggle('af-light', t === 'light'); try { localStorage.setItem('af-theme', t); } catch (e) {} this.setState({ theme: t }); }
  state = { theme: 'dark', videoTab: 'ejercicios', shopTab: null, interes: '', imcPeso: '', imcAltura: '', video: null, toast: '' };
  wa(msg) { return 'https://wa.me/34626582377?text=' + encodeURIComponent(msg); }

  eur(n) { return n.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 2 }) + ' €'; }

  catalog() {
    return {
      p1: { nombre: 'Plan Entrenamiento', sub: 'Suscripción mensual', precio: 49 },
      p2: { nombre: 'Plan Nutrición', sub: 'Suscripción mensual', precio: 59 },
      p3: { nombre: 'Pack Integral Online', sub: 'Trimestral · 3 meses', precio: 249 },
      d1: { nombre: 'Guía: Empieza en el gym', sub: 'PDF descargable', precio: 19 },
      d2: { nombre: '30 recetas altas en proteína', sub: 'PDF descargable', precio: 15 },
      d3: { nombre: 'Plantillas de seguimiento', sub: 'Excel + Notion', precio: 12 },
      d4: { nombre: 'Rutina en casa 8 semanas', sub: 'PDF + vídeos', precio: 24 },
      m1: { nombre: 'Bandas de resistencia', sub: 'Set de 3', precio: 22 },
      m2: { nombre: 'Camiseta Ainhoa', sub: 'Algodón orgánico', precio: 26 },
      m3: { nombre: 'Botella 750 ml', sub: 'Acero inoxidable', precio: 18 },
      m4: { nombre: 'Proteína whey 1 kg', sub: 'Sabor vainilla', precio: 34 }
    };
  }

  tab(active) {
    return 'white-space:nowrap;padding:13px 20px;background:' + (active ? 'var(--af-pink)' : 'var(--af-card)') + ';border:0;color:' + (active ? '#fff' : 'var(--af-mut)') + ";font-family:'Montserrat',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;cursor:pointer";
  }
  shopTabStyle(active) {
    return 'white-space:nowrap;padding:13px 20px;background:' + (active ? 'var(--af-pink)' : 'transparent') + ';border:0;color:' + (active ? '#fff' : 'var(--af-mut)') + ";font-family:'Montserrat',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;cursor:pointer";
  }

  renderVals() {
    const cat = this.catalog();
    const shopTab = this.state.shopTab || this.props.defaultShopTab || 'planes';
    const themeVals = {
      themeLabel: this.state.theme === 'light' ? 'Modo oscuro' : 'Modo claro',
      toggleTheme: () => this.applyTheme(this.state.theme === 'light' ? 'dark' : 'light')
    };
    const ejercicios = [
      { zona: 'Glúteo', nombre: 'Hip thrust', dur: '0:45', nota: 'Colocación de barra y recorrido completo.' },
      { zona: 'Pierna', nombre: 'Sentadilla búlgara', dur: '0:52', nota: 'Dónde poner el pie y cómo no perder el equilibrio.' },
      { zona: 'Espalda', nombre: 'Remo con mancuerna', dur: '0:38', nota: 'Espalda neutra y tirón desde el codo.' },
      { zona: 'Hombro', nombre: 'Press militar', dur: '0:47', nota: 'Errores típicos de trayectoria y respiración.' },
      
    ].map((v, i) => ({ ...v, slot: 'af-ex-' + i, img: ["https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=700&q=70","https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=700&q=70","https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=700&q=70","https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=700&q=70","https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=700&q=70","https://images.unsplash.com/photo-1550345332-09e3ac987658?auto=format&fit=crop&w=700&q=70","https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=700&q=70","https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&w=700&q=70"][i % 8], open: () => this.setState({ video: v.nombre }) }));

    const testimonios = [
      { nombre: 'Marta G.', resultado: '−12 kg en 7 meses', cita: 'Nunca había sido constante con nada. Con Ainhoa entendí que no hacía falta pasar hambre, solo tener un plan que me encajara.' },
      { nombre: 'Lucía R.', resultado: 'Fuerza +40%', cita: 'Empecé sin saber ni coger una mancuerna. Hoy entreno sola con seguridad y llevo dos años sin parar.' },
      { nombre: 'Elena V.', resultado: 'Primera competición', cita: 'Me preparó para subirme al escenario cuidando cada detalle, también la cabeza. Fue mucho más que una dieta.' }
    ].map((t, i) => ({ ...t, slot: 'af-test-' + i, img: ["https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=700&q=70","https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=700&q=70","https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=700&q=70","https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?auto=format&fit=crop&w=700&q=70"][i % 4], open: () => this.setState({ video: 'Testimonio de ' + t.nombre }) }));

    const planCard = (dest) => 'position:relative;display:flex;flex-direction:column;padding:32px 24px;border:' + (dest ? '2px solid var(--af-pink)' : '1px solid var(--af-line)') + ';background:' + (dest ? 'var(--af-highlight-card)' : 'var(--af-card)') + ';border-radius:20px;transition:border-color 0.3s, box-shadow 0.3s' + (dest ? ';box-shadow:0 12px 40px rgba(191,42,124,0.2);color:var(--af-highlight-ink)' : '');
    const planBtn = (dest) => 'display:block;padding:14px;text-align:center;text-decoration:none;background:var(--af-pink);border:1px solid var(--af-pink);color:#fff;font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;border-radius:12px;box-shadow:0 6px 20px rgba(191,42,124,0.25);transition:background 0.2s, transform 0.2s';
    const mk = (p) => {
      const opt = p.nombre + ' · ' + p.precio + (p.periodo ? ' ' + p.periodo : '');
      return { ...p, cardStyle: planCard(p.destacado), btnStyle: planBtn(p.destacado), opt,
        badge: p.badge || 'Más completo', wa: this.wa('Hola Ainhoa, me interesa: ' + opt + '. ¿Me cuentas más?'),
        toForm: () => this.setState({ interes: opt }) };
    };
    const packsOnline = [
      { tag: 'Entrenamiento', nombre: 'Tabla de entrenamiento', precio: '150 €', periodo: '/ trimestre', destacado: false,
        incluye: ['Rutina personalizada y revisión quincenal', 'Ajustes según tu progreso', 'Resolución de dudas por WhatsApp'] },
      { tag: 'Nutrición', nombre: 'Plan nutricional', precio: '150 €', periodo: '/ trimestre', destacado: false,
        incluye: ['Plan de alimentación en base a tus gustos y necesidades', 'Revisión quincenal', 'Ajuste mensual'] },
      { tag: 'Entrenamiento + nutrición', nombre: 'Pack integral online', precio: '195 €', periodo: '/ trimestre', destacado: true,
        incluye: ['Tabla de entrenamiento y plan nutricional personalizado', 'Revisiones quincenales', 'Ajustes según progreso y evolución'], badge: 'Más completo' }
    ].map(mk);
    const packsPresencial = [
      { tag: 'Sesión suelta', nombre: 'Sesión de entrenamiento presencial', precio: '25 €', periodo: '/ sesión', destacado: false,
        incluye: ['50 minutos', 'Sólo en Zaragoza capital', 'Centro deportivo a concertar'] },
      { tag: 'Bono', nombre: 'Bono de 10 sesiones de entrenamiento personal', precio: '225 €', periodo: '/ 10 sesiones', destacado: true,
        incluye: ['10 sesiones de 50 minutos', 'Sólo en Zaragoza capital', 'Centro deportivo a concertar'], badge: 'Recomendado' }
    ].map(mk);
    const imcP = parseFloat(String(this.state.imcPeso).replace(',', '.')), imcA = parseFloat(String(this.state.imcAltura).replace(',', '.')) / 100;
    const imc = imcP > 0 && imcA > 0.5 ? imcP / (imcA * imcA) : null;
    const imcEtiqueta = imc == null ? 'Introduce tus datos' : imc < 18.5 ? 'Bajo peso' : imc < 25 ? 'Peso normal' : imc < 30 ? 'Sobrepeso' : 'Obesidad';

    const digitales = ['d1', 'd2', 'd3', 'd4'].map((id, i) => {
      const meta = [
        { formato: 'PDF · 48 páginas', desc: 'Todo lo que necesitas saber antes de tu primer día: máquinas, series, descansos y cómo organizar la semana.' },
        { formato: 'PDF · 30 recetas', desc: 'Desayunos, comidas y cenas rápidas con macros calculados. Sin ingredientes raros.' },
        { formato: 'Excel + Notion', desc: 'Plantillas para registrar cargas, medidas y hábitos. Las mismas que uso con mis clientas.' },
        { formato: 'PDF + vídeos', desc: 'Programa de 8 semanas para entrenar en casa con material mínimo.' }
      ][i];
      return { ...meta, nombre: cat[id].nombre, precio: this.eur(cat[id].precio), slot: 'af-dig-' + i, img: ["https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=700&q=70","https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=700&q=70","https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=700&q=70","https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&w=700&q=70"][i % 4], wa: this.wa('Hola Ainhoa, me interesa: ' + cat[id].nombre + ' (' + this.eur(cat[id].precio) + ').') };
    });

    const merch = ['m1', 'm2', 'm3', 'm4'].map((id, i) => {
      const desc = ['Ligera, media y fuerte. Para activar antes de entrenar.', 'Corte holgado, tejido suave. Tallas S a XL.', 'Aguanta frío 12h. Marcas de hidratación.', 'Aislado de suero, 24 g de proteína por toma.'][i];
      return { nombre: cat[id].nombre, desc, precio: this.eur(cat[id].precio), slot: 'af-merch-' + i, img: ["https://images.unsplash.com/photo-1623874514711-0f321325f318?auto=format&fit=crop&w=700&q=70","https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?auto=format&fit=crop&w=700&q=70","https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=700&q=70","https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=700&q=70"][i % 4], wa: this.wa('Hola Ainhoa, me interesa: ' + cat[id].nombre + ' (' + this.eur(cat[id].precio) + ').') };
    });

    const extrasTab = this.state.extrasTab || 'rec';
    const extrasTabList = [
      { label: 'Mis imprescindibles', active: extrasTab === 'rec', tabColor: extrasTab === 'rec' ? 'var(--af-pink)' : 'var(--af-mut3)', tabBorder: extrasTab === 'rec' ? '2px solid var(--af-pink)' : '2px solid transparent', onClick: () => this.setState({ extrasTab: 'rec' }) },
      { label: 'Calculadora IMC', active: extrasTab === 'imc', tabColor: extrasTab === 'imc' ? 'var(--af-pink)' : 'var(--af-mut3)', tabBorder: extrasTab === 'imc' ? '2px solid var(--af-pink)' : '2px solid transparent', onClick: () => this.setState({ extrasTab: 'imc' }) },
    ];
    const showRec = extrasTab === 'rec';
    const showImc = extrasTab === 'imc';
    return {
      ...themeVals, extrasTab, extrasTabList, showRec, showImc,
      showStats: this.props.showStats ?? true,
      isEjercicios: this.state.videoTab === 'ejercicios',
      isTestimonios: this.state.videoTab === 'testimonios',
      showEjercicios: () => this.setState({ videoTab: 'ejercicios' }),
      showTestimonios: () => this.setState({ videoTab: 'testimonios' }),
      tabEjerciciosStyle: this.tab(this.state.videoTab === 'ejercicios'),
      tabTestimoniosStyle: this.tab(this.state.videoTab === 'testimonios'),
      ejercicios, testimonios,
      isPlanes: shopTab === 'planes', isDigital: shopTab === 'digital', isMerch: shopTab === 'merch',
      tabPlanes: () => this.setState({ shopTab: 'planes' }),
      tabDigital: () => this.setState({ shopTab: 'digital' }),
      tabMerch: () => this.setState({ shopTab: 'merch' }),
      shopTabPlanesStyle: this.shopTabStyle(shopTab === 'planes'),
      shopTabDigitalStyle: this.shopTabStyle(shopTab === 'digital'),
      shopTabMerchStyle: this.shopTabStyle(shopTab === 'merch'),
      packsOnline, packsPresencial, packOptions: packsOnline.concat(packsPresencial).map(p => p.opt), digitales, merch,
      imcPeso: this.state.imcPeso, imcAltura: this.state.imcAltura,
      setPeso: (e) => this.setState({ imcPeso: e.target.value }),
      setAltura: (e) => this.setState({ imcAltura: e.target.value }),
      imcValor: imc == null ? '—' : imc.toFixed(1).replace('.', ','), imcEtiqueta,
      interes: this.state.interes,
      setInteres: (e) => this.setState({ interes: e.target.value }),
      videoOpen: !!this.state.video, videoTitle: this.state.video || '',
      closeVideo: () => this.setState({ video: null }),
      toast: this.state.toast,
      noSubmit: (e) => { e.preventDefault(); this.setState({ toast: 'Mensaje enviado (demo)' }); }
    };
  }
}