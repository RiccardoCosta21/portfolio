import { useState, useEffect } from 'react';

// Hook personalizzato per fetchare i repo pubblici di un utente GitHub
// Mostra solo i repo con il topic "portfolio-project"
export function useGithubRepos(username) {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Richiesta alle API di GitHub con header per includere i topics
        fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=20`, {
            headers: {
                "Accept": "application/vnd.github.mercy-preview+json"
            }
        })
            .then(res => {
                if (!res.ok) throw new Error("Errore nel fetch dei repo");
                return res.json();
            })
            .then(data => {
                // Filtra solo i repo con il topic "portfolio-project"
                const filtrati = data.filter(r => r.topics?.includes("portfolio-project"));
                setRepos(filtrati);
            })
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, [username]); // Si riesegue solo se cambia l'username

    return { repos, loading, error };
}