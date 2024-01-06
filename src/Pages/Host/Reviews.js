import React from 'react'
import Office from '../../Components/Office/Office'

function Reviews() {
const reviews = Office().reviews

  return (
    <div className='review'>
        <div className='review-carier'>
          <h1>What do our users say?</h1>
        </div>
        <div className='users-review'>
         
           { reviews && reviews.map(rev => (
             <div className='user' key={rev.id}>
            <p>{rev.words}</p>
            <img src={rev.image} alt='img'/>
            <h3>{rev.name}</h3>
            <h4>{rev.position}</h4>
            </div>
           ))}
          
        </div>
    </div>
  )
}

export default Reviews