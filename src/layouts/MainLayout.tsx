import { Outlet } from 'react-router-dom'

import Navbar from '@/components/common/Navbar'
import ScrollToTop from '@/components/common/ScrollToTop'
import Footer from '@/components/common/Footer'
import AnalyticsTracker from '@/components/AnalyticsTracker'

export default function MainLayout() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
      {/* GLOBAL BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* GRID */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10">
        <AnalyticsTracker />
        <Navbar />

        <main>
          <Outlet />
        </main>

        <Footer />

        <ScrollToTop />
      </div>
    </div>
  )
}
