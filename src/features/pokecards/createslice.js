import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allPokemon: [],
    page: "https://pokeapi.co/api/v2/pokemon"

}

const pokeSlice = createSlice({
    name: "allPokemon",
    initialState,
    reducers: {
        addPokemon: (state, {payload}) => {
            state.allPokemon += payload
        },
        forpage: (state) => {
            state.page = state
        }
    }
})

export const { addPokemon, forpage } = pokeSlice.actions;
export const getAllpokemon = (state) => state.allPokemon.allPokemon
export default pokeSlice.reducer;