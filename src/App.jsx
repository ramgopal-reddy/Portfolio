import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Salaar from "./pages/Salaar";
import PortfolioPage from "./Portfolio/page";
import HomePage from "./FrontEnd/HomePage";
import { ThemeProvider } from "./Portfolio/hooks/useTheme";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/salaar" element={<Salaar />} />
          <Route path="/" element={<PortfolioPage />} />
          <Route path="/frontend" element={<HomePage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
