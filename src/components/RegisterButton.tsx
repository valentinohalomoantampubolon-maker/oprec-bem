import { recruitmentConfig } from '../config/recruitment'
import { canRegister, getRegistrationPhase } from '../config/status'

function openingDay(): string {
  const iso = recruitmentConfig.registrationStart
  if (!iso) return 'segera'
  return new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'long', timeZone: 'Asia/Jakarta' }).format(new Date(iso))
}

/** Tombol daftar yang mengikuti status pendaftaran. */
export function RegisterButton({ variant = 'solid', block = false }: { variant?: 'solid' | 'light'; block?: boolean }) {
  const cls = `btn btn--${variant}${block ? ' btn--block' : ''}`
  if (canRegister()) {
    return (
      <a href={recruitmentConfig.registrationFormUrl!} target="_blank" rel="noopener noreferrer" className={cls}>
        Isi formulir pendaftaran
      </a>
    )
  }
  const phase = getRegistrationPhase()
  return (
    <span className={`${cls} btn--off`} role="status">
      {phase === 'closed' ? 'Pendaftaran sudah ditutup' : `Formulir dibuka ${openingDay()}`}
    </span>
  )
}
