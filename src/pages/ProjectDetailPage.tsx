import { useNavigate, useParams } from 'react-router-dom'

import { motion } from 'framer-motion'

import { ProjectService } from '@/services/project.service'

export default function ProjectDetailPage() {
  const { slug } = useParams()

  const navigate = useNavigate()

  const project = ProjectService.getBySlug(slug || '')

  const handleBackToProjects = () => {
    navigate('/')

    setTimeout(() => {
      document.getElementById('projects')?.scrollIntoView({
        behavior: 'smooth',
      })
    }, 100)
  }

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#020617]">
        <h1 className="text-3xl font-bold text-white">Project not found</h1>
      </div>
    )
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020617] px-5 py-24 md:px-6 md:py-32 xl:py-40">
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
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-sky-500/10 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* BACK BUTTON */}
        <button
          onClick={handleBackToProjects}
          className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-300 backdrop-blur-xl transition-all duration-300 hover:border-sky-400/20 hover:bg-white/10 hover:text-white"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
          Back to Projects
        </button>

        {/* HERO */}
        <div className="relative mt-14 grid gap-12 md:gap-16 xl:mt-20 xl:grid-cols-[1fr_0.9fr] xl:items-center">
          {/* LEFT CONTENT */}
          <div className="relative z-10">
            {/* CATEGORY */}
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-sky-400">
              {project.category}
            </p>

            {/* TITLE */}
            <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl xl:text-[110px] font-bold leading-[0.88] tracking-[-0.06em] text-white ">
              {project.title}
            </h1>

            {/* DESCRIPTION */}
            <p className="text-justify mt-10 max-w-3xl leading-relaxed text-slate-300 text-base sm:text-lg md:text-xl xl:text-2xl">
              {project.longDescription}
            </p>

            {/* ACTION */}
            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-400 px-7 py-4 font-medium text-white shadow-[0_20px_60px_rgba(14,165,233,0.25)]"
                >
                  <span className="relative z-10">Visit Website</span>

                  <div className="absolute inset-0 translate-x-[-100%] bg-white/20 transition-transform duration-700 group-hover:translate-x-[100%]" />
                </a>
              )}

              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl">
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

                <span className="text-sm text-slate-300">
                  Production Project
                </span>
              </div>
            </div>

            {/* TECH STACK */}
            <div className="mt-12 flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <div
                  key={tech}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl"
                >
                  <span className="text-sm font-medium text-slate-200">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">
            {/* GLOW */}
            <div className="absolute inset-0 bg-sky-500/10 blur-[120px]" />

            {/* IMAGE */}
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
              }}
              className=" relative overflow-hidden rounded-3xl md:rounded-4xl xl:rounded-[40px] shadow-[0_40px_120px_rgba(2,6,23,0.65)]"
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                draggable={false}
                className="w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
            </motion.div>

            {/* FLOATING INFO */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              className=" sm:block absolute -bottom-8 left-6 rounded-2xl border border-white/10 bg-black/40 px-5 py-4 backdrop-blur-xl"
            >
              <div className="flex items-center gap-6">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                    Role
                  </p>

                  <h3 className="mt-1 text-sm font-medium text-white">
                    {project.role}
                  </h3>
                </div>

                <div className="h-8 w-px bg-white/10" />

                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                    Timeline
                  </p>

                  <h3 className="mt-1 text-sm font-medium text-white">
                    {project.year}
                  </h3>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* SCREENSHOTS */}
        {project.screenshots && project.screenshots.length > 0 && (
          <div className="mt-40">
            <div className="max-w-4xl">
              <p className="text-sm uppercase tracking-[0.2em] text-sky-400">
                Showcase
              </p>

              <h2 className="mt-6 text-5xl font-bold leading-[0.92] tracking-[-0.05em] text-white md:text-7xl">
                Product Experience
              </h2>
            </div>

            {/* GALLERY */}
            <div className="mt-20 grid gap-8 md:grid-cols-2">
              {project.screenshots.map((screenshot, index) => (
                <motion.div
                  key={screenshot}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.08,
                  }}
                  className="group relative"
                >
                  {/* GLOW */}
                  <div className="absolute inset-0 rounded-[36px] bg-sky-500/10 opacity-0 blur-[80px] transition-opacity duration-700 group-hover:opacity-100" />

                  {/* IMAGE */}
                  <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#07111f]/70 p-4 shadow-[0_20px_60px_rgba(2,6,23,0.45)] backdrop-blur-2xl">
                    <div className="overflow-hidden rounded-[24px]">
                      <img
                        src={screenshot}
                        alt={`${project.title} screenshot`}
                        loading="lazy"
                        draggable={false}
                        className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
