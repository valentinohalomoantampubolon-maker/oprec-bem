import { useEffect } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { departments, type Department } from '../data/departments'
import { specialPositions } from '../data/positions'
import { PageHead } from '../components/PageHead'

function DeptList({ items }: { items: Department[] }) {
  return (
    <ul className="index">
      {items.map((dep) => (
        <li key={dep.id}>
          <Link to={`/departemen/${dep.slug}`} className="index__row">
            <span className="index__name">{dep.shortName}</span>
            <span className="index__biro">
              <em>{dep.tagline}.</em> {dep.biro.map((b) => b.name).join(', ')}.
            </span>
            <span className="index__kind">{dep.biro.length} biro</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export function DepartmentsPage() {
  const [params] = useSearchParams()
  const { hash } = useLocation()

  useEffect(() => {
    document.title = 'Departemen | Oprec Staf BEM FIKTI 2026/2027'
  }, [])

  // Dukung link lama ?kategori=... dan anchor #...
  useEffect(() => {
    const target = (hash || '').replace('#', '') || params.get('kategori')
    if (!target) return
    const el = document.getElementById(target)
    if (el) requestAnimationFrame(() => el.scrollIntoView({ block: 'start' }))
  }, [hash, params])

  const external = departments.filter((d) => d.category === 'Eksternal')
  const internal = departments.filter((d) => d.category === 'Internal')

  return (
    <>
      <PageHead crumbs={[{ label: 'Departemen' }]} title="Departemen dan biro">
        <p>
          BEM FIKTI punya tujuh departemen dengan lima belas biro, ditambah posisi Sekretaris dan Bendahara. Saat mendaftar, kamu memilih satu departemen.
        </p>
      </PageHead>

      <section className="block" id="eksternal" aria-labelledby="h-eks">
        <div className="wrap">
          <div className="block__head">
            <h2 id="h-eks" className="h2">Eksternal</h2>
            <p className="lede">Bekerja ke luar: mahasiswa FIKTI, kampus, dan masyarakat.</p>
          </div>
          <DeptList items={external} />
        </div>
      </section>

      <section className="block block--white" id="internal" aria-labelledby="h-int">
        <div className="wrap">
          <div className="block__head">
            <h2 id="h-int" className="h2">Internal</h2>
            <p className="lede">Bekerja ke dalam: pengurus, media, dan kemitraan BEM.</p>
          </div>
          <DeptList items={internal} />
        </div>
      </section>

      <section className="block" id="posisi-khusus" aria-labelledby="h-pk">
        <div className="wrap">
          <div className="block__head">
            <h2 id="h-pk" className="h2">Posisi khusus</h2>
            <p className="lede">Dua posisi di luar departemen yang membantu langsung Sekretaris Umum dan Bendahara Umum.</p>
          </div>
          <ul className="index">
            {specialPositions.map((pos) => (
              <li key={pos.id}>
                <Link to={`/posisi/${pos.slug}`} className="index__row">
                  <span className="index__name">{pos.name}</span>
                  <span className="index__biro">{pos.duties[0]}</span>
                  <span className="index__kind">{pos.duties.length} tugas</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
