import React from 'react';
import Tour from './Tour';
const Tours = ({tours}) => {
  return <section>
    <div className='title'>
      <h2>Our Tours</h2>
      <div className='underline'></div>
    </div>
    <div>
      {tours.map((tour)=>{
        //set a key so can delete or edit later
        //send data destructured
        return <Tour key={tour.id}{...tour}></Tour>
      })}
    </div>
  </section>;
};

export default Tours;
