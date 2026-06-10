export interface Project {
  id: number

  title: string

  slug: string

  category: string

  description: string

  longDescription?: string

  tech: string[]

  featured: boolean

  image?: string

  screenshots?: string[]

  year?: string

  role?: string

  liveUrl?: string

  githubUrl?: string
}
