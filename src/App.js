import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from  "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts"
import Auth from "./components/Auth";
import Dashboard from "./components/Dashboard";
import NavbarLogged from "./components/NavbarLogged";
import { useState } from "react";
import { Routes, Route } from 'react-router-dom'; // Routes


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthenticationChange = (authenticated) => { // Passed as a prop, callback
    setIsAuthenticated(authenticated);
  };

  return (
      <>
        {isAuthenticated ? (<NavbarLogged onAuthenticationChange={handleAuthenticationChange} />) : (<Navbar />)}
        <Routes>  {/* Sending what i want */}
          <Route path= "/" element={<Home />} />
          <Route path= "/auth"  element={<Auth onAuthenticationChange={handleAuthenticationChange} />} />
          <Route path= "/about" element={<About />} />
          <Route path= "/contacts" element={<Contacts />} />
          <Route path= "/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </>
  );
}

export default App;
