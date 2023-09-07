import { Routes, Route, Navigate } from "react-router-dom";
import Nav from './components/Nav'
import Hjem from './pages/Hjem'
import Rejser from './pages/Rejser'
import Omos from './pages/Omos'
import './App.css'

function App() {

  return (
    <main>
      <Nav />
      <Routes>
        <Route path="/" element={<Hjem />} />
        <Route path="/about" element={<Rejser />} />
        <Route path="/contact" element={<Omos />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </main>
  )
}

export default App
