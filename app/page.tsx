import HomeAbout from './components/HomeSection/HomeAbout'
import HomeCards from './components/HomeSection/HomeCards'
import HomeHero from './components/HomeSection/HomeHero'
import HomeServices from './components/HomeSection/HomeServices'

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeCards />
      <HomeAbout />
      <HomeServices />
    </main>
  )
}
