import React, { useEffect, useState } from 'react'
import './Priorities.css'
import Counter from './Counter'
const Priorities = () => {
    const handleCounter = (Desired,Increment,factor) =>{
        const [count, setCount] = useState(0);
      const desiredNumber = Desired
      const incrementValue = Increment
    
      useEffect(() => {
        if (count < desiredNumber) {
          const timer = setTimeout(() => {
            setCount(prevCount => {

                const newCount = prevCount + incrementValue
                return Number(newCount.toFixed(1))
            });
          }, factor);
    
          return () => {
            clearTimeout(timer);
          };
        }
      }, [count]);
      return count
    }


  return (
    <>
    <section id='Contrbutions'>
        <div className="Contribution">
            <p className='text-center text-uppercase my-4'>
                    how you can contribute
            </p>
            <div className="contibution-content text-uppercase">
                instantly double <br/> your impact
            </div>
        </div>
    </section>
    <section id='Priorities'>
        <div className="container">
            <p className='text-uppercase my-4 priorities-heading'>
                <span className=''>
                    Our top priorities
                </span>
                <div className='underlined'>
                    {/* empty to adjust the bottom line underlining */}
                </div>
            </p>
            <p className='priority-text'>
            Since one of the important strategic aim of every organization is to be part of the communities in which it operates, THF would like to propose a few options to help you meet this strategic aim. <br/>
THF offers this opportunity to the underprivileged and marginalized segments of society where the need is more urgent, to make them bread winners for their household. <br/>
YOU CAN CONTRIBUTE IN THE FOLLOWING AREAS, AND TAKE PART WITH THF IN OFFERINGYOUNG BOYS AND GIRLS A SKILLS, A CAREER & A HOPE IN FUTURE.
            </p>

            <div className="priorities-images">
                <div className="row">
                    <div className="col-md">
                        <div className="priorities-images-content img-fluid" id='priorities-images-content-women'>
                            WOMEN <br/>EMPOWERMENT
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="priorities-images-content" id='priorities-images-content-employment'>
                            EMPLOYEMENT
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md">
                        <div className="priorities-images-content" id='priorities-images-content-contribution'>
                            CONTRIBUTE TO A WORKSHOP
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="priorities-images-content" id='priorities-images-content-student'>
                            STUDENT <br/>SPONSORSHIP
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <section>
        <div className="container">
            <div className="text-center text-uppercase result-impact">
                OUR RESULTS OF IMPACT STUDY 2021 SHOW THAT THF'S STUDENTS ON THE AVERAGE ARE:
            </div>
            <div className="counter-container row">
                <div className="content-counter col-md">
                    <div className="counter-value">
                        {/* <Counter Desired={8000} Increment={1}/> */}
                        {handleCounter(8000,1,.25)}+
                    </div>
                    <div className="counter-label">
                        Students Graduated
                    </div>
                </div>
                <div className="content-counter col-md">
                    <div className="counter-value">
                        {/* <Counter desired={80} increment={1}/>% */}
                        {handleCounter(80,1,20)}%
                    </div>
                    <div className="counter-label text-capitalize">
                        Economically Engaged
                    </div>
                </div>
                <div className="content-counter col-md">
                    <div className="counter-value">
                        {/* <Counter desired={3.3} increment={0.1}/>+ */}
                        {handleCounter(3.3,0.1,50)}+
                    </div>
                    <div className="counter-label text-capitalize">
                        Billion Rupees per <br/> year COllectively
                    </div>
                </div>

            </div>
            <div className="d-flex my-5">
                <div className="flex-fill donation-text">
                    <span className='text-uppercase px-3'>
                        *INDICATING THEY CAN SPENDMORE ON THIER FAMILY'S EDUCATION AND HEALTH
                    </span>
                    <div className='underlined mt-3'>

                    </div>
                </div>
                <div className="flex-fill">
                    <button className='btn p-3 text-capitalize donation-button'>
                        make a donation
                    </button>
                </div>
                
            </div>
        </div>
    </section>

    </>
  )
}

export default Priorities