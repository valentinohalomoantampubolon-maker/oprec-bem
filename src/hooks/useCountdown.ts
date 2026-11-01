import { useEffect, useState } from 'react'
import { recruitmentConfig } from '../config/recruitment'
import { getRegistrationPhase, toMs, type RegistrationPhase } from '../config/status'

interface CountdownValues {
  days: string
  hours: string
  minutes: string
  seconds: string
  /** true when countdown is active and ticking */
  active: boolean
  /** status pendaftaran saat ini */
  phase: RegistrationPhase
}

const PAD = (n: number) => String(n).padStart(2, '0')
const ZERO = { days: '00', hours: '00', minutes: '00', seconds: '00' }

/**
 * Hitung mundur ke pembukaan pendaftaran (phase "upcoming"),
 * lalu ke penutupan pendaftaran (phase "open").
 */
export function useCountdown(): CountdownValues {
  const [now, setNow] = useState(() => Date.now())
  const phase = getRegistrationPhase(now)

  useEffect(() => {
    if (phase === 'tba' || phase === 'closed') return
    const id = setInterval(() => setNow(Date.now()), 1000)
    const onVisible = () => {
      if (document.visibilityState === 'visible') setNow(Date.now())
    }
    document.addEventListener('visibilitychange', onVisible)
    return () => {
      clearInterval(id)
      document.removeEventListener('visibilitychange', onVisible)
    }
  }, [phase])

  const target =
    phase === 'upcoming'
      ? toMs(recruitmentConfig.registrationStart)
      : phase === 'open'
        ? toMs(recruitmentConfig.registrationEnd)
        : NaN

  const diff = target - now
  if (isNaN(diff) || diff <= 0) return { ...ZERO, active: false, phase }

  const totalSec = Math.floor(diff / 1000)
  return {
    days: PAD(Math.floor(totalSec / 86400)),
    hours: PAD(Math.floor((totalSec % 86400) / 3600)),
    minutes: PAD(Math.floor((totalSec % 3600) / 60)),
    seconds: PAD(totalSec % 60),
    active: true,
    phase,
  }
}
