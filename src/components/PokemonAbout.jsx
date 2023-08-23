import React from 'react';

const PokemonAbout = ({ aboutPokemon }) => {
  return (
    <div className="pokemons__about pokemon">
      <h1 className="pokemon__name">
        {aboutPokemon.name.charAt(0).toUpperCase() + aboutPokemon.name.slice(1)}
      </h1>

      <div className="pokemon__img" style={{ backgroundImage: `url(${aboutPokemon.img})` }}></div>

      <ul className="pokemon__list">
        <li className="pokemon__item">
          <span>Снялся в {aboutPokemon.count} сериях</span>
        </li>
        <li className="pokemon__item">
          <span>Id: {aboutPokemon.id}</span>
        </li>

        <li className="pokemon__item">
          <span>height: {aboutPokemon.height}</span>
        </li>

        <li className="pokemon__item">
          <span>attack: {aboutPokemon.attack}</span>
        </li>
      </ul>
    </div>
  );
};

export default PokemonAbout;
