import React from 'react'
import './FeedbackCard.css'

const FeedbackCard = (props) => {

    const {name, feedback, year} = props.data
  return (
    <>
        <section id="FeedbackCard" className=''>
            <div className="card-image">
                <img src="https://images.pexels.com/photos/5905497/pexels-photo-5905497.jpeg?auto=compress&cs=tinysrgb&w=600"  className='img-fluid' alt="student"  />
            </div>
            <div className="card-title text-capitalize">
                {name}
            </div>
            <div className="graduation-year">
                Graduated in {year}
            </div>
            <div className="card-feedback">
                "{feedback}"
            </div>
        </section>
    </>
  )
}

export default FeedbackCard