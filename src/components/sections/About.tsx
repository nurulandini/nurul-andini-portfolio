import { motion } from 'framer-motion'

import profileImage from '@/assets/images/profile-2.png'

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-40">
      <div className="max-w-7xl mx-auto relative z-10 -mt-10">
        {/* TOP */}
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
          className="max-w-5xl"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-sky-500 font-medium">
            About Me
          </p>

          <h2 className="text-5xl md:text-7xl xl:text-[88px] font-bold leading-[0.95] tracking-thighter">
            <span className="bg-linear-to-r from-sky-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Hi, I’m Nurul.
            </span>
          </h2>
          <h2 className="text-2xl md:text-4xl xl:text-[40px] font-bold leading-[0.95] tracking-thighter">
            <span className="block mt-3 text-slate-500">
              I enjoy building modern digital products & experiences.
            </span>
          </h2>
        </motion.div>

        {/* MAIN GRID */}
        <div className="mt-10 grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
          {/* IMAGE SIDE */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative"
          >
            {/* IMAGE CARD */}
            <div className="relative flex justify-center items-center">
              {/* BACK GLOW */}
              <div className="absolute w-112.5 h-112.5 bg-linear-to-br from-sky-300/40 via-cyan-200/30 to-blue-200/20 rounded-full blur-3xl" />

              {/* OUTER SHAPE */}
              <div className="relative w-95 h-130">
                {/* GLASS SHAPE */}
                <div className="absolute inset-0 rounded-[42%_58%_65%_35%/38%_45%_55%_62%] border border-white/20 bg-white/70 backdrop-blur-2xl shadow-[0_20px_80px_rgba(15,23,42,0.08)]" />

                {/* IMAGE MASK */}
                <div className="absolute inset-0 overflow-hidden rounded-[42%_58%_65%_35%/38%_45%_55%_62%]">
                  {/* IMAGE */}
                  <img
                    src={profileImage}
                    alt="Nurul Andini"
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                    className="h-full w-full object-cover scale-[1] select-none grayscale brightness-[0.8] contrast-[1.1] opacity-100 "
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#020617]/70 via-[#020617]/10 to-transparent" />
                  <div className="absolute inset-0 bg-black/10" />

                  {/* DARK OVERLAY */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#020617]/40 via-transparent to-transparent" />

                  {/* SOFT BLUR */}
                  <div className="absolute inset-0" />

                  {/* NOISE / LIGHT */}
                  <div className="absolute inset-0 bg-white/30" />
                </div>
              </div>
            </div>

            {/* FLOATING CARD */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.3,
                duration: 0.8,
              }}
              className="absolute -bottom-8 -right-1"
            >
              <div className="rounded-3xl border border-white/70 bg-white/70 backdrop-blur-2xl px-6 py-5 shadow-[0_10px_40px_rgba(15,23,42,0.08)]">
                <p className="text-sm text-slate-500">Current Role</p>

                <h3 className="mt-2 text-xl font-semibold text-slate-900">
                  Programmer
                </h3>

                <p className="mt-1 text-slate-600">Government of Medan City</p>
              </div>
            </motion.div>
          </motion.div>

          {/* CONTENT SIDE */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <p className="text-2xl text-slate-400 leading-relaxed">
              I’m a Fullstack Web Developer based in Medan, passionate about
              building scalable web applications, interactive dashboards,
              mapping interfaces, and modern digital experiences.
            </p>

            <p className="mt-8 text-lg text-slate-400 leading-relaxed">
              I enjoy turning ideas into clean, functional, and user-friendly
              products while focusing on performance, simplicity, and modern UI
              experiences.
            </p>

            {/* TOOLS */}
            <div className="mt-14">
              <p className="text-sm uppercase tracking-[0.2em] text-sky-500 font-medium">
                Tools I Use
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                {[
                  'PHP',
                  'Yii2',
                  'React',
                  'TypeScript',
                  'JavaScript',
                  'JQuery',
                  'Ajax',
                  'Tailwind CSS',
                  'Bootstrap',
                  'MySQL',
                  'MinIO (S3 Storage)',
                  'Chart.js',
                  'Leaflet.js',
                  'GeoJSON',
                  'Git',
                  'Figma',
                ].map((tool) => (
                  <div
                    key={tool}
                    className="group rounded-2xl border border-white/60 bg-white/60 backdrop-blur-xl px-5 py-3 shadow-[0_10px_40px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <span className="text-slate-700 font-medium">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
