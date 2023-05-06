import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Components.css";

const Search = () => {
    const route = useNavigate();
    const [people, setpeople] = useState();
    const [showCross, setShowCross] = useState(false);

    function search(e) {
        var value = e.target.value;

        var dataFromLs = JSON.parse(localStorage.getItem("instaUserData"));

        for (var i = 0; i < dataFromLs.length; i++) {
            if (
                dataFromLs[i].name.toUpperCase() === value.toUpperCase() ||
                dataFromLs[i].username.toUpperCase() === value.toUpperCase()
            ) {
                setpeople(dataFromLs[i]);
            }
        }
    }

    function displayCross() {
        setShowCross(true);
    }

    function hideCross() {
        setShowCross(false);
        setpeople();
    }


    return (
        <div id="searchbar">
            <div id="searchbar-left">
                <div>
                    <div>
                        <i className="fa-brands fa-instagram"></i>
                    </div>
                    <div>
                        <div>
                            <i className="fa-solid fa-house"></i>
                        </div>
                        <div>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <div>
                            <i className="fa-regular fa-compass"></i>
                        </div>
                        <div>
                            <i className="fa-solid fa-camera-retro"></i>
                        </div>
                        <div>
                            <i className="fa-solid fa-location-arrow"></i>
                        </div>
                        <div>
                            <i className="fa-regular fa-heart"></i>
                        </div>
                        <div
                           
                        >
                            <i className="fa-solid fa-plus"></i>
                        </div>

                        <div
                           
                        >
                            
                        </div>
                    </div>
                    <div>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </div>
            </div>
            <div id="searchbar-right">
                <div>
                    <div id="searchbar-right-top">
                        <div id="searchbar-search">
                            <h2>Search</h2>
                            <div>
                                <i className="fa-solid fa-magnifying-glass"></i>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    onChange={(e) => {
                                        search(e);
                                    }}
                                    onClick={() => { displayCross() }}

                                />
                                {showCross && <i className="fa-solid fa-xmark cursor" onClick={() => { hideCross() }}></i>}
                            </div>
                        </div>
                    </div>
                    <div id="searchbar-right-bottom">
                        <p>Recent</p>
                        {people && (
                            <div>
                                <div>
                                    <h4>{people.username}</h4>
                                    <p>{people.name}</p>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Search;