import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Katalog from './pages/Katalog'
import DetailBuket from './pages/DetailBuket'
import Lokasi from './pages/Lokasi'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/katalog" element={<Katalog />} />
            <Route path="/buket/:id" element={<DetailBuket />} />
            <Route path="/lokasi" element={<Lokasi />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

