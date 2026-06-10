export interface Certification {
  id: number

  slug: string

  title: string

  issuer: string

  period: string

  description: string

  credentialUrl?: string

  image?: string

  skills?: string[]

  type: 'certification' | 'achievement'
}