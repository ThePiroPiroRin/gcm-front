import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from './Login/AuthPage';
import Dashboard from './pages/Dashboard'; // Import the NewPage component
import MobilisationADC from "./pages/mobilisationADC";
import DemandePrefi from "./pages/demandePrefi";
import AG from "./pages/abonnementGroupe"
import Virement from "./pages/virements";
import ContratNan from "./pages/contratNan";
import Retour from "./pages/retour";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/mobilisationADC" element={<MobilisationADC />} />
          <Route path="/demandePrefi" element={<DemandePrefi />} />
          <Route path="/AG" element={<AG/>}/>
          <Route path="/virement" element={<Virement/>}/>
          <Route path="/contratNan" element={<ContratNan/>}/>
          <Route path="/retour" element={<Retour/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
