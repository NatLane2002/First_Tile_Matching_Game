import React, { useState } from "react";

const HighscoreForm = ({ numOfTries }) => {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create the object to be posted to the JSON server
    const newHighscore = {
      name,
      numOfTries: numOfTries - 10, // Subtract 10 from numOfTries
    };

    try {
      // Send a POST request to your JSON server using await
      const response = await fetch("http://localhost:8000/highscores", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newHighscore),
      });

      // Handle the response from the server if needed
      if (response.ok) {
        console.log("Highscore added successfully!");
        // You can perform further actions here if the POST request is successful
      } else {
        console.error("Failed to add highscore.");
      }
    } catch (error) {
      console.error("Error while adding highscore:", error);
    }

    // Clear the name field after submission
    setName("");
  };

  return (
    <div className="highscoreFormPage">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default HighscoreForm;
