// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './About.css'

const About = () => {

    // const openCity = (event, cityName) => {
    //     var i, tabcontent, tablinks;
    //     tabcontent = document.getElementsByClassName("tabcontent");
    //     for (i = 0; i < tabcontent.length; i++) {
    //         tabcontent[i].style.display = "none";
    //     }
    //     tablinks = document.getElementsByClassName("tablinks");
    //     for (i = 0; i < tablinks.length; i++) {
    //         tablinks[i].className = tablinks[i].className.replace(" active", "");
    //     }
    //     document.getElementById(cityName).style.display = "block";
    //     event.currentTarget.className += " active";
    // }
    // // Get the element with id="defaultOpen" and click on it
    // document.getElementById("defaultOpen").click();

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
            content: `${<p>Integrity<br/> Ownership <br/> Continuous Improvement</p>}`,
        }
    ];
    return (
        <>
            {/* About  */}
            <section id="About">
                <div className="container about">
                    <h1 className="aboutheading">About Us</h1>
                    <br />
                    {/* <div class="tab">
                        <button class="btn tablinks one main" onclick={openCity(event, 'Introduction')} id="defaultOpen">Introduction</button>
                        <button class="btn tablinks two main2" onclick={openCity(event, 'Our Vision')}>Our Vision</button>
                        <button class="btn tablinks three main3" onclick={openCity(event, 'Our Mission')}>Our Mission</button>
                        <button class="btn tablinks four main4" onclick={openCity(event, 'Our Value')}>Our Value</button>
                    </div> */}

                    {/* <div id="Introduction" class="tabcontent">
                <p>Registered in 2008 under the Societies Act 1860, THF took its first batch in January 2010 within the premises provided by Delhi Mercantile Society, Karachi in its DMS School facility. The students gave their exam at the end of the year
                    and till now by 2021, 15 batches have been graduated in multiple 6 months to 01 year diploma courses.</p>
            </div>

            <div id="Our Vision" class="tabcontent">
                <p>Where can I get some? Creating a new cadre of skilled Pakistanis with internationally recognized technical qualifications, opening up a new world of opportunities. i.e. A SKILLED PAKISTAN
                </p>
            </div>

            <div id="Our Mission" class="tabcontent">
                <p>To initiate a movement to skill the motivated illiterate, semi-literate and literate: To provide technical training ‘with a difference’ in quality of skills as well as ethical, social and moral values.
                </p>
            </div>
            <div id="Our Value" class="tabcontent">
                <p>Integrity<br/> Ownership
                    <br/> Continuous Improvement</p>
            </div> */}

                    <div>
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

            </section>
        </>
    )
}

export default About