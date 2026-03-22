import { useState } from "react";

export default function Navbar() {
const [isOpen, setIsOpen] = useState(false);

return (
    <nav className=" p-4" style={{ backgroundColor: "var(--color-dark)" }}>
    <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold cursor-pointer" style={{ color: "var(--color-light)" }}>
            LOGO
        </div>

            {/* Menu desktop */}
            <ul className="hidden md:flex gap-8 items-center" style={{ color: "var(--color-accent)"}}>
                <li className="hover:text-stone-300 cursor-pointer">Home</li>
                <li className="hover:text-stone-300 cursor-pointer">I miei lavori</li>
                <li className="hover:text-stone-300 cursor-pointer">Chi sono</li>
            </ul>

            {/* Bottone mobile */}
            <button
                className="md:hidden text-2xl"
                onClick={() => setIsOpen(!isOpen)}
            >
                ☰
            </button>
    </div>

    {/* Menu mobile */}
    {isOpen && (
        <ul className="flex flex-col mt-4 gap-4 md:hidden"  style={{ color: "var(--color-accent)"}}>
            <li className="hover:text-stone-300 cursor-pointer">Home</li>
            <li className="hover:text-stone-300 cursor-pointer">I miei lavori</li>
            <li className="hover:text-stone-300 cursor-pointer">Chi sono</li>
        </ul>
    )}
    </nav>
);
}