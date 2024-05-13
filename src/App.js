import "./App.css";
import "./components/Navbar/Navbar";
import Navbar from "./components/Navbar/Navbar";
import Introduction from "./components/introduction/Introduction";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="contenedor">
        <Introduction />
      </div>
    </div>
  );
}

export default App;
