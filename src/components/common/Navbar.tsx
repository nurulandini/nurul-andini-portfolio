import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion'

import useActiveSection from '@/hooks/useActiveSection'

import { useState } from 'react'

import { useLocation, useNavigate } from 'react-router-dom'

const navItems = ['About', 'Projects', 'Experience', 'Achievements', 'Contact']

export default function Navbar() {
  const { scrollY } = useScroll()

  const activeSection = useActiveSection()

  const [scrolled, setScrolled] = useState(false)

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const location = useLocation()

  const isHomePage = location.pathname === '/'

  const navigate = useNavigate()

  const handleNavigation = (section: string) => {
    if (isHomePage) {
      document.getElementById(section.toLowerCase())?.scrollIntoView({
        behavior: 'smooth',
      })

      return
    }

    navigate(`/#${section.toLowerCase()}`)
  }

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 40)
  })

  const handleScroll = (section: string) => {
    document.getElementById(section.toLowerCase())?.scrollIntoView({
      behavior: 'smooth',
    })

    setMobileMenuOpen(false)
  }

  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      className="fixed left-0 top-0 z-50 w-full"
    >
      <motion.div
        animate={{
          backgroundColor: scrolled ? 'rgba(2,6,23,0.72)' : 'rgba(2,6,23,0)',

          backdropFilter: scrolled ? 'blur(24px)' : 'blur(0px)',

          borderBottomColor: scrolled
            ? 'rgba(255,255,255,0.06)'
            : 'rgba(255,255,255,0)',

          boxShadow: scrolled
            ? '0 10px 40px rgba(0,0,0,0.22)'
            : '0 0 0 rgba(0,0,0,0)',
        }}
        transition={{
          duration: 0.3,
        }}
        className="border-b"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between py-5">
            {/* LOGO */}
            <button onClick={() => handleScroll('hero')} className="group">
              <h1 className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-lg font-semibold tracking-tight text-transparent transition-opacity duration-300 group-hover:opacity-80 md:text-xl">
                Nurul Andini
              </h1>
            </button>

            {/* DESKTOP NAV */}
            <nav className="hidden items-center gap-10 md:flex">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavigation(item)}
                  className={`group relative text-sm transition-colors duration-300 ${
                    isHomePage && activeSection === item.toLowerCase()
                      ? 'text-white'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item}

                  {/* UNDERLINE */}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-gradient-to-r from-sky-400 to-cyan-300 transition-all duration-300 ${
                      isHomePage && activeSection === item.toLowerCase()
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                    }`}
                  />
                </button>
              ))}
            </nav>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-3">
              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/10 md:hidden"
              >
                <div className="space-y-1.5">
                  <span
                    className={`block h-0.5 w-5 bg-white transition-all duration-300 ${
                      mobileMenuOpen ? 'translate-y-2 rotate-45' : ''
                    }`}
                  />

                  <span
                    className={`block h-0.5 w-5 bg-white transition-all duration-300 ${
                      mobileMenuOpen ? 'opacity-0' : ''
                    }`}
                  />

                  <span
                    className={`block h-0.5 w-5 bg-white transition-all duration-300 ${
                      mobileMenuOpen ? '-translate-y-2 -rotate-45' : ''
                    }`}
                  />
                </div>
              </button>

              {/* DESKTOP CTA */}
              <motion.a
                whileTap={{
                  scale: 0.98,
                }}
                href="mailto:nurulandini96@gmail.com"
                className="group relative hidden overflow-hidden rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-200 backdrop-blur-xl transition-all duration-300 hover:border-sky-400/20 hover:bg-white/10 md:block"
              >
                {/* SWEEP */}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-sky-500/20 to-cyan-400/20 transition-transform duration-500 ease-out group-hover:translate-x-0" />

                {/* SHINE */}
                <span className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-[100%]" />

                {/* TEXT */}
                <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
                  Let’s Talk
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </motion.a>
            </div>
          </div>

          {/* MOBILE MENU */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="mb-6 overflow-hidden rounded-[32px] border border-white/10 bg-[#07111f]/80 p-6 backdrop-blur-2xl md:hidden"
              >
                <div className="flex flex-col gap-3">
                  {navItems.map((item) => (
                    <button
                      key={item}
                      onClick={() => handleNavigation(item)}
                      className={`rounded-2xl px-4 py-4 text-left text-sm font-medium transition-all duration-300 ${
                        activeSection === item.toLowerCase()
                          ? 'bg-sky-500/10 text-white'
                          : 'text-slate-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {item}
                    </button>
                  ))}

                  {/* MOBILE CTA */}
                  <a
                    href="mailto:nurulandini96@gmail.com"
                    className="mt-3 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-400 px-5 py-4 font-medium text-white shadow-[0_10px_40px_rgba(14,165,233,0.25)]"
                  >
                    Let’s Talk →
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.header>
  )
}
