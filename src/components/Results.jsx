const Results = ( props ) => {
  return (
    <>
      <div className="mainResultsContainer">
        <div className="h1"><h1>Results</h1></div>
        <div className="resultsBox">
           <div className="youMadeText"> You made </div><div className="numberOfTriesText">{props.numOfTries - props.tilesData.length / 2}  </div> <div className="mistakesText">{props.numOfTries - props.tilesData.length / 2 === 1 ? "Mistake" : "Mistakes"}</div> 
        </div>
      </div>
    </>
  );
};

export default Results;
