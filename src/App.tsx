import search from "./assets/Search.svg";
import planet from "./assets/planet.png";
import nesting from "./assets/Nesting.svg";
import star from "./assets/Star.svg";

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

      <main>
        <div>
          <img
            src="https://avatars.githubusercontent.com/u/123975416?s=96&v=4"
            alt="photo github"
          />

          <div>
            <span>Followers</span>
            <p>27839</p>
          </div>

          <div>
            <span>Following</span>
            <p>0</p>
          </div>

          <div>
            <span>Location</span>
            <p>San Francisco,CA</p>
          </div>
        </div>

        <div>
          <h2>GitHub</h2>
          <p>How People build software</p>
        </div>

        <section>
          <div>
            <p>.github</p>

            <p>Community health files for the @GitHub organization</p>

            <div>
              <img src={nesting} alt="" />
              <p>2,369</p>
              <img src={star} alt="" />
              <p>703</p>
              <p>update 4 days ago</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
