import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Certifications from '@/components/sections/Certifications'
import Contact from '@/components/sections/Contact'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import NotFoundPage from '@/pages/NotFoundPage'

export default function HomePage() {
  const location = useLocation()

useEffect(() => {
  if (!location.hash) return

  const id =
    location.hash.replace('#', '')

  setTimeout(() => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: 'smooth',
      })
  }, 100)
}, [location])
  return (
    <>
      <Hero />

      <About />

      <Projects />

      <Experience />

      <Certifications />

      <Contact />

      <NotFoundPage />
    </>
  )
}