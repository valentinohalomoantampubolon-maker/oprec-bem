import { useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { departments, getDepartmentBySlug } from '../data/departments'
import { PageHead } from '../components/PageHead'
import { RegisterButton } from '../components/RegisterButton'

export function DepartmentDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const dep = slug ? getDepartmentBySlug(slug) : undefined

  useEffect(() => {
    if (dep) document.title = `${dep.shortName} | Oprec Staf BEM FIKTI 2026/2027`
  }, [dep])

  if (!dep) return <Navigate to="/404" replace />

  const idx = departments.findIndex((d) => d.id === dep.id)
  const next = departments[(idx + 1) % departments.length]

  return (
    <>
      <PageHead crumbs={[{ label: 'Departemen', to: '/departemen' }, { label: dep.shortName }]} title={dep.shortName}>
        <p>
          Departemen {dep.category.toLowerCase()} dengan {dep.biro.length} biro. {dep.tagline}.
        </p>
      </PageHead>

      <section className="block block--white">
        <div className="wrap detail">
          <div className="detail__main">
            <p className="prose">{dep.about}</p>

            {dep.deptPrograms.length > 0 && (
              <div className="detail__group">
                <h2 className="h3">Program tingkat departemen</h2>
                <dl className="progs">
                  {dep.deptPrograms.map((p) => (
                    <div key={p.name}>
                      <dt>{p.name}</dt>
                      <dd>{p.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            {dep.biro.map((biro, i) => (
              <article key={biro.name} id={`biro-${i + 1}`} className="biro">
                <h2 className="h2 biro__name">{biro.name}</h2>
                <p className="prose">{biro.description}</p>
                {biro.programs.length > 0 ? (
                  <>
                    <h3 className="h4">Program kerja</h3>
                    <dl className="progs">
                      {biro.programs.map((p) => (
                        <div key={p.name}>
                          <dt>{p.name}</dt>
                          <dd>{p.description}</dd>
                        </div>
                      ))}
                    </dl>
                  </>
                ) : (
                  <p className="note">Program kerja biro ini diumumkan bersama jadwal resmi.</p>
                )}
              </article>
            ))}
          </div>

          <aside className="detail__side">
            <div className="side">
              <p className="side__label">Biro di departemen ini</p>
              <ul className="side__list">
                {dep.biro.map((b, i) => (
                  <li key={b.name}><a href={`#biro-${i + 1}`}>{b.name}</a></li>
                ))}
              </ul>
              <RegisterButton block />
              <Link to="/alur-pendaftaran" className="link">Alur dan syarat pendaftaran</Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="block">
        <div className="wrap nextdep">
          <Link to="/departemen" className="link">Semua departemen</Link>
          <Link to={`/departemen/${next.slug}`} className="nextdep__go">
            <small>Departemen berikutnya</small>
            {next.shortName}
          </Link>
        </div>
      </section>
    </>
  )
}
