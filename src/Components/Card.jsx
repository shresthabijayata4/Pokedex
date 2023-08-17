import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { BsStar } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ pokemon, loading, infoPokemon, pokemonList }) => {
  // console.log(pokemon);
  const [favourite, setFavourite] = useState(false);
  const [selectedId, setSelectedId] = useState([]);

  return (
    <>
      <div className="container">
        <div className="row">
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            pokemon.map((item) => {
              return (
                <>
                  <div className="col-md-3">
                    <div className=" card w-[auto] m-4" key={item.id}>
                      <div className="d-flex justify-end pr-3 pt-2 text-xl">
                        {!selectedId.filter((itemId) => itemId === item.id)
                          .length > 0 ? (
                          <BsStar
                            onClick={() => {
                              // setFavourite(true);
                              selectedId.push(item.id);

                              pokemonList.dispatch(
                                pokemonList.addPoke({
                                  image: item.sprites.front_default,
                                  name: item.name,
                                  id: item.id,
                                })
                              );
                            }}
                          />
                        ) : (
                          <FaStar
                            onClick={() => {
                              // setFavourite(false);
                              setSelectedId((prevstate) =>
                                prevstate.filter((itemId) => itemId != item.id)
                              );
                            }}
                            className="text-yellow-500"
                          />
                        )}

                        {/* {pokemonList.poke.map((pokemonInList) => {
                          
                            return (
                              <>
                                {pokemonInList.id == item.id ||
                                pokemonInList.length == 0 ? (
                                  <>
                                    <FaStar />
                                  </>
                                ) }
                              </>
                            );
                          })} */}
                      </div>

                      {/* <AiOutlineStar /> */}

                      <img
                        src={item.sprites.front_default}
                        alt=""
                        className="h-auto w-[150px] content-center"
                        onClick={() => infoPokemon(item)}
                      />

                      <h3 className="text-center font-bold	">{item.name}</h3>
                    </div>
                  </div>
                </>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};
export default Card;
