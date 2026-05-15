import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStack from './components/techstack'
// import Languages from './components/Languages'
import Toolkit from './components/Toolkit'
import Projects from './components/Projects'
import WhoIAm from './components/WhoIAm'

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <Toolkit />
      <WhoIAm />
      {/* <Languages /> */}
    </main>
  )
}

export default App