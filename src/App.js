import { Route, Routes } from 'react-router-dom'
import Layout from 'Layout/Layout'
import Home from 'Pages/Home'
import Projects from 'Pages/Projects'
import About from 'Pages/About'
import Skills from 'Pages/Skills'
import Contact from 'Pages/Contact'
import './css/index.css'

export default function App() {
  // const location = window.location.origin.split('//')[1];
  // if (location === 'thoffman.me' || location === 'www.thoffman.me') window.location.href = 'https://t-hoffman.com'

  /* return (
   <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutme" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contactme" element={<Contact />} />
    </Routes>
   </Layout> 
  )*/

   return null;
}
