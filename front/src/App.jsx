import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PredictionPage from './pages/PredictionPage';
import NearbyHospitals from './pages/NearbyHospitals';
import AdminPanel from './pages/AdminPanel';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/predict" element={<PredictionPage />} />
        <Route path="/hospitals" element={<NearbyHospitals />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
// py -3.10 -m venv venv
// .\venv\Scripts\activate