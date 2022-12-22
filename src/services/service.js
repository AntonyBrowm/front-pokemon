import axios from "axios";

export const getAllPokemon=async(url)=>{
       const result=await axios.get(url)
       return result;
}
export const getPokedex=async(url)=>{
  const result=await axios.get(url)
  return result;
}

export const getPokemonById=async(url)=>{
  const result=await axios.get(url)
  return result;
}