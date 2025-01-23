import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "../Styles/Hobbys.css";
import vbimage from "../Assets/img/sporticon.png";
import tripimage from "../Assets/img/tripicon.png";
import gamesimage from "../Assets/img/gamesicon.png";
import devimage from "../Assets/img/devgames.png";

const hobbiesData = [
  { id: 1, title: "Sport", image: vbimage, description: "J'adore le volley" },
  { id: 2, title: "Voyage", image: tripimage, description: "J'adore voyager" },
  { id: 3, title: "Jeux vidéos", image: gamesimage, description: "J'adore les jeux vidéos" },
  { id: 4, title: "Développement jeux vidéos", image: devimage, description: "J'aime créer et développer des jeux vidéos" },
];

function Hobbys() {
  const [flippedStates, setFlippedStates] = useState({});

  function flipCard(id) {
    setFlippedStates((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <div className="mcv-hobbys">
      <div className="mcv-hobbytitle">
        <h2>Mes centres d'intérêts</h2>
      </div>
      <div className="mcv-hobbyscards">
        {hobbiesData.map((hobby) => (
          <ReactCardFlip key={hobby.id} flipDirection="vertical" isFlipped={flippedStates[hobby.id] || false}>
            <div className="card" onClick={() => flipCard(hobby.id)}>
              <img src={hobby.image} alt={hobby.title} className="volleyballicon" />
              <h2>{hobby.title}</h2>
            </div>
            <div className="card card-back" onClick={() => flipCard(hobby.id)}>
              <p>{hobby.description}</p>
            </div>
          </ReactCardFlip>
        ))}
      </div>
    </div>
  );
}

export default Hobbys;