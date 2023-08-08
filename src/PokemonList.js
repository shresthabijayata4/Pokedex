import { Axios } from "axios";
import React, { useState } from "react";
// import axios from "axios";

export default function PokemonList({ pokemon }) {
  const [getpokInfo, detPokemonInfo] = useState([]);

  return (
    <div>
      {console.log("p112", pokemon)}

      {pokemon.map((p) => (
        <div key={p}>{p.name}</div>
      ))}
    </div>
  );
}
