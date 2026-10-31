// Menu mobile
const tombol = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
if (tombol && nav) {
  tombol.addEventListener('click', () => {
    const buka = nav.classList.toggle('buka');
    tombol.setAttribute('aria-expanded', buka);
  });
}

// Tandai menu aktif sesuai halaman
const halaman = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav a').forEach(a => {
  if (a.getAttribute('href') === halaman) {
    a.classList.add('aktif');
    a.setAttribute('aria-current', 'page');
  }
});

// Tahun otomatis di footer
const tahun = document.getElementById('tahun');
if (tahun) tahun.textContent = new Date().getFullYear();

// Penampil bagan struktur organisasi: perbesar/perkecil + geser dengan drag
const area = document.getElementById('bagan-area');
if (area) {
  const img = area.querySelector('img');
  const tingkat = [null, 1600, 2400, 3665];   // null = pas dengan lebar layar
  let i = 0;
  const terapkan = () => {
    img.style.width = tingkat[i] ? tingkat[i] + 'px' : '100%';
    document.getElementById('zoom-info').textContent = tingkat[i] ? Math.round(tingkat[i] / 3665 * 100) + '%' : 'Tampilan ringkas';
  };
  document.getElementById('zoom-in').onclick = () => { i = Math.min(i + 1, tingkat.length - 1); terapkan(); };
  document.getElementById('zoom-out').onclick = () => { i = Math.max(i - 1, 0); terapkan(); };
  document.getElementById('zoom-reset').onclick = () => { i = 0; terapkan(); area.scrollTo(0, 0); };
  terapkan();

  let awal = null;
  area.addEventListener('pointerdown', e => {
    awal = { x: e.clientX, y: e.clientY, sl: area.scrollLeft, st: area.scrollTop };
    area.classList.add('geser');
    area.setPointerCapture(e.pointerId);
  });
  area.addEventListener('pointermove', e => {
    if (!awal) return;
    area.scrollLeft = awal.sl - (e.clientX - awal.x);
    area.scrollTop = awal.st - (e.clientY - awal.y);
  });
  const lepas = () => { awal = null; area.classList.remove('geser'); };
  area.addEventListener('pointerup', lepas);
  area.addEventListener('pointercancel', lepas);
}
