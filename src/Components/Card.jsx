import React from 'react'
import Rating from './Rating'
import '../Styles/Card.css'

function Card({ item }) {
    const destinationPath = `/destination/${item.id}`
    return (
        <>
            <div className='card'>
                <div className='imgbox'>
                    <a href={destinationPath}>
                        <img src={item.imgsrc} alt="loading..." style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: "19px" }} />
                    </a>

                </div>
                <div className='card-Info'>
                    <p>{item.city}</p>
                    <p><span><Rating rating={item.rating} /></span></p>
                    <p>Reviews :- {item.review}</p>
                </div>
            </div>
        </>
    )
}

export default Card
