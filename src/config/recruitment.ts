/**
 * Konfigurasi jadwal OPREC Staff BEM FIKTI 2026/2027
 * ─────────────────────────────────────────────────
 * Ubah file ini SATU KALI saat jadwal resmi sudah ditetapkan:
 *   1. Set scheduleConfirmed = true
 *   2. Isi registrationStart dengan string ISO 8601 +07:00
 *
 * Selama scheduleConfirmed = false, countdown menampilkan 00:00:00:00
 * dan semua tahapan menampilkan "Jadwal akan diumumkan".
 */
export const recruitmentConfig = {
  timezone: "Asia/Jakarta",

  /** Ubah ke true HANYA setelah jadwal resmi ditetapkan */
  scheduleConfirmed: true,

  /** ISO 8601 dengan offset +07:00, contoh: "2026-11-01T08:00:00+07:00" */
  registrationStart: "2026-11-07T00:00:00+07:00" as string | null,
  /** Opsi extend sampai 12 Nov: ubah ke "2026-11-12T23:59:00+07:00" */
  registrationEnd: "2026-11-10T23:59:00+07:00" as string | null,

  /** URL Google Form pendaftaran resmi (isi saat form sudah aktif) */
  registrationFormUrl: "https://forms.gle/3WK5AWmXex7y2gmb9" as string | null,

  /** Narahubung (CP) WhatsApp, format internasional tanpa + */
  contactWhatsApp: "6287740530606" as string | null,

  /** Jam 00:00 berarti hanya tanggal yang ditampilkan */
  announcementDates: {
    resultAnnouncement: "2026-11-12T00:00:00+07:00" as string | null,
    offlineInterview: "2026-11-15T00:00:00+07:00" as string | null,
    staffBidding: "2026-11-15T00:00:00+07:00" as string | null,
    finalAnnouncement: "2026-11-16T00:00:00+07:00" as string | null,
  },
} as const satisfies RecruitmentConfig;

export interface RecruitmentConfig {
  timezone: string;
  scheduleConfirmed: boolean;
  registrationStart: string | null;
  registrationEnd: string | null;
  registrationFormUrl: string | null;
  contactWhatsApp: string | null;
  announcementDates: {
    resultAnnouncement: string | null;
    offlineInterview: string | null;
    staffBidding: string | null;
    finalAnnouncement: string | null;
  };
}
