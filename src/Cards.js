import React from 'react';

const Cards = (props) =>{
  const {name , email ,id } = props;
  return(
    <div className="tc bg-red dib br3 pa3 ma2 grow bw2 shadow-5">
    <img alt="robot pics"
     src = {`https://robohash.org/${id}abcd?200x200`}/>
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  </div>

  )
}
export default Cards;