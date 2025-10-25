import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Salaar from "./pages/Salaar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Salaar />
    </>
  );
}

export default App;
