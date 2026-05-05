import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Salaar from "./pages/Salaar";
import PortfolioPage from "./Portfolio/page";
import HomePage from "./FrontEnd/HomePage";
import { ThemeProvider } from "./Portfolio/hooks/useTheme";
import AIConstructionSite from "./Portfolio/components/Workflows/AIConstructionSite";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/salaar" element={<Salaar />} />
          <Route path="/" element={<PortfolioPage />} />
          <Route path="/frontend" element={<HomePage />} />
          <Route path="/workflows" element={<AIConstructionSite />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
