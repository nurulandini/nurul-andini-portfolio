import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import { ProjectService } from '@/services/project.service'

export default function Projects() {
  const featuredProject = ProjectService.getFeatured()

  const secondaryProjects = ProjectService.getSecondary()

  return (
    <section id="projects" className="relative overflow-hidden px-6 py-30">
      <div className="relative z-8 mx-auto max-w-7xl">
        {/* HEADER */}
        <motion.div
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
          }}
          className="max-w-4xl"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-400">
            Selected Projects
          </p>

          <h2 className="mt-6 text-5xl font-bold leading-[0.95] tracking-tighter text-white md:text-7xl xl:text-[88px]">
            Projects I've
            <span className="mt-2 block">worked on.</span>
          </h2>
        </motion.div>

        {/* FEATURED PROJECT */}
        {featuredProject && (
          <motion.div
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
            }}
            className="relative mt-16 md:mt-24 xl:mt-28"
          >
            {/* GLOW */}
            <div className="absolute inset-0 rounded-[60px] bg-linear-to-r from-sky-500/10 via-blue-500/10 to-cyan-400/10 blur-3xl" />

            {/* THUMBNAIL */}
            <div className="relative border-b border-white/10 p-6">
              {/* BACKGROUND GLOW */}
              <div className="absolute inset-0 bg-linear-to-br from-sky-500/5 via-transparent to-cyan-400/5" />

              {/* IMAGE WRAPPER */}
              <div
                className="
      relative
      overflow-hidden
      rounded-[36px]
      border
      border-white/10
      bg-[#0f172a]
      shadow-[0_30px_80px_rgba(2,6,23,0.45)]
      transition-all
      duration-700
      group-hover:-translate-y-1
      group-hover:shadow-[0_40px_120px_rgba(14,165,233,0.15)]
    "
              >
                {/* IMAGE */}
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  loading="lazy"
                  draggable={false}
                  className="aspect-16/10 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"/>

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-linear-to-t from-[#020617]/80 via-[#020617]/10 to-transparent" />

                {/* CATEGORY */}
                <div className="absolute left-5 bottom-5">
                  <div className="rounded-full border border-white/10 bg-black/30 px-4 py-2 backdrop-blur-xl">
                    <span className="text-xs font-medium uppercase tracking-[0.18em] text-white">
                      {featuredProject.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* FLOATING CONTENT */}
            <div className=" relative z-20 mt-6 max-w-3xl md:-mt-20 md:ml-auto xl:-mt-28">
              <div className="rounded-[40px] border border-white/10 bg-white/10 p-6 md:p-8 xl:p-10 backdrop-blur-2xl shadow-[0_20px_80px_rgba(15,23,42,0.15)]">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-400">
                  Featured Project
                </p>

                <h3 className="mt-5 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-[0.92] tracking-tighther ">
                  <span className="text-white">
                    {featuredProject.title.split(' ')[0]}
                  </span>

                  <span className="block bg-linear-to-r from-sky-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    {featuredProject.title.split(' ')[1]}
                  </span>
                </h3>

                <p className="mt-8 text-lg leading-relaxed text-slate-300">
                  {featuredProject.description}
                </p>

                {/* TECH */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {featuredProject.tech.map((tech) => (
                    <div
                      key={tech}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2"
                    >
                      <span className="text-sm font-medium text-slate-200">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    to={`/projects/${featuredProject.slug}`}
                    className="group relative overflow-hidden rounded-2xl bg-linear-to-r from-sky-500 to-cyan-400 px-6 py-4 font-medium text-white shadow-lg"
                  >
                    <span className="relative z-10">View Case Study</span>

                    <div className="absolute inset-0 translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-0" />
                  </Link>

                  {featuredProject.liveUrl && (
                    <a
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 font-medium text-slate-200 backdrop-blur-xl transition-all duration-300 hover:bg-white/10"
                    >
                      Visit Website
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* SECONDARY PROJECTS */}
        <div className="mt-32 grid gap-10 lg:grid-cols-2">
          {secondaryProjects.map((secondaryProject, index) => (
            <motion.div
              key={secondaryProject.title}
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
                delay: index * 0.1,
              }}
              className="group relative"
            >
              {/* GLOW */}
              <div className="absolute inset-0 rounded-[40px] bg-linear-to-br from-sky-500/10 to-cyan-400/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

              {/* CARD */}
              <div className="relative flex h-full flex-col overflow-hidden rounded-[40px] border border-white/10 bg-[#07111f]/80 backdrop-blur-2xl shadow-[0_20px_80px_rgba(15,23,42,0.12)] transition-all duration-500 group-hover:-translate-y-2">
                {/* GRID */}
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                  }}
                />

                {/* THUMBNAIL */}
                <div className="relative overflow-hidden border-b border-white/10 p-5">
                  {/* GLOW */}
                  <div className="absolute inset-0 bg-linear-to-br from-sky-500/5 via-transparent to-cyan-400/5" />

                  {/* IMAGE */}
                  <div
                    className="
      relative
      overflow-hidden
      rounded-[30px]
      shadow-[0_20px_60px_rgba(2,6,23,0.45)]
    "
                  >
                    <img
                      src={secondaryProject.image}
                      alt={secondaryProject.title}
                      loading="lazy"
                      draggable={false}
                      className=" aspect-16/11 md:aspect-16/10 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] "
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-linear-to-t from-[#020617]/70 via-transparent to-transparent" />

                    {/* CATEGORY */}
                    <div className="absolute left-5 bottom-5">
                      <div className="rounded-full bg-black/30 px-4 py-2 backdrop-blur-xl">
                        <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-white">
                          {secondaryProject.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="relative z-10 flex flex-1 flex-col p-8">
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-400">
                    {secondaryProject.category}
                  </p>

                  <h3 className="mt-5 text-4xl font-bold text-white">
                    {secondaryProject.title}
                  </h3>

                  <p className="mt-5 leading-relaxed text-slate-300">
                    {secondaryProject.description}
                  </p>

                  {/* TECH */}
                  <div className="mt-8 flex flex-wrap gap-3">
                    {secondaryProject.tech.map((tech) => (
                      <div
                        key={tech}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2"
                      >
                        <span className="text-sm font-medium text-slate-200">
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* ACTION */}
                  <div className="mt-auto flex items-center justify-between pt-10">
                    <Link
                      to={`/projects/${secondaryProject.slug}`}
                      className="font-medium text-sky-400 transition-all duration-300 hover:text-cyan-300"
                    >
                      View Project →
                    </Link>

                    <div className="flex items-center gap-3">
                      {secondaryProject.liveUrl && (
                        <a
                          href={secondaryProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition-all duration-300 hover:bg-white/10"
                        >
                          Visit
                        </a>
                      )}

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300">
                        ↗
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
