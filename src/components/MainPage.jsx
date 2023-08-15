import React, { useEffect, useState } from "react";
import Tile from "./Tile";
import Results from "./Results";
import Highscore from "./Highscore";
import HighscoreForm from "./HighscoreForm";

const MainPage = () => {
  // Keep track of if the tile clicked is the first one or second one (only two can be selected at a time)
  const [numOfTilesCurFlipped, setNumOfTilesCurFlipped] = useState(0);

  // Keep track of all of the already matched tiles in a list
  const [listOfMatchedTiles, setListOfMatchedTiles] = useState([]);

  // Variable to hold the number of tile pairs there are
  const [TotalNumOfTilePairs, setTotalNumTilesPairs] = useState(0);

  const [showNameForm, setShowNameForm] = useState(false);

  const [showHighscores, setShowHighscores] = useState(false);

  // Keep track of exactly which tiles are flipped over to then compare the two variables and see if the IDs match up!
  const [uniqueIdOfFirstTileFlipped, setUniqueIdOfFirstTileFlipped] =
    useState();
  const [uniqueIdOfSecondTileFlipped, setUniqueIdOfSecondTileFlipped] =
    useState();
  const [mostRecentlyMatched1, setMostRecentlyMatched1] = useState();
  const [mostRecentlyMatched2, setMostRecentlyMatched2] = useState();

  const [isGameCompleted, setIsGameCompleted] = useState(false);
  const [isHelpVisible, setIsHelpVisible] = useState(false);
  const [tilesData, setTilesData] = useState([
    {
      uniqueID: 1,
      id: 1,
      image:
        "https://th.bing.com/th/id/OIP.qx1MgzL0tr_7HR_A3zIS2QHaHb?pid=ImgDet&rs=1",
      isFlipped: false,
      isMatched: false,
    },
    {
      uniqueID: -1,
      id: 2,
      image:
        "https://th.bing.com/th/id/OIP.qx1MgzL0tr_7HR_A3zIS2QHaHb?pid=ImgDet&rs=1",
      isFlipped: false,
      isMatched: false,
    },
    {
      uniqueID: 2,
      id: 3,
      image:
        "https://i.pinimg.com/originals/64/7a/23/647a2321f960b243ea117232dbf39475.jpg",
      isFlipped: false,
      isMatched: false,
    },
    {
      uniqueID: -2,
      id: 4,
      image:
        "https://i.pinimg.com/originals/64/7a/23/647a2321f960b243ea117232dbf39475.jpg",
      isFlipped: false,
      isMatched: false,
    },
    {
      uniqueID: 3,
      id: 5,
      image: "https://wallpapercave.com/wp/wp5581518.jpg",
      isFlipped: false,
      isMatched: false,
    },
    {
      uniqueID: -3,
      id: 6,
      image: "https://wallpapercave.com/wp/wp5581518.jpg",
      isFlipped: false,
      isMatched: false,
    },
    {
      uniqueID: 4,
      id: 7,
      image:
        "https://th.bing.com/th/id/R.087b34a335a7c2cf56162552b6656005?rik=%2fj8sBbFWKHxHFA&riu=http%3a%2f%2fwww.carsbase.com%2fphoto%2fAcura-NSX_mp103_pic_19922.jpg&ehk=dum6ccTIfCfOToUgikqgrpcC0SI4qciCFky9ZTgXxbk%3d&risl=&pid=ImgRaw&r=0",
      isFlipped: false,
      isMatched: false,
    },
    {
      uniqueID: -4,
      id: 8,
      image:
        "https://th.bing.com/th/id/R.087b34a335a7c2cf56162552b6656005?rik=%2fj8sBbFWKHxHFA&riu=http%3a%2f%2fwww.carsbase.com%2fphoto%2fAcura-NSX_mp103_pic_19922.jpg&ehk=dum6ccTIfCfOToUgikqgrpcC0SI4qciCFky9ZTgXxbk%3d&risl=&pid=ImgRaw&r=0",
      isFlipped: false,
      isMatched: false,
    },
    {
      uniqueID: 5,
      id: 9,
      image:
        "https://th.bing.com/th/id/OIP.EsYbiCrNb57zGsMFPJ9magHaE6?pid=ImgDet&rs=1",
      isFlipped: false,
      isMatched: false,
    },
    {
      uniqueID: -5,
      id: 10,
      image:
        "https://th.bing.com/th/id/OIP.EsYbiCrNb57zGsMFPJ9magHaE6?pid=ImgDet&rs=1",
      isFlipped: false,
      isMatched: false,
    },
    {
      uniqueID: 6,
      id: 11,
      image: "https://igtcars.com/wp-content/uploads/2020/11/Mazda-RX7.jpg",
      isFlipped: false,
      isMatched: false,
    },
    {
      uniqueID: -6,
      id: 12,
      image: "https://igtcars.com/wp-content/uploads/2020/11/Mazda-RX7.jpg",
      isFlipped: false,
      isMatched: false,
    },
    {
      uniqueID: 7,
      id: 13,
      image: "https://i.redd.it/g8tp4djm48a61.jpg",
      isFlipped: false,
      isMatched: false,
    },
    {
      uniqueID: -7,
      id: 14,
      image: "https://i.redd.it/g8tp4djm48a61.jpg",
      isFlipped: false,
      isMatched: false,
    },
    {
      uniqueID: 8,
      id: 15,
      image:
        "https://s1.cdn.autoevolution.com/images/news/gallery/the-mclaren-senna-is-sensational-but-novitec-made-it-even-better_4.jpg",
      isFlipped: false,
      isMatched: false,
    },
    {
      uniqueID: -8,
      id: 16,
      image:
        "https://s1.cdn.autoevolution.com/images/news/gallery/the-mclaren-senna-is-sensational-but-novitec-made-it-even-better_4.jpg",
      isFlipped: false,
      isMatched: false,
    },
    {
      uniqueID: 9,
      id: 17,
      image: "https://images7.alphacoders.com/100/1004186.jpg",
      isFlipped: false,
      isMatched: false,
    },
    {
      uniqueID: -9,
      id: 18,
      image: "https://images7.alphacoders.com/100/1004186.jpg",
      isFlipped: false,
      isMatched: false,
    },
    {
      uniqueID: 10,
      id: 19,
      image:
        "https://i.pinimg.com/originals/f9/b5/45/f9b5458aad793eb495137e1f23c41ae8.jpg",
      isFlipped: false,
      isMatched: false,
    },
    {
      uniqueID: -10,
      id: 20,
      image:
        "https://i.pinimg.com/originals/f9/b5/45/f9b5458aad793eb495137e1f23c41ae8.jpg",
      isFlipped: false,
      isMatched: false,
    },
  ]);

  // Shuffle the tilesData array randomly
  useEffect(() => {
    setListOfMatchedTiles([]);
    setTotalNumTilesPairs(Math.floor(tilesData.length / 2));
    const shuffledTilesData = [...tilesData].sort(() => Math.random() - 0.5);
    setTilesData(shuffledTilesData);
  }, []);

  const [numOfTries, setNumOfTries] = useState(0);

  useEffect(() => {
    if (
      listOfMatchedTiles.length / 2 === TotalNumOfTilePairs &&
      listOfMatchedTiles.length === tilesData.length
    ) {
      console.log("All tiles matched!");
      setIsGameCompleted(true);
      if (window.confirm("Would you like to save your score?")) {
        setShowNameForm(true);
      }
    }
  }, [listOfMatchedTiles, TotalNumOfTilePairs]);

  const handleShowHelp = () => {
    setIsHelpVisible(!isHelpVisible);
  };

  const handleRestartGame = () => {
    const shuffledTilesData = [...tilesData].sort(() => Math.random() - 0.5);
    setTilesData(shuffledTilesData);
    setTilesData((prevTilesData) =>
      prevTilesData.map((tileData) => ({
        ...tileData,
        isFlipped: false,
        isMatched: false,
      }))
    );
    setNumOfTilesCurFlipped(0);
    setUniqueIdOfFirstTileFlipped(undefined);
    setUniqueIdOfSecondTileFlipped(undefined);
    setMostRecentlyMatched1(undefined);
    setMostRecentlyMatched2(undefined);
    setListOfMatchedTiles([]);
    setTotalNumTilesPairs(Math.floor(tilesData.length / 2));
    setNumOfTries(0);
    setIsGameCompleted(true);
  };

  const handleTileClick = (id, uniqueID) => {
    if (numOfTilesCurFlipped === 0) {
      if (listOfMatchedTiles.includes(uniqueID)) {
        console.log("Already matched");
        return;
      } else {
        setTilesData((prevTilesData) =>
          prevTilesData.map((tileData) =>
            tileData.uniqueID === uniqueIdOfFirstTileFlipped ||
            tileData.uniqueID === uniqueIdOfSecondTileFlipped
              ? { ...tileData, isFlipped: false }
              : tileData
          )
        );
        setTilesData((prevTilesData) =>
          prevTilesData.map((tileData) =>
            tileData.uniqueID === uniqueID
              ? { ...tileData, isFlipped: true }
              : tileData
          )
        );
        // Make sure the tiles which are matched stay flipped over
        setTilesData((prevTilesData) =>
          prevTilesData.map((tileData) =>
            tileData.uniqueID === mostRecentlyMatched1 ||
            tileData.uniqueID === mostRecentlyMatched2
              ? { ...tileData, isFlipped: true }
              : tileData
          )
        );
        setUniqueIdOfFirstTileFlipped(uniqueID);
        setNumOfTilesCurFlipped(1);
      }
    } else if (numOfTilesCurFlipped === 1) {
      setTilesData((prevTilesData) =>
        prevTilesData.map((tileData) =>
          tileData.uniqueID === uniqueID
            ? { ...tileData, isFlipped: true }
            : tileData
        )
      );
      setUniqueIdOfSecondTileFlipped(uniqueID);
      setNumOfTilesCurFlipped(0);
      setNumOfTries((prevNumOfTries) => prevNumOfTries + 1);

      const firstTileFlipped = uniqueIdOfFirstTileFlipped;
      const secondTileFlipped = uniqueID;

      if (firstTileFlipped * -1 === secondTileFlipped) {
        setTilesData((prevTilesData) =>
          prevTilesData.map((tileData) =>
            tileData.uniqueID === firstTileFlipped ||
            tileData.uniqueID === secondTileFlipped
              ? { ...tileData, isMatched: true, isFlipped: true }
              : tileData
          )
        );
        setMostRecentlyMatched1(firstTileFlipped);
        setMostRecentlyMatched2(secondTileFlipped);
        setListOfMatchedTiles((prevList) => [
          ...prevList,
          secondTileFlipped,
          firstTileFlipped,
        ]);
      }
    }
  };

  const handleShowHighscoresPage = () => {
    setShowHighscores(!showHighscores);
  };

  return (
    <div className="mainContainer">
      <center>
        <div className="secondaryContainer">
          <button onClick={handleRestartGame} className="restartBtn">
            Reset
          </button>
          <button
            onClick={handleShowHelp}
            className={`${isHelpVisible ? "helpBtnOn" : "helpBtn"}`}
          >
            ?
          </button>
          {isHelpVisible ? (
            <header className="mainHeader">
              Pair up all matching tiles in the lowest amount of tries and as
              quickly as possible to gain a <u>higher score!</u>
            </header>
          ) : (
            <div className="title"> Match Mania </div>
          )}
          <button
            onClick={handleShowHighscoresPage}
            className="showHighscoresBtn"
          >
            <u>HIGHSCORES</u>
          </button>
          <main>
            {showHighscores && <Highscore />}
            {isGameCompleted ? (
              <>
                <Results numOfTries={numOfTries} tilesData={tilesData} />
                {showNameForm && <HighscoreForm numOfTries={numOfTries} />}
              </>
            ) : (
              tilesData.map((tileData) => (
                <Tile
                  key={tileData.id}
                  id={tileData.id}
                  image={tileData.image}
                  uniqueID={tileData.uniqueID}
                  handleTileClick={handleTileClick}
                  isFlipped={tileData.isFlipped}
                  isMatched={tileData.isMatched}
                />
              ))
            )}
          </main>
        </div>
      </center>
    </div>
  );
};

export default MainPage;
