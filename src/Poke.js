import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { Pages } from "./Pages";
export const Poke = () => {
  const [pageURL, setPageURL] = useState("https://pokeapi.co/api/v2/pokemon");
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    try {
      fetchPokemon();
    } catch (err) {
      console.log(err);
    }
  }, []);
  const fetchPokemon = async () => {
    try {
      const poke = await fetch("https://pokeapi.co/api/v2/pokemon");
      const pokeJSON = await poke.json();
      console.log(pokeJSON)
      setPokemon(pokeJSON.results);
      // return pokeJSON;
    } catch (err) {
      console.log(err);
    }
  };
  // const { isLoading, error, data } = useQuery(
  //   ["getPokemon", pageURL],
  //   () => fetchPokemon(pageURL),
  //   { keepPreviousData: true }
  // );

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }
  // if (error) {
  //   return <div>Something went wrong</div>;
  // }
  if (pokemon) {
    console.log(pokemon);
    return (
      <div className="d-flex align-items-center flex-column">
        <div className="d-flex justify-content-center w-50 flex-wrap p-5">
          {pokemon.map((poke) => (
            <p id= "poke" className="border border-dark text-center p-4" key={poke.name}>
              {poke.name}
            </p>
          ))}
        </div>
        <Pages pokemonData={pokemon} setPageURL={setPageURL} />
      </div>
    );
  }
};
