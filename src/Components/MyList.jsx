import React, { useEffect } from "react";

import { Button, Modal } from "react-bootstrap";

function MyList({ openModal, toggleModal, poke }) {
  console.log("poke", poke);
  // const { userInfo } = useAppSelector(({ app }) => app);
  // const { userPokemons } = useAppSelector(({ pokemon }) => pokemon);
  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(getUserPokemons());
  // }, [userInfo, dispatch]);
  return (
    // <div className="list">
    //   {userInfo ? <PokemonCardGrid pokemons={userPokemons} /> : <Login />}
    // </div>
    <Modal show={openModal} onHide={toggleModal}>
      <Modal.Header closeButton>
        <Modal.Title>
          <div className="d-flex justify-content-center">
            {/* <div>{data.name}</div> */}
            <h2>Your Lists</h2>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="content-center">
        <div className="container">
          <div className="row">
            {poke.length > 0 ? (
              poke.map((pokemon) => {
                return (
                  <div className="col-md-6 text-center">
                    <div className="card mt-2">
                      <img
                        src={pokemon.image}
                        alt=""
                        className="h-auto w-[150px] content-center"
                      />
                      <h3>{pokemon.name}</h3>
                    </div>
                  </div>
                );
              })
            ) : (
              <>
                <h4>No any list to show</h4>
              </>
            )}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={toggleModal}>
          Clear All
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyList;
