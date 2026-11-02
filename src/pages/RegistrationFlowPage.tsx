import { useEffect } from 'react'
import { stages, stageStatus, shortDate, longDate } from '../config/schedule'
import { PageHead } from '../components/PageHead'
import { RegisterButton } from '../components/RegisterButton'

const REQ_UMUM = [
  'Mahasiswa aktif Fakultas Ilmu Komputer dan Teknologi Informasi (FIKTI) Universitas Gunadarma.',
  'Angkatan 2024 atau 2025.',
  'Tidak sedang cuti akademik.',
  'Tidak sedang menjalani sanksi akademik maupun disiplin dari fakultas atau universitas.',
  'Tidak menjabat ketua atau pengurus inti organisasi lain yang waktunya bertabrakan dengan BEM.',
  'Bersedia mengikuti seluruh tahap seleksi.',
]

const REQ_BERKAS = [
  'Formulir pendaftaran online yang terisi lengkap.',
  'Foto formal berpakaian rapi (JPG atau PNG).',
  'Scan atau foto KTM yang masih aktif.',
  'Curriculum vitae (CV) terbaru.',
]

const REQ_TAMBAHAN = [
  'Setiap pendaftar hanya memilih satu departemen.',
  'Keputusan panitia seleksi bersifat final.',
  'Pendaftar yang tidak memenuhi syarat dinyatakan gugur.',
]

const statusText = { done: 'Selesai', active: 'Sedang berlangsung', pending: '' } as const

export function RegistrationFlowPage() {
  useEffect(() => {
    document.title = 'Alur dan Syarat | Oprec Staf BEM FIKTI 2026/2027'
  }, [])

  return (
    <>
      <PageHead crumbs={[{ label: 'Alur dan syarat' }]} title="Alur dan syarat pendaftaran">
        <p>Lima tahap, dari mengisi formulir sampai pengumuman akhir. Siapkan berkas sebelum formulir dibuka.</p>
      </PageHead>

      <section className="block block--white" aria-labelledby="h-alur">
        <div className="wrap">
          <div className="block__head">
            <h2 id="h-alur" className="h2">Tahap seleksi</h2>
          </div>
          <ol className="steps">
            {stages.map((s, i) => {
              const st = stageStatus(s)
              return (
                <li key={s.title} className={`step step--${st}`}>
                  <span className="step__date">{shortDate(s)}</span>
                  <div className="step__body">
                    <h3 className="step__title">
                      <span className="step__num">{i + 1}</span>
                      {s.title}
                      {statusText[st] && <span className="step__status">{statusText[st]}</span>}
                    </h3>
                    <p>{s.description}</p>
                    <p className="step__when">{longDate(s)}</p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      <section className="block" aria-labelledby="h-syarat">
        <div className="wrap">
          <div className="block__head">
            <h2 id="h-syarat" className="h2">Syarat dan berkas</h2>
            <p className="lede">Khusus mahasiswa aktif Universitas Gunadarma.</p>
          </div>
          <div className="reqs">
            <div>
              <h3 className="h4">Syarat pendaftar</h3>
              <ul className="ticks">{REQ_UMUM.map((r) => <li key={r}>{r}</li>)}</ul>
            </div>
            <div>
              <h3 className="h4">Berkas yang disiapkan</h3>
              <ul className="ticks">{REQ_BERKAS.map((r) => <li key={r}>{r}</li>)}</ul>
              <h3 className="h4">Ketentuan</h3>
              <ul className="ticks">{REQ_TAMBAHAN.map((r) => <li key={r}>{r}</li>)}</ul>
              <p className="note">Syarat khusus per departemen, bila ada, diumumkan di Instagram @ug_bemfikti.</p>
            </div>
          </div>
          <div className="closing__row">
            <RegisterButton />
          </div>
        </div>
      </section>
    </>
  )
}
