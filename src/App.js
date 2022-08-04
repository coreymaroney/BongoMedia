import { FilmGrid } from "./components/FilmGrid";
import BongoMedia from "./assets/bongomedia.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={BongoMedia} alt="" className="Bongo-logo" />
        <FilmGrid />
      </header>
    </div>
  );
}

export default App;
