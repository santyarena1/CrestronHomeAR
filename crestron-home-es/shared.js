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
  initHorizonFinishSelector();
  initHorizonKeypadInteractive();
  initHorizonConfigHighlightRotator();
  initCameoFinishSelector();
  initCameoKeypadInteractive();
  initCameoConfigHighlightRotator();
});
