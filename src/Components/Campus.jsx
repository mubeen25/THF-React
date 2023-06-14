import React from 'react';
import "./Campus.css";
import campus from "../assets/campus/campus-life.jpg";

function Campus() {
    return (
        <div className='campus-box'>

            <div className='header-box'>
                <p className='text-center text-uppercase'>
                    CAMPUS LIFE
                </p>
            </div>

            <div className='info-Box'>
                <div className='campus-image'>
                    <img src={campus} alt="campus life" srcset="" />
                </div>

                <span className='green-rectangle'></span>

                <div className='info'>


                    <p>
                        At present, THF has eight operational institutes across Pakistan which produced 8000 skilled graduates (Boys and Girls) since 2010. With more institutes to become operational in upcoming months, THF plans to increase the number of purpose built Vocational & Technical Institutes.
                    </p>

                    <button className='info-button'>
                        Learn More
                    </button>
                </div>


            </div>

        </div>
    )
}

export default Campus