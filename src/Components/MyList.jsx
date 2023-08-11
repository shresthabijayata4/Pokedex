import React, { useEffect } from "react";

import { Button, Modal } from "react-bootstrap";

function MyList({ openModal, toggleModal }) {
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
            test122
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="content-center">tesndb</Modal.Body>
    </Modal>
  );
}

export default MyList;
