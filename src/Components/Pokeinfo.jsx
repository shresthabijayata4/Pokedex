import React from "react";
import { Button, Modal } from "react-bootstrap";
// import Modal from "react-bootstrap/Modal";

const Pokeinfo = ({ data, openModal, toggleModal }) => {
  console.log(openModal, toggleModal);

  return (
    <Modal show={openModal} onHide={toggleModal}>
      <Modal.Header closeButton>
        <Modal.Title>
          <div className="d-flex justify-content-center">
            <div>{data.name}</div>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="content-center">
        {!data ? (
          ""
        ) : (
          <>
            <div className="d-flex justify-content-center ">
              <div className="group ">
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
                  alt=""
                  className="h-auto w-[200px]"
                />
              </div>
              <div>
                <div className="abilities">
                  {data.abilities.map((poke) => {
                    return (
                      <>
                        <div className="d-flex justify-center ">
                          <div className="bg-indigo-700 text-white p-2 mt-2">
                            {poke.ability.name}
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
                <div className="base-stat mt-2">
                  {data.stats.map((poke) => {
                    return (
                      <>
                        <div className="d-flex justify-content-center mt-1">
                          <b>{poke.stat.name}</b>:{poke.base_stat}
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* <h1>{data.name}</h1> */}
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={toggleModal}>
          ADD TO GROUP
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
