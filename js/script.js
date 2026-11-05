const kurangGerak = matchMedia('(prefers-reduced-motion: reduce)').matches;

// Ratakan teks yang terdiri dari lebih dari satu kalimat.
document.querySelectorAll('p, li, dd, blockquote, figcaption').forEach((elemen) => {
  const kalimat = elemen.textContent.split(/[.!?]+/).filter((bagian) => bagian.trim()).length;
  if (kalimat > 1) elemen.classList.add('teks-rata-justifikasi');
});

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

// Bayangan header saat menggulir + tombol kembali ke atas
const header = document.querySelector('.header');
const keAtas = document.querySelector('.ke-atas');
const saatGulir = () => {
  const y = window.scrollY;
  if (header) header.classList.toggle('menggulir', y > 10);
  if (keAtas) keAtas.classList.toggle('tampil', y > 600);
};
addEventListener('scroll', saatGulir, { passive: true });
saatGulir();
if (keAtas) keAtas.addEventListener('click', () => scrollTo({ top: 0 }));

// Animasi muncul saat di-scroll (+ jeda berurutan untuk anak-anak [data-stagger])
document.querySelectorAll('[data-stagger]').forEach(induk => {
  [...induk.children].forEach((el, i) => {
    if (!el.hasAttribute('data-reveal')) el.setAttribute('data-reveal', '');
    el.style.setProperty('--d', (i * 0.09) + 's');
  });
});

// Hitung naik (count-up)
function hitung(el) {
  const target = +el.dataset.count;
  if (kurangGerak) { el.textContent = target; return; }
  const durasi = 1400, mulai = performance.now();
  const langkah = t => {
    const p = Math.min((t - mulai) / durasi, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(langkah);
  };
  requestAnimationFrame(langkah);
}
document.querySelectorAll('[data-count]').forEach(el => { el.textContent = '0'; });

const io = new IntersectionObserver(entri => {
  entri.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('terlihat');
    e.target.querySelectorAll('[data-count]').forEach(hitung);
    if (e.target.hasAttribute('data-count')) hitung(e.target);
    io.unobserve(e.target);
  });
}, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
document.querySelectorAll('[data-reveal]').forEach(el => io.observe(el));

// FAQ (akordeon)
document.querySelectorAll('.faq-q').forEach(b => {
  b.addEventListener('click', () => {
    const buka = b.getAttribute('aria-expanded') === 'true';
    b.setAttribute('aria-expanded', String(!buka));
    b.nextElementSibling.classList.toggle('buka', !buka);
  });
});

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
