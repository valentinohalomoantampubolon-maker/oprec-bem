import { recruitmentConfig } from './recruitment'

export type StageStatus = 'pending' | 'active' | 'done'

export interface Stage {
  title: string
  description: string
  start: string | null
  /** Diisi bila tahap berupa rentang tanggal */
  end?: string | null
}

const d = recruitmentConfig.announcementDates

export const stages: Stage[] = [
  {
    title: 'Pendaftaran',
    description: 'Isi formulir pendaftaran dan unggah berkas.',
    start: recruitmentConfig.registrationStart,
    end: recruitmentConfig.registrationEnd,
  },
  {
    title: 'Pengumuman berkas',
    description: 'Daftar pendaftar yang lolos ke tahap wawancara.',
    start: d.resultAnnouncement,
  },
  {
    title: 'Wawancara',
    description: 'Wawancara langsung di kampus bersama kepala biro dan kepala departemen.',
    start: d.offlineInterview,
  },
  {
    title: 'Penempatan biro',
    description: 'Kepala biro dan kepala departemen menempatkan calon staf ke biro.',
    start: d.staffBidding,
  },
  {
    title: 'Pengumuman akhir',
    description: 'Daftar staf BEM FIKTI 2026/2027.',
    start: d.finalAnnouncement,
  },
]

const DAY = 86_400_000
const tz = 'Asia/Jakarta'

export function stageStatus(s: Stage, now = Date.now()): StageStatus {
  if (!recruitmentConfig.scheduleConfirmed || !s.start) return 'pending'
  const start = new Date(s.start).getTime()
  const end = s.end ? new Date(s.end).getTime() : start + DAY
  if (now > end) return 'done'
  if (now >= start) return 'active'
  return 'pending'
}

function parts(iso: string) {
  const dt = new Date(iso)
  const day = new Intl.DateTimeFormat('id-ID', { day: 'numeric', timeZone: tz }).format(dt)
  const month = new Intl.DateTimeFormat('id-ID', { month: 'short', timeZone: tz }).format(dt).replace('.', '')
  const monthLong = new Intl.DateTimeFormat('id-ID', { month: 'long', timeZone: tz }).format(dt)
  const weekday = new Intl.DateTimeFormat('id-ID', { weekday: 'long', timeZone: tz }).format(dt)
  return { day, month, monthLong, weekday }
}

/** "7–10 Nov" atau "12 Nov" */
export function shortDate(s: Stage): string {
  if (!recruitmentConfig.scheduleConfirmed || !s.start) return 'Segera'
  const a = parts(s.start)
  if (s.end) {
    const b = parts(s.end)
    return a.month === b.month ? `${a.day}–${b.day} ${b.month}` : `${a.day} ${a.month}–${b.day} ${b.month}`
  }
  return `${a.day} ${a.month}`
}

/** "Sabtu, 7 November – Selasa, 10 November 2026, pukul 23.59 WIB" */
export function longDate(s: Stage): string {
  if (!recruitmentConfig.scheduleConfirmed || !s.start) return 'Jadwal diumumkan di Instagram @ug_bemfikti'
  const a = parts(s.start)
  if (!s.end) return `${a.weekday}, ${a.day} ${a.monthLong} 2026`
  const b = parts(s.end)
  const time = new Intl.DateTimeFormat('id-ID', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: tz }).format(new Date(s.end))
  return `${a.weekday}, ${a.day} ${a.monthLong} sampai ${b.weekday}, ${b.day} ${b.monthLong} 2026, pukul ${time} WIB`
}
