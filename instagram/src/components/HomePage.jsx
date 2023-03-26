import "./Components.css";
import Sidebar from "./Sidebar";


function HomePage() {
  return (
    <div id="homePage">
     
      
      <div className="Sidenav1">
      <Sidebar/>
      </div>
      
      <div className="home-content">
        <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div className="home-add-content"></div>
      </div>
      <div className="home-suggestions">
        <div className="home-suggestions-top"></div>
        <div className="home-suggestions-mid">
          <div>
            <p>Suggestions for you</p>
            <p>See All</p>
          </div>
          <div className="home-profiles">
            <div></div>
            <div>
              <h5>SnehaRajpurkar</h5>
              <p>Followed by elegant soul_14 - 5 more</p>
            </div>
            <div>Follow</div>
          </div>
          <div className="home-profiles">
            <div></div>
            <div>
              <h5>kalpeshLambade</h5>
              <p>Followed by elegant soul_14 - 5 more</p>
            </div>
            <div>Follow</div>
          </div>
          <div className="home-profiles">
            <div></div>
            <div>
              <h5>Avinash Thorat</h5>
              <p>Followed by elegant soul_14 - 5 more</p>
            </div>
            <div>Follow</div>
          </div>
          <div className="home-profiles">
            <div></div>
            <div>
              <h5>Ankita Parsai</h5>
              <p>Followed by elegant soul_14 - 5 more</p>
            </div>
            <div>Follow</div>
          </div>
        </div>
        <div className="home-suggestions-bot">
          <div>
            <p>About</p>
            <p>Help</p>
            <p>Press</p>
            <p>API</p> 
            <p>Jobs</p> 
            <p>Privacy</p>
            <p>Terms</p>
            <p>Locations</p> 
            <p>Language</p>
            <p>English</p> 
            <p>Meta</p> 
            <p>Verified</p> 
          </div>
          <div>
          © 2023 INSTAGRAM FROM META
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;