import search from "./assets/Search.svg";
import planet from "./assets/planet.png";

function App() {
  return (
    <div className="container">
      <header className="header">
        <img className="imgPlanet" src={planet} alt="" />
        <div className="search">
          <div className="inputSearch">
            <img src={search} alt="svg search" />
            <input type="text" />
          </div>
          <div className="resultSearch">
            <img
              src="https://avatars.githubusercontent.com/u/123975416?s=96&v=4"
              alt="photo github"
            />
            <div className="contentSearch">
              <span>GitHub</span>
              <p>How people build software.</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
