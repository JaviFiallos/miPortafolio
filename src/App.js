import "./App.css";
import "./components/Navbar/Navbar";
import Navbar from "./components/Navbar/Navbar";
import Introduction from "./components/introduction/Introduction";
import Skills  from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="contenedor">
        <Introduction />
        <Skills />
      </div>
    </div>
  );
}

export default App;
