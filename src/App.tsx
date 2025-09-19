import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Services from './pages/Services'
import Products from './pages/Products'
import Jobs from './pages/Jobs'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/jobs" element={<Jobs />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
