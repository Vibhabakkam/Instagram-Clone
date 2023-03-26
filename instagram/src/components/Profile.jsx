import "./Components.css";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function Profile() {

    return (
        <>
            <div class="profile-main">

                <div class = "profile-Sidebar">
                    <Sidebar/>
                </div>

                <div class="profile">

                    <div class="profile-header">
                        <div class="profile-image">
                            <img src="https://media.licdn.com/dms/image/C4E03AQGvXlEYY08elQ/profile-displayphoto-shrink_400_400/0/1631716060825?e=1684972800&v=beta&t=8UWC-9rjY-sC1lgc4Z2GR4XX_IlZpFl6Vps6uZYgvl0" alt="imge" />
                        </div>
                        <div class="profile-info">
                            <h1 class="profile-username">VibhaBakkam <button>Edit Profile</button> <i class="fa-solid fa-gear"></i></h1>
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
                                VibhaBakkam <br />
                                From - Mangoan

                            </div>
                        </div>
                    </div>
                    <div class="profile-posts">

                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )

}
export default Profile;
