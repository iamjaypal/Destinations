import React from 'react'
import { useParams } from 'react-router-dom'
import Reviewdata from '../Data/Reviewdata'
import Dummydata from '../Data/Dummydata';
import Rating from './Rating';
import '../Styles/Destination.css'
function Destinations() {
    const { id } = useParams();
    let currentItem = [];
    currentItem = Dummydata[id - 1];
    let reviews = [];
    let reviewItems = [];
    reviewItems = Reviewdata[id - 1];
    reviews = reviewItems.arr;
    return (
        <>
            <div className='destination'>
                <h1>Our Beautiful Destination {currentItem.city}</h1>
                < div className='header' >
                    
                        <img src={currentItem.imgsrc} alt="loading..." />
                    <div className="createreviews">
                        <h3 id='heading'>Give your Reviews here</h3>
                        <div className='reviewform'>
                            <input id='username' type="text" placeholder='username' /><br />
                            <textarea name="" id="textarea" cols="20" rows="10"></textarea><br />
                            <button id='btn'>Add</button>
                        </div>
                    </div>
                </div>
                <span><strong>City : {currentItem.city}</strong></span><br />
                <span>{<Rating rating={currentItem.rating} />}</span>
                <h2>Reviews</h2>
                <div className='reviews-Info'>
                    {
                        reviews.map((item) => {
                            return (
                                <>
                                  <div className='userreview'>
                                    <h3 style={{margin : '0px'}}>{item.username}</h3>
                                    <p>{item.review}</p>
                                  </div>
                                </>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default Destinations
