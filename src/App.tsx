import search from "./assets/Search.svg";
import planet from "./assets/planet.png";

function App() {
  return (
    <div className="container">
      <header>
        <img src={planet} alt="" />
        <div>
          <img src={search} alt="svg search" />
          <input type="text" />
        </div>
        <div>
          <img
            src="https://avatars.githubusercontent.com/u/123975416?s=96&v=4"
            alt="photo github"
          />
          <div>
            <span>GitHub</span>
            <p>How people build software.</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
