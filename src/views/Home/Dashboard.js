import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import {PokemonCard} from "../../components/PokemonCard/component";
import {ChosenPokemon} from "../../components/chosenPokemon/component";
import { getAllPokemon,getPokedex} from "../../services/service";

function Dashboard() {
    const [pokeData,setPokeData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/")
    const [nextUrl,setNextUrl]=useState();
    const [prevUrl,setPrevUrl]=useState();
    const [pokeDex,setPokeDex]=useState();

    useEffect(()=>{
        pokeFun();
    },[url])

    const pokeFun=async()=>{
      setLoading(true)
      const res=await getAllPokemon(url);
      setNextUrl(res.data.next);
      setPrevUrl(res.data.previous);
      getPokemonInfoPokedex(res.data.results);
      setLoading(false);
  }

  const getPokemonInfoPokedex=async(res)=>{
    res.map(async(item)=>{
       const result=await getPokedex(item.url)
       setPokeData(state=>{
           state=[...state,result.data]
           state.sort((a,b)=>a.id>b.id?1:-1)
           return state;
       })
    })   
 }

  return (
    <div className="dashboard">
    <div className="grid">
         {
            loading ? <h1>Loading...</h1> :
            pokeData.slice(0, 12).map((item,index) => {
                    return (
                            <div key={index} className="grid-elements">
                            <PokemonCard key={`PokemonCard-${index}`} pokemon={pokeData} loading={loading} name={item.name} img={item.sprites.front_default} types={item.types} infoPokemon={poke=>setPokeDex(poke)} />
                            </div>
                    )
                })
          }
            <div className="btn-group">
                        {  prevUrl && <button onClick={()=>{
                            setPokeData([])
                           setUrl(prevUrl) 
                        }}>Previous</button>}

                        { nextUrl && <button onClick={()=>{
                            setPokeData([])
                            setUrl(nextUrl)
                        }}>Next</button>}

                    </div>
    </div>
    <div className="gridF">

                            <div key="s" className="grid-elements-table">
                            <ChosenPokemon/>
                            </div>
              

    </div>
    </div>
  );
}

export default Dashboard;