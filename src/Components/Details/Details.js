import React from 'react';
import './Details.css';

export default function Details({user}) {
  return (

    // More details container

    <div className='detailsCard'>
        <div>
            <div className='detail'>
                <h5>Name</h5>
                <p>{user.name}</p>
            </div>
            <div className='detail'>
                <h5>Phone No</h5>
                <p>{user.phone}</p>
            </div>
            <div className='detail'>
                <h5>Email</h5>
                <p>{user.email}</p>
            </div>
        </div>
        <div>
            <div className='detail'>
                <h5>Address</h5>
                <p>
                {user.address.suite},<br/>
                {user.address.street},<br/>
                {user.address.city},<br/>
                zipcode: {user.address.zipcode}<br/>
                </p>
            </div>
            <div className='detail'>
                <h5>website</h5>
                <p>{user.website}</p>
            </div>
        </div>
    </div>
  )
}

   