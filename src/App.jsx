// IMPORT ROUTER
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./Router/Router";

import NavBar from "./assets/components/Header/page";
import "./App.css";
import NavDevice from "./assets/components/NavDevice/page";

function App() {
  return (
    <Router>
      <main className="container_app">
        <NavBar />
        <NavDevice/>
        <AppRouter />
      </main>
    </Router>
  );
}

export default App;
