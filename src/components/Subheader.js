import React from 'react'
import './subheader.css';
import {Link} from 'react-router-dom';
export default function Subheader() {
  return (
    <>
    <div className='subheader-cont'>
       <Link to='/pant' className='pant'>
        <div className='pant'>Pant</div>
       </Link>
       <Link to='/shirt' className='shirt'>
        <div className='shirt'>Shirt</div>
        </Link>
    </div>
    </>
  )
}
