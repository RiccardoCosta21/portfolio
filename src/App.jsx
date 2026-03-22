import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { useGithubRepos } from "./hooks/useGithubRepos";

// Componente principale dell'app
function App() {
    // Fetch automatico dei repo da GitHub
    const { repos, loading, error } = useGithubRepos("RiccardoCosta21");

    return (
        <div className="min-h-screen text-white" style={{ backgroundColor: "var(--color-primary)" }}>
            <Navbar />

            <div className="flex justify-center items-center py-8">
                <h1 className="text-3xl font-bold" style={{ color: "var(--color-light)" }}>My Portfolio</h1>
            </div>

            {/* Messaggio di caricamento */}
            {loading && (
                <p className="text-center py-8" style={{ color: "var(--color-accent)" }}>
                    Caricamento progetti...
                </p>
            )}

            {/* Messaggio di errore */}
            {error && (
                <p className="text-center py-8 text-red-400">Errore: {error}</p>
            )}

            {/* Griglia delle card dei progetti */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-8 lg:px-16 py-8 justify-items-center"
                style={{ backgroundColor: "var(--color-dark)" }}>
                {repos.map(repo => (
                    // Rimuove "portfolio-project" dai topics prima di mostrarli
                    <Card
                        key={repo.id}
                        titolo={repo.name}
                        descrizione={repo.description || "Nessuna descrizione"}
                        tech={repo.topics?.filter(t => t !== "portfolio-project").join(" / ") || repo.language || "—"}
                        link={repo.html_url}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;