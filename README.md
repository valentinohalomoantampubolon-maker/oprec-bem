# Website OPREC Staff BEM FIKTI UG 2026/2027

Website informasi open recruitment staff BEM FIKTI Universitas Gunadarma, Kabinet Revarsa.
Dibuat dengan React, TypeScript, dan Vite. Tidak ada backend: pendaftaran memakai Google Form.

## Menjalankan di laptop

```bash
npm install
npm run dev
```

Buka http://localhost:5173.

## Yang sering diubah

| Kebutuhan | File |
|---|---|
| Jadwal pendaftaran, link Google Form, tanggal pengumuman | `src/config/recruitment.ts` |
| Data departemen, biro, dan program kerja | `src/data/departments.ts` |
| Data posisi Sekretaris dan Bendahara | `src/data/positions.ts` |
| Warna dan gaya tampilan | `src/styles/global.css` (bagian DESIGN TOKENS) |

Status tombol "Daftar Sekarang" dan hitung mundur otomatis mengikuti `recruitment.ts`:

- `scheduleConfirmed: false` → "Pendaftaran Segera Dibuka", tanpa hitung mundur.
- Sebelum `registrationStart` → hitung mundur ke pembukaan.
- Antara `registrationStart` dan `registrationEnd` → tombol "Daftar Sekarang" aktif (jika `registrationFormUrl` diisi) dan hitung mundur ke penutupan.
- Setelah `registrationEnd` → "Pendaftaran Ditutup".

Format tanggal: `"2026-11-10T08:00:00+07:00"` (WIB).

## Deploy (Vercel)

1. Import repo ini di vercel.com (Framework: Vite, build `npm run build`, output `dist`).
2. `vercel.json` sudah mengatur agar halaman seperti `/departemen` tidak 404 saat di-refresh.
3. Setiap commit ke branch utama otomatis ter-deploy ulang.
