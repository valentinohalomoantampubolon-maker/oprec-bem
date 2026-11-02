const socials = [
  { label: 'Instagram', handle: '@ug_bemfikti', href: 'https://instagram.com/ug_bemfikti' },
  { label: 'TikTok', handle: '@ug.bemfikti', href: 'https://www.tiktok.com/@ug.bemfikti' },
  { label: 'YouTube', handle: 'BEM FIKTI', href: 'https://youtube.com/@bemfikti' },
  { label: 'LinkedIn', handle: 'BEM FIKTI', href: 'https://www.linkedin.com/company/bemfikti/' },
]

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap foot__grid">
        <div className="foot__brand">
          <img src="/assets/img/logo-revarsa.png" alt="Logo Kabinet Revolusi Karsa" width={48} height={49} />
          <p>
            <strong>Kabinet Revolusi Karsa</strong>
            <br />
            Badan Eksekutif Mahasiswa Fakultas Ilmu Komputer dan Teknologi Informasi, Universitas Gunadarma
          </p>
        </div>
        <div>
          <p className="foot__label">Pengumuman resmi oprec ada di</p>
          <ul className="foot__social">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label} <span>{s.handle}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="wrap foot__base">© 2026 BEM FIKTI Universitas Gunadarma</div>
    </footer>
  )
}
