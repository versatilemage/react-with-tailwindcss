import React from "react";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./components/login/login";
import Signup from './components/signup/signup';
import Home from "./components/home/home";
import Userprofile from "./components/userprofile/userprofile";
import axios from "axios";
// import { useSelector, useDispatch } from "react-redux";
// import { getPokemonDetails } from "./features/pokecards/createslice";
// import {pagenotfound} from "./components/pagenotfound/pagenotfound";
// import { forpage } from "./features/pokecards/createslice";
// import { addPokemon } from "./features/createslice";

function App() {
  // const pokepage = useSelector(state => state.forpage)
  const [currentpage, setcurrentpage] = useState("")
  const [nextpage, setnextpage] = useState()
  const [beforepage, setbeforepage] = useState()
  const [pokestats, setpokestats] = useState()
  const [pokemon, setpokemon] = useState([])
  // const dispatch = useDispatch()
  // const {allPokeMon} = useSelector((state) => state.pokeMonList);
  // const {loadingStatus} = useSelector((state) => state.pokeMonList);
  // const [loading, setloading] = useState(false)
  //   console.log(loading);
  //   setpokemon(allPokeMon)

  // useEffect(() => {
  //   dispatch(getPokemonDetails())
  // }, [])

  useEffect(() => {
    axios.get("/users/").then(res => {
      setnextpage(res.data.userList.next)
      setbeforepage(res.data.userList.previous)
      setpokemon(res.data.userList.results)
      function createpokestats(result) {
        result((poke) => {
          const data = axios.get(`${poke.userList}${poke.name}`)
          setpokestats(current => [...current, data])
        })
      }
      createpokestats(res.data.results)
      // console.log(pokestats,"pokestat")
      // dispatch(addPokemon(res.data))
    });
  }, [currentpage])
  console.log(pokemon)

  function nextpageurl() {
    setcurrentpage(nextpage)
  }

  function previouspageurl() {
    setcurrentpage(beforepage)
  }

  console.log(pokestats)

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Home" element={<Home pokemon={pokemon} previous={previouspageurl} nextpage={nextpageurl} page={currentpage} />} />
        <Route path="/userprofile" element={<Userprofile />} />
        {/* <Route path="" element={<pagenotfound />}/> */}
      </Routes>

    </>
  );
}

export default App;
