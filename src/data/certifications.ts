import type { Certification } from '@/models/certification.model'

export const certifications: Certification[] = [
  {
    id: 1,

    slug: 'bnsp-web-developer',

    title: 'Junior Web Programmer Certification',

    issuer:
      'National Professional Certification by Indonesian Professional Certification Authority (BNSP)',

    period: '2025',

    description:
      'Professional competency certification in web programming covering frontend and backend development fundamentals.',

    skills: ['PHP', 'JavaScript', 'MySQL', 'Web Development'],

    type: 'certification',
  },
  {
    id: 2,

    slug: 'bnsp-graphic-designer',

    title: 'Junior Graphic Designer Certification',

    issuer:
      'National Professional Certification by Indonesian Professional Certification Authority (BNSP)',

    period: '2024',

    description:
      'Professional competency certification in graphic design covering design principles and digital tools.',

    skills: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator'],

    type: 'certification',
  },
  {
    id: 3,

    slug: 'hackathon-code-for-nation',

    title: 'Champion — Code for the Nation Hackathon',

    issuer: 'Institut Teknologi Del',

    period: '2022',

    description:
      'Awarded as the Champion in the Hackathon Code for the Nation 2022 at Institut Teknologi Del for developing a real-time student attendance system using face recognition technology. This solution aimed to enhance efficiency, transparency, and security in attendance tracking within educational institutions.',

    skills: ['Problem Solving', 'Innovation', 'Teamwork'],

    type: 'award',
  },
]
