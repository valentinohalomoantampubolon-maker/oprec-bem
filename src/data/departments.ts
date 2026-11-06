export interface Program {
  name: string
  description: string
}

export interface Biro {
  name: string
  description: string
  programs: Program[]
}

export interface Department {
  id: string
  slug: string
  name: string
  shortName: string
  category: 'Eksternal' | 'Internal'
  tagline: string
  about: string
  /** Department-level programs (shown at dept level, not biro) */
  deptPrograms: Program[]
  biro: Biro[]
}

export const departments: Department[] = [
  {
    id: "sosial-masyarakat",
    slug: "sosial-masyarakat",
    name: "Departemen Sosial Masyarakat",
    shortName: "Sosial Masyarakat",
    category: "Eksternal",
    tagline:
      "Menghubungkan mahasiswa dengan kepedulian lingkungan dan masyarakat umum.",
    about:
      "Perubahan besar berawal dari kepedulian sederhana yang diwujudkan melalui aksi nyata. Departemen Sosial Masyarakat hadir sebagai wadah bagi mahasiswa FIKTI untuk berkontribusi dan memberikan manfaat bagi sesama maupun lingkungan. Melalui kegiatan sosial, pengabdian masyarakat, dan kepedulian terhadap lingkungan, setiap langkah kecil diharapkan mampu membawa perubahan positif.",
    deptPrograms: [
      {
        name: "GEMA BUMI",
        description:
          "Kampanye digital yang mengangkat isu sosial dan lingkungan melalui konten edukasi, peringatan hari besar, dan kampanye interaktif (challenge) di media sosial BEM FIKTI Universitas Gunadarma.",
      },
    ],
    biro: [
      {
        name: "Biro Pemberdayaan Sosial",
        description:
          "Wadah bagi mahasiswa FIKTI untuk terlibat dalam kegiatan sosial dan pengabdian masyarakat, mulai dari berbagi kebahagiaan hingga membantu mereka yang membutuhkan. Melalui setiap aksi, kami ingin menumbuhkan empati, mempererat solidaritas, dan menghadirkan dampak positif bagi sesama.",
        programs: [
          {
            name: "Hero of Education and Social",
            description:
              "Pengabdian sosial masyarakat di desa yang memiliki permasalahan keseharian: sosialisasi teknologi, kerja bakti, dan kegiatan sosial lain. 1× per periode. Program unggulan (Hero of Education and Social XII).",
          },
          {
            name: "Seutas Harapan Tulus dari Hati",
            description:
              "Bakti sosial di panti/yayasan/Sekolah Luar Biasa untuk berbagi kasih kepada mereka yang kurang beruntung. 1× per periode.",
          },
        ],
      },
      {
        name: "Biro Lingkungan Hidup",
        description:
          "Mengajak mahasiswa lebih peduli terhadap lingkungan, memahami berbagai permasalahannya, dan mengambil bagian dalam menciptakan perubahan. Melalui edukasi, kampanye digital, serta aksi nyata pelestarian lingkungan, kami ingin membangun kebiasaan sederhana yang membawa dampak berkelanjutan.",
        programs: [
          {
            name: "FIKTI TERRA",
            description:
              "Peningkatan kepedulian terhadap penghijauan dan pelestarian lingkungan lewat aksi nyata dan edukasi tanaman, keanekaragaman hayati, serta ekosistem.",
          },
          {
            name: "FIKTI UPCYCLE LAB",
            description:
              "Edukasi dan praktik mengolah barang bekas menjadi produk bernilai guna melalui workshop upcycling.",
          },
        ],
      },
    ],
  },

  {
    id: "politik-kemahasiswaan",
    slug: "politik-kemahasiswaan",
    name: "Departemen Politik dan Kemahasiswaan",
    shortName: "Politik dan Kemahasiswaan",
    category: "Eksternal",
    tagline:
      "Mengawal hak-hak mahasiswa dan membangun daya kritis di lingkungan kampus.",
    about:
      "Bertugas sebagai penghubung dan pelayanan kebutuhan terhadap mahasiswa/i FIKTI Universitas Gunadarma dengan pemangku kebijakan, pengadvokasian kebijakan internal kampus terhadap isu-isu yang berkembang, serta roda penggerak dalam pergerakan mahasiswa/i FIKTI Universitas Gunadarma.",
    deptPrograms: [],
    biro: [
      {
        name: "Biro Advokasi Mahasiswa",
        description:
          "Menjembatani komunikasi antara mahasiswa dan pihak birokrasi kampus serta memperjuangkan hak-hak mahasiswa.",
        programs: [
          {
            name: "FIKTI Information",
            description:
              "Sarana penyebarluasan informasi kampus yang relevan dan terkini melalui media sosial.",
          },
          {
            name: "HOTLINE FIKTI",
            description:
              "Platform terpusat via WhatsApp untuk informasi akademik dan non-akademik serta dukungan mental bagi mahasiswa.",
          },
          {
            name: "Bincang Bareng FIKTI",
            description:
              "Forum diskusi BEM FIKTI dengan mahasiswa tentang topik perkuliahan dan isu terkini tanpa mengandung suku, agama, ras, dan antargolongan.",
          },
        ],
      },
      {
        name: "Biro Kajian dan Aksi Strategis",
        description:
          "Pusat pengkajian, analisis, serta pengawalan isu-isu strategis baik di tingkat kampus, daerah, maupun nasional.",
        programs: [
          {
            name: "FIKTI Aware About Issue",
            description:
              "Wadah mahasiswa bersama BEM FIKTI untuk mengawal dan memberikan sikap atas isu yang sedang terjadi.",
          },
          {
            name: "FIKTI Bersuara Opini Terkini",
            description:
              "Wadah mahasiswa menyalurkan ide, gagasan, dan kritik konstruktif terhadap isu terkini, internal maupun eksternal.",
          },
        ],
      },
    ],
  },

  {
    id: "olahraga-seni-budaya",
    slug: "olahraga-seni-budaya",
    name: "Departemen Olahraga dan Seni Budaya",
    shortName: "Olahraga dan Seni Budaya",
    category: "Eksternal",
    tagline:
      "Wadah pengembangan dan pengelolaan potensi non-akademik mahasiswa FIKTI.",
    about:
      "Wadah pengembangan dan pengelolaan potensi non-akademik mahasiswa FIKTI.",
    deptPrograms: [
      {
        name: "FIKTI Sport & Art Championship",
        description:
          "Rangkaian kompetisi olahraga dan seni untuk menumbuhkan sportivitas dan kreativitas; wadah mahasiswa Gunadarma, khususnya FIKTI. Rencana Mei–Juni. Program unggulan “FIKTI Space 5.0” mencakup olahraga, seni, dan esports.",
      },
    ],
    biro: [
      {
        name: "Biro Olahraga",
        description:
          "Mengelola bidang olahraga, turnamen antarmahasiswa, dan mewadahi tim olahraga FIKTI.",
        programs: [
          {
            name: "FIKTI Sport and Community",
            description:
              "Wadah latihan rutin futsal, badminton, dan Mobile Legends selama 1 periode, termasuk mengikuti turnamen.",
          },
          {
            name: "FIKTI Playday",
            description:
              "Kegiatan olahraga seru untuk merekatkan ikatan mahasiswa: futsal, mini soccer, badminton, dan basket.",
          },
        ],
      },
      {
        name: "Biro Seni Budaya",
        description:
          "Mewadahi minat mahasiswa di bidang musik, tari, fotografi, dan penampilan seni.",
        programs: [
          {
            name: "Talk Bout Art",
            description:
              "Konten informasi dan fakta seputar seni untuk mahasiswa FIKTI dan masyarakat media sosial (postingan/reels di Instagram BEM), 1× per bulan.",
          },
          {
            name: "Minat Bakat Band",
            description:
              "Wadah mahasiswa FIKTI yang berbakat di bidang musik berbentuk band; minimal 2 penampilan per periode.",
          },
          {
            name: "Gelar Budaya",
            description:
              "Event musik sebagai ruang berekspresi bagi mahasiswa FIKTI, masyarakat Gunadarma, dan khalayak umum; rencana Juni.",
          },
        ],
      },
    ],
  },

  {
    id: "akademik",
    slug: "akademik",
    name: "Departemen Akademik",
    shortName: "Akademik",
    category: "Eksternal",
    tagline:
      "Mendukung perkuliahan mahasiswa sekaligus mempersiapkan langkah menuju dunia kerja.",
    about:
      "Wadah strategis yang menjembatani kehidupan perkuliahan mahasiswa di kampus dengan realita kebutuhan industri teknologi informasi saat ini. Tidak hanya berfokus pada pendampingan dan pemenuhan kebutuhan akademis harian mahasiswa, tetapi juga berkomitmen mengakselerasi kesiapan kerja melalui pelatihan berbasis kompetensi teknis (hardskill), pengembangan soft skills, wadah kompetisi, hingga pembinaan karir yang terarah.",
    deptPrograms: [],
    biro: [
      {
        name: "Biro Pengembangan Kompetensi",
        description:
          "Sarana utama dalam mengasah dan mengoptimalkan potensi intelektual serta keahlian teknis mahasiswa FIKTI melalui ruang belajar yang inklusif dan terstruktur — tutoring, bootcamp, micro-learning berbasis proyek, hingga seminar teknologi terkini — serta pengelolaan ajang kompetisi akademis agar mahasiswa memiliki portofolio karya yang nyata.",
        programs: [
          {
            name: "TechnoFair (unggulan: TechnoFair 13.0)",
            description:
              "Ajang tahunan pameran, kompetisi, dan seminar teknologi informasi; akhir periode (Juni), offline.",
          },
          {
            name: "FIKTI DevAcademy",
            description:
              "Bootcamp minimal 4 pertemuan selama 1 bulan dengan assignment dan final project; pertengahan periode, online (Zoom).",
          },
          {
            name: "MiniClass Tech",
            description:
              "Pelatihan micro-learning hardskill teknologi informasi berbasis proyek, 5 pertemuan; Februari, online (Zoom/Discord).",
          },
        ],
      },
      {
        name: "Biro Akselerasi Karir",
        description:
          "Kompas dan penggerak utama dalam mempersiapkan mahasiswa FIKTI menghadapi alur rekrutmen serta dinamika dunia kerja pasca-kampus: perluasan akses informasi magang dan karier teknologi informasi, pelatihan curriculum vitae dan portofolio berstandar industri, hingga mock interview dan career talkshow bersama alumni, praktisi, dan perusahaan teknologi.",
        programs: [
          {
            name: "Career Insight Forum",
            description:
              "Talkshow karier di bidang teknologi informasi bersama pemateri profesional dan alumni; awal periode, online.",
          },
          {
            name: "FIKTI Corporate Exposure",
            description:
              "Kerja sama dengan perusahaan teknologi informasi/perusahaan terkait FIKTI untuk memberi informasi dunia karier; April/Mei 2027, offline.",
          },
        ],
      },
    ],
  },

  {
    id: "pengembangan-sdm",
    slug: "pengembangan-sdm",
    name: "Departemen Pengembangan Sumber Daya Manusia",
    shortName: "Pengembangan Sumber Daya Manusia",
    category: "Internal",
    tagline:
      "Menjaga kualitas pengurus, menjalankan fungsi monitoring, dan mengurus alur kaderisasi mahasiswa.",
    about:
      "Departemen yang menjaga efektivitas dan kerja sama para pengurus BEM FIKTI 2026/2027 dengan monitoring, evaluasi, dan aktivitas melalui beberapa program kerja.",
    deptPrograms: [
      {
        name: "Award is a Must!",
        description:
          "Apresiasi untuk pengurus dan peserta internship: sertifikat bulanan dan hadiah bagi performa terbaik di akhir periode.",
      },
      {
        name: "Pengembangan Sumber Daya Manusia need a Treatment too?",
        description:
          "Program pembinaan dan kebersamaan untuk staf Departemen Pengembangan Sumber Daya Manusia (serious stuff & fun stuff).",
      },
      {
        name: "Karsa Care",
        description:
          "Saluran khusus penanganan konflik, mediasi netral, serta penanganan burnout/ghosting pengurus (dijalankan bersama kedua biro).",
      },
    ],
    biro: [
      {
        name: "Biro Pengendali Internal",
        description:
          "Monitoring dan evaluasi produktivitas setiap pengurus BEM FIKTI sebagai friendly supervisor & advisor yang selalu mengutamakan pengurus terlebih dahulu.",
        programs: [
          {
            name: "BUDDY Pengembangan Sumber Daya Manusia",
            description:
              "Teman pendamping tiap departemen: mendengarkan, menemani, dan menjembatani kebutuhan pengurus; menilai kinerja bulanan dan memberi apresiasi Member of the Month.",
          },
          {
            name: "Bonding Day!",
            description:
              "Acara offline untuk seluruh pengurus (games dan sharing session) guna menguatkan ikatan pertemanan.",
          },
        ],
      },
      {
        name: "Biro Pengembangan dan Kaderisasi",
        description:
          "Fokus pada keberlangsungan organisasi dan program kerja yang melibatkan pengurus BEM FIKTI Universitas Gunadarma dan calon penerus baru melalui program-program pengelolaan sumber daya manusia.",
        programs: [
          {
            name: "Internship with BEM FIKTI (unggulan)",
            description:
              "Memfasilitasi mahasiswa terlibat langsung di program kerja nyata dengan bimbingan stakeholder internal.",
          },
          {
            name: "Learn From Anywhere",
            description:
              "Menambah wawasan pengurus lewat Learn From the Past (bertukar ilmu dengan demisioner) dan Learn From the Expert (narasumber/ahli).",
          },
        ],
      },
    ],
  },

  {
    id: "media-komunikasi",
    slug: "media-komunikasi",
    name: "Departemen Media Komunikasi",
    shortName: "Media Komunikasi",
    category: "Internal",
    tagline:
      "Pintu utama informasi dan membangun citra BEM FIKTI di media digital seperti website, media sosial dan mengelola seluruh akun media sosial BEM FIKTI.",
    about:
      "Departemen internal BEM FIKTI yang berfokus pada pengelolaan media, informasi, komunikasi, dan teknologi untuk menunjang kebutuhan internal organisasi. Berperan mengelola penyampaian informasi, mendukung kebutuhan media dan publikasi, menjaga komunikasi antarbagian, serta menyediakan dukungan teknologi agar kegiatan dan koordinasi internal BEM FIKTI berjalan dengan baik.",
    deptPrograms: [],
    biro: [
      {
        name: "Biro Media Kreatif",
        description:
          "Mengembangkan dan mengelola komunikasi kreatif organisasi melalui berbagai media visual dan digital; menerjemahkan informasi, gagasan, program kerja, serta identitas BEM FIKTI Universitas Gunadarma ke dalam konten yang informatif, menarik, relevan, dan mudah dipahami audiens.",
        programs: [
          {
            name: "Media Partner",
            description:
              "Mendukung publikasi eksternal: desain feeds, banner, poster, dan kebutuhan desain lain lewat kolaborasi dengan biro/departemen lain.",
          },
          {
            name: "Hari Besar",
            description:
              "Informasi hari besar dan isu terkini dalam bentuk desain Instagram Story/Feeds.",
          },
          {
            name: "Videografi dan Dokumentasi BEM FIKTI Universitas Gunadarma",
            description:
              "Dokumentasi program kerja dan videografi (after movie program unggulan dan inovasi).",
          },
          {
            name: "Content Creative by Media",
            description:
              "Konten video informatif seputar dunia digital di media sosial BEM FIKTI Universitas Gunadarma.",
          },
        ],
      },
      {
        name: "Biro Hubungan Masyarakat",
        description:
          "Membangun, mengelola, dan menjaga hubungan komunikasi antara BEM FIKTI Universitas Gunadarma dengan mahasiswa FIKTI maupun pihak internal dan eksternal organisasi; memastikan informasi tersampaikan efektif, relevan, dan tepat sasaran, sekaligus mengembangkan strategi komunikasi untuk meningkatkan visibilitas dan citra BEM FIKTI Universitas Gunadarma.",
        programs: [
          {
            name: "Sosial Media Strategy (Content Analyst & Content Creative)",
            description:
              "Riset, analisis, dan pengembangan konten untuk memperkuat branding serta mengelola media sosial BEM FIKTI.",
          },
          {
            name: "Humas Partner (Internal, Eksternal)",
            description:
              "Mengelola tawaran kerja sama internal dan eksternal (media partner) serta penjadwalan konten biro/departemen.",
          },
          {
            name: "Info FIKTI",
            description:
              "Informasi perkuliahan yang cepat, tepat, dan akurat melalui media resmi BEM (feeds/instastory).",
          },
          {
            name: "FIKTI Comparative Study",
            description:
              "Sharing session dengan BEM fakultas/organisasi kampus lain untuk membandingkan praktik terbaik; Januari 2027.",
          },
        ],
      },
      {
        name: "Biro Pengembangan Teknologi Informasi",
        description:
          "Mengembangkan, mengelola, dan mengoptimalkan pemanfaatan teknologi informasi berbasis website untuk mendukung kebutuhan organisasi serta mahasiswa FIKTI Universitas Gunadarma: pengembangan dan pengelolaan website BEM FIKTI, kolaborasi dengan biro/departemen lain, serta penerapan inovasi teknologi.",
        programs: [
          {
            name: "PTI Services",
            description:
              "Wadah bagi biro/departemen yang ingin program kerjanya dipublikasikan lewat website (target minimal 5 website).",
          },
          {
            name: "Revamp",
            description:
              "Pengkajian ulang tata letak, fungsi, dan responsivitas website agar efisien dan aksesibel lintas perangkat.",
          },
          {
            name: "USaP (Upgrading Skill at PTI)",
            description:
              "Sharing session web development untuk internal biro, 2× per bulan.",
          },
        ],
      },
    ],
  },

  {
    id: "bisnis-kemitraan",
    slug: "bisnis-kemitraan",
    name: "Departemen Bisnis dan Kemitraan",
    shortName: "Bisnis dan Kemitraan",
    category: "Internal",
    tagline:
      "Pilar pencari dana mandiri untuk kebutuhan program kerja departemen dan membangun kerja sama dengan perusahaan.",
    about:
      "Pilar pencari dana mandiri untuk kebutuhan program kerja departemen dan membangun kerja sama dengan perusahaan.",
    deptPrograms: [],
    biro: [
      {
        name: "Biro Bisnis Kreatif",
        description:
          "Mengelola merchandise FIKTI dan Dana Usaha mandiri untuk program kerja BEM dan kas organisasi.",
        programs: [],
      },
      {
        name: "Biro Kemitraan",
        description:
          "Menjaring pihak sponsor, media partner, dan perusahaan luar untuk mendukung pendanaan acara BEM.",
        programs: [],
      },
    ],
  },
]

/* ── Helpers ── */
export function getDepartmentBySlug(slug: string): Department | undefined {
  return departments.find((d) => d.slug === slug)
}

/** Flat list of biro names (for stats bar) */
export function getAllBiroNames(): string[] {
  return departments.flatMap((d) => d.biro.map((b) => b.name))
}
