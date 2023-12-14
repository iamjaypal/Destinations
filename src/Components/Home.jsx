import React, { useState } from 'react'
import Dummydata from '../Data/Dummydata';
import Card from './Card';
import '../Styles/Home.css'
function Home() {
  const [searchQuery, SetSearchQuery] = useState('')
  const [cardItems, setCardItems] = useState(Dummydata)
  function handelSearch(e) {
    SetSearchQuery(e.target.value);
    setCardItems(cardItems.filter(item => item.city.toLowerCase().includes(searchQuery.toLowerCase())));
  }
  return (
    <>
      <div className='main'>
        <div className="top" style={{backgroundColor : '#ffebf9'}}>
        <h1>Anywhere And Anytime For You !</h1>
        <div className="searchbar">
          <input id='inputbox' type="text" placeholder="Search Destination.." value={searchQuery}
            onChange={handelSearch} />
        </div>
        </div>
        <div className="container">

          {
            cardItems.map(item => (
              <Card item={item} />
            ))
          }
        </div>

      </div>
    </>
  )
}

export default Home
