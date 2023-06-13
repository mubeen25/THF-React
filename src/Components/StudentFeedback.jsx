import React, { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import FeedbackCard from './FeedbackCard';
import './StudentFeedback.css'
const StudentFeedback = () => {
    // let column_numbers
    // const screenSize = window.innerWidth
    // screenSize < 450 ? column_numbers = 1:column_numbers =3

    const [columnNumbers, setColumnNumbers] = useState(3);

    useEffect(() => {


        const handleResize = () => {
            const screenSize =  window.innerWidth;
            const newColumnNumbers =  screenSize < 800 ? 1 : 3;
            setColumnNumbers(newColumnNumbers);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const cardsData = [
        {
            name: "ali",
            feedback: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda accusamus non error fugiat cum quo sint similique repellendus iste odio labore hic autem, ullam minus itaque cupiditate consequatur alias saepe?",
            year: "2016"
        },
        {
            name: "ali",
            feedback: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda accusamus non error fugiat cum quo sint similique repellendus iste odio labore hic autem, ullam minus itaque cupiditate consequatur alias saepe?",
            year: "2016"
        },
        {
            name: "ali",
            feedback: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda accusamus non error fugiat cum quo sint similique repellendus iste odio labore hic autem, ullam minus itaque cupiditate consequatur alias saepe?",
            year: "2016"
        },
        {
            name: "ali",
            feedback: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda accusamus non error fugiat cum quo sint similique repellendus iste odio labore hic autem, ullam minus itaque cupiditate consequatur alias saepe?",
            year: "2016"
        },
        {
            name: "ali",
            feedback: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda accusamus non error fugiat cum quo sint similique repellendus iste odio labore hic autem, ullam minus itaque cupiditate consequatur alias saepe?",
            year: "2016"
        },
        {
            name: "ali",
            feedback: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda accusamus non error fugiat cum quo sint similique repellendus iste odio labore hic autem, ullam minus itaque cupiditate consequatur alias saepe?",
            year: "2016"
        },
        {
            name: "ali",
            feedback: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda accusamus non error fugiat cum quo sint similique repellendus iste odio labore hic autem, ullam minus itaque cupiditate consequatur alias saepe?",
            year: "2016"
        },
        {
            name: "ali",
            feedback: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda accusamus non error fugiat cum quo sint similique repellendus iste odio labore hic autem, ullam minus itaque cupiditate consequatur alias saepe?",
            year: "2016"
        }
    ]

    return (
        <>
            <div className='feedback-heading text-uppercase' >
                student feedback
            </div>

            <div className="container">
                {
                     
                        <OwlCarousel
                            className='owl-theme'
                            items={columnNumbers}
                            // autoplay
                            nav
                            dots
                            classID='StudentFeedback'
                            loop
                        >
                            <FeedbackCard data={cardsData[0]} />
                            <FeedbackCard data={cardsData[1]} />
                            <FeedbackCard data={cardsData[2]} />
                            <FeedbackCard data={cardsData[3]} />
                            <FeedbackCard data={cardsData[4]} />
                            <FeedbackCard data={cardsData[5]} />
                            <FeedbackCard data={cardsData[6]} />
                        </OwlCarousel>
                    
                }



            </div>
        </>
    )
}

export default StudentFeedback