import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Home} from "./pages/home";
import {Menu} from "./pages/menu";
import {Contact} from "./pages/contact";
import {Error} from "./pages/error";
import {Navbar} from "./pages/navbar";
import {Profile} from "./pages/profile";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";


function App() {

    const client = new QueryClient(
        {defaultOptions : {
            queries: {
                refetchOnWindowFocus: false,
            }
            }}
    )

  return (
    <div className="App">


        <QueryClientProvider client={client}>
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
        </QueryClientProvider>
    </div>
  );
}


export default App;
