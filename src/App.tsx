import search from "./assets/Search.svg";
import planet from "./assets/planet.png";
import nesting from "./assets/Nesting.svg";
import star from "./assets/Star.svg";
import chiled from "./assets/chiled.svg";

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

      <main className="main">
        <div className="profile">
          <img
            src="https://avatars.githubusercontent.com/u/123975416?s=96&v=4"
            alt="photo github"
          />

          <div className="contentProfile">
            <span>Followers</span>
            <p>27839</p>
          </div>

          <div className="contentProfile">
            <span>Following</span>
            <p>0</p>spa
          </div>

          <div className="contentProfile">
            <span>Location</span>
            <p>San Francisco,CA</p>
          </div>
        </div>

        <div className="titleMain">
          <h2>GitHub</h2>
          <p>How People build software</p>
        </div>

        <section className="repositories">
          <div className="divRepository">
            <h3>.github</h3>

            <span>Community health files for the @GitHub organization</span>

            <div className="infoRepository">
              <img src={nesting} alt="" />
              <p>2,369</p>
              <img src={star} alt="" />
              <p>703</p>
              <p>update 4 days ago</p>
            </div>
          </div>
          <div className="divRepository">
            <h3>accessibillity-alt-text-bot</h3>

            <span>
              An actions to remind users to add alt text on Issues, Pull
              Request, and Discussion
            </span>

            <div className="infoRepository">
              <img src={chiled} alt="" />
              <p>MIT</p>
              <img src={nesting} alt="" />
              <p>7</p>
              <img src={star} alt="" />
              <p>50</p>
              <p>update 3 days ago</p>
            </div>
          </div>
          <div className="divRepository">
            <h3>accessibillityjs</h3>

            <span>Client side accessibillity error scanner</span>

            <div className="infoRepository">
              <img src={chiled} alt="" />
              <p>MIT</p>
              <img src={nesting} alt="" />
              <p>72</p>
              <img src={star} alt="" />
              <p>2181</p>
              <p>update 4 days ago</p>
            </div>
          </div>
          <div className="divRepository">
            <h3>actions-cheat-sheet</h3>

            <span>A cheat seet for GitHub Actions</span>

            <div className="infoRepository">
              <img src={chiled} alt="" />
              <p>MIT</p>
              <img src={nesting} alt="" />
              <p>26</p>
              <img src={star} alt="" />
              <p>194</p>
              <p>update 4 days ago</p>
            </div>
          </div>
        </section>

        <p className="p">View all repositories</p>
      </main>
    </div>
  );
}

export default App;
