import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Progetti from "./pages/Progetti";
import ChiSono from "./pages/ChiSono";
import Navbar from "./components/Navbar";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/progetti" element={<Progetti />} />
                <Route path="/chi-sono" element={<ChiSono />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;