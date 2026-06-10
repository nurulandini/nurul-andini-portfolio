import { useEffect, useState } from 'react'

const sections = ['about', 'projects', 'experience', 'achievements', 'contact']

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY + 120

      if (window.scrollY < 300) {
        setActiveSection('')
        return
      }

      for (const section of sections) {
        const element = document.getElementById(section)

        if (!element) continue

        const offsetTop = element.offsetTop

        const height = element.offsetHeight

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + height
        ) {
          setActiveSection(section)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return activeSection
}
