import React, { useState } from "react";

function HogCard({ hog, onHide }) {
  const [showDetails, setShowDetails] = useState(false);

  function handleCardClick() {
    setShowDetails((prev) => !prev);
  }

  function handleHideClick(e) {
    e.stopPropagation(); // don't trigger the card's click toggle
    onHide(hog.name);
  }

  return (
    <div
      className="ui eight wide column card"
      aria-label="hog card"
      onClick={handleCardClick}
    >
      <img src={hog.image} alt={`Photo of ${hog.name}`} />
      <div className="content">
        <h3>{hog.name}</h3>

        {showDetails && (
          <div className="description">
            <p>Specialty: {hog.specialty}</p>
            <p>{hog.weight}</p>
            <p>{hog.greased ? "Greased" : "Nongreased"}</p>
            <p>{hog["highest medal achieved"]}</p>
          </div>
        )}
      </div>
      <div className="extra content">
        <button onClick={handleHideClick}>Hide Me</button>
      </div>
    </div>
  );
}

export default HogCard;
