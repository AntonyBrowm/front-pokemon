import {PokemonInfo} from '../../components/pokemonInfo/component'
import {useParams} from 'react-router-dom'
import React, { useEffect, useState } from "react";
import { getPokemonById} from "../../services/service";
import './Pokemon.css';
const Profile = () => {
  const {name} = useParams();
  const [url,setUrl]=useState(`https://pokeapi.co/api/v2/pokemon/${name}`)
  const [info,setInfo]=useState()

  useEffect(()=>{
      pokeFun();
  },[url])

  const pokeFun=async()=>{
    const res=await getPokemonById(url);
    setInfo(res);
}
  return (<>
    {!info?"No se cargo la informaciòn correctamente":(<div className="profile-container"><PokemonInfo name={name} data={info.data}/></div>)}
  </>
  );
};

export default Profile;
