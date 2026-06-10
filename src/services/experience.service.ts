import { experiences } from '@/data/experiences'

import { api } from '@/lib/axios'

export class ExperienceService {
  /* =========================
     LOCAL DATA
  ========================= */

  static getAll() {
    return experiences
  }

  static getById(id: number) {
    return experiences.find(
      (experience) =>
        experience.id === id
    )
  }

  static getBySlug(slug: string) {
    return experiences.find(
      (experience) =>
        experience.slug === slug
    )
  }

  /* =========================
     API READY
  ========================= */

  static async fetchAll() {
    const response =
      await api.get('/experiences')

    return response.data
  }

  static async fetchById(id: number) {
    const response = await api.get(
      `/experiences/${id}`
    )

    return response.data
  }

  static async fetchBySlug(
    slug: string
  ) {
    const response = await api.get(
      `/experiences/${slug}`
    )

    return response.data
  }
}