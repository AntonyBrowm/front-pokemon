import React, { useState, useEffect } from 'react';
import './styles.css';
export const ChosenPokemon = ({setChosen}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
  const drophistory = JSON.parse(localStorage.getItem("dataKey")) || [];
  if(drophistory!==""){
    
  }
  }, [data]);
  return (
    <div className='container-ChosenPokemon' >
    <div className='bio-profile-container'>
    <h3 className='title-name'>Pokemons Elegidos</h3>
    <table>
        <tr>
          <th>Nombre</th>
          <th>Habilidad</th>
          <th>Acciòn</th>
        </tr>
        <tr>
          <td>CATERPIE</td>
          <td>19</td>
          <td>Quitar</td>
        </tr>
        <tr>
          <td>METAPOD</td>
          <td>19</td>
          <td>Quitar</td>
        </tr>
        <tr>
          <td>BUTTERFREE</td>
          <td>25</td>
          <td>Quitar</td>
        </tr>
      </table>
      <div className='button-detalles-chosen'>Recargar listado de pokemons</div>
      <div className='button-detalles-chosen'>Quitar todos los elementos</div>
    </div>
    </div>
  );
};