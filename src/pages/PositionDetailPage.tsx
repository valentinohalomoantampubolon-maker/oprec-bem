import { useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { getPositionBySlug, specialPositions } from '../data/positions'
import { PageHead } from '../components/PageHead'
import { RegisterButton } from '../components/RegisterButton'

export function PositionDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const position = slug ? getPositionBySlug(slug) : undefined

  useEffect(() => {
    if (position) document.title = `${position.name} | Oprec Staf BEM FIKTI 2026/2027`
  }, [position])

  if (!position) return <Navigate to="/404" replace />
  const other = specialPositions.find((p) => p.id !== position.id)

  return (
    <>
      <PageHead crumbs={[{ label: 'Departemen', to: '/departemen#posisi-khusus' }, { label: position.name }]} title={position.name}>
        <p>{position.description}</p>
      </PageHead>

      <section className="block block--white">
        <div className="wrap detail">
          <div className="detail__main">
            <h2 className="h2">Yang akan kamu kerjakan</h2>
            <ul className="ticks ticks--large">
              {position.duties.map((d) => <li key={d}>{d}</li>)}
            </ul>
          </div>
          <aside className="detail__side">
            <div className="side">
              <RegisterButton block />
              <Link to="/alur-pendaftaran" className="link">Alur dan syarat pendaftaran</Link>
              {other && <Link to={`/posisi/${other.slug}`} className="link">Lihat posisi {other.name}</Link>}
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
