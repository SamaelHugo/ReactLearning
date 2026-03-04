import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import {Home} from "./pages/home";
import {Menu} from "./pages/menu";
import {Contact} from "./pages/contact";
import {Error} from "./pages/error";
import {Navbar} from "./pages/navbar";


function App() {

  return (
    <div className="App">
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    </div>
  );
}


export default App;
