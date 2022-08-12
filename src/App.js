import React from "react";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./components/login/login";
import Signup from './components/signup/signup';
import Home from "./components/home/home";
import Userprofile from "./components/userprofile/userprofile";
import axios from "axios";
// import { forpage } from "./features/pokecards/createslice";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { addPokemon } from "./features/pokecards/createslice";
// import pagenotfound from "./components/pagenotfound/pagenotfound"
// import { addPokemon } from "./features/createslice";

function App() {
  // const pokepage = useSelector(state => state.forpage)
  const [pokemon, setpokemon] = useState([])
  // const [currentpage, setcurrentpage] = useState(pokepage)
  const [currentpage, setcurrentpage] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextpage, setnextpage] = useState()
  const [beforepage, setbeforepage] = useState()
  const [pokestats, setpokestats] = useState()

  // const dispatch = useDispatch()
  useEffect(() => {
    axios.get(currentpage).then(res => {
      setnextpage(res.data.next)
      setbeforepage(res.data.previous)
      setpokemon(res.data.results)
      function createpokestats(result){
        result((poke) => {
          const data = axios.get(`https://pokeapi.co/api/v2/pokemon/${poke.name}`)
          setpokestats(current => [...current, data])
        })
      }
      createpokestats(res.data.results)
      console.log(pokestats,"pokestat")
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

  // console.log(pokestats)

  return (
    <>

      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="signup/" element={<Signup />} />
        <Route path="Home/" element={<Home pokemon={pokemon} previous={previouspageurl} nextpage={nextpageurl} page={currentpage}/>} />
        <Route path="Home/userprofile/" element={<Userprofile/>}/>
        {/* <Route element={<pagenotfound />}/> */}
      </Routes>

    </>
  );
}

export default App;
