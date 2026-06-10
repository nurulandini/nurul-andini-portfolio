import { certifications } from '@/data/certifications'

import { api } from '@/lib/axios'

export class CertificationService {
  /* =========================
     LOCAL DATA
  ========================= */

  static getAll() {
    return certifications
  }

  static getByType(
    type: 'certification' | 'award'
  ) {
    return certifications.filter(
      (item) => item.type === type
    )
  }

  /* =========================
     API READY
  ========================= */

  static async fetchAll() {
    const response =
      await api.get('/certifications')

    return response.data
  }

  static async fetchByType(
    type: 'certification' | 'award'
  ) {
    const response = await api.get(
      `/certifications/type/${type}`
    )

    return response.data
  }
}