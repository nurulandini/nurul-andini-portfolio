import type { Experience } from '@/models/experience.model'

export const experiences: Experience[] = [
  {
    id: 1,

    company: 'Bappeda Kota Medan',

    role: 'Programmer',

    period: 'Oct 2022 — Present',

    description:
      'Developing and maintaining government digital platforms systems, dashboards, mapping interfaces, proposal systems, and public reporting applications.',

    tech: [
      'PHP',
      'Yii2',
      'JavaScript',
      'jQuery',
      'react',
      'AJAX',
      'Bootstrap',
      'typescript',
      'shadcn/ui',
      'next.js',
      'Chart.js',
      'Leaflet.js',
      'GeoJSON',
      'MySQL',
      'MinIO',
    ],

    location: 'Medan, Indonesia',

    employmentType: 'Full-time',

    slug: 'bappeda-kota-medan',
  },

  {
    id: 2,

    company: 'SD Swasta Model Al-Azhar Medan',

    role: 'Computer & Robotics Mentor',

    period: 'Sep 2022 — Jul 2025',

    description:
      'Teaching programming logic, robotics, and computer fundamentals for students.',

    tech: ['Microbit', 'Scratch', 'Programming Logic'],

    location: 'Medan, Indonesia',

    employmentType: 'Part-time',

    slug: 'sd-swasta-model-al-azhar-medan',
  },

  {
    id: 3,

    company: 'MAN 2 Model Medan',

    role: 'IT Specialist',

    period: 'Sep 2021 — Oct 2022',

    description:
      'Maintained IT infrastructure, provided technical support, and assisted in digital learning material preparation.',

    tech: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator'],

    location: 'Medan, Indonesia',

    employmentType: 'Part-time',

    slug: 'man-2-model-medan',
  },

  {
    id: 4,

    company: 'University of Sumatera Utara',

    role: 'Laboratory Assistant',

    period: 'Jul 2019 — Jun 2020',

    description:
      'Assisted in teaching Basic Programming and Object-Oriented Programming courses, guided students in practical sessions.',

    tech: ['VS Code', 'OOP', 'C++', 'C'],

    location: 'Medan, Indonesia',

    employmentType: 'Part-time',

    slug: 'university-of-sumatera-utara',
  },
]
