import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import SellDevice from './pages/SellDevice'
import RepairService from './pages/RepairService'
import TradezoneCarePage from './pages/TradezoneCarePage'
import CorporatePage from './pages/CorporatePage'
import ToolsPage from './pages/ToolsPage'
import Blog from './pages/Blog'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import FAQ from './pages/FAQ'

function App() {
  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sell" element={<SellDevice />} />
        <Route path="/repair" element={<RepairService />} />
        <Route path="/care" element={<TradezoneCarePage />} />
        <Route path="/corporate" element={<CorporatePage />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
