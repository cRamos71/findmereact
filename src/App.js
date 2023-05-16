import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from  "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts"

// //Reusing 
// import { BrowserRouter as Router, Route } from 'react-router-dom';

// function OutletComponent() {
//   return (
//     <>
//       <Route path="/" element={<Home />} />
//     </>
//   );
// }

function App() {
  return (
    // <Router>
      <div className="App">
        <Navbar />
        <About />
        <Footer />
      </div>
    // </Router>
  );
}

export default App;
