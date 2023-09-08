import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Layout/Navbar'
import Home from './pages/Home'
import Activites from './pages/activites'
import Contact from './pages/Contact'

function App() {

  return (
    <Router>
      <div className="app-content">
        <Navbar />
        <Routes>
          <Route path="/" element ={<Home/>} />
          <Route path="/activites" element ={<Activites/>} />
          <Route path="/contact" element ={<Contact/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
