import React from 'react';
import {robots} from './robots';
import Cards from './Cards';

const CardLists = () =>{
  
 const meme = (makeAcard ,i) =>{
    return(
      <Cards name={robots[i].name} email={robots[i].email} id={robots[i].id} />
    )
  }
  const cardComponents = robots.map(meme);
  return(
    <div>
    {cardComponents}
    </div>

  )

}
export default CardLists;