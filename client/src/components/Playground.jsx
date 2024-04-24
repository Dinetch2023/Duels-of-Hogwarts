import { useState } from "react";
import ButtonSpells from "./ButtonSpells";
import CharacterCard from "./CharacterCard";
import field1 from "../assets/images/laboratory.webp";

function Playground() {
  const [show, setShow] = useState(true);
  const [round, setRound] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const handleModal = () => {
    setShow(!show);
  };

  const handleNextRound = () => {
    if (round < 3) {
      setRound(round + 1); // passe au round suivant
    } else {
      setRound(1);
      setGameOver(true);
      setShow(!show);
    }
  };

  return (
    <section className="py-4 sm:w-80 w-full mx-auto flex flex-col items-center">
      <h2 className="title-sections">... And cast your spells !</h2>
      <article className="containerPlayground">
        <div
          className="playground"
          style={{
            background: `url('${field1}')`,
            backgroundPosition: "center",
            backgroundRepeat: "noRepeat",
            backgroundSize: "cover",
          }}
        >
          <div className="playgroundBackground">
            <section className="playgroundContent">
              <h3 className="titleRound">Round {round}</h3>
              <article className="layoutPlayers">
                <div className="player">
                  <p className="btn-third">Protego</p>
                  <CharacterCard />
                </div>
                <div className="player">
                  <CharacterCard />
                  <p className="btn-third">Protego</p>
                </div>
                <div className="nextButton">
                  <button
                    type="button"
                    className="btn-primary"
                    onClick={handleNextRound}
                  >
                    Next
                  </button>
                </div>
              </article>
              <article className="spellsSelection">
                <ButtonSpells />
              </article>
            </section>
          </div>
          {show && (
            <div className="modal">
              <div className="modalText">
                <h3 className="title-playground">
                  {gameOver ? "Game Over" : "Here’s your battle ground !"}
                </h3>
                <button
                  type="button"
                  className="btn-third"
                  onClick={handleModal}
                >
                  {gameOver ? "Play Again" : "Play"}
                </button>
              </div>
            </div>
          )}
        </div>
      </article>
    </section>
  );
}

export default Playground;
