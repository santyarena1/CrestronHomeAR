(function () {
  'use strict';

  var app = document.getElementById('os4AppRoot');
  var deviceWrap = document.getElementById('os4DeviceWrap');
  if (!app) return;

  /* ── Status bar clock ── */
  var timeEl = document.getElementById('os4StatusTime');
  function updateTime() {
    if (!timeEl) return;
    var d = new Date();
    var h = d.getHours(), m = d.getMinutes();
    timeEl.textContent = h + ':' + (m < 10 ? '0' + m : m);
  }
  updateTime();
  setInterval(updateTime, 15000);

  /* ── Theme toggle ── */
  var btnTheme = document.getElementById('os4BtnTheme');
  if (btnTheme) {
    btnTheme.addEventListener('click', function () {
      app.classList.toggle('light');
      var label = btnTheme.querySelector('.os4-btn-label');
      if (label) label.textContent = app.classList.contains('light') ? 'Oscuro' : 'Claro';
    });
  }

  /* ── Layout toggle ── */
  var btnLayout = document.getElementById('os4BtnLayout');
  if (btnLayout) {
    btnLayout.addEventListener('click', function () {
      deviceWrap.classList.toggle('tablet');
      var label = btnLayout.querySelector('.os4-btn-label');
      if (label) label.textContent = deviceWrap.classList.contains('tablet') ? 'Movil' : 'Tablet';
    });
  }

  /* ── Panel navigation ── */
  var HOME_PANEL  = 'os4PanelHome';
  var ROOMS_PANEL = 'os4PanelRooms';

  function showPanel(id) {
    app.querySelectorAll('.os4-panel').forEach(function (p) {
      p.hidden = (p.id !== id);
    });
    app.querySelectorAll('.os4-nav-tab').forEach(function (t) {
      var tab = t.getAttribute('data-tab');
      var active = (tab === 'home' && id === HOME_PANEL) ||
                   (tab === 'rooms' && id === ROOMS_PANEL);
      t.classList.toggle('is-active', active);
    });
  }

  /* ── Bottom nav tabs ── */
  app.querySelectorAll('.os4-nav-tab').forEach(function (tab) {
    tab.addEventListener('click', function () {
      var t = tab.getAttribute('data-tab');
      showPanel(t === 'rooms' ? ROOMS_PANEL : HOME_PANEL);
    });
  });

  /* ── Back buttons ── */
  app.querySelectorAll('[data-back]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = btn.getAttribute('data-back');
      showPanel(target === 'rooms' ? ROOMS_PANEL : HOME_PANEL);
    });
  });

  function setDetailRoom(elId, room) {
    var el = document.getElementById(elId);
    if (el) el.textContent = room.toUpperCase();
  }

  /* ── Lights tile ── */
  app.querySelectorAll('[data-open-lights]').forEach(function (tile) {
    tile.addEventListener('click', function () {
      setDetailRoom('os4LightsRoomLabel', tile.getAttribute('data-room') || 'Sala');
      showPanel('os4PanelLights');
    });
  });

  /* ── Shades tile ── */
  app.querySelectorAll('[data-open-shades]').forEach(function (tile) {
    tile.addEventListener('click', function () {
      setDetailRoom('os4ShadesRoomLabel', tile.getAttribute('data-room') || 'Sala');
      showPanel('os4PanelShades');
    });
  });

  /* ── Audio tile ── */
  app.querySelectorAll('[data-open-audio]').forEach(function (tile) {
    tile.addEventListener('click', function () {
      showPanel('os4PanelAudio');
    });
  });

  /* ── Climate tile ── */
  app.querySelectorAll('[data-open-climate]').forEach(function (tile) {
    tile.addEventListener('click', function () {
      showPanel('os4PanelClimate');
    });
  });

  /* ── Access tile ── */
  app.querySelectorAll('[data-open-access]').forEach(function (tile) {
    tile.addEventListener('click', function () {
      showPanel('os4PanelAccess');
    });
  });

  /* ── Cameras tile ── */
  app.querySelectorAll('[data-open-cameras]').forEach(function (tile) {
    tile.addEventListener('click', function () {
      showPanel('os4PanelCameras');
    });
  });

  /* ── Room cards -> lights detail ── */
  app.querySelectorAll('.os4-room-card[data-room]').forEach(function (card) {
    card.addEventListener('click', function (e) {
      if (e.target.closest('.os4-room-card-btn')) return;
      setDetailRoom('os4LightsRoomLabel', card.getAttribute('data-room') || 'Habitacion');
      showPanel('os4PanelLights');
    });
  });

  /* ── Floor filter pills ── */
  app.querySelectorAll('.os4-floor-pill').forEach(function (pill) {
    pill.addEventListener('click', function () {
      app.querySelectorAll('.os4-floor-pill').forEach(function (p) {
        p.classList.toggle('is-active', p === pill);
      });
      var floor = pill.getAttribute('data-floor');
      app.querySelectorAll('.os4-room-card').forEach(function (card) {
        if (floor === 'all') {
          card.hidden = false;
        } else if (floor === 'fav') {
          card.hidden = !card.getAttribute('data-fav');
        } else {
          card.hidden = (card.getAttribute('data-floor') !== floor);
        }
      });
    });
  });

  /* ── Favorite buttons ── */
  app.querySelectorAll('.os4-room-card-btn.js-fav').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      btn.classList.toggle('is-fav');
      var card = btn.closest('.os4-room-card');
      if (card) card.setAttribute('data-fav', btn.classList.contains('is-fav') ? '1' : '');
    });
  });

  /* ── Scene chips (exclusive per row) ── */
  app.querySelectorAll('.os4-scenes-row').forEach(function (row) {
    row.querySelectorAll('.os4-scene-chip').forEach(function (chip) {
      chip.addEventListener('click', function () {
        row.querySelectorAll('.os4-scene-chip').forEach(function (c) {
          c.classList.toggle('is-active', c === chip);
        });
      });
    });
  });

  /* ── Toggle switches ── */
  app.querySelectorAll('.os4-toggle').forEach(function (sw) {
    sw.addEventListener('click', function () {
      var on = sw.getAttribute('aria-checked') !== 'true';
      sw.setAttribute('aria-checked', on ? 'true' : 'false');
      var item = sw.closest('.os4-light-item');
      if (item) item.classList.toggle('is-on', on);
    });
  });

  /* ── Light sliders ── */
  app.querySelectorAll('.os4-light-range').forEach(function (range) {
    var item = range.closest('.os4-light-item');
    var pctEl = item && item.querySelector('.os4-light-pct');
    function sync() { if (pctEl) pctEl.textContent = range.value + '%'; }
    range.addEventListener('input', sync);
    sync();
  });

  /* ── Action chips ── */
  app.querySelectorAll('.os4-action-chip').forEach(function (chip) {
    chip.addEventListener('click', function () {
      chip.classList.add('is-pressed');
      setTimeout(function () { chip.classList.remove('is-pressed'); }, 1200);
    });
  });

  /* ── Non-nav control tiles ── */
  var openSelectors = '[data-open-lights],[data-open-shades],[data-open-audio],[data-open-climate],[data-open-access],[data-open-cameras]';
  app.querySelectorAll('.os4-control-tile').forEach(function (tile) {
    if (!tile.matches(openSelectors)) {
      tile.addEventListener('click', function () {
        tile.classList.toggle('is-active');
      });
    }
  });

  /* ── SHADES: sliders ── */
  app.querySelectorAll('.os4-shade-track').forEach(function (track) {
    var item = track.closest('.os4-shade-item');
    var pctEl = item && item.querySelector('.os4-shade-pct-label');
    function syncShade() {
      var v = parseInt(track.value, 10);
      if (pctEl) pctEl.textContent = v + '%';
      if (item) item.classList.toggle('is-open', v > 0);
    }
    track.addEventListener('input', syncShade);
    syncShade();
  });

  /* ── SHADES: up/down buttons ── */
  app.querySelectorAll('.os4-shade-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.os4-shade-item');
      if (!item) return;
      var track = item.querySelector('.os4-shade-track');
      var pctEl = item.querySelector('.os4-shade-pct-label');
      if (!track) return;
      var dir = btn.getAttribute('data-dir');
      var v = Math.min(100, Math.max(0, parseInt(track.value, 10) + (dir === 'up' ? 25 : -25)));
      track.value = v;
      if (pctEl) pctEl.textContent = v + '%';
      item.classList.toggle('is-open', v > 0);
    });
  });

  /* ── AUDIO: play/pause ── */
  var playPauseBtn = document.getElementById('os4AudioPlayPause');
  var playIcon     = document.getElementById('os4AudioPlayIcon');
  var pauseIcon    = document.getElementById('os4AudioPauseIcon');
  var isPlaying    = true;
  if (playPauseBtn) {
    playPauseBtn.addEventListener('click', function () {
      isPlaying = !isPlaying;
      if (playIcon)  playIcon.hidden  = isPlaying;
      if (pauseIcon) pauseIcon.hidden = !isPlaying;
    });
  }

  /* ── AUDIO: progress ── */
  var audioProgress = document.getElementById('os4AudioProgress');
  if (audioProgress) {
    audioProgress.addEventListener('input', function () {
      var elapsed = document.getElementById('os4AudioElapsed');
      var total = 213;
      var v = Math.round((parseInt(audioProgress.value, 10) / 100) * total);
      if (elapsed) elapsed.textContent = Math.floor(v / 60) + ':' + ('0' + (v % 60)).slice(-2);
    });
  }

  /* ── AUDIO: zone select ── */
  app.querySelectorAll('.os4-audio-zone-item').forEach(function (item) {
    item.addEventListener('click', function () {
      app.querySelectorAll('.os4-audio-zone-item').forEach(function (z) {
        z.classList.toggle('is-playing', z === item);
        var st = z.querySelector('.os4-audio-zone-status');
        if (st) st.textContent = (z === item) ? 'Reproduciendo' : 'Apagado';
      });
    });
  });

  /* ── CLIMATE: set-point +/- ── */
  var setpointEl  = document.getElementById('os4ClimateSetpoint');
  var setpointVal = 21;
  app.querySelectorAll('.os4-climate-adj-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var dir = btn.getAttribute('data-dir');
      setpointVal = Math.min(30, Math.max(16, setpointVal + (dir === 'up' ? 1 : -1)));
      if (setpointEl) setpointEl.textContent = setpointVal + '\u00b0';
    });
  });

  /* ── CLIMATE: mode chips ── */
  app.querySelectorAll('.os4-climate-mode-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      app.querySelectorAll('.os4-climate-mode-btn').forEach(function (b) {
        b.classList.toggle('is-active', b === btn);
      });
    });
  });

  /* ── ACCESS: lock card ── */
  var lockCard       = document.getElementById('os4LockCard');
  var lockStatus     = document.getElementById('os4LockStatus');
  var lockIcon       = document.getElementById('os4LockIcon');
  var unlockIcon     = document.getElementById('os4UnlockIcon');
  var isLocked       = false;
  if (lockCard) {
    lockCard.addEventListener('click', function () {
      isLocked = !isLocked;
      lockCard.classList.toggle('is-locked', isLocked);
      if (lockStatus) lockStatus.textContent = isLocked ? 'BLOQUEADO' : 'DESBLOQUEADO';
      if (lockIcon)   lockIcon.hidden   = !isLocked;
      if (unlockIcon) unlockIcon.hidden = isLocked;
    });
  }

  /* ── ACCESS: alarm toggle ── */
  var alarmCard  = document.getElementById('os4AlarmCard');
  var alarmState = document.getElementById('os4AlarmState');
  var isArmed    = false;
  if (alarmCard) {
    alarmCard.addEventListener('click', function () {
      isArmed = !isArmed;
      if (alarmState) {
        alarmState.textContent = isArmed ? 'ARMADO \u2014 AUSENTE' : 'DESARMADO';
        alarmState.classList.toggle('armed', isArmed);
      }
    });
  }

  /* ── CAMERAS: tap to fullscreen ── */
  app.querySelectorAll('.os4-camera-card').forEach(function (card) {
    card.addEventListener('click', function () {
      var wasFs = card.classList.contains('is-fullscreen');
      app.querySelectorAll('.os4-camera-card').forEach(function (c) {
        c.classList.remove('is-fullscreen');
        c.hidden = false;
      });
      if (!wasFs) {
        card.classList.add('is-fullscreen');
        app.querySelectorAll('.os4-camera-card').forEach(function (c) {
          if (c !== card) c.hidden = true;
        });
      }
    });
  });

  /* ── Init ── */
  showPanel(HOME_PANEL);
})();
