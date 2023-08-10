import React from "react";
import { Button, Modal } from "react-bootstrap";
// import Modal from "react-bootstrap/Modal";

const Pokeinfo = ({ data, openModal, toggleModal }) => {
  return (
    <Modal show={openModal} onHide={toggleModal}>
      <Modal.Header closeButton>
        <Modal.Title>{data.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={toggleModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>

    // <>
    //   {!data ? (
    //     ""
    //   ) : (
    //     <>
    //       <h1>{data.name}</h1>
    //       <img
    //         src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
    //         alt=""
    //       />
    //       <div className="abilities">
    //         {data.abilities.map((poke) => {
    //           return (
    //             <>
    //               <div className="group">
    //                 <h2>{poke.ability.name}</h2>
    //               </div>
    //             </>
    //           );
    //         })}
    //       </div>
    //       <div className="base-stat">
    //         {data.stats.map((poke) => {
    //           return (
    //             <>
    //               <h3>
    //                 {poke.stat.name}:{poke.base_stat}
    //               </h3>
    //             </>
    //           );
    //         })}
    //       </div>
    //     </>
    //   )}
    // </>
  );
};
export default Pokeinfo;
