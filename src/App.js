import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import About from './pages/About'
import Home from './pages/Home'
import Error from './pages/Error'
import Logement from './pages/Logement'




function App() {
  return (
      <BrowserRouter basename='/Kasa'>
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/logements/:id" element={<Logement />} />             
              <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
      </BrowserRouter>
  )
}

export default App;
