import { data } from "jquery";
import React from "react";

export const Pages = ({ pokemonData, setPageURL }) => {
  const handleNext = (e) => {
    e.preventDefault();
    setPageURL(pokemonData.next);
  };
  const handlePrev = (e) => {
    e.preventDefault();
    setPageURL(pokemonData.previous);
  };
  return (
    <div>
      <button
        disabled={pokemonData.previous === null}
        onClick={handlePrev}
        className="btn btn-primary m-2"
      >
        Prev
      </button>
      <button
        disabled={pokemonData.next === null}
        onClick={handleNext}
        className="btn btn-primary m-2"
      >
        Next
      </button>
    </div>
  );
};
