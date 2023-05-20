import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from  "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts"
import Auth from "./components/Auth";
import { Routes, Route } from 'react-router-dom'; // Routes


function App() {


  return (
      <>
        <Navbar />
        <Routes>  {/* Sending what i want */}
          <Route path= "/" element={<Home />} />
          <Route path= "/auth" element={<Auth />} />
          <Route path= "/about" element={<About />} />
          <Route path= "/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </>
  );
}

export default App;
