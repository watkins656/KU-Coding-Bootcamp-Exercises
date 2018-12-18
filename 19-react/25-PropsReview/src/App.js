import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendsCard from "./components/FriendsCard";
import friends from "./friends.json";

function App() {
  return (
    <Wrapper>
      <Title>Friends List</Title>
      <FriendsCard {...friends[0]}/>
      <FriendsCard {...friends[1]}/>
      <FriendsCard {...friends[2]}/>
      </Wrapper>
  );
}

export default App;
