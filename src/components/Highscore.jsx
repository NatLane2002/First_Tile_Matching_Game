import React, { useState, useEffect } from "react";
import axios from "axios";

const Highscore = () => {
  const [highscores, setHighscores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch the highscores from the JSON server
    const fetchHighscores = async () => {
      try {
        const response = await axios.get("http://localhost:8000/highscores");
        const data = response.data;
        console.log("Fetched data:", data); // Debug: Check if data is fetched correctly
        setHighscores(data);
      } catch (error) {
        setError("Error while fetching highscores.");
      } finally {
        setLoading(false);
      }
    };

    // Fetch the highscores when the component mounts
    fetchHighscores();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log("highscores:", highscores); // Debug: Check the value of highscores

  if (!Array.isArray(highscores)) {
    return <div>No highscores available.</div>;
  }

  return (
    <>
      <div className="mainHighscoreContainer">
        <header><u><b>Highscores</b></u></header>
        <ul>
          {/* Use the map function to render the highscores */}
          {highscores.map((score) => (
            <>
              <p className="score" key={score.id}>{`${score.name} - ${score.numOfTries}`}</p>
            </>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Highscore;
