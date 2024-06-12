import "./App.css";
import SearchEngine from "./SearchEngine.js";
import SocialLinks from "./SocialLinks.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Search Engine</h1>
      </header>
      <main>
        <SearchEngine />
      </main>
      <footer>
        <SocialLinks />
      </footer>
    </div>
  );
}

export default App;
