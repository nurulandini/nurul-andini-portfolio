import { motion, useMotionValue, useScroll, useTransform } from 'framer-motion'

import Button from '@/components/ui/Button'

import profileImage from '@/assets/images/profile.png'

export default function Hero() {
  const { scrollY } = useScroll()

  const backgroundY = useTransform(scrollY, [0, 500], [0, 120])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()

    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className=" relative flex min-h-screen items-center overflow-hidden px-6 py-24 md:py-32"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-40"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) =>
              `radial-linear(
          500px circle at ${x}px ${y}px,
          rgba(59,130,246,0.15),
          transparent 80%
        )`
          ),
        }}
      />
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-30"
      >
        <div className="absolute top-20 left-20 w-96 h-96 bg-sky-300/60 rounded-full blur-3xl" />

        <div className="absolute bottom-0 right-0 w-125 h-125 bg-cyan-200/50 rounded-full blur-3xl" />
      </motion.div>

      {/* GRID */}
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 md:gap-20 xl:gap-24 xl:grid-cols-[0.9fr_1.1fr]">
        {/* FOTO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* BACK GLOW */}
            {/* AURORA */}
            <div className="absolute h-125 w-125 rounded-full bg-sky-500/10 blur-3xl" />

            {/* FLOATING CARD */}
            <div className="relative">
              {/* IMAGE */}
              <div className="relative h-95 w-75 sm:h-115 sm:w-90 md:h-130 md:w-105 overflow-hidden rounded-[36%_64%_58%_42%/42%_38%_62%_58%] border border-white/10 bg-linear-to-br from-slate-700 to-slate-900 ">
                <img
                  src={profileImage}
                  alt="Nurul Andini"
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  className="w-full h-full object-cover scale-[1.02] select-none"
                />
              </div>
            </div>

            {/* FLOATING INFO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.8,
              }}
              className="absolute -bottom-3 right-1 sm:-bottom-4 sm:right-2 md:-bottom-6 md:-right-6"
            >
              <div className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl px-5 py-4 shadow-[0_10px_40px_rgba(15,23,42.0.8 )]">
                <p className="text-sm text-slate-400">Based in</p>

                <h3 className="mt-1 font-semibold text-white">
                  Medan, Indonesia
                </h3>

                <div className="mt-3 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />

                  <span className="text-sm text-slate-300">
                    Available for collaboration
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* TITLE */}
          <h2 className="text-xl sm:text-2xl md:text-4xl xl:text-5xl font-bold leading-[0.95] tracking-tight text-white">
            Hello, I’m
          </h2>
          <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight text-white">
            <span className="block bg-linear-to-r from-sky-500 via-blue-700 to-cyan-500 bg-clip-text text-transparent">
              Nurul Andini
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-8 text-base sm:text-lg md:text-xltext-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
            Fullstack Web Developer focused on building scalable web
            applications, interactive dashboards, GIS systems, and modern
            digital experiences.
          </p>

          {/* TECH STACK */}
          <div className="mt-8 justify-center xl:justify-start flex flex-wrap text-center xl:text-left gap-3">
            {[
              'PHP',
              'React',
              'TypeScript',
              'Yii2',
              'MySQL',
              'CSS',
              'Tailwind',
            ].map((tech) => (
              <div
                key={tech}
                className="px-4 py-2 rounded-full border border-slate-200 bg-white/80 backdrop-blur-xl text-sm text-slate-700 shadow-sm"
              >
                {tech}
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-slate-100">
            <span>4+ Years Experience</span>

            <div className="w-1 h-1 rounded-full bg-slate-300" />

            <span>Hackathon Champion</span>

            <div className="w-1 h-1 rounded-full bg-slate-300" />

            <span>Government Tech</span>
          </div>

          {/* BUTTON */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              className="w-full sm:w-auto"
              onClick={() => {
                document.getElementById('projects')?.scrollIntoView({
                  behavior: 'smooth',
                })
              }}
            >
              View Projects
            </Button>

            <a
              href="https://www.linkedin.com/in/nurul-andini-45126b164/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="outline" className="w-full sm:w-auto">
                View Resume
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
