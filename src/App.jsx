import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Features from "./pages/Features.jsx";
import Navbar from "./components/Navbar.jsx";
import Development from "./pages/Development.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Navbar />
              <Index />
            </>
          }
        />
        <Route
          path="/features"
          element={
            <>
              <Navbar />
              <Features />
            </>
          }
        />
        <Route
          path="/development"
          element={
            <>
              <Navbar />
              <Development />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
