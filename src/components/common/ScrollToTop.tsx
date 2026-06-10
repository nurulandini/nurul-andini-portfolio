import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion'

import { useState } from 'react'

export default function ScrollToTop() {
  const { scrollY } = useScroll()

  const [visible, setVisible] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setVisible(latest > 500)
  })

  function handleScrollTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 20,
            scale: 0.9,
          }}
          transition={{
            duration: 0.25,
          }}
          className="fixed bottom-8 right-8 z-50"
        >
          <button
            onClick={handleScrollTop}
            className="group relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-[#07111f]/80 text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/20 hover:bg-[#0b1727]"
          >
            {/* GLOW */}
            <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-sky-500/10 to-cyan-400/10" />

            {/* ICON */}
            <span className="relative z-10 text-lg transition-transform duration-300 group-hover:-translate-y-0.5">
              ↑
            </span>

            {/* TOOLTIP */}
            <div className="pointer-events-none absolute right-16 whitespace-nowrap rounded-full border border-white/10 bg-[#07111f]/90 px-4 py-2 text-sm font-medium text-slate-200 opacity-0 shadow-lg backdrop-blur-xl transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              Scroll to top
            </div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
