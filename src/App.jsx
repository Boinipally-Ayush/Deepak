import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Section />
              <About />
              <Skills />
              <Work />
              <Contact />
            </>
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;

