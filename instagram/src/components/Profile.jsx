import "./Components.css";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {

    const [post, setPost] = useState({
        caption: "",
        image: "",
        username: "",
        useremail: "",
    });
    const [userPosts, setUserPosts] = useState([]);
    const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem("instaCurrentUser")));

    useEffect(() => {
        setUserInfo(JSON.parse(localStorage.getItem("instaCurrentUser")));
        const userPostsFromLs = JSON.parse(localStorage.getItem("instaPost")) || [];
        const filteredUserPosts = userPostsFromLs.filter(post => post.useremail === userInfo.currentEmail);
        setUserPosts(filteredUserPosts);
    }, [setPost]);

    // useEffect(() => {
    //     const userPostsFromLs = JSON.parse(localStorage.getItem("instaPost")) || [];
    //     const filteredUserPosts = userPostsFromLs.filter(post => post.useremail === userInfo.currentEmail);
    //     setUserPosts(filteredUserPosts);
    // }, [setPost, userInfo]);

    return (
        <>
            <div class="profile-main">
                <div class="profile-Sidebar">
                    <Sidebar />
                </div>
                <div class="profile">

                    <div class="profile-header">
                        <div class="profile-image">
                            <img src="https://media.istockphoto.com/id/1447162783/photo/aligned-fishing-boats-in-the-sunset.jpg?b=1&s=170667a&w=0&k=20&c=Im3LT7-bWuXaNXfnGuTXc8leNYojrnwtDu5ohiUwvXo=" alt="imge" />
                        </div>
                        <div class="profile-info">
                            <h1 class="profile-username">{userInfo && userInfo["currentUserName"]} <button>Edit Profile</button> <i class="fa-solid fa-gear"></i></h1>
                            <div class="profile-stats">
                                <div class="profile-stat">
                                    <span class="profile-stat-count">1,234</span> posts
                                </div>
                                <div class="profile-stat">
                                    <span class="profile-stat-count">567</span> followers
                                </div>
                                <div class="profile-stat">
                                    <span class="profile-stat-count">890</span> following
                                </div>
                            </div>
                            <div class="profile-bio">This is my bio. <br />
                            This is heaven on earth.
                            </div>
                        </div>
                    </div>
                    <div class="profile-posts">
                        {userPosts.map(post => (
                            <div id="map-Post"  key={post.id}>
                                <img src={post.image} alt="post" />
                                <i class="fa-solid fa-heart"></i> <i class="fa-solid fa-share-nodes"></i><i class="fa-solid fa-comment"></i>
                                <h2>{post.caption}</h2>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )

}
export default Profile;
