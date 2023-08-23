import React from 'react';
import PokemonsList from './PokemonsList';
import PokemonAbout from './PokemonAbout';

const Pokemons = ({ pokemonsList, fetchAboutPokemon, aboutPokemon }) => {
  return (
    <section className="pokemons">
      <div className="container">
        <div className="pokemons__flex">
          <PokemonsList pokemonsList={pokemonsList} fetchAboutPokemon={fetchAboutPokemon} />

          <PokemonAbout aboutPokemon={aboutPokemon} />
        </div>
      </div>
    </section>
  );
};

export default Pokemons;
