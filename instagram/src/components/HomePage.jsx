import "./Components.css";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";


function HomePage() {
  const [userPosts, setUserPosts] = useState([]);
  const [userStory, setUserStory] = useState([]);
  const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem("instaCurrentUser")));

  useEffect(() => {
    const userPostsFromLs = JSON.parse(localStorage.getItem("instaPost")) || [];
    setUserPosts(userPostsFromLs);
  }, []);
  useEffect(() => {
    const userStoryFromLs = JSON.parse(localStorage.getItem("instaStory")) || [];
    setUserStory(userStoryFromLs);
  }, []);
  return (
    <div id="homePage">

      <div className="Sidenav1">
        <Sidebar />
      </div>

      <div className="home-content">
        <div id="home-story">
          <div>
            <div>
              <img src="https://is5-ssl.mzstatic.com/image/thumb/Purple71/v4/3c/90/ae/3c90ae31-4344-1a94-f9a3-edda7bcd2b9c/source/512x512bb.jpg" alt='Add story' />
            </div>
            {userStory.map((spost, index) => (
              <div key={index}>
                <img src={spost.image} alt="Post" /><br />
                <h3>{spost.username}</h3>
              </div>
            ))}
          </div>

        </div>
        <div className="home-add-content">
          <div>
            {userPosts.map((post, index) => (
              <div id="map-postHome" key={index}>
                <h2>{post.username}</h2>
                <img src={post.image} alt="Post" /><br />
                <i class="fa-solid fa-heart"></i><i class="fa-solid fa-share-nodes"></i> <i class="fa-solid fa-comment"></i>
                <p>{post.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="home-suggestions">
        <div className="home-suggestions-top"><h1>{userInfo && userInfo["currentUserName"]}</h1></div>
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