// import "./App.css";
import { useState, useEffect } from "react";
import PokemonList from "./PokemonList";
import Pagination from "./Pagination";

import axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState([]);

  // const [getpokemon, getPokemon] = useState([]);

  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  const getInfo =(pokemonName) =>{
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response) =>{

    })
  }

  const pokeFun = async () => {
    setLoading(true);
    await axios.get(currentPageUrl).then((res) => {
      setNextPageUrl(res.data.next);
      setPrevPageUrl(res.data.previous);
      setPokemon(res.data.results);
      setLoading(false);
      console.log("p", res.data);
    });
  };

  useEffect(() => {
    pokeFun();
    // return () => cancel();
  }, [currentPageUrl]);

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }
  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl);
  }
  if (loading) {
    return "Loading ......";
  }
  // if (loading) return;
  // ("Loading....");

  return (
    <>
      <PokemonList pokemon={pokemon} />
      <Pagination
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
      />
    </>
  );
}

export default App;
