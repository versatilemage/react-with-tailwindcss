import { configureStore } from "@reduxjs/toolkit";
import { addPokemon } from "./pokecards/createslice";

export const store = configureStore({
    reducer:addPokemon
})