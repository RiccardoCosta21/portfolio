import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer 
            className="p-4 mt-2"
            style={{ backgroundColor: "var(--color-dark)", color: "var(--color-light)" }}
        >
            <div className="flex justify-between items-center mb-4">

                {/* Logo */}
                <p className="font-bold tracking-widest">
                    RC
                </p>

                {/* Social placeholder */}
                <div className="flex gap-4">
                    <a href="https://github.com/RiccardoCosta21" target="_blank">
                        <FaGithub size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/riccardo-costa-880822194/" target="_blank">
                        <FaLinkedin size={20} />
                    </a>
                    <a href="https://www.instagram.com/rikiicosta/" target="_blank">
                        <FaInstagram size={20} />
                    </a>
                </div>

            </div>

            {/* Copyright */}
            <p className="text-xs text-center opacity-60">
                &copy; {new Date().getFullYear()} Riccardo C.
            </p>
        </footer>
    );
}