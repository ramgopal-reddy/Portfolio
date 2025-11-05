import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Salaar from "./pages/Salaar";
import PortfolioPage from "./Portfolio/page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/salaar" element={<Salaar />} />
        <Route path="/" element={<PortfolioPage />} />
      </Routes>
    </Router>
  );
}

export default App;
