import logo from './logo.svg';
import './App.css';
import Menu from "./components/Menu/menu";
import Inicio from './components/Home/home';
import Personajes from './components/Personajes/personajes';
import Capitulos from './components/Capitulos/capitulos';
import Citas from './components/Citas/citas';

function App() {
  const currentURL = window.location.pathname
  function renderContent(){
    switch(currentURL){
      case "/":
        return <Inicio/>
      case "/personajes":
        return <Personajes/>
      case "/capitulos":
        return <Capitulos/>
      case "/citas":
        return <Citas/>
      default:
        return <Inicio/>
    }
  }
  return (
    <div className="App">
      <Menu/>
      <main>
        {renderContent()}
      </main>
      
      <footer> 
        Taller de React en Código Facilito
      </footer>
    </div>
  );
}

export default App;
