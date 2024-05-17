import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './index.scss'


function App() {
  

  return (
    <>
      <Header />
      <About  />
      <Skills  />
      <Projects />
      <Contact />
      <Footer />
      <ToastContainer />
    </>    
  )
}

export default App
