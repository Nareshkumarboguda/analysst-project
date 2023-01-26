import React, { useState } from 'react'
import Details from '../Details/Details';
import './Card.css';

export default function Card({user}) {
  const [click, setClick] = useState(false);


  return (
    <div className='cardContainer'>
      <div className='displayCard'>
      <div>
          {user.company.name}
        </div>
        <div>
          <h5>CONTACT</h5>
          {user.name}</div>
        <div>
          <h5>CITY</h5>
          {user.address.city}</div>
        <div className='viewbtn'>
          <button onClick={()=>{setClick(!click)}}>{click?"Hide Details":"View More"}</button>
        </div>
        </div>
          {click?<Details user={user}/>:null}
    </div>
    
  )
}
