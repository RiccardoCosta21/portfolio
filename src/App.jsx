import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Progetti from "./pages/Progetti";
import ChiSono from "./pages/ChiSono";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen flex flex-col text-white" style={{ backgroundColor: "var(--color-primary)" }}>
                <Navbar />
                <main className="flex-1">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/progetti" element={<Progetti />} />
                        <Route path="/chi-sono" element={<ChiSono />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;