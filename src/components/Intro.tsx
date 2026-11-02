import { useEffect, useState } from 'react'

const STORAGE_KEY = 'revarsa-intro-seen'
const DURATION_MS = 2500

function shouldShowIntro(): boolean {
  if (typeof window === 'undefined') return false
  try {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
    if (sessionStorage.getItem(STORAGE_KEY)) return false
  } catch {
    return true
  }
  return true
}

/**
 * Animasi pembuka logo Revolusi Karsa.
 * - Maksimal 2,5 detik, bisa dilewati (klik, tombol "Lewati", atau Esc).
 * - Hanya tampil sekali per sesi browser.
 * - Tidak tampil bila pengguna memilih "kurangi animasi" di perangkatnya.
 */
export function Intro() {
  const [visible, setVisible] = useState(shouldShowIntro)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    if (!visible) return
    try { sessionStorage.setItem(STORAGE_KEY, '1') } catch { /* abaikan */ }
    document.body.style.overflow = 'hidden'

    const leaveTimer = setTimeout(() => setLeaving(true), DURATION_MS - 450)
    const doneTimer = setTimeout(() => setVisible(false), DURATION_MS)
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') skip() }
    window.addEventListener('keydown', onKey)

    return () => {
      clearTimeout(leaveTimer)
      clearTimeout(doneTimer)
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [visible])

  function skip() {
    setLeaving(true)
    setTimeout(() => setVisible(false), 300)
  }

  if (!visible) return null

  return (
    <div
      className={`intro${leaving ? ' intro--leaving' : ''}`}
      role="dialog"
      aria-label="Animasi pembuka Kabinet Revolusi Karsa"
      onClick={skip}
    >
      <div className="intro__glow" aria-hidden="true" />
      <div className="intro__stage">
        <div className="intro__ring" aria-hidden="true" />
        <img
          src="/assets/img/logo-revarsa.png"
          alt="Logo Kabinet Revolusi Karsa"
          width={120}
          height={124}
          className="intro__logo"
        />
      </div>
      <p className="intro__word" aria-hidden="true">REVOLUSI KARSA</p>
      <p className="intro__sub">Open Recruitment Staff 2026/2027</p>
      <button
        type="button"
        className="intro__skip"
        onClick={(e) => { e.stopPropagation(); skip() }}
      >
        Lewati
      </button>
    </div>
  )
}
