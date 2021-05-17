import React, { useState } from 'react';

const Tour = ({id,image,info,price,name}) => {
  const[readMore,setReadMore]=useState(false)
  return <article className='single-tour'>
    <img src={image} alt={name}/>
    <footer>
      <div className='tour-info'>
        <h4>{name}</h4>
        <h4 className='tour-price'>${price}</h4>
      </div>
      //if readMore set to true show all else show only 200 chars
      <p>{readMore?info:`${info.substring(0,200)}...`}</p>
      <button onClick={()=>{
        setReadMore(!readMore)
        //if readMore true show less as the value in this button
      }}>{readMore?'show less':'show more'}
      </button>
      <button className='delete'>Not interested</button>
    </footer>
  </article>
};

export default Tour;
