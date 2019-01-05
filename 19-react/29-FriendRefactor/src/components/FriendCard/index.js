import React from "react";
import "./style.css";
import friends from "./src/friends.json";

class FriendCard extends React.Component {
  state = {
    friends: friends
  };

  render() {
    friends.map(function (friend, index) {
      let name =  friend.name; 
      let image =  friend.image; 
      let occupation =  friend.occupation; 
      let location =  friend.location; 
      return (
        <div className="card">
          <div className="img-container">
            <img alt={name} src={image} />
          </div>
          <div className="content">
            <ul>
              <li>
                <strong>Name:</strong> {name}
              </li>
              <li>
                <strong>Occupation:</strong> {occupation}
              </li>
              <li>
                <strong>Address:</strong> {location}
              </li>
            </ul>
          </div>
          <span className="remove">𝘅</span>
        </div>
      );
    })
  };
}

export default FriendCard;
