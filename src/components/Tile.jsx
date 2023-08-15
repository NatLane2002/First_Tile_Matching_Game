const Tile = ({
  uniqueID,
  id,
  image,
  isFlipped,
  isMatched,
  handleTileClick,
}) => {
  const classNames = `tile ${isFlipped ? "isFlipped" : ""} ${
    isMatched ? "isMatched" : ""
  }`;

  return (
    <button
      id={id}
      className={classNames}
      onClick={() => handleTileClick(id, uniqueID)}
    >
      <div className="text">
        {isFlipped ? (
          <img src={image} alt="Tile" />
        ) : (
          ""
        )}
      </div>
    </button>
  );
};

export default Tile;
