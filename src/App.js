/* import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; */
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";


function App() {
  return (
    <div>
    
    <NavBar/>
    <ItemListContainer promps ='Hola Mundo'/>
    <h1>Bienvenido a Diagnovet Laboratorio Veterinario</h1>
    </div>
  );
}

export default App;
