import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useCountdown } from '../hooks/useCountdown'
import { departments } from '../data/departments'
import { specialPositions } from '../data/positions'
import { stages, stageStatus, shortDate } from '../config/schedule'
import { RegisterButton } from '../components/RegisterButton'

const pillars = [
  { title: 'Kebersamaan', body: 'Lingkungan organisasi yang suportif dan kekeluargaan, tempat staf baru tidak dibiarkan belajar sendirian.' },
  { title: 'Advokasi', body: 'Menampung aspirasi mahasiswa FIKTI dan menindaklanjutinya secara terbuka bersama pihak kampus.' },
  { title: 'Potensi', body: 'Ruang untuk mengasah keahlian, kepemimpinan, dan kreativitas lewat program yang benar-benar dijalankan.' },
  { title: 'Aksi nyata', body: 'Kegiatan sosial yang memanfaatkan ilmu teknologi untuk memberi dampak di luar kampus.' },
]

const programs = [
  { name: 'TechnoFair 13.0', body: 'Seminar, workshop, dan kompetisi teknologi informasi.' },
  { name: 'FIKTI Space 5.0', body: 'Kompetisi olahraga, seni, dan esports antarmahasiswa.' },
  { name: 'Hero of Education and Social', body: 'Pengabdian masyarakat di desa yang membutuhkan.' },
  { name: 'Internship with BEM FIKTI', body: 'Mahasiswa terlibat langsung di proyek dan alur kerja BEM.' },
]

function plural(n: string, unit: string) {
  return `${Number(n)} ${unit}`
}

export function HomePage() {
  const c = useCountdown()

  useEffect(() => {
    document.title = 'Oprec Staf BEM FIKTI UG 2026/2027 | Kabinet Revolusi Karsa'
  }, [])

  const left = `${plural(c.days, 'hari')} ${plural(c.hours, 'jam')} ${plural(c.minutes, 'menit')}`
  const status =
    c.phase === 'upcoming' ? <>Formulir dibuka dalam <b>{left}</b></>
    : c.phase === 'open' ? <>Formulir ditutup dalam <b>{left}</b></>
    : c.phase === 'closed' ? <>Pendaftaran sudah ditutup. Pantau pengumuman di Instagram <b>@ug_bemfikti</b>.</>
    : <>Jadwal pendaftaran diumumkan di Instagram <b>@ug_bemfikti</b>.</>

  return (
    <>
      {/* Poster */}
      <section className="poster" aria-labelledby="judul">
        <div className="wrap poster__body">
          <div className="poster__top">
            <p className="poster__kicker">Kabinet Revolusi Karsa, BEM FIKTI Universitas Gunadarma</p>
            <div className="poster__marks" aria-hidden="true">
              <img src="/assets/img/logo-bem-fikti.jpg" alt="" width={56} height={56} />
              <img src="/assets/img/logo-revarsa.png" alt="" width={54} height={56} />
            </div>
          </div>
          <h1 id="judul" className="poster__title">
            Open recruitment staf BEM&nbsp;FIKTI
          </h1>
          <div className="poster__foot">
            <p className="poster__lede">
              Terbuka untuk mahasiswa FIKTI angkatan 2024 dan 2025. Pilih satu dari tujuh departemen, lalu ikuti seleksi sampai pengumuman akhir.
            </p>
            <div className="poster__action">
              <p className="poster__status" role="status" aria-live="off">{status}</p>
              <div className="poster__buttons">
                <RegisterButton variant="light" />
                <Link to="/alur-pendaftaran" className="link-light">Baca syarat dan berkas</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="wrap">
        <ol className="tabs" aria-label="Jadwal seleksi">
          {stages.map((s) => {
            const st = stageStatus(s)
            return (
              <li key={s.title} className={`tab tab--${st}`}>
                <span className="tab__date">{shortDate(s)}</span>
                <span className="tab__name">{s.title}</span>
                {st === 'active' && <span className="tab__now">Sedang berlangsung</span>}
              </li>
            )
          })}
        </ol>
        </div>
      </section>

      {/* Departemen */}
      <section className="block" aria-labelledby="dep">
        <div className="wrap">
          <div className="block__head">
            <h2 id="dep" className="h2">Tujuh departemen, lima belas biro</h2>
            <p className="lede">
              Saat mendaftar kamu memilih satu departemen. Biro tempatmu bekerja ditentukan setelah wawancara.
            </p>
          </div>

          <ul className="index">
            {departments.map((dep) => (
              <li key={dep.id}>
                <Link to={`/departemen/${dep.slug}`} className="index__row">
                  <span className="index__name">{dep.shortName}</span>
                  <span className="index__biro">{dep.biro.map((b) => b.name.replace(/^Biro /, '')).join(', ')}</span>
                  <span className="index__kind">{dep.category}</span>
                </Link>
              </li>
            ))}
            <li>
              <Link to="/departemen#posisi-khusus" className="index__row">
                <span className="index__name">Sekretaris dan Bendahara</span>
                <span className="index__biro">{specialPositions.length} posisi di luar departemen, membantu Sekretaris Umum dan Bendahara Umum</span>
                <span className="index__kind">Posisi khusus</span>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* Posisi staf */}
      <section className="block block--white" aria-labelledby="peran">
        <div className="wrap split">
          <div>
            <h2 id="peran" className="h2">Di mana posisimu nanti</h2>
            <p className="lede">
              Staf biro menjalankan program kerja dari persiapan sampai selesai. Kamu bekerja langsung dengan kepala biro, yang melapor ke kepala departemen.
            </p>
          </div>
          <ol className="ladder" aria-label="Susunan pengurus">
            <li className="ladder__step">
              <strong>Kepala departemen</strong>
              <span>Menentukan arah departemen bersama pengurus harian.</span>
            </li>
            <li className="ladder__step">
              <strong>Kepala biro</strong>
              <span>Menyusun rencana teknis dan membagi tugas.</span>
            </li>
            <li className="ladder__step ladder__step--you">
              <strong>Staf biro</strong>
              <span className="ladder__tag">Posisi yang dibuka</span>
              <span>Menjalankan kegiatan, kepanitiaan, dan operasional biro.</span>
            </li>
          </ol>
        </div>
      </section>

      {/* Pilar */}
      <section className="block" aria-labelledby="pilar">
        <div className="wrap">
          <div className="block__head">
            <h2 id="pilar" className="h2">Yang dikerjakan kabinet ini</h2>
          </div>
          <dl className="pillars">
            {pillars.map((p) => (
              <div key={p.title}>
                <dt>{p.title}</dt>
                <dd>{p.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Program */}
      <section className="block block--blue" aria-labelledby="program">
        <div className="wrap">
          <div className="block__head">
            <h2 id="program" className="h2">Acara yang akan kamu ikut jalankan</h2>
          </div>
          <ul className="programs">
            {programs.map((p) => (
              <li key={p.name}>
                <strong>{p.name}</strong>
                <span>{p.body}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Penutup */}
      <section className="block closing" aria-labelledby="ajakan">
        <div className="wrap">
          <h2 id="ajakan" className="closing__line">Revolusi pergerakan, ciptakan perubahan.</h2>
          <div className="closing__row">
            <RegisterButton />
            <Link to="/alur-pendaftaran" className="link">Lihat alur seleksi lengkap</Link>
          </div>
        </div>
      </section>
    </>
  )
}
