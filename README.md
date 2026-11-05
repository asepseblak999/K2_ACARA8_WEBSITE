# Website Profil PT Urban Asia Industri

Halaman: `index.html` (Beranda), `sejarah.html`, `struktur.html`, `lokasi.html`, `linktree.html`.

## Cara menjalankan di VS Code
1. Buka folder ini lewat **File > Open Folder**.
2. Pasang ekstensi **Live Server** (Ritwick Dey).
3. Klik kanan `index.html` > **Open with Live Server**. (Atau klik dua kali `index.html`.)
Butuh internet untuk font Google dan peta; ikon dan gambar sudah ada di folder.

## Yang WAJIB diganti
- Teks dengan latar oranye muda bertitik (kelas `isi`): ganti teksnya, lalu hapus `class="isi"`.
- Tautan sosial media dan WhatsApp: cari `62XXXXXXXXXX` (nomor WA, format 628xxxx) dan `AKUN_ANDA` (Instagram, TikTok, YouTube, Facebook) di semua file `.html`.
- Peta: ganti `q=` pada `src` iframe di `lokasi.html` dengan alamat asli.
- Sertifikasi, testimoni, dan jawaban FAQ yang masih `isi` di `index.html`: isi hanya dengan data yang benar.

## Aset (folder `img/`)
- `logo.png`, `favicon.png`: logo dan ikon tab.
- `produk.jpg`: foto hero beranda. `produk-skincare.jpg`, `produk-spa.jpg`, `produk-fragrance.jpg`, `produk-bodycare.jpg`, `produk-haircare.jpg`, `produk-lainnya.jpg`: foto kartu Bidang Usaha (ganti dengan foto asli perusahaan bila ada, nama file sama, rasio 5:3).
- `struktur-organisasi.svg` / `.pdf`: bagan struktur organisasi.

## Animasi
Ditulis di `css/style.css` (bagian @keyframes) dan `js/script.js`. Animasi otomatis mati bagi pengguna yang mengaktifkan "kurangi gerakan" di perangkatnya.
