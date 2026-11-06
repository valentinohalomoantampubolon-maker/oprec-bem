import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { recruitmentConfig } from '../config/recruitment'
import { getRegistrationPhase, toMs } from '../config/status'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { Intro } from './Intro'
import { WhatsAppButton } from './WhatsAppButton'

export function Layout() {
  const { pathname } = useLocation()

  /* Scroll to top on route change */
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [pathname])

  /* Saat pendaftaran dibuka/ditutup, perbarui semua tombol daftar tanpa perlu reload */
  const [tick, setTick] = useState(0)
  const phase = getRegistrationPhase()
  useEffect(() => {
    const boundaries = [recruitmentConfig.registrationStart, recruitmentConfig.registrationEnd]
      .map(toMs)
      .filter((t) => !isNaN(t) && t > Date.now())
    const check = () => setTick((t) => t + 1)
    const onVisible = () => { if (document.visibilityState === 'visible') check() }
    document.addEventListener('visibilitychange', onVisible)
    let timer: ReturnType<typeof setTimeout> | undefined
    if (boundaries.length) {
      // maksimal 1 jam per jeda supaya aman dari batas setTimeout
      const wait = Math.min(Math.min(...boundaries) - Date.now() + 500, 3_600_000)
      timer = setTimeout(check, wait)
    }
    return () => {
      if (timer) clearTimeout(timer)
      document.removeEventListener('visibilitychange', onVisible)
    }
  }, [tick])

  return (
    <>
      <Intro />
      <Navbar key={`nav-${phase}`} />
      <main id="main-content" tabIndex={-1} key={`main-${phase}`}>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
