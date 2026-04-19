import Navbar from '@/components/layout/NavBar'
import HeroSection from '@/components/sections/HeroSection'
import StatsSection from '@/components/sections/StateSection'
import RetailSection from '@/components/sections/RetailSection'
import LuxuryAvenue from '@/components/sections/LuxuryAvenue'
import BrandStrip from '@/components/ui/BrandStrip'
import DiningSection from '@/components/sections/DiningSection'
import AttractionsSection from '@/components/sections/AttractionsSection'
import { useLenis } from '@/hooks/useLenis'
import PlanVisitSection from '@/components/sections/PlanVisitSection'

function App() {
  useLenis()
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
      <PlanVisitSection/>
    </main>
  )
}
export default App