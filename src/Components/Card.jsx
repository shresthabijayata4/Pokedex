import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { BsStar } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Card = ({ pokemon, loading, infoPokemon }) => {
  // console.log(pokemon);
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
                    <div
                      className=" card w-[auto] m-4"
                      key={item.id}
                      onClick={() => infoPokemon(item)}
                    >
                      <div className="d-flex justify-end pr-3 pt-2 text-xl">
                        <BsStar />
                      </div>

                      {/* <AiOutlineStar /> */}

                      <img
                        src={item.sprites.front_default}
                        alt=""
                        className="h-auto w-[150px] content-center"
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
