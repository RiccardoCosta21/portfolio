import { useState } from "react";
import { Link } from "react-router-dom";

// Navbar responsive con menu hamburger per mobile
export default function Navbar() {
    // Stato per aprire/chiudere il menu mobile
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="p-4" style={{ backgroundColor: "var(--color-dark)" }}>
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="text-xl font-bold cursor-pointer" style={{ color: "var(--color-light)" }}>
                    RC
                </div>

                {/* Menu desktop - visibile solo su schermi md e superiori */}
                <ul className="hidden md:flex gap-8 items-center" style={{ color: "var(--color-accent)" }}>
                    <Link to="/"><li className="hover:text-stone-300 cursor-pointer">Home</li></Link>
                    <Link to="/progetti"><li className="hover:text-stone-300 cursor-pointer">I miei lavori</li></Link>
                    <Link to="/chi-sono"><li className="hover:text-stone-300 cursor-pointer">Chi sono</li></Link>
                </ul>

                {/* Bottone hamburger - visibile solo su mobile */}
                <button
                    className="md:hidden text-2xl" style={{ color: "var(--color-accent"}}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Menu mobile - appare solo quando isOpen è true */}
            {isOpen && (
                <ul className="flex flex-col mt-4 gap-4 md:hidden" style={{ color: "var(--color-accent)" }}>
                    <Link to="/"><li className="hover:text-stone-300 cursor-pointer">Home</li></Link>
                    <Link to="/progetti"><li className="hover:text-stone-300 cursor-pointer">I miei lavori</li></Link>
                    <Link to="/chi-sono"><li className="hover:text-stone-300 cursor-pointer">Chi sono</li></Link>
                </ul>
            )}
        </nav>
    );
}