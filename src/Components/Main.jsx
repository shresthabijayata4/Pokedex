import React from "react";
import Card from "./Card";
import Pokeinfo from "./Pokeinfo";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useEffectOnce } from "../Utils/useEffectOnce";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import logo_poke from "../images/pokedex.png";
import MyList from "./MyList";
import { addPoke, removePoke } from "./pokeSlice";
const Main = () => {
  const poke = useSelector((state) => state.pokemon);
  console.log("poke", poke);
  const dispatch = useDispatch();
  const pokemonList = {
    poke: poke,
    dispatch: dispatch,
    addPoke: addPoke,
    removePoke: removePoke,
  };
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  // const [getpok, getPokemon] = useState();

  const [pokeDex, setPokeDex] = useState();
  const [show, setShow] = useState(false);
  // const [showList, setListShow] = useState(false);

  const [listShow, setListShow] = useState(false);

  // const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(!show);
  };
  const handleListShow = () => {
    setListShow(!listShow);
  };
  useEffect(() => {
    console.log("url", url);
    if (url) {
      pokeFun(url);
    }
  }, [url]);
  const pokeFun = async (apiUrl) => {
    setLoading(true);
    await axios.get(apiUrl).then((res) => {
      setNextUrl(res.data.next);
      setPrevUrl(res.data.previous);
      getPokemon(res.data.results);
      setLoading(false);
    });

    // getPokemon(res.data.results);
  };
  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      setPokeData((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };

  // const showList = () => {
  //   handleListShow();
  // };
  const showPokenInfo = (pokeInfo) => {
    setPokeDex(pokeInfo);
    handleShow();
  };
  const showPokenListInfo = () => {
    // setPokeDex(pokeInfo);
    // handleShow()
    handleListShow();
  };

  return (
    <>
      <div className="bg-indigo-500">
        <div className="container">
          <div className="row p-10">
            <div className="col d-flex justify-center">
              <img src={logo_poke} />
            </div>
          </div>
          <div className="row">
            <Button
              className="btn btn-warning"
              onClick={() => {
                showPokenListInfo();
              }}
            >
              My List
            </Button>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="btn-group">
                {prevUrl && (
                  // <button type="button" class="btn btn-primary">Primary</button>
                  <Button
                    className="btn btn-success m-1"
                    onClick={() => {
                      setPokeData([]);
                      setUrl(prevUrl);
                    }}
                  >
                    Previous
                  </Button>
                )}

                {nextUrl && (
                  <Button
                    className="btn btn-success m-1"
                    onClick={() => {
                      setPokeData([]);
                      setUrl(nextUrl);
                    }}
                  >
                    Next
                  </Button>
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="left-content">
                <Card
                  pokemon={pokeData}
                  loading={loading}
                  infoPokemon={(poke) => showPokenInfo(poke)}
                  pokemonList={pokemonList}
                  
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {show && (
        <Pokeinfo data={pokeDex} openModal={show} toggleModal={handleShow} />
      )}
      {listShow && (
        <MyList openModal={listShow} toggleModal={handleListShow} poke={poke} />
      )}
    </>
  );
};
export default Main;
