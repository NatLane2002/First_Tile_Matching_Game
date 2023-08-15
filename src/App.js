import "./App.css";
import { useState, useEffect } from "react";
import StartPage from "./components/StartPage";
import MainPage from "./components/MainPage";

function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);

  useEffect(() => {
    // Set isGameStarted to false when the component mounts
    setIsGameStarted(false);
  }, []);

  const handleStartGame = () => {
    setIsGameStarted(true)
  }

  return (
    <>
      <div className="App">
        <header>
          
        </header>
        <main>
        {!isGameStarted ? 
          <StartPage handleStartGame={handleStartGame}/> : <MainPage /> }
        </main>
      </div>
    </>
  );
}

export default App;
