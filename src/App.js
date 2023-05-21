import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from  "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts"
import Auth from "./components/Auth";
import Dashboard from "./components/Dashboard";
import NavbarLogged from "./components/NavbarLogged";
import PrivateRoute from "./components/PrivateRoute";
import FooterLogged from "./components/FooterLogged";
import Friends from "./components/Friends";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import Locations from "./components/Locations";
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
          <Route path= "/dashboard" element={ <PrivateRoute isAuthenticated={isAuthenticated} /* Passing the state */ ><Dashboard /></PrivateRoute>} />
          <Route path= "/friends" element={<Friends />} />
          <Route path= "/profile" element={<Profile />} />
          <Route path= "/settings" element={<Settings />} />
          <Route path= "/locations" element={<Locations />} />
        </Routes>
        {isAuthenticated ? (<FooterLogged />) : (<Footer />)}
      </>
  );
}

export default App;
