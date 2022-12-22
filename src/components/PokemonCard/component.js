import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import "./styles.css";

export const PokemonCard = ( {pokemon, setSelectedModes,img,name,types}) =>{
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
  const drophistory = JSON.parse(localStorage.getItem("dataKey")) || [];
  if(drophistory!==""){
  drophistory.push(data);
  localStorage.setItem('dataKey', JSON.stringify(drophistory));
  }
  }, [data]);

  const onButtonClick=(mode)=>{
    setData(mode)
  }

  return (
    <div className="list-card-Pokemon" id='list-card-Pokemon' key={pokemon.name}>
    <span className='frame'>
    </span>
    <div>    
    <div className = "image-wrapper-Pokemon">
    <img className="img" src={img}/>
    </div>
    <button onClick={()=>onButtonClick({name})}>ESCOGER POKEMON</button>
    </div>
    <div className = "info-wrapper-Pokemon" >
    <div className= "card-status-Pokemon">{name}</div>
    {!types?"No se cargo la informaciòn correctamente":
    types.map(home => 
    <div className= "card-type-Pokemon">{home.type.name}</div>
    )}
    <div className='button-detalles' onClick= {() => navigate(`/pokemon-detail/${name}`)}>Ver Detalles</div>
    </div>
    
    </div>
  );
};


