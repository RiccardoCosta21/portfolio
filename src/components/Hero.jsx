import {Link} from "react-router-dom";

export default function Hero() {
    return (
        
            <div className="flex flex-col justify-center items-center py-8" style={{ backgroundColor: "var(--color-primary)" }}>
                <h1 className="text-3xl font-bold" style={{ color: "var(--color-light)" }}>Ciao, sono Riccardo!</h1>
                <h3 className="text-lg m-3 " style={{ color: "var(--color-accent)" }}>Studente di informatica e appassionato di sviluppo</h3>
                <div>
                    <Link to="/progetti" className="rounded-full px-6 py-2 m-3 hover:opacity-50 transition-opacity duration-200 inline-block w-fit"
                    style={{ backgroundColor: "var(--color-accent)", color: "var(--color-dark)" }}>
                        I miei progetti
                    </Link>
                    <Link to="/chi-sono" className="rounded-full px-6 py-2 m-3 hover:opacity-50 transition-opacity duration-200 inline-block w-fit"
                    style={{ 
                            border: "1px solid var(--color-accent)", 
                            color: "var(--color-accent)",
                            backgroundColor: "transparent"}}>
                        Chi sono
                    </Link>
                </div>
            </div>
    )


}