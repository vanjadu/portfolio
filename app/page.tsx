import ClientComponent from './components/ClientComponent'
import HomeAbout from './components/HomeSection/HomeAbout'
import HomeCards from './components/HomeSection/HomeCards'
import HomeContact from './components/HomeSection/HomeContact'
import HomeHero from './components/HomeSection/HomeHero'
import HomeMainProject from './components/HomeSection/HomeMainProject'
import HomeOtherProjects from './components/HomeSection/HomeOtherProjects'
import HomeServices from './components/HomeSection/HomeServices'

export default function Home() {
  return (
    <main>
      <HomeHero />
      <ClientComponent>
        <HomeCards />
      </ClientComponent>
      <HomeAbout />
      <HomeServices />
      <HomeMainProject />
      <HomeOtherProjects />
      <HomeContact />
    </main>
  )
}
