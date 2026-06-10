import type { Project } from '@/models/project.model'

export const projects: Project[] = [
  {
    id: 1,

    title: 'CSR Medan',

    slug: 'csr-medan',

    category: 'Government Platform',

    description:
      'A digital CSR platform for Medan City featuring interactive dashboards, proposal systems, geospatial visualization, and public reporting.',

    longDescription:
      'CSR Medan is a digital corporate social responsibility platform developed for the Government of Medan City. The platform was designed to manage CSR program submissions, public reporting workflows, interactive mapping systems, and statistical dashboards. The system improves transparency and collaboration between corporations and the government through scalable digital services.',

    tech: [
      'PHP',
      'Yii2',
      'JavaScript',
      'jQuery',
      'AJAX',
      'Bootstrap',
      'Chart.js',
      'Leaflet.js',
      'GeoJSON',
      'MySQL',
      'MinIO',
    ],

    featured: true,

    image: '/projects/csr-medan/thumbnail.webp',

    screenshots: [
      '/projects/csr-medan/dashboard.webp',

      '/projects/csr-medan/map.webp',

      '/projects/csr-medan/report.webp',

      '/projects/csr-medan/proposal.webp',
    ],

    year: '2022 - Present',

    role: 'Fullstack Developer',

    liveUrl: 'https://csr.medan.go.id',
  },

  {
    id: 2,

    title: 'SAPA Kota',

    slug: 'sapa-kota',

    category: 'Public Service Platform',

    description:
      'A modern public service platform focused on citizen reporting, communication, and public engagement.',

    longDescription:
      'SAPA Kota is a public digital platform developed to improve communication and reporting services between citizens and the Government of Medan City. The platform includes public reporting systems, dashboard visualizations, administrative workflows, and modern responsive interfaces focused on accessibility and scalability.',

    tech: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Shadcn UI',
      'Drizzle ORM',
      'MySQL',
      'NextAuth',
      'Chart.js',
    ],

    featured: false,

    image: '/projects/sapa-kota/thumbnail.webp',

    screenshots: [
      '/projects/sapa-kota/dashboard.webp',

      '/projects/sapa-kota/report.webp',

      '/projects/sapa-kota/statistics.webp',

      '/projects/sapa-kota/map.webp',
    ],

    year: '2026 - Present',

    role: 'Frontend Developer',

    liveUrl: 'https://sapakota.medan.go.id',
  },

  {
    id: 3,

    title: 'SIMRS',

    slug: 'simrs',

    category: 'Healthcare Management System',

    description:
      'A healthcare management information system focused on healthcare workflows and operational management.',

    longDescription:
      'SIMRS is a healthcare management information system developed using the Yii2 Framework with structured MVC architecture. The system was designed to support hospital operational workflows, patient administration, medical data management, and healthcare service processes through integrated web-based workflows and modular application architecture.',

    tech: ['PHP', 'Yii2', 'JavaScript', 'jQuery', 'AJAX', 'Bootstrap', 'MySQL'],

    featured: false,

    image: '/projects/simrs/thumbnail.webp',

    screenshots: [
      '/projects/simrs/dashboard.webp',

      '/projects/simrs/patient.webp',

      '/projects/simrs/medical-record.webp',
      
      '/projects/simrs/resep.webp',
      
      '/projects/simrs/jadwal-pegawai.webp',
      
      '/projects/simrs/transaksi.webp',
      
      '/projects/simrs/cetak-struk.webp',
    ],

    year: '2025',

    role: 'Fullstack Developer',

    liveUrl: 'https://github.com/nurulandini/simrs',
  },
]
