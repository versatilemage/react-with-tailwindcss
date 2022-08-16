import React, { useEffect } from "react";
import {Link} from "react-router-dom"

function Home({ pokemon, previous, nextpage, page }) {

    return (
        <>
            <header className="bg-sky-900 rounded-br-3xl">
                <nav className="p-6 mx-auto container relative">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold uppercase">Poke-Catch</h1>
                        </div>

                        <div className="hidden md:flex space-x-8">

                            <Link to="/userprofile" className="text-2xl font-medium text-white rounded-3xl px-6 pt-2 p-3 hover:bg-red-500 hover:text-black">
                                user profile
                            </Link>

                        </div>
                    </div>
                </nav>
            </header>

            <div className="flex items-center justify-evenly my-6">
                {previous && <button className="text-lg uppercase font-bold bg-red-600 px-6 py-2 text-white rounded-xl border-2 border-black shadow shadow-black hover:text-black" onClick={previous}>prev</button>}
                <button className="text-lg uppercase font-bold bg-green-600 px-6 py-2 text-white rounded-xl border-2 border-black shadow shadow-black hover:text-black" onClick={nextpage}>next</button>
            </div>

            <div className="pt-8 pb-20 px-10 mx-auto mt-10 mb-10 bg-sky-900 w-11/12 shadow-2xl shadow-black grid grid-cols-4 box-border gap-4">
                {pokemon.map((i) =>
                (
                    <>
                        <div className="bg-orange-600 w-12/12 rounded-xl flex flex-col items-center justify-center gap-4 border-y-cyan-600 border-4 border-x-indigo-500 shadow shadow-cyan-400 transition ease-in-out delay-50 hover:scale-105 px-15 pb-40 hover:bg-orange-500">
                            <div className="text-white text-3xl font-bold pt-5 w-full text-center mb-5 capitalize" key={i.name}>{i.name}</div>

                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i.url.split("/").slice(-2, -1)[0]}.svg`} alt="no img found" className="w-40 h-40" />

                            <div className="text-white text-2xl text-center w-full uppercase">stats</div>
                            <p>{`${i.url}`}</p>
                        </div>
                    </>
                ))}
            </div>

        </>
    )
}

export default Home