import { useState } from "react";

const StartPage = (props) => {
  return (
    <div className="mainContainerStartPage">
      <div className="headingStartPage">
        <span className="welcome">Welcome to</span>
        <br />
        <span className="matchMania">Match Mania</span>
        <button onClick={props.handleStartGame} className="startButton">
          Start Game
        </button>
      </div>
    </div>
  );
};

export default StartPage;
