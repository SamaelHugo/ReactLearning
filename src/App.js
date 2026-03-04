import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Home} from "./pages/home";
import {Menu} from "./pages/menu";
import {Contact} from "./pages/contact";
import {Error} from "./pages/error";
import {Navbar} from "./pages/navbar";
import {Profile} from "./pages/profile";
import {useState, createContext} from "react";


export const AppContext = createContext()

function App() {

    const [username, setUsername] = useState("Kocelot")

  return (
    <div className="App">
        <AppContext.Provider value={{username, setUsername}}>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </Router>
        </AppContext.Provider>
    </div>
  );
}


export default App;
