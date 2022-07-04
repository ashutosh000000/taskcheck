import React from 'react'
import './header.css';
export default function Header({setInput}) {
  // console.log(setInput);
  function changes(e){
    let {value} = e.target;
    // console.log(value);
    setInput(value);
  }

  return (
    <>
    <div className='header-cont'>
        <div className='search-bar-c'>
        <input className='search-bar' onChange={changes}/>
        </div>
        <div className='cart-c'>
            <div className='total-o'>0</div>
            <div className='cart'>
                Cart
            </div>
        </div>
    </div>
    </>
  )
}
