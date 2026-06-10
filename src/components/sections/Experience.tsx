import { motion } from 'framer-motion'

import { ExperienceService } from '@/services/experience.service'

export default function Experience() {
  const experiences =
    ExperienceService.getAll()

  return (
    <section
      id="experience"
      className="relative overflow-hidden px-6 py-30"
    >
      <div className="mx-auto max-w-7xl">
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
            Experience
          </p>

          <h2 className="mt-6 text-5xl font-bold leading-[0.95] tracking-[-0.05em] md:text-7xl xl:text-[88px]">
            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Building digital
            </span>

            <span className="mt-2 block text-white">
              systems with impact.
            </span>
          </h2>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative mt-28">
          {/* LINE */}
          <div className="absolute left-[28px] top-0 hidden h-full w-px bg-gradient-to-b from-sky-500/40 via-white/10 to-transparent md:block" />

          <div className="space-y-14">
            {experiences.map(
              (experience, index) => (
                <motion.div
                  key={experience.id}
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
                    duration: 0.7,
                    delay: index * 0.08,
                  }}
                  className="group relative"
                >
                  <div className="grid gap-8 md:grid-cols-[70px_1fr]">
                    {/* DOT */}
                    <div className="relative hidden md:flex justify-center">
                      <div className="relative z-10 mt-2 flex h-14 w-14 items-center justify-center rounded-full border border-sky-400/20 bg-[#07111f] backdrop-blur-xl">
                        <div className="h-3 w-3 rounded-full bg-gradient-to-r from-sky-400 to-cyan-300" />
                      </div>
                    </div>

                    {/* CARD */}
                    <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#07111f]/70 p-10 backdrop-blur-2xl transition-all duration-500 hover:border-white/15 hover:bg-[#07111f]/80">
                      {/* GRID */}
                      <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                          backgroundImage: `
                            linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
                          `,
                          backgroundSize:
                            '40px 40px',
                        }}
                      />

                      {/* GLOW */}
                      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-sky-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      <div className="relative z-10">
                        {/* TOP */}
                        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                          <div>
                            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-500/10 px-4 py-2">
                              <div className="h-2 w-2 rounded-full bg-sky-400" />

                              <span className="text-sm font-medium text-sky-300">
                                {
                                  experience.employmentType
                                }
                              </span>
                            </div>

                            <h3 className="mt-6 text-4xl font-bold text-white">
                              {experience.role}
                            </h3>

                            <p className="mt-3 text-xl text-slate-300">
                              {
                                experience.company
                              }
                            </p>
                          </div>

                          {/* PERIOD */}
                          <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl">
                            <p className="text-sm text-slate-400">
                              Period
                            </p>

                            <p className="mt-1 font-medium text-white">
                              {
                                experience.period
                              }
                            </p>
                          </div>
                        </div>

                        {/* DESCRIPTION */}
                        <p className="mt-10 max-w-4xl text-lg leading-relaxed text-slate-300">
                          {
                            experience.description
                          }
                        </p>

                        {/* META */}
                        <div className="mt-8 flex flex-wrap items-center gap-6 text-slate-400">
                          <div className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-slate-500" />

                            <span>
                              {
                                experience.location
                              }
                            </span>
                          </div>
                        </div>

                        {/* TECH */}
                        <div className="mt-10 flex flex-wrap gap-3">
                          {experience.tech.map(
                            (tech) => (
                              <div
                                key={tech}
                                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2"
                              >
                                <span className="text-sm font-medium text-slate-200">
                                  {tech}
                                </span>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}