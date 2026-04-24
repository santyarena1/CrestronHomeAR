function openMenu() {
  document.getElementById('megaMenu').classList.add('open');
  document.getElementById('menuOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeMenu() {
  document.getElementById('megaMenu').classList.remove('open');
  document.getElementById('menuOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
function slideLeft(id) {
  document.getElementById(id).scrollLeft -= 260;
}
function slideRight(id) {
  document.getElementById(id).scrollLeft += 260;
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMenu();
});

/** Titular del home con rotación tipo máquina de escribir (index.html) */
function initHomeHeroHeadlineRotator() {
  const el = document.getElementById('homeHeroTypedText');
  const wrap = document.getElementById('homeHeroHeadline');
  if (!el || !wrap) return;

  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const items = [
    'Explorá tu hogar reinventado con Crestron Home OS',
    'Descubrí la experiencia Crestron Home OS',
    'Tu casa inteligente comienza con Crestron Home OS',
  ];

  const escapeHtml = (value) => value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

  const renderTyped = (full, charCount) => {
    const typed = full.slice(0, Math.max(0, Math.min(charCount, full.length)));
    el.innerHTML = escapeHtml(typed).replace(/\r?\n/g, '<br>');
  };

  if (prefersReduced) {
    let current = 0;
    renderTyped(items[current], items[current].length);
    setInterval(() => {
      current = (current + 1) % items.length;
      renderTyped(items[current], items[current].length);
    }, 4800);
    return;
  }

  const typingDelay = 48;
  const deletingDelay = 32;
  const holdWhenFull = 2200;
  const holdWhenEmpty = 400;
  let current = 0;
  let charCount = 0;
  let direction = 1;

  const tick = () => {
    const full = items[current];
    charCount += direction;
    if (charCount < 0) charCount = 0;
    if (charCount > full.length) charCount = full.length;
    renderTyped(full, charCount);
    wrap.classList.toggle('is-typing', charCount > 0 && charCount < full.length);

    if (direction === 1 && charCount === full.length) {
      direction = -1;
      wrap.classList.remove('is-typing');
      setTimeout(tick, holdWhenFull);
      return;
    }
    if (direction === -1 && charCount === 0) {
      current = (current + 1) % items.length;
      direction = 1;
      setTimeout(tick, holdWhenEmpty);
      return;
    }
    setTimeout(tick, direction === 1 ? typingDelay : deletingDelay);
  };

  renderTyped(items[0], 0);
  wrap.classList.add('is-typing');
  setTimeout(tick, 260);
}

/** Titular persianas.html — rotación tipo máquina de escribir (cortinas, luz, control) */
function initPersianasHeroHeadlineRotator() {
  const el = document.getElementById('persianasHeroTypedText');
  const wrap = document.getElementById('persianasHeroHeadline');
  if (!el || !wrap) return;

  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const items = [
    'Persianas que dialogan con la luz.',
    'Cortinas y estores, en perfecta sintonía.',
    'Domá el día desde la pared o la app.',
    'Cada apertura, un gesto de arquitectura.',
  ];

  const escapeHtml = (value) => value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

  const renderTyped = (full, charCount) => {
    const typed = full.slice(0, Math.max(0, Math.min(charCount, full.length)));
    el.innerHTML = escapeHtml(typed).replace(/\r?\n/g, '<br>');
  };

  if (prefersReduced) {
    let current = 0;
    renderTyped(items[current], items[current].length);
    setInterval(() => {
      current = (current + 1) % items.length;
      renderTyped(items[current], items[current].length);
    }, 4800);
    return;
  }

  const typingDelay = 46;
  const deletingDelay = 30;
  const holdWhenFull = 2400;
  const holdWhenEmpty = 420;
  let current = 0;
  let charCount = 0;
  let direction = 1;

  const tick = () => {
    const full = items[current];
    charCount += direction;
    if (charCount < 0) charCount = 0;
    if (charCount > full.length) charCount = full.length;
    renderTyped(full, charCount);
    wrap.classList.toggle('is-typing', charCount > 0 && charCount < full.length);

    if (direction === 1 && charCount === full.length) {
      direction = -1;
      wrap.classList.remove('is-typing');
      setTimeout(tick, holdWhenFull);
      return;
    }
    if (direction === -1 && charCount === 0) {
      current = (current + 1) % items.length;
      direction = 1;
      setTimeout(tick, holdWhenEmpty);
      return;
    }
    setTimeout(tick, direction === 1 ? typingDelay : deletingDelay);
  };

  renderTyped(items[0], 0);
  wrap.classList.add('is-typing');
  setTimeout(tick, 280);
}

/** Titular termostatos.html — rotación tipo máquina de escribir */
function initTermostatosHeroHeadlineRotator() {
  const el = document.getElementById('termostatosHeroTypedText');
  const wrap = document.getElementById('termostatosHeroHeadline');
  if (!el || !wrap) return;

  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const items = [
    'La temperatura ideal, sin esfuerzo.',
    'Confort por zonas, día y noche.',
    'Termostatos que entienden tu rutina.',
    'Clima preciso para una casa en equilibrio.',
  ];

  const escapeHtml = (value) => value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

  const renderTyped = (full, charCount) => {
    const typed = full.slice(0, Math.max(0, Math.min(charCount, full.length)));
    el.innerHTML = escapeHtml(typed).replace(/\r?\n/g, '<br>');
  };

  if (prefersReduced) {
    let current = 0;
    renderTyped(items[current], items[current].length);
    setInterval(() => {
      current = (current + 1) % items.length;
      renderTyped(items[current], items[current].length);
    }, 4800);
    return;
  }

  const typingDelay = 46;
  const deletingDelay = 30;
  const holdWhenFull = 2400;
  const holdWhenEmpty = 420;
  let current = 0;
  let charCount = 0;
  let direction = 1;

  const tick = () => {
    const full = items[current];
    charCount += direction;
    if (charCount < 0) charCount = 0;
    if (charCount > full.length) charCount = full.length;
    renderTyped(full, charCount);
    wrap.classList.toggle('is-typing', charCount > 0 && charCount < full.length);

    if (direction === 1 && charCount === full.length) {
      direction = -1;
      wrap.classList.remove('is-typing');
      setTimeout(tick, holdWhenFull);
      return;
    }
    if (direction === -1 && charCount === 0) {
      current = (current + 1) % items.length;
      direction = 1;
      setTimeout(tick, holdWhenEmpty);
      return;
    }
    setTimeout(tick, direction === 1 ? typingDelay : deletingDelay);
  };

  renderTyped(items[0], 0);
  wrap.classList.add('is-typing');
  setTimeout(tick, 280);
}

/** Titular acceso-hogar.html — rotación tipo máquina de escribir */
function initAccesoHeroHeadlineRotator() {
  const el = document.getElementById('accesoHeroTypedText');
  const wrap = document.getElementById('accesoHeroHeadline');
  if (!el || !wrap) return;

  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const items = [
    'Tranquilidad, incluso cuando no estás.',
    'Acceso inteligente para cada ingreso.',
    'Puertas, alarmas y portones en sincronía.',
    'Controlá el umbral de tu casa con precisión.',
  ];

  const escapeHtml = (value) => value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

  const renderTyped = (full, charCount) => {
    const typed = full.slice(0, Math.max(0, Math.min(charCount, full.length)));
    el.innerHTML = escapeHtml(typed).replace(/\r?\n/g, '<br>');
  };

  if (prefersReduced) {
    let current = 0;
    renderTyped(items[current], items[current].length);
    setInterval(() => {
      current = (current + 1) % items.length;
      renderTyped(items[current], items[current].length);
    }, 4800);
    return;
  }

  const typingDelay = 46;
  const deletingDelay = 30;
  const holdWhenFull = 2400;
  const holdWhenEmpty = 420;
  let current = 0;
  let charCount = 0;
  let direction = 1;

  const tick = () => {
    const full = items[current];
    charCount += direction;
    if (charCount < 0) charCount = 0;
    if (charCount > full.length) charCount = full.length;
    renderTyped(full, charCount);
    wrap.classList.toggle('is-typing', charCount > 0 && charCount < full.length);

    if (direction === 1 && charCount === full.length) {
      direction = -1;
      wrap.classList.remove('is-typing');
      setTimeout(tick, holdWhenFull);
      return;
    }
    if (direction === -1 && charCount === 0) {
      current = (current + 1) % items.length;
      direction = 1;
      setTimeout(tick, holdWhenEmpty);
      return;
    }
    setTimeout(tick, direction === 1 ? typingDelay : deletingDelay);
  };

  renderTyped(items[0], 0);
  wrap.classList.add('is-typing');
  setTimeout(tick, 280);
}

/** Titular audio.html — rotación tipo máquina de escribir */
function initAudioHeroHeadlineRotator() {
  const el = document.getElementById('audioHeroTypedText');
  const wrap = document.getElementById('audioHeroHeadline');
  if (!el || !wrap) return;

  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const items = [
    'Sonido envolvente, habitación por habitación.',
    'Música que sigue el ritmo de tu casa.',
    'Escenas de audio con precisión arquitectónica.',
    'Control total, sin fricción técnica.',
  ];

  const escapeHtml = (value) => value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

  const renderTyped = (full, charCount) => {
    const typed = full.slice(0, Math.max(0, Math.min(charCount, full.length)));
    el.innerHTML = escapeHtml(typed).replace(/\r?\n/g, '<br>');
  };

  if (prefersReduced) {
    let current = 0;
    renderTyped(items[current], items[current].length);
    setInterval(() => {
      current = (current + 1) % items.length;
      renderTyped(items[current], items[current].length);
    }, 4800);
    return;
  }

  const typingDelay = 46;
  const deletingDelay = 30;
  const holdWhenFull = 2400;
  const holdWhenEmpty = 420;
  let current = 0;
  let charCount = 0;
  let direction = 1;

  const tick = () => {
    const full = items[current];
    charCount += direction;
    if (charCount < 0) charCount = 0;
    if (charCount > full.length) charCount = full.length;
    renderTyped(full, charCount);
    wrap.classList.toggle('is-typing', charCount > 0 && charCount < full.length);

    if (direction === 1 && charCount === full.length) {
      direction = -1;
      wrap.classList.remove('is-typing');
      setTimeout(tick, holdWhenFull);
      return;
    }
    if (direction === -1 && charCount === 0) {
      current = (current + 1) % items.length;
      direction = 1;
      setTimeout(tick, holdWhenEmpty);
      return;
    }
    setTimeout(tick, direction === 1 ? typingDelay : deletingDelay);
  };

  renderTyped(items[0], 0);
  wrap.classList.add('is-typing');
  setTimeout(tick, 280);
}

/** Demo interactiva de escenas de audio (audio.html) */
function initAudioStudioDemo() {
  const sceneButtons = document.querySelectorAll('.audio-scene-btn');
  const nameEl = document.getElementById('audioSceneName');
  const metaEl = document.getElementById('audioSceneMeta');
  const zoneEls = {
    living: document.getElementById('audioZoneLivingBar'),
    kitchen: document.getElementById('audioZoneKitchenBar'),
    terrace: document.getElementById('audioZoneTerraceBar'),
    suite: document.getElementById('audioZoneSuiteBar'),
  };
  const valEls = {
    living: document.getElementById('audioZoneLivingVal'),
    kitchen: document.getElementById('audioZoneKitchenVal'),
    terrace: document.getElementById('audioZoneTerraceVal'),
    suite: document.getElementById('audioZoneSuiteVal'),
  };
  if (!sceneButtons.length || !nameEl || !metaEl) return;

  const scenes = {
    calma: {
      name: 'Calma',
      meta: 'Focus Jazz · 72 BPM · Nivel medio',
      zones: { living: 68, kitchen: 52, terrace: 40, suite: 34 },
    },
    recepcion: {
      name: 'Recepción',
      meta: 'Lounge House · 112 BPM · Cobertura amplia',
      zones: { living: 78, kitchen: 74, terrace: 70, suite: 42 },
    },
    noche: {
      name: 'Noche',
      meta: 'Ambient Deep · 64 BPM · Perfil íntimo',
      zones: { living: 45, kitchen: 28, terrace: 20, suite: 56 },
    },
  };

  const renderScene = (key) => {
    const scene = scenes[key];
    if (!scene) return;
    nameEl.textContent = scene.name;
    metaEl.textContent = scene.meta;
    Object.keys(scene.zones).forEach((zone) => {
      const value = scene.zones[zone];
      if (zoneEls[zone]) zoneEls[zone].style.width = `${value}%`;
      if (valEls[zone]) valEls[zone].textContent = `${value}%`;
    });
  };

  sceneButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      sceneButtons.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      renderScene(btn.getAttribute('data-audio-scene'));
    });
  });

  const active = document.querySelector('.audio-scene-btn.is-active');
  renderScene(active ? active.getAttribute('data-audio-scene') : 'calma');
}

