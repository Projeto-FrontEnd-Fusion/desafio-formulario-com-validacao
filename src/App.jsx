// IMPORT ROUTER
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./Router/Router";

import NavBar from "./assets/components/Header/page";
import "./App.css";
import NavDevice from "./assets/components/NavDevice/page";
import ColorSwitch from "./assets/components/Switch/ColorSwitch";

function App() {
  return (
    <Router>
      <main className="container_app">
        <NavBar />
        <ColorSwitch/>
        <NavDevice/>
        <AppRouter />
      </main>
    </Router>
  );
}

export default App;
