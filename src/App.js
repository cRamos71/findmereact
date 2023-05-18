import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from  "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts"
import Login from "./components/Auth";

// Reusing 
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {


  return (
      <div className="App">
        <Navbar />
        <Login />
        <Footer />
      </div>
  );
}

export default App;
