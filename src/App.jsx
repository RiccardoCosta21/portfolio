import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { progetti } from "./data/progetti";



function App() {
  

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: "var(--color-primary)" }}>
      <Navbar />  
      <div className="flex justify-center items-center">
        <h1 className="text-3xl font-bold mb-4" style={{ color: "var(--color-light)" }}>My Portfolio</h1>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-8 lg:px-16 py-8 justify-items-center" style={{ backgroundColor: "var(--color-dark)" }}>
        {progetti.map( p=> (
          <Card key={p.id} titolo={p.titolo} descrizione={p.descrizione} tech={p.tech} link={p.link}/>
        ))}
      </div> 

    </div>


  )
}

export default App
