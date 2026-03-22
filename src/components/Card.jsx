import { Card } from "flowbite-react";

// Card singola per ogni progetto
// Riceve: titolo, descrizione, tech (tecnologie), link alla repo
export default function CardProgetto({ titolo, descrizione, tech, link }) {
    
    return (
        <Card style={{ backgroundColor : "var(--color-primary)"}}>
            {/* Nome del progetto */}
            <h2 style={{ color : "var(--color-light)" }}>{titolo}</h2>

            <div style={{ color : "var(--color-accent)" }}>
                {/* Descrizione del progetto */}
                <p>{descrizione}</p>
                {/* Tecnologie usate */}
                <span>{tech}</span>
            </div>

            {/* Link alla repository GitHub */}
            <a 
            href={link} 
            target="_blank"
            className="rounded-full px-6 py-2 hover:opacity-80 transition-opacity duration-200 inline-block w-fit"
            style={{ backgroundColor: "var(--color-accent)", color: "var(--color-dark)" }}
            >
                Vedi progetto
            </a>
        </Card>
    )
}