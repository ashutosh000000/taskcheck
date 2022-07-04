import React from 'react'
import './card.css';
import data from '../Object.js';
export default function Card({input}) {

// console.log(input);
let filterdata = data.filter((ele) => ele.type.includes(input.toLowerCase()));

    return (
        <>
        <div className='cards-cont'>
            {   
                filterdata.length==0
                ?data.map((ele) => {
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
                :filterdata.map((ele)=> {
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
        </>
    )
}
