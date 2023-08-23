import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Pokemons from './components/Pokemons';

function App() {
  const [pokemonsList, setPokemonsList] = useState([]);
  const [aboutPokemon, setAboutPokemon] = useState({
    name: '',
    img: '',
    count: '',
    id: '',
    height: '',
    attack: '',
  });

  const fetchPokemons = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
      setPokemonsList(response.data.results.slice(0, 10));
    } catch (error) {
      console.error('Ошибка при загрузке списка покемонов', error);
    }
  };

  const fetchAboutPokemon = async (index = 1) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${index}`);
      setAboutPokemon({
        name: response.data.name,
        img: response.data.sprites.front_shiny,
        count: response.data.base_experience,
        id: response.data.id,
        height: response.data.height,
        attack: response.data.stats[1].base_stat,
      });
    } catch (error) {
      console.error('Ошибка при загрузке данных о покемоне', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchPokemons();
        await fetchAboutPokemon();
      } catch (error) {
        console.error('Произошла ошибка при загрузке данных:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <Pokemons
        fetchAboutPokemon={fetchAboutPokemon}
        aboutPokemon={aboutPokemon}
        pokemonsList={pokemonsList}
      />
    </div>
  );
}

export default App;
