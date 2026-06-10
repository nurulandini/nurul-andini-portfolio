import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NotFoundPage() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020617] px-6">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* GLOW */}
        <div className="absolute left-0 top-0 h-100 w-100 rounded-full bg-sky-500/10 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-100 w-100 rounded-full bg-cyan-400/10 blur-[120px]" />
      </div>

      {/* CONTENT */}
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        className="relative z-10 max-w-3xl text-center"
      >
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-sky-400">
          Error 404
        </p>

        <h1 className="mt-6 text-6xl font-bold leading-[0.9] tracking-[-0.06em] text-white md:text-8xl">
          Page not
          <span className="block bg-linear-to-r from-sky-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
            found.
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-slate-400">
          The page you are looking for does not exist, has been moved,
          or the URL may be incorrect.
        </p>

        <div className="mt-12">
          <Link
            to="/"
            className="
              inline-flex
              items-center
              gap-2
              rounded-2xl
              bg-linear-to-r
              from-sky-500
              to-cyan-400
              px-6
              py-4
              font-medium
              text-white
              shadow-[0_20px_60px_rgba(14,165,233,0.25)]
              transition-all
              duration-300
              hover:scale-[1.02]
            "
          >
            ← Back to Home
          </Link>
        </div>
      </motion.div>
    </section>
  )
}