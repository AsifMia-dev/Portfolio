// App.jsx
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStack from './components/techstack'
import Toolkit from './components/Toolkit'
import Projects from './components/Projects'
import WhoIAm from './components/WhoIAm'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <main>
      <Navbar />
      <section id="hero"><Hero /></section>
      <section id="techstack"><TechStack /></section>
      <section id="projects"><Projects /></section>
      <section id="toolkit"><Toolkit /></section>
      <section id="whoiam"><WhoIAm /></section>
      <section id="education"><Education /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </main>
  )
}

export default App