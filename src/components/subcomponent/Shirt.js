import React from 'react'
import data from '../../Object.js';
import './shirt.css';
export default function Shirt() {
 
    let newdata = data.filter((ele) => ele.type=="shirt");
    
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
