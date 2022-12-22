import './styles.css';
export const PokemonInfo = ({name, data}) => {
  return (
    <>      
    <div className="list-card" id='list-card'>
    <div className = "image-wrapper">
    <img src={data.sprites.front_shiny}/>
    </div>
    <div className = "info-wrapper">
    <div className= "card-status">{name}</div>
    <div className= "card-title">Height: {data.height}</div>
    <div className= "card-title">Weight: {data.weight}</div>
    <div className= "card-description">Stats: {data.stats.map(home => 
    <div>{home.stat.name}: {home.base_stat}    Effort: {home.effort}</div>
    
    )}</div>
    </div>
    </div>
   <div>
  </div> </>
);
};
