import { motion } from 'framer-motion'

import { CertificationService } from '@/services/certification.service'

export default function Certifications() {
  const certifications = CertificationService.getAll()

  return (
    <section id="achievements" className="relative overflow-hidden px-6 py-30">
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

          <h2 className="-mt-7 text-5xl font-bold leading-[0.95] tracking-tighter md:text-7xl xl:text-[88px]">
            <span className="bg-linear-to-r from-sky-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
              Certifications & Achievements
            </span>

          </h2>
        </motion.div>

        {/* GRID */}
        <div className="mt-24 grid gap-8 lg:grid-cols-2">
          {certifications.map((certification, index) => (
            <motion.div
              key={certification.id}
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
              {/* GLOW */}
              <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-sky-500/10 to-cyan-400/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

              {/* CARD */}
              <div className="relative h-full overflow-hidden rounded-[36px] border border-white/10 bg-[#07111f]/70 p-10 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:border-white/15">
                {/* GRID */}
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
                      `,
                    backgroundSize: '40px 40px',
                  }}
                />

                <div className="relative z-10">
                  {/* TYPE */}
                  <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-500/10 px-4 py-2">
                    <div className="h-2 w-2 rounded-full bg-sky-400" />

                    <span className="text-sm font-medium text-sky-300">
                      {certification.type === 'achievement'
                        ? 'Achievement'
                        : 'Certification'}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="mt-8 text-3xl font-bold leading-tight text-white">
                    {certification.title}
                  </h3>

                  {/* ISSUER */}
                  <p className="mt-4 text-lg text-slate-300">
                    {certification.issuer}
                  </p>

                  {/* PERIOD */}
                  <div className="mt-2 inline-flex rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">
                    <span className="text-sm font-medium text-slate-200">
                      {certification.period}
                    </span>
                  </div>

                  {/* DESCRIPTION */}
                  <p className="mt-2 text-lg leading-relaxed text-slate-300">
                    {certification.description}
                  </p>

                  {/* SKILLS */}
                  <div className="mt-10 flex flex-wrap gap-3">
                    {certification.skills?.map((skill) => (
                      <div
                        key={skill}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2"
                      >
                        <span className="text-sm font-medium text-slate-200">
                          {skill}
                        </span>
                      </div>
                    ))}
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
