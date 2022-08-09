import React from "react";
import StarWarsList from "./starWars/StarWarsList";
import AvatarList from "./avatar/AvatarList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <StarWarsList />
      <AvatarList />
    </div>
  );
}

export default App;
