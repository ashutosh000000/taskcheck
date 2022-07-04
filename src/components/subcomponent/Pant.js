import React from 'react'
import './pant.css';
import data from '../../Object.js';
export default function Pant() {
    let newdata = data.filter((ele) => ele.type=="pant");
  return (
    <>
    {
       <div className='cards-cont'>
       {
           newdata.map((ele) => {
               return (
                   <>
                       <div className='card-cont'>
                           <div className='image-cont'>
                               <img src={`${ele.image}`} className='image' />
                           </div>
                           <div className='text'>text</div>
                       </div>
                   </>
               );
           })
       }

   </div>
    }
        </>
  )
}
