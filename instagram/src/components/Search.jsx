import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Components.css";

const SearchPage = (props) => {
  const route = useNavigate();
  const [people, setpeople] = useState();
  const[showCross, setShowCross] =useState(false);
  const[propic, setPropic] =useState();

  function search(e) {
    // var name= e.target.name;
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

  useEffect(() => {
    var currentUser =JSON.parse(localStorage.getItem("instaCurrentUser"));
    if(currentUser){
      // var setimage;
      var dataFromLs =JSON.parse(localStorage.getItem("instaUserData"));
      for(var i=0; i<dataFromLs.length; i++){
        if(dataFromLs[i].email === currentUser.currentEmail ){
          // setimage =dataFromLs[i].profileImage
          setPropic(dataFromLs[i].profileImage)
        }
      }
    }

  },[])

  // console.log(people);

  function displayCross(){
    setShowCross(true);
  }

  function hideCross(){
    setShowCross(false);
    setpeople();
  }


  return (
    <div className="searchbar">
      <div className="searchbar-right">
        <div>
          <div className="searchbar-search">
            <h1>Search</h1>
            <div>
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                type="text"
                placeholder="search"
                onChange={(e) => {
                  search(e);
                }}
                onClick={() =>{displayCross()}}
                // value={people}
              />
              {showCross && <i className="fa-solid fa-xmark cursor" onClick={() =>{hideCross()}}></i> }
            </div>
          </div>
        </div>

        <div>
          {people && (
            <div>
              <div>
             
              </div>
              <div>
                <p>
                  <strong>{people.username}</strong>
                </p>
                <p>{people.name}</p>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default SearchPage;