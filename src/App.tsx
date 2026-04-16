import Navbar from '@/components/layout/NavBar'
import HeroSection from '@/components/sections/HeroSection'
import StatsSection from '@/components/sections/StateSection'
import RetailSection from './components/sections/RetailSection'

function App() {
  return (
    <main className="app-main">
      <Navbar/>
      <HeroSection />
      <RetailSection/>x
      <StatsSection/>
    </main>
  )
}
export default App