function initPersianasSolarDemo() {
  const buttons = document.querySelectorAll('[data-shades-scene]');
  if (!buttons.length) return;
  const nameEl = document.getElementById('shadesSceneName');
  const metaEl = document.getElementById('shadesSceneMeta');
  const bars = {
    living: document.getElementById('shadesLivingBar'),
    suite: document.getElementById('shadesSuiteBar'),
    kitchen: document.getElementById('shadesKitchenBar'),
    terrace: document.getElementById('shadesTerraceBar'),
  };
  const vals = {
    living: document.getElementById('shadesLivingVal'),
    suite: document.getElementById('shadesSuiteVal'),
    kitchen: document.getElementById('shadesKitchenVal'),
    terrace: document.getElementById('shadesTerraceVal'),
  };
  const scenes = {
    amanecer: { name: 'Amanecer', meta: 'Entrada gradual de luz · Protección visual suave', zones: { living: 42, suite: 55, kitchen: 35, terrace: 68 } },
    mediodia: { name: 'Mediodía', meta: 'Bloqueo térmico activo · Menos deslumbramiento', zones: { living: 74, suite: 82, kitchen: 66, terrace: 88 } },
    atardecer: { name: 'Atardecer', meta: 'Apertura parcial · Luz cálida balanceada', zones: { living: 48, suite: 44, kitchen: 40, terrace: 58 } },
    noche: { name: 'Noche', meta: 'Privacidad alta · Escena de descanso', zones: { living: 86, suite: 92, kitchen: 80, terrace: 94 } },
  };
  const render = (key) => {
    const scene = scenes[key];
    if (!scene) return;
    if (nameEl) nameEl.textContent = scene.name;
    if (metaEl) metaEl.textContent = scene.meta;
    Object.keys(scene.zones).forEach((z) => {
      const v = scene.zones[z];
      if (bars[z]) bars[z].style.width = `${v}%`;
      if (vals[z]) vals[z].textContent = `${v}%`;
    });
  };
  buttons.forEach((btn) => btn.addEventListener('click', () => {
    buttons.forEach((b) => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    render(btn.getAttribute('data-shades-scene'));
  }));
  const active = document.querySelector('[data-shades-scene].is-active');
  render(active ? active.getAttribute('data-shades-scene') : 'amanecer');
}

function initTermostatosModeDemo() {
  const buttons = document.querySelectorAll('[data-clima-mode]');
  if (!buttons.length) return;
  const nameEl = document.getElementById('climaModeName');
  const metaEl = document.getElementById('climaModeMeta');
  const bars = {
    living: document.getElementById('climaLivingBar'),
    beds: document.getElementById('climaBedsBar'),
    office: document.getElementById('climaOfficeBar'),
    humidity: document.getElementById('climaHumidityBar'),
  };
  const vals = {
    living: document.getElementById('climaLivingVal'),
    beds: document.getElementById('climaBedsVal'),
    office: document.getElementById('climaOfficeVal'),
    humidity: document.getElementById('climaHumidityVal'),
  };
  const scenes = {
    home: { name: 'En casa', meta: 'Setpoint 22° · Humedad 48% · Balance confort/eficiencia', values: { living: '22°', beds: '21°', office: '22°', humidity: '48%' }, bars: { living: 64, beds: 58, office: 64, humidity: 48 } },
    work: { name: 'Jornada', meta: 'Setpoint 20° · Humedad 44% · Optimización energética', values: { living: '20°', beds: '19°', office: '20°', humidity: '44%' }, bars: { living: 50, beds: 44, office: 50, humidity: 44 } },
    sleep: { name: 'Descanso', meta: 'Setpoint 19° · Humedad 50% · Perfil nocturno estable', values: { living: '19°', beds: '18°', office: '18°', humidity: '50%' }, bars: { living: 42, beds: 38, office: 38, humidity: 50 } },
  };
  const render = (key) => {
    const s = scenes[key];
    if (!s) return;
    if (nameEl) nameEl.textContent = s.name;
    if (metaEl) metaEl.textContent = s.meta;
    Object.keys(s.values).forEach((z) => {
      if (vals[z]) vals[z].textContent = s.values[z];
      if (bars[z]) bars[z].style.width = `${s.bars[z]}%`;
    });
  };
  buttons.forEach((btn) => btn.addEventListener('click', () => {
    buttons.forEach((b) => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    render(btn.getAttribute('data-clima-mode'));
  }));
  const active = document.querySelector('[data-clima-mode].is-active');
  render(active ? active.getAttribute('data-clima-mode') : 'home');
}

function initAccesoStateDemo() {
  const buttons = document.querySelectorAll('[data-access-mode]');
  if (!buttons.length) return;
  const nameEl = document.getElementById('accessModeName');
  const metaEl = document.getElementById('accessModeMeta');
  const door = document.getElementById('accessDoorState');
  const gate = document.getElementById('accessGateState');
  const alarm = document.getElementById('accessAlarmState');
  const intercom = document.getElementById('accessIntercomState');
  const modes = {
    normal: { name: 'Normal', meta: 'Puerta principal segura · Alarma parcial · Notificaciones activas', door: 'Cerrada', gate: 'Listo', alarm: 'Parcial', intercom: 'En espera' },
    visit: { name: 'Visita', meta: 'Acceso temporal habilitado · Registro activo', door: 'Acceso autorizado', gate: 'Apertura remota', alarm: 'Perimetral', intercom: 'Llamada en curso' },
    night: { name: 'Noche', meta: 'Cierre total de accesos · Vigilancia reforzada', door: 'Bloqueada', gate: 'Bloqueado', alarm: 'Armado total', intercom: 'Modo silencioso' },
  };
  const render = (key) => {
    const m = modes[key];
    if (!m) return;
    if (nameEl) nameEl.textContent = m.name;
    if (metaEl) metaEl.textContent = m.meta;
    if (door) door.textContent = m.door;
    if (gate) gate.textContent = m.gate;
    if (alarm) alarm.textContent = m.alarm;
    if (intercom) intercom.textContent = m.intercom;
  };
  buttons.forEach((btn) => btn.addEventListener('click', () => {
    buttons.forEach((b) => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    render(btn.getAttribute('data-access-mode'));
  }));
  const active = document.querySelector('[data-access-mode].is-active');
  render(active ? active.getAttribute('data-access-mode') : 'normal');
}

function initAudioSourceDemo() {
  const buttons = document.querySelectorAll('[data-source-mode]');
  if (!buttons.length) return;
  const nameEl = document.getElementById('audioSourceName');
  const metaEl = document.getElementById('audioSourceMeta');
  const origin = document.getElementById('audioSourceOrigin');
  const format = document.getElementById('audioSourceFormat');
  const zones = document.getElementById('audioSourceZones');
  const dsp = document.getElementById('audioSourceDsp');
  const modes = {
    streaming: { name: 'Streaming', meta: 'Playlist curada · Multiroom sincronizado · Latencia mínima', origin: 'Nube', format: 'FLAC / Lossless', zones: '4 zonas', dsp: 'Escena residencial' },
    vinyl: { name: 'Tocadiscos', meta: 'Fuente analógica · Calidez armónica · Modo escucha crítica', origin: 'Entrada phono', format: 'Analógico convertido 24bit', zones: '2 zonas', dsp: 'Perfil hi-fi' },
    tv: { name: 'TV / Cine', meta: 'Prioridad audiovisual · Diálogo nítido · Control de dinámica', origin: 'HDMI eARC', format: 'Dolby / PCM', zones: 'Living + Terraza', dsp: 'Modo cine' },
  };
  const render = (key) => {
    const m = modes[key];
    if (!m) return;
    if (nameEl) nameEl.textContent = m.name;
    if (metaEl) metaEl.textContent = m.meta;
    if (origin) origin.textContent = m.origin;
    if (format) format.textContent = m.format;
    if (zones) zones.textContent = m.zones;
    if (dsp) dsp.textContent = m.dsp;
  };
  buttons.forEach((btn) => btn.addEventListener('click', () => {
    buttons.forEach((b) => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    render(btn.getAttribute('data-source-mode'));
  }));
  const active = document.querySelector('[data-source-mode].is-active');
  render(active ? active.getAttribute('data-source-mode') : 'streaming');
}

function initShadesOrbitDemo() {
  const input = document.getElementById('shadesHourRange');
  if (!input) return;
  const hourText = document.getElementById('shadesHourValue');
  const state = document.getElementById('shadesOrbitState');
  const meta = document.getElementById('shadesOrbitMeta');
  const dot = document.getElementById('shadesSunDot');
  const blind = document.getElementById('shadesBlindSlats');
  const blindOpen = document.getElementById('shadesBlindOpen');

  const render = () => {
    const hour = Number(input.value);
    const progress = (hour - 6) / 16;
    const angle = -120 + progress * 240;
    const radius = 82;
    const rad = (Math.PI / 180) * angle;
    const x = Math.cos(rad) * radius;
    const y = Math.sin(rad) * radius;
    if (dot) {
      dot.style.setProperty('--sun-x', `${x}px`);
      dot.style.setProperty('--sun-y', `${y}px`);
    }
    if (hourText) hourText.textContent = `${String(hour).padStart(2, '0')}:00`;
    let openPercent = 46;

    if (hour < 10) {
      if (state) state.textContent = 'Modo mañana';
      if (meta) meta.textContent = 'Apertura 46% · Control de deslumbramiento suave';
      openPercent = 46;
    } else if (hour < 16) {
      if (state) state.textContent = 'Modo protección solar';
      if (meta) meta.textContent = 'Apertura 22% · Bloqueo térmico activo';
      openPercent = 22;
    } else if (hour < 20) {
      if (state) state.textContent = 'Modo tarde';
      if (meta) meta.textContent = 'Apertura 58% · Luz cálida equilibrada';
      openPercent = 58;
    } else {
      if (state) state.textContent = 'Modo privacidad nocturna';
      if (meta) meta.textContent = 'Apertura 92% cerrada · Escena de descanso';
      openPercent = 92;
    }

    if (blind) {
      blind.style.setProperty('--blind-cover', `${Math.max(0.08, openPercent / 100)}`);
    }
    if (blindOpen) {
      blindOpen.textContent = `${openPercent}%`;
    }
  };

  input.addEventListener('input', render);
  render();
}

function initClimaWeeklyDemo() {
  const buttons = document.querySelectorAll('[data-clima-day]');
  if (!buttons.length) return;
  const morning = document.getElementById('climaSlotMorning');
  const noon = document.getElementById('climaSlotNoon');
  const night = document.getElementById('climaSlotNight');
  const dialTemp = document.getElementById('climaDialTemp');
  const targetLabel = document.getElementById('climaTargetLabel');
  const targetHint = document.getElementById('climaTargetHint');
  const downBtn = document.getElementById('climaTempDown');
  const upBtn = document.getElementById('climaTempUp');
  let manualTemp = 22;
  const plans = {
    lun: { slots: ['21° · 06:30–10:00', '20° · 10:00–18:30', '19° · 18:30–23:30'], target: 22, label: 'Confort equilibrado' },
    mar: { slots: ['21° · 06:30–09:30', '20° · 09:30–18:00', '19° · 18:00–23:00'], target: 21, label: 'Eficiencia en jornada' },
    mie: { slots: ['22° · 06:00–09:30', '20° · 09:30–18:30', '19° · 18:30–23:30'], target: 22, label: 'Confort activo' },
    jue: { slots: ['21° · 06:30–10:00', '20° · 10:00–19:00', '19° · 19:00–23:30'], target: 21, label: 'Balance inteligente' },
    vie: { slots: ['22° · 06:30–10:30', '21° · 10:30–20:00', '20° · 20:00–00:00'], target: 23, label: 'Modo social noche' },
    sab: { slots: ['22° · 08:00–11:00', '21° · 11:00–19:30', '20° · 19:30–00:30'], target: 23, label: 'Fin de semana' },
    dom: { slots: ['21° · 08:30–11:30', '20° · 11:30–19:00', '19° · 19:00–23:00'], target: 22, label: 'Preparación semanal' },
  };
  const paintTemp = () => {
    if (dialTemp) dialTemp.textContent = `${manualTemp}°`;
    if (targetHint) targetHint.textContent = `Setpoint manual: ${manualTemp}°. Ajustalo según preferencia del ambiente.`;
  };
  const render = (day) => {
    const entry = plans[day] || plans.lun;
    if (morning) morning.textContent = entry.slots[0];
    if (noon) noon.textContent = entry.slots[1];
    if (night) night.textContent = entry.slots[2];
    manualTemp = entry.target;
    if (targetLabel) targetLabel.textContent = entry.label;
    paintTemp();
  };
  buttons.forEach((btn) => btn.addEventListener('click', () => {
    buttons.forEach((b) => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    render(btn.getAttribute('data-clima-day'));
  }));
  if (downBtn) {
    downBtn.addEventListener('click', () => {
      manualTemp = Math.max(17, manualTemp - 1);
      paintTemp();
    });
  }
  if (upBtn) {
    upBtn.addEventListener('click', () => {
      manualTemp = Math.min(28, manualTemp + 1);
      paintTemp();
    });
  }
  const active = document.querySelector('[data-clima-day].is-active');
  render(active ? active.getAttribute('data-clima-day') : 'lun');
}

function initAccessTimelineDemo() {
  const buttons = document.querySelectorAll('[data-access-filter]');
  const list = document.getElementById('accessEventList');
  if (!buttons.length || !list) return;
  const dataset = {
    all: [
      ['07:42', 'Puerta principal', 'Acceso autorizado por código temporal'],
      ['09:15', 'Videoportero', 'Llamada atendida desde app móvil'],
      ['12:03', 'Alarma', 'Perímetro rearmado automáticamente'],
      ['18:21', 'Portón', 'Apertura remota desde pantalla táctil'],
    ],
    door: [
      ['07:42', 'Puerta principal', 'Acceso autorizado por código temporal'],
      ['18:21', 'Portón', 'Apertura remota desde pantalla táctil'],
      ['22:05', 'Puerta de servicio', 'Cierre confirmado por sensor magnético'],
    ],
    alarm: [
      ['12:03', 'Alarma', 'Perímetro rearmado automáticamente'],
      ['23:11', 'Alarma', 'Modo noche activado desde escena global'],
      ['23:12', 'Sensores', 'Verificación de perímetro completa'],
    ],
    intercom: [
      ['09:15', 'Videoportero', 'Llamada atendida desde app móvil'],
      ['14:27', 'Videoportero', 'Acceso de mensajería validado'],
      ['19:08', 'Videoportero', 'Evento registrado en panel interior'],
    ],
  };
  const render = (key) => {
    const rows = dataset[key] || dataset.all;
    list.innerHTML = rows.map((r) => `<li><time>${r[0]}</time><strong>${r[1]}</strong><span>${r[2]}</span></li>`).join('');
  };
  buttons.forEach((btn) => btn.addEventListener('click', () => {
    buttons.forEach((b) => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    render(btn.getAttribute('data-access-filter'));
  }));
  const active = document.querySelector('[data-access-filter].is-active');
  render(active ? active.getAttribute('data-access-filter') : 'all');
}

/** Titular video.html — rotación tipo máquina de escribir */
function initVideoHeroHeadlineRotator() {
  const el = document.getElementById('videoHeroTypedText');
  const wrap = document.getElementById('videoHeroHeadline');
  if (!el || !wrap) return;

  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const items = [
    'Video premium, en cualquier pantalla.',
    'Cine, deportes y gaming sin fricción.',
    'Una sola plataforma para todo el ecosistema visual.',
    'Controlá cada fuente con precisión instantánea.',
  ];

  const escapeHtml = (value) => value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

  const renderTyped = (full, charCount) => {
    const typed = full.slice(0, Math.max(0, Math.min(charCount, full.length)));
    el.innerHTML = escapeHtml(typed).replace(/\r?\n/g, '<br>');
  };

  if (prefersReduced) {
    let current = 0;
    renderTyped(items[current], items[current].length);
    setInterval(() => {
      current = (current + 1) % items.length;
      renderTyped(items[current], items[current].length);
    }, 4800);
    return;
  }

  const typingDelay = 46;
  const deletingDelay = 30;
  const holdWhenFull = 2400;
  const holdWhenEmpty = 420;
  let current = 0;
  let charCount = 0;
  let direction = 1;

  const tick = () => {
    const full = items[current];
    charCount += direction;
    if (charCount < 0) charCount = 0;
    if (charCount > full.length) charCount = full.length;
    renderTyped(full, charCount);
    wrap.classList.toggle('is-typing', charCount > 0 && charCount < full.length);

    if (direction === 1 && charCount === full.length) {
      direction = -1;
      wrap.classList.remove('is-typing');
      setTimeout(tick, holdWhenFull);
      return;
    }
    if (direction === -1 && charCount === 0) {
      current = (current + 1) % items.length;
      direction = 1;
      setTimeout(tick, holdWhenEmpty);
      return;
    }
    setTimeout(tick, direction === 1 ? typingDelay : deletingDelay);
  };

  renderTyped(items[0], 0);
  wrap.classList.add('is-typing');
  setTimeout(tick, 280);
}

function initVideoWallDemo() {
  const buttons = document.querySelectorAll('[data-video-source]');
  if (!buttons.length) return;
  const routeName = document.getElementById('videoRouteName');
  const routeMeta = document.getElementById('videoRouteMeta');
  const theater = document.getElementById('videoNodeTheater');
  const living = document.getElementById('videoNodeLiving');
  const suite = document.getElementById('videoNodeSuite');
  const kitchen = document.getElementById('videoNodeKitchen');

  const states = {
    cine: {
      title: 'Apple TV · Cine',
      meta: 'Home Theater principal + sala familiar sincronizada',
      nodes: ['Cine · Dolby Vision', 'Cine · Espejo', 'Sin señal', 'Sin señal'],
    },
    deportes: {
      title: 'Deportes en vivo',
      meta: 'Partidos simultáneos distribuidos por zonas sociales',
      nodes: ['Canal 1 · Partido A', 'Canal 2 · Partido B', 'Canal 3 · Highlights', 'Canal 1 · Espejo'],
    },
    gaming: {
      title: 'Consola · Gaming',
      meta: 'Latencia priorizada en sala y suite',
      nodes: ['PS5 · 4K120', 'Sin señal', 'PS5 · Espejo', 'Sin señal'],
    },
    camaras: {
      title: 'Cámaras',
      meta: 'Vista de perímetro en displays estratégicos',
      nodes: ['Entrada principal', 'Portón + jardín', 'Pasillo lateral', 'Acceso de servicio'],
    },
  };

  const render = (key) => {
    const state = states[key] || states.cine;
    if (routeName) routeName.textContent = state.title;
    if (routeMeta) routeMeta.textContent = state.meta;
    if (theater) theater.textContent = state.nodes[0];
    if (living) living.textContent = state.nodes[1];
    if (suite) suite.textContent = state.nodes[2];
    if (kitchen) kitchen.textContent = state.nodes[3];
  };

  buttons.forEach((btn) => btn.addEventListener('click', () => {
    buttons.forEach((b) => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    render(btn.getAttribute('data-video-source'));
  }));
  const active = document.querySelector('[data-video-source].is-active');
  render(active ? active.getAttribute('data-video-source') : 'cine');
}

function syncHorizonKeypadLayoutClass() {
  const preview = document.getElementById('horizonFinishPreview');
  const wrap = document.getElementById('horizonKeypadInteractive');
  if (!preview || !wrap) return;
  const isScene = preview.src.indexOf('horizon-scenes') !== -1;
  wrap.classList.toggle('is-scene-layout', isScene);
}

function resetHorizonKeyLitStates() {
  document.querySelectorAll('.horizon-key').forEach(k => {
    k.classList.remove('is-lit');
    k.setAttribute('aria-pressed', 'false');
  });
}

function updateHorizonKeyAriaLabels() {
  document.querySelectorAll('.horizon-key').forEach(btn => {
    const idx = btn.getAttribute('data-key-index');
    const span = btn.querySelector('.horizon-key-label');
    const text = span && span.textContent.trim();
    const name = text || `Tecla ${Number(idx) + 1}`;
    btn.setAttribute('aria-label', `${name}, tocar para encender o apagar`);
  });
}

/** Teclas superpuestas: textos, colores y toggle encendido / apagado (iluminacion.html) */
function initHorizonKeypadInteractive() {
  const wrap = document.getElementById('horizonKeypadInteractive');
  if (!wrap) return;

  const applyCssVars = () => {
    const off = document.getElementById('hkColorTextOff');
    const on = document.getElementById('hkColorTextOn');
    if (off) wrap.style.setProperty('--hk-text-off', off.value);
    if (on) wrap.style.setProperty('--hk-text-on', on.value);
  };
  ['hkColorTextOff', 'hkColorTextOn'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', applyCssVars);
  });
  applyCssVars();

  document.querySelectorAll('.horizon-keypad-text-input').forEach(inp => {
    inp.addEventListener('input', () => {
      const i = inp.getAttribute('data-key-index');
      const btn = document.querySelector(`.horizon-key[data-key-index="${i}"]`);
      if (!btn) return;
      const lab = btn.querySelector('.horizon-key-label');
      if (lab) lab.textContent = inp.value;
      updateHorizonKeyAriaLabels();
    });
  });

  document.querySelectorAll('.horizon-key').forEach(btn => {
    btn.addEventListener('click', () => {
      const lit = !btn.classList.contains('is-lit');
      btn.classList.toggle('is-lit', lit);
      btn.setAttribute('aria-pressed', lit ? 'true' : 'false');
    });
  });

  const preview = document.getElementById('horizonFinishPreview');
  if (preview) preview.addEventListener('load', () => { syncHorizonKeypadLayoutClass(); });

  syncHorizonKeypadLayoutClass();
  updateHorizonKeyAriaLabels();
}

/** Selector de acabados Horizon (solo iluminacion.html) */
function initHorizonFinishSelector() {
  const preview = document.getElementById('horizonFinishPreview');
  const root = document.getElementById('horizonFinishSwatches');
  const caption = document.getElementById('horizonFinishCaption');
  if (!preview || !root) return;
  root.querySelectorAll('.horizon-swatch').forEach(btn => {
    btn.addEventListener('click', () => {
      const src = btn.getAttribute('data-src');
      if (!src) return;
      preview.src = src;
      const label = btn.getAttribute('data-label') || 'Horizon';
      preview.alt = `Horizon keypad: ${label}`;
      if (caption) caption.textContent = label;
      syncHorizonKeypadLayoutClass();
      resetHorizonKeyLitStates();
      root.querySelectorAll('.horizon-swatch').forEach(b => {
        const on = b === btn;
        b.classList.toggle('is-selected', on);
        b.setAttribute('aria-checked', on ? 'true' : 'false');
      });
    });
  });
}

function initHorizonConfigHighlightRotator() {
  const el = document.getElementById('horizonConfigHighlightText');
  if (!el) return;

  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const items = [
    { text: 'Personalizá tus keypads en tiempo real', emphasis: 'tiempo real' },
    { text: 'Diseñá grabados a medida para cada ambiente', emphasis: 'a medida' },
    { text: 'Visualizá tu configuración final antes de decidir', emphasis: 'antes de decidir' },
  ];

  const escapeHtml = (value) => value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

  const renderTyped = (item, charCount) => {
    const full = item.text;
    const typed = full.slice(0, Math.max(0, Math.min(charCount, full.length)));
    if (!item.emphasis) {
      el.textContent = typed;
      return;
    }
    const start = full.indexOf(item.emphasis);
    const end = start + item.emphasis.length;
    if (start === -1 || typed.length <= start) {
      el.innerHTML = escapeHtml(typed);
      return;
    }

    const before = escapeHtml(typed.slice(0, start));
    const emphTyped = escapeHtml(typed.slice(start, Math.min(typed.length, end)));
    const after = typed.length > end ? escapeHtml(typed.slice(end)) : '';
    el.innerHTML = `${before}<span class="horizon-highlight-em">${emphTyped}</span>${after}`;
  };

  if (prefersReduced) {
    let current = 0;
    renderTyped(items[current], items[current].text.length);
    setInterval(() => {
      current = (current + 1) % items.length;
      renderTyped(items[current], items[current].text.length);
    }, 4200);
    return;
  }

  const typingDelay = 52;
  const deletingDelay = 34;
  const holdWhenFull = 1400;
  const holdWhenEmpty = 300;
  let current = 0;
  let charCount = 0;
  let direction = 1; // 1: escribiendo, -1: borrando

  const tick = () => {
    const item = items[current];
    charCount += direction;
    if (charCount < 0) charCount = 0;
    if (charCount > item.text.length) charCount = item.text.length;
    renderTyped(item, charCount);

    if (direction === 1 && charCount === item.text.length) {
      direction = -1;
      setTimeout(tick, holdWhenFull);
      return;
    }
    if (direction === -1 && charCount === 0) {
      current = (current + 1) % items.length;
      direction = 1;
      setTimeout(tick, holdWhenEmpty);
      return;
    }
    setTimeout(tick, direction === 1 ? typingDelay : deletingDelay);
  };

  renderTyped(items[current], 0);
  setTimeout(tick, 200);
}

function initCameoFinishSelector() {
  const preview = document.getElementById('cameoFinishPreview');
  const root = document.getElementById('cameoFinishSwatches');
  const caption = document.getElementById('cameoFinishCaption');
  if (!preview || !root) return;

  root.querySelectorAll('.horizon-swatch').forEach(btn => {
    btn.addEventListener('click', () => {
      const src = btn.getAttribute('data-src');
      if (!src) return;
      preview.src = src;
      const label = btn.getAttribute('data-label') || 'Cameo';
      preview.alt = `Cameo keypad: ${label}`;
      if (caption) caption.textContent = label;
      root.querySelectorAll('.horizon-swatch').forEach(b => {
        const on = b === btn;
        b.classList.toggle('is-selected', on);
        b.setAttribute('aria-checked', on ? 'true' : 'false');
      });
      document.querySelectorAll('.cameo-key').forEach(k => {
        k.classList.remove('is-lit');
        k.setAttribute('aria-pressed', 'false');
      });
    });
  });
}

function initCameoKeypadInteractive() {
  const wrap = document.getElementById('cameoKeypadInteractive');
  if (!wrap) return;

  const applyCssVars = () => {
    const off = document.getElementById('cmColorTextOff');
    const on = document.getElementById('cmColorTextOn');
    if (off) wrap.style.setProperty('--hk-text-off', off.value);
    if (on) wrap.style.setProperty('--hk-text-on', on.value);
  };
  ['cmColorTextOff', 'cmColorTextOn'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', applyCssVars);
  });
  applyCssVars();

  const updateLabels = () => {
    wrap.querySelectorAll('.cameo-key').forEach(btn => {
      const idx = btn.getAttribute('data-key-index');
      const span = btn.querySelector('.cameo-key-label');
      const text = span && span.textContent.trim();
      const name = text || `Tecla ${Number(idx) + 1}`;
      btn.setAttribute('aria-label', `${name}, tocar para encender o apagar`);
    });
  };

  document.querySelectorAll('.cameo-keypad-text-input').forEach(inp => {
    inp.addEventListener('input', () => {
      const i = inp.getAttribute('data-key-index');
      const btn = wrap.querySelector(`.cameo-key[data-key-index="${i}"]`);
      if (!btn) return;
      const lab = btn.querySelector('.cameo-key-label');
      if (lab) lab.textContent = inp.value;
      updateLabels();
    });
  });

  wrap.querySelectorAll('.cameo-key').forEach(btn => {
    btn.addEventListener('click', () => {
      const lit = !btn.classList.contains('is-lit');
      btn.classList.toggle('is-lit', lit);
      btn.setAttribute('aria-pressed', lit ? 'true' : 'false');
    });
  });

  updateLabels();
}

function initCameoConfigHighlightRotator() {
  const el = document.getElementById('cameoConfigHighlightText');
  if (!el) return;

  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const items = [
    { text: 'Personalizá tus keypads Cameo en tiempo real', emphasis: 'tiempo real' },
    { text: 'Diseñá grabados que acompañen cada ambiente', emphasis: 'cada ambiente' },
    { text: 'Visualizá tu configuración antes de decidir', emphasis: 'antes de decidir' },
  ];

  const escapeHtml = (value) => value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

  const renderTyped = (item, charCount) => {
    const full = item.text;
    const typed = full.slice(0, Math.max(0, Math.min(charCount, full.length)));
    if (!item.emphasis) {
      el.textContent = typed;
      return;
    }
    const start = full.indexOf(item.emphasis);
    const end = start + item.emphasis.length;
    if (start === -1 || typed.length <= start) {
      el.innerHTML = escapeHtml(typed);
      return;
    }

    const before = escapeHtml(typed.slice(0, start));
    const emphTyped = escapeHtml(typed.slice(start, Math.min(typed.length, end)));
    const after = typed.length > end ? escapeHtml(typed.slice(end)) : '';
    el.innerHTML = `${before}<span class="horizon-highlight-em">${emphTyped}</span>${after}`;
  };

  if (prefersReduced) {
    let current = 0;
    renderTyped(items[current], items[current].text.length);
    setInterval(() => {
      current = (current + 1) % items.length;
      renderTyped(items[current], items[current].text.length);
    }, 4200);
    return;
  }

  const typingDelay = 52;
  const deletingDelay = 34;
  const holdWhenFull = 1400;
  const holdWhenEmpty = 300;
  let current = 0;
  let charCount = 0;
  let direction = 1;

  const tick = () => {
    const item = items[current];
    charCount += direction;
    if (charCount < 0) charCount = 0;
    if (charCount > item.text.length) charCount = item.text.length;
    renderTyped(item, charCount);

    if (direction === 1 && charCount === item.text.length) {
      direction = -1;
      setTimeout(tick, holdWhenFull);
      return;
    }
    if (direction === -1 && charCount === 0) {
      current = (current + 1) % items.length;
      direction = 1;
      setTimeout(tick, holdWhenEmpty);
      return;
    }
    setTimeout(tick, direction === 1 ? typingDelay : deletingDelay);
  };

  renderTyped(items[current], 0);
  setTimeout(tick, 200);
}

document.addEventListener('DOMContentLoaded', () => {
  initHomeHeroHeadlineRotator();
  initPersianasHeroHeadlineRotator();
  initTermostatosHeroHeadlineRotator();
  initAccesoHeroHeadlineRotator();
  initAudioHeroHeadlineRotator();
  initVideoHeroHeadlineRotator();
  initAudioStudioDemo();
  initShadesOrbitDemo();
  initClimaWeeklyDemo();
  initAccessTimelineDemo();
  initAudioSourceDemo();
  initVideoWallDemo();
  initHorizonFinishSelector();
  initHorizonKeypadInteractive();
  initHorizonConfigHighlightRotator();
  initCameoFinishSelector();
  initCameoKeypadInteractive();
  initCameoConfigHighlightRotator();
});
