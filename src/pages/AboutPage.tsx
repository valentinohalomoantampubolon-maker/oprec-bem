import { useEffect } from 'react'
import { PageHead } from '../components/PageHead'

const misi = [
  'Membangun ekosistem organisasi yang inklusif dan suportif bagi seluruh mahasiswa FIKTI.',
  'Memperkuat layanan advokasi dan aspirasi mahasiswa secara responsif dan transparan.',
  'Mendorong pengembangan potensi mahasiswa melalui kegiatan akademik, seni, olahraga, dan sosial.',
  'Menjalin kemitraan strategis dengan berbagai pihak untuk memperluas dampak program BEM FIKTI.',
  'Menginisiasi aksi nyata yang memanfaatkan kompetensi teknologi informasi untuk masyarakat.',
]

const pillars = [
  { title: 'Kebersamaan', body: 'Membangun lingkungan organisasi yang inklusif, suportif, dan berlandaskan kekeluargaan.' },
  { title: 'Advokasi', body: 'Menghadirkan layanan advokasi aspirasi yang responsif dan transparan bagi mahasiswa FIKTI.' },
  { title: 'Potensi', body: 'Memfasilitasi pengembangan keahlian, kepemimpinan, dan kreativitas mahasiswa.' },
  { title: 'Aksi nyata', body: 'Menginisiasi kepedulian sosial yang solutif melalui pemanfaatan ilmu teknologi.' },
]

export function AboutPage() {
  useEffect(() => {
    document.title = 'Tentang BEM FIKTI | Oprec Staf 2026/2027'
  }, [])

  return (
    <>
      <PageHead crumbs={[{ label: 'Tentang' }]} title="Tentang BEM FIKTI">
        <p>Badan Eksekutif Mahasiswa Fakultas Ilmu Komputer dan Teknologi Informasi, Universitas Gunadarma.</p>
      </PageHead>

      <figure className="photo wrap">
        <img src="/assets/img/ldk-bem-fikti.jpg" alt="Pengurus BEM FIKTI saat Latihan Dasar Kepemimpinan" />
        <figcaption>Latihan Dasar Kepemimpinan BEM FIKTI.</figcaption>
      </figure>

      <section className="block" aria-labelledby="h-profil">
        <div className="wrap split">
          <h2 id="h-profil" className="h2">Siapa kami</h2>
          <div className="prose-stack">
            <p>BEM FIKTI adalah organisasi kemahasiswaan tingkat fakultas yang mewadahi aspirasi, kreativitas, dan pengembangan diri mahasiswa FIKTI Universitas Gunadarma.</p>
            <p>BEM FIKTI menjadi perwakilan mahasiswa sekaligus mitra kampus dalam menjalankan tri dharma perguruan tinggi, terutama pengabdian masyarakat dan kehidupan kemahasiswaan.</p>
            <p>Periode 2026/2027 dijalankan oleh Kabinet Revolusi Karsa dengan semangat <q>revolusi pergerakan, ciptakan perubahan</q>.</p>
          </div>
        </div>
      </section>

      <section className="block block--blue" aria-labelledby="h-visi">
        <div className="wrap">
          <h2 id="h-visi" className="h4">Visi</h2>
          <p className="statement">Mewujudkan BEM FIKTI yang berdampak, inklusif, dan adaptif dalam memberdayakan mahasiswa FIKTI.</p>
        </div>
      </section>

      <section className="block block--white" aria-labelledby="h-misi">
        <div className="wrap split">
          <h2 id="h-misi" className="h2">Misi</h2>
          <ul className="ticks ticks--large">{misi.map((m) => <li key={m}>{m}</li>)}</ul>
        </div>
      </section>

      <section className="block" aria-labelledby="h-pilar">
        <div className="wrap">
          <div className="block__head">
            <h2 id="h-pilar" className="h2">Empat pilar Revolusi Karsa</h2>
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

      <figure className="photo wrap">
        <img src="/assets/img/kegiatan-bem-fikti.jpg" alt="Kegiatan BEM FIKTI di dalam ruangan" />
        <figcaption>Salah satu kegiatan BEM FIKTI.</figcaption>
      </figure>
    </>
  )
}
