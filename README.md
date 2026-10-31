# Website Profil PT Urban Asia Industri

Halaman: `index.html` (Beranda), `sejarah.html`, `struktur.html`, `lokasi.html`.

## Cara menjalankan di VS Code
1. Buka folder ini lewat **File > Open Folder**.
2. Pasang ekstensi **Live Server** (Ritwick Dey).
3. Klik kanan `index.html` > **Open with Live Server**. (Atau klik dua kali `index.html`.)

## Aset
- `img/logo.png` logo di header, `img/favicon.png` ikon tab browser.
- `img/produk.jpg` foto contoh produk di beranda (ganti dengan file lain bernama sama, atau ubah `src` di `index.html`).
- `img/struktur-organisasi.svg` dan `.pdf` bagan struktur organisasi. Jika struktur berubah, ganti kedua file ini dan perbarui daftar rincian di `struktur.html`.

## Cara mengisi konten
- Teks dengan latar oranye muda bertitik (kelas `isi`) adalah placeholder: ganti teksnya, lalu hapus `class="isi"`.
- Peta: ganti `q=` pada `src` iframe di `lokasi.html` dengan alamat asli.
- Warna dan font: ubah di bagian `:root` pada `css/style.css`.
