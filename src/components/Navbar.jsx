import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="p-4" style={{ backgroundColor: "var(--color-dark)" }}>
            <div className="flex items-center justify-between">
                <div className="text-xl font-bold cursor-pointer" style={{ color: "var(--color-light)" }}>
                    RC
                </div>
                <ul className="hidden md:flex gap-8 items-center" style={{ color: "var(--color-accent)" }}>
                    <Link to="/"><li className="hover:text-stone-300 cursor-pointer">Home</li></Link>
                    <Link to="/progetti"><li className="hover:text-stone-300 cursor-pointer">I miei lavori</li></Link>
                    <Link to="/chi-sono"><li className="hover:text-stone-300 cursor-pointer">Chi sono</li></Link>
                </ul>

                {/* Hamburger con transizione */}
                <button
                    className="md:hidden transition-transform duration-300 ease-in-out"
                    style={{ color: "var(--color-accent)" }}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className={`transition-all duration-300 ${isOpen ? "rotate-90" : "rotate-0"}`}>
                        {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
                    </div>
                </button>
            </div>

            {/* Menu mobile con animazione */}
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                <ul className="flex flex-col mt-4 gap-4 md:hidden" style={{ color: "var(--color-accent)" }}>
                    <Link to="/"><li className="hover:text-stone-300 cursor-pointer">Home</li></Link>
                    <Link to="/progetti"><li className="hover:text-stone-300 cursor-pointer">I miei lavori</li></Link>
                    <Link to="/chi-sono"><li className="hover:text-stone-300 cursor-pointer">Chi sono</li></Link>
                </ul>
            </div>
        </nav>
    );
}