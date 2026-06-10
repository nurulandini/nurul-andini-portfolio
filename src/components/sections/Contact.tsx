import { motion } from 'framer-motion'

import { FiGithub, FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi'
{
  /* SOCIALS */
}

const socials = [
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nurul-andini-45126b164/',
  },

  {
    icon: FiGithub,
    label: 'GitHub',
    href: 'https://github.com/nurulandini',
  },

  {
    icon: FiInstagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/tarxacum/',
  },

  {
    icon: FiMail,
    label: 'Email',
    href: 'mailto:nurulandini96@gmail.com',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-30">
      <div className="mx-auto max-w-6xl">
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
          className="relative overflow-hidden rounded-[48px] border border-white/10 bg-[#07111f]/70 px-10 py-20 backdrop-blur-2xl md:px-20"
        >
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

          {/* GLOW */}
          <div className="absolute left-0 top-0 h-60 w-60 rounded-full bg-sky-500/10 blur-3xl" />

          <div className="relative z-10 text-center">
            {/* LABEL */}
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-400">
              Contact
            </p>

            {/* TITLE */}
            <h2 className=" text-5xl font-bold leading-[0.95] tracking-tighter md:text-7xl">
              <span className="bg-linear-to-r from-sky-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Let’s build
              </span>

              <span className="mt-2 block text-white">
                something impactful.
              </span>
            </h2>

            {/* DESC */}
            <p className="mx-auto mt-10 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
              I’m open to collaboration, freelance opportunities, and meaningful
              digital projects. Feel free to reach out and let’s create
              something great together.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
              <a
                href="mailto:nurulandini96@gmail.com"
                className="group relative overflow-hidden rounded-full border border-sky-400/20 bg-linear-to-r from-sky-500 to-cyan-400 px-7 py-4 text-sm font-medium text-white shadow-[0_20px_60px_rgba(14,165,233,0.35)] transition-all duration-500 hover:-translate-y-1"
              >
                {/* SHINE */}
                <div className="absolute inset-0 translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <span className="relative z-10 flex items-center gap-2">
                  Let’s Talk
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </a>
            </div>

            {/* SOCIALS */}
            <div className="mt-8 flex items-center justify-center gap-4">
              {socials.map((social) => {
                const Icon = social.icon

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/20 hover:bg-white/10"
                  >
                    {/* GLOW */}
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-linear-to-br from-sky-500/10 to-cyan-400/10" />

                    <Icon
                      size={20}
                      className="relative z-10 text-slate-300 transition-colors duration-300 group-hover:text-white"
                    />
                  </a>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
