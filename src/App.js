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
import Followers from "./components/Followers";
import Following from "./components/Following";
import Profile from "./components/Profile";
import { Routes, Route } from 'react-router-dom';


function App() {
  const isAuthenticated = sessionStorage.getItem("token");

  return (
      <>
        {isAuthenticated ? (<NavbarLogged />) : (<Navbar />)}
        <Routes>  {/* Sending what i want */}
          <Route path= "/" element={<Home />} />
          <Route path= "/auth"  element={<Auth />} />
          <Route path= "/about" element={<About />} />
          <Route path= "/contacts" element={<Contacts />} />
          <Route path= "/dashboard" element={ <PrivateRoute redirectTo="/auth" ><Dashboard /></PrivateRoute>} />
          <Route path= "/followers" element={ <PrivateRoute redirectTo="/auth" ><Followers /></PrivateRoute>} />
          <Route path= "/following" element={ <PrivateRoute redirectTo="/auth" ><Following /></PrivateRoute>} />
          <Route path= "/profile" element={ <PrivateRoute redirectTo="/auth" ><Profile /></PrivateRoute>} />
        </Routes>
        {isAuthenticated ? (<FooterLogged />) : (<Footer />)}
      </>
  );
}

export default App;
