import { recruitmentConfig } from './recruitment'

/**
 * Status pendaftaran, dihitung dari recruitment.ts:
 * - tba      : jadwal belum dikonfirmasi
 * - upcoming : jadwal sudah ada, pendaftaran belum dibuka
 * - open     : pendaftaran sedang dibuka
 * - closed   : pendaftaran sudah ditutup
 */
export type RegistrationPhase = 'tba' | 'upcoming' | 'open' | 'closed'

export function toMs(iso: string | null): number {
  if (!iso) return NaN
  return new Date(iso).getTime()
}

export function getRegistrationPhase(now: number = Date.now()): RegistrationPhase {
  const { scheduleConfirmed, registrationStart, registrationEnd } = recruitmentConfig
  const start = toMs(registrationStart)
  if (!scheduleConfirmed || isNaN(start)) return 'tba'
  if (now < start) return 'upcoming'
  const end = toMs(registrationEnd)
  if (!isNaN(end) && now > end) return 'closed'
  return 'open'
}

/** Tombol "Daftar Sekarang" hanya aktif saat pendaftaran dibuka dan link form sudah diisi. */
export function canRegister(now: number = Date.now()): boolean {
  return getRegistrationPhase(now) === 'open' && Boolean(recruitmentConfig.registrationFormUrl)
}

/** Teks tombol saat pendaftaran tidak bisa diakses. */
export function closedCtaLabel(now: number = Date.now()): string {
  const phase = getRegistrationPhase(now)
  if (phase === 'closed') return 'Pendaftaran Ditutup'
  return 'Pendaftaran Segera Dibuka'
}
