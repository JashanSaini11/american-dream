import Navbar from '@/components/layout/NavBar'
import HeroSection from '@/components/sections/HeroSection'
import StatsSection from '@/components/sections/StateSection'
import RetailSection from '@/components/sections/RetailSection'
import LuxuryAvenue from '@/components/sections/LuxuryAvenue'
import BrandStrip from '@/components/ui/BrandStrip'
import DiningSection from '@/components/sections/DiningSection'
import AttractionsSection from '@/components/sections/AttractionsSection'
import PlanVisitSection from '@/components/sections/PlanVisitSection'
import Footer from './components/layout/Footer'
import PresentationDeck from '@/components/deck/PresentationDeck'
import { useLenis } from '@/hooks/useLenis'
import { useState, useEffect } from 'react'

function App() {
  useLenis()

  const [deckMode, setDeckMode] = useState(
    () => window.location.search.includes("deck=true")
  )

  // Sync URL when deck mode changes
  useEffect(() => {
    if (deckMode) {
      window.history.pushState({}, "", "?deck=true")
    } else {
      window.history.pushState({}, "", "/")
    }
  }, [deckMode])

  // Show deck fullscreen
  if (deckMode) return <PresentationDeck onExit={() => setDeckMode(false)} />

  return (
    <main className="app-main">
      <Navbar />

      <HeroSection />
      <AttractionsSection />

      <div
        className="relative flex flex-col gap-20"
        style={{
          background: `linear-gradient(180deg, #000, transparent), url(https://images.ctfassets.net/0eh8v8vf1iw0/3zIgqjzitv5CPacabD9W7M/9caf011185c03e764235cf30ba9c450a/b09ca5640c2b29a4e8aa4e1ea1ff213e.webp), linear-gradient(180deg, #000, transparent), #d3d3d3 50% / cover no-repeat`,
          paddingBottom: '168px',
          boxShadow: 'inset 0 -228px 46px 8px rgba(0, 0, 0, 0.9)',
        }}
      >
        <RetailSection />
        <BrandStrip />
        <LuxuryAvenue />
      </div>

      <DiningSection />
      <StatsSection />
      <PlanVisitSection />
      <Footer />

      {/* ── Sales Deck Launch Button ── */}
      <button
        onClick={() => setDeckMode(true)}
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2.5
          px-5 py-3 rounded-full bg-[#00E5A0] text-black
          text-[10px] font-bold tracking-[0.2em] uppercase
          shadow-[0_8px_32px_rgba(0,229,160,0.4)]
          hover:scale-105 hover:shadow-[0_12px_40px_rgba(0,229,160,0.5)]
          active:scale-95 transition-all duration-300"
        style={{ fontFamily: "var(--font-body)" }}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 1.5L10 6L2 10.5V1.5Z" fill="black" />
        </svg>
        View Sales Deck
      </button>
    </main>
  )
}

export default App