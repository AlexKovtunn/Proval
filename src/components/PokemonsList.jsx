import React from 'react';

const PokemonsList = ({ pokemonsList, fetchAboutPokemon }) => {
  return (
    <ul className="pokemons__list">
      {pokemonsList.map((item, index) => (
        <li className="pokemons__item" key={index} onClick={() => fetchAboutPokemon(index + 1)}>
          <span>{item.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default PokemonsList;
