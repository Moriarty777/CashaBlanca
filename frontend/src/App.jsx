import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Landing from './pages/landing'
import Goals from './pages/goals'
import Learn from './pages/learn'
import Dashboard from './pages/dashboard'

const App = () => (

  <Router>
    <main className="relative">
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/learn" element={<Learn />} />
        {/* Add more routes as needed */}
      </Routes>

      {/* <Footer /> */}
    </main>
  </Router>
);

export default App;