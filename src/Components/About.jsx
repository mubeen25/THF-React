// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import './About.css'

const About = () => {

    const handleCounter = (Desired, Increment, factor) => {
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

    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const tabData = [
        {
            label: 'Introduction',
            content: 'Registered in 2008 under the Societies Act 1860, THF took its first batch in January 2010 within the premises provided by Delhi Mercantile Society, Karachi in its DMS School facility. The students gave their exam at the end of the year and till now by 2021, 15 batches have been graduated in multiple 6 months to 01 year diploma courses.',
        },
        {
            label: 'Our Vision',
            content: 'Where can I get some? Creating a new cadre of skilled Pakistanis with internationally recognized technical qualifications, opening up a new world of opportunities. i.e. A SKILLED PAKISTAN',
        },
        {
            label: 'Our Mission',
            content: 'To initiate a movement to skill the motivated illiterate, semi-literate and literate: To provide technical training ‘with a difference’ in quality of skills as well as ethical, social and moral values.',
        },
        {
            label: 'Our Value',
            content: `${<p>Integrity<br /> Ownership <br /> Continuous Improvement</p>}`,
        }
    ];
    return (
        <>
            {/* About  */}
            <section id="About">
                <div className="container about">
                    <h1 className="aboutheading">About Us</h1>
                    <br />
                    <div className='tab-section'>
                        <div className="tab">
                            {tabData.map((tab, index) => (
                                <button
                                    key={index}
                                    className={index === activeTab ? 'active btn btn-tabs tablinks' : 'btn btn-tabs tablinks'}
                                    onClick={() => handleTabClick(index)}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                        <div className="tabcontent">
                            {tabData[activeTab].content}
                        </div>
                    </div>

                    <button type="button" className="btn btn-outline-secondary"><a className="read-more" href="#"> Read
                        More</a></button>
                </div>

                <div className="container">
                    <div className="counter-container row ">
                        <div className="content-counter col-md side-border">
                            <div className="counter-value">
                                {/* <Counter Desired={8000} Increment={1}/> */}
                                {handleCounter(10, 1, 200)}+
                            </div>
                            <div className="counter-label text-capitalize my-4">
                                Years
                            </div>
                        </div>
                        <div className="content-counter col-md side-border">
                            <div className="counter-value">
                                {/* <Counter Desired={8000} Increment={1}/> */}
                                {handleCounter(5, 1, 200)}+
                            </div>
                            <div className="counter-label text-capitalize my-4">
                                city
                            </div>
                        </div>
                        <div className="content-counter col-md side-border">
                            <div className="counter-value">
                                {/* <Counter desired={80} increment={1}/>% */}
                                {handleCounter(8, 1, 20)}k+
                            </div>
                            <div className="counter-label text-capitalize my-4">
                                students
                            </div>
                        </div>
                        <div className="content-counter col-md">
                            <div className="counter-value">
                                {/* <Counter desired={3.3} increment={0.1}/>+ */}
                                {handleCounter(500, 1, 5)}+
                            </div>
                            <div className="counter-label text-capitalize my-4">
                                Employees
                            </div>
                        </div>

                    </div>
                </div>


            </section>
        </>
    )
}

export default About