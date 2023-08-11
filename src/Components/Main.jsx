import React from "react";
import Card from "./Card";
import Pokeinfo from "./Pokeinfo";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useEffectOnce } from "../Utils/useEffectOnce";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
// import { logo_poke } from "./Images/Pokedex_logo";
const Main = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  // const [getpok, getPokemon] = useState();
  const amount = useSelector((state) => state.amount);
  const [pokeDex, setPokeDex] = useState();
  const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(!show);
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

  const showPokenInfo = (pokeInfo) => {
    setPokeDex(pokeInfo);
    handleShow();
  };

  return (
    <>
      <div className="bg-indigo-500">
        <div className="container">
          <div className="row p-10">
            <div className="col text-center">
              {/* <img src={logo_poke} /> */}
              <h2>POKEDEX</h2>
            </div>
          </div>
          <div className="row">
            <Button className="btn btn-warning">My List</Button>
          </div>
          <div className="row">
            <h1>tour balance: {amount}</h1>
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
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {show && (
        <Pokeinfo data={pokeDex} openModal={show} toggleModal={handleShow} />
      )}
    </>
  );
};
export default Main;
