import { projects } from '@/data/projects'

import { api } from '@/lib/axios'
import type { ApiResponse } from '@/types/api.type'

import type { Project } from '@/models/project.model'

export class ProjectService {
  /* =========================
     LOCAL DATA
  ========================= */

  static getAll() {
    return projects
  }

  static getBySlug(slug: string) {
    return projects.find((project) => project.slug === slug)
  }

  static getFeatured() {
    return projects.find((project) => project.featured)
  }

  static getSecondary() {
    return projects.filter((project) => !project.featured)
  }

  /* =========================
     API READY
  ========================= */

  static async fetchAll() {
    const response = await api.get<ApiResponse<Project[]>>('/projects')

    return response.data.data
  }

  static async fetchBySlug(slug: string) {
    const response = await api.get<ApiResponse<Project>>(`/projects/${slug}`)

    return response.data.data
  }
}
