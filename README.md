# Portfolio Personale

Sito portfolio personale sviluppato con React e Tailwind CSS.
I progetti vengono caricati automaticamente tramite le API di GitHub.

## Tecnologie utilizzate

- React
- Tailwind CSS
- Flowbite React (componenti UI)
- Vite (build tool)
- GitHub API

## Struttura del progetto
```
src/
├── components/
│   ├── Navbar.jsx       # Navbar responsive
│   └── Card.jsx         # Card singolo progetto
├── hooks/
│   └── useGithubRepos.js # Hook per fetch repo GitHub
└── App.jsx              # Componente principale
```

## Come aggiungere un progetto al portfolio

Per mostrare un nuovo progetto nel portfolio:
1. Crea la repository su GitHub
2. Aggiungi una **descrizione** alla repo
3. Aggiungi i **topics** con le tecnologie usate (es. `react`, `laravel`)
4. Aggiungi il topic **`portfolio-project`**

Il portfolio si aggiornerà automaticamente!

## Avvio in locale
```bash
npm install
npm run dev
```

## Deploy
```bash
npm run build
```