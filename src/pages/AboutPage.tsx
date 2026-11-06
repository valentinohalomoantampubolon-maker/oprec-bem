import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useFadeIn } from '../hooks/useFadeIn'

export function AboutPage() {
  const contentRef = useFadeIn<HTMLDivElement>()

  useEffect(() => {
    document.title = 'Tentang BEM FIKTI | OPREC Staff 2026/2027'
  }, [])

  return (
    <>
      {/* Page hero */}
      <div className="page-hero" role="banner">
        <div className="page-hero__glow" aria-hidden="true" />
        <div className="page-hero__inner">
          <nav className="breadcrumb" aria-label="Navigasi halaman">
            <Link to="/">Beranda</Link>
            <span className="breadcrumb__sep" aria-hidden="true">/</span>
            <span className="breadcrumb__current" aria-current="page">Tentang</span>
          </nav>
          <h1 className="page-hero__title">Tentang BEM FIKTI</h1>
          <p className="page-hero__body">
            Badan Eksekutif Mahasiswa Fakultas Ilmu Komputer dan Teknologi Informasi Universitas Gunadarma.
          </p>
        </div>
      </div>

      <div ref={contentRef}>
        {/* Profil — dengan foto + overlay */}
        <section className="section section-bg-white" aria-labelledby="profil-title">
          <div className="container">
            {/* Photo hero dengan overlay */}
            <div className="about-photo-hero fade-in">
              <img
                src="/assets/img/ldk-bem-fikti.jpg"
                alt="Latihan Dasar Kepemimpinan BEM FIKTI Universitas Gunadarma"
                style={{ objectPosition: 'center 60%' }}
              />
              <div className="about-photo-hero__overlay" aria-hidden="true" />
              <div className="about-photo-hero__caption">
                <p className="about-photo-hero__caption-text">BEM FIKTI</p>
                <p className="about-photo-hero__caption-sub">
                  Universitas Gunadarma · Kabinet Revolusi Karsa 2026/2027
                </p>
              </div>
            </div>

            <p className="eyebrow fade-in">Profil Organisasi</p>
            <h2 id="profil-title" className="section-title fade-in">BEM FIKTI Universitas Gunadarma</h2>
            <div className="about-content">
              <p className="fade-in">
                Badan Eksekutif Mahasiswa Fakultas Ilmu Komputer dan Teknologi Informasi (BEM FIKTI) Universitas Gunadarma adalah organisasi kemahasiswaan tingkat fakultas yang mewadahi aspirasi, kreativitas, dan pengembangan diri mahasiswa FIKTI.
              </p>
              <p className="fade-in">
                BEM FIKTI berperan sebagai representasi mahasiswa sekaligus mitra strategis institusi dalam menjalankan tri dharma perguruan tinggi, khususnya pada dimensi pengabdian kepada masyarakat dan kehidupan kemahasiswaan.
              </p>
              <p className="fade-in">
                Pada periode 2026/2027, BEM FIKTI mengusung <strong>Kabinet Revolusi Karsa</strong> dengan semangat "#Revolusi Pergerakan, Ciptakan Perubahan".
              </p>
            </div>
          </div>
        </section>

        {/* Makna Kabinet */}
        <section className="section section-bg-subtle" aria-labelledby="makna-title">
          <div className="container">
            <p className="eyebrow fade-in">Filosofi</p>
            <h2 id="makna-title" className="section-title fade-in">Makna Kabinet Revolusi Karsa</h2>
            <dl className="makna-terms fade-in">
              <div>
                <dt>Revolusi</dt>
                <dd>Keberanian meninggalkan kebiasaan lama.</dd>
              </div>
              <div>
                <dt>Karsa</dt>
                <dd>Kehendak tulus untuk bergerak.</dd>
              </div>
            </dl>
            <div className="about-content">
              <p className="fade-in">
                Sebuah organisasi tidak runtuh oleh waktu, melainkan ketika arah dan penerusnya hilang. Itulah yang dialami BEM FIKTI Universitas Gunadarma satu periode kebelakang. Dari kekosongan itu, Kabinet Revolusi Karsa lahir dari mahasiswa yang menolak berdiam diri. Revolusi adalah keberanian meninggalkan kebiasaan lama dan Karsa adalah kehendak tulus untuk bergerak. Dengan keduanya, kami membangun ulang BEM FIKTI Universitas Gunadarma agar manfaatnya kembali dirasakan seluruh mahasiswa.
              </p>
            </div>
          </div>
        </section>

        {/* Visi Misi — dengan foto split */}
        <section className="section section-bg-white" aria-labelledby="visimisi-title">
          <div className="container">
            <p className="eyebrow fade-in">Arah Gerak</p>
            <h2 id="visimisi-title" className="section-title fade-in">Visi dan Misi</h2>

            {/* Split: Kiri (Visi atas, Misi bawah) | Kanan (Foto) */}
            <div className="about-split fade-in" style={{ marginTop: 'var(--space-8)' }}>
              {/* Sisi Kiri: Visi (atas) dan Misi (bawah) */}
              <div className="about-split__content">
                {/* Visi */}
                <div className="visi-card visi-card--green">
                  <p className="visi-card__label">Visi</p>
                  <h3 className="visi-card__title">
                    Menjadikan Badan Eksekutif Mahasiswa Fakultas Ilmu Komputer dan Teknologi Informasi sebagai simpul kebersamaan yang solid dan suportif dalam meningkatkan potensi mahasiswa serta menggerakkan aksi nyata yang berdampak bagi masyarakat.
                  </h3>
                </div>

                {/* Misi */}
                <div className="visi-card visi-card--purple">
                  <p className="visi-card__label">Misi</p>
                  <ul className="visi-card__list" role="list">
                    {[
                      'Membangun ruang kebersamaan yang inklusif, suportif, dan berlandaskan kekeluargaan untuk mempererat solidaritas mahasiswa.',
                      'Menyelenggarakan program pengembangan kapasitas diri guna mengoptimalkan potensi, kepemimpinan, dan daya saing mahasiswa.',
                      'Menghadirkan pelayanan advokasi yang aktif, responsif, dan transparan dalam memperjuangkan kebutuhan serta aspirasi mahasiswa.',
                      'Memperkuat kolaborasi yang sinergis dan berkelanjutan bersama seluruh elemen organisasi maupun lingkungan kampus.',
                      'Menggerakkan aksi kepedulian sosial yang solutif dan aplikatif demi memberikan dampak nyata bagi masyarakat.',
                    ].map((misi, i) => (
                      <li key={i} className="visi-card__list-item">
                        <span className="visi-card__list-bullet" aria-hidden="true" />
                        {misi}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sisi Kanan: Foto samping Visi & Misi */}
              <div className="about-split__img">
                <img
                  src="/assets/img/kegiatan-bem-fikti.jpg"
                  alt="Kegiatan BEM FIKTI Universitas Gunadarma"
                  style={{ objectPosition: 'center 35%' }}
                />
                <div className="about-split__img-overlay" aria-hidden="true" />
              </div>
            </div>
          </div>
        </section>

        {/* 4 Pilar */}
        <section className="section section-bg-subtle" aria-labelledby="pilar-title">
          <div className="container">
            <p className="eyebrow fade-in">Landasan Kabinet</p>
            <h2 id="pilar-title" className="section-title fade-in">4 Pilar Revolusi Karsa</h2>

            <div className="pillar-grid">
              {[
                { num: '01', label: 'Kebersamaan', color: 'var(--blue-700)', desc: 'Membangun lingkungan organisasi yang inklusif, suportif, dan berlandaskan kekeluargaan untuk mempererat persatuan antarmahasiswa FIKTI.' },
                { num: '02', label: 'Advokasi', color: 'var(--blue-700)', desc: 'Menghadirkan layanan advokasi aspirasi yang responsif dan transparan, sekaligus memperkuat kolaborasi harmonis bersama.' },
                { num: '03', label: 'Potensi', color: 'var(--green-700)', desc: 'Memfasilitasi pengembangan kapasitas mahasiswa melalui peningkatan keahlian, kepemimpinan, dan kreativitas guna mencetak mahasiswa berdaya saing.' },
                { num: '04', label: 'Aksi Nyata', color: 'var(--green-700)', desc: 'Menginisiasi kepedulian sosial yang solutif dan aplikatif melalui pemanfaatan ilmu teknologi mahasiswa demi memberi dampak bagi masyarakat.' },
              ].map((p) => (
                <div key={p.num} className="card pillar-card fade-in">
                  <p style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-3xl)', fontWeight: 700, color: p.color, lineHeight: 1, marginBottom: 'var(--space-3)' }}>
                    {p.num}
                  </p>
                  <h3 className="pillar-card__title">{p.label}</h3>
                  <p className="pillar-card__body">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
