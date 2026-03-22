import { Card } from "flowbite-react";

export default function CardProgetto({ titolo, descrizione, tech, link }) {
    
    return (
        <Card style={{ backgroundColor : "var(--color-primary)"}}>
            <h2 style={{ color : "var(--color-light)" }}>{titolo}</h2>
            <div style={{ color : "var(--color-accent)" }}>
                <p>{descrizione}</p>
                <span>{tech}</span>
            </div>
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