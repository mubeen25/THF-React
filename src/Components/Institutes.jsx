// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react'
import './Institutes.css'
import DMSTI from '../assets/Institutes/dmsti.jpg'
import SNTI from '../assets/Institutes/snti.jpg'
import RAAS from '../assets/Institutes/raas.jpg'
import CVI from '../assets/Institutes/cvi.jpg'
import AMAN from '../assets/Institutes/aman.jpg'
import SADAM from '../assets/Institutes/sadamakti.jpg'
import FASTI from '../assets/Institutes/Fasti.jpg'
import PATTI from '../assets/Institutes/patti.png'
import HAKTI from '../assets/Institutes/hakti.jpg'

const Institutes = () => {

    const observer = useRef(null);

    useEffect(() => {
        observer.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('card-before-fade');
                        entry.target.classList.add('card-fade-in-from-left');
                    } else {
                        entry.target.classList.remove('card-fade-in-from-left');
                        entry.target.classList.add('card-before-fade');
                    }
                });
            },
            { rootMargin: '0px', threshold: 0.2 }
        );

        const animatedElements = document.querySelectorAll('.card-before-fade');
        animatedElements.forEach((element) => {
            observer.current.observe(element);
        });

        return () => {
            observer.current.disconnect();
        };
    }, []);

    return (
        <>
            {/* <!-- institutes --> */}
            <section id="cards">
                <div className="container institutes-section">
                    <h1 className="heading"><span className="watermark"></span>OUR INSTITUTES</h1>
                    <div className="row institute-sm">
                        <div className="card-before-fade feature-box col-lg-4 col-md-6 col-sm-8 col-xs-12">
                            <div className="card">
                                <div className="container">
                                    <img className="img-fluid" src={DMSTI} alt="" />
                                    <p>Dehli Mercantile Society Technical Institute,Tariq Road, Karachi</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-before-fade feature-box col-lg-4 col-md-6 col-sm-8 col-xs-12">
                            <div className="card">
                                <div className="container">
                                    <img className="img-fluid" src={SNTI} alt="" />
                                    <p>Saeeda Naseem Technical Institute for Women,Korangi, Karachi</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-before-fade feature-box col-lg-4 col-md-6 col-sm-8 col-xs-12">
                            <div className="card">
                                <div className="container">
                                    <img className="img-fluid" src={RAAS} alt="" />
                                    <p>Rashid Arshad Aslam Shahid Institute of Emerging Technologies, Korangi, Karachi</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-before-fade feature-box col-lg-4 col-md-6 col-sm-8 col-xs-12">
                            <div className="card">
                                <div className="container">
                                    <img className="img-fluid" src={CVI} alt="" />
                                    <p>Central Vocational Institute <br /> for Women,Saddar,<br /> Karachi</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-before-fade feature-box col-lg-4 col-md-6 col-sm-8 col-xs-12">
                            <div className="card">
                                <div className="container">
                                    <img className="img-fluid" src={AMAN} alt="" />
                                    <p>AMAN TECH <br /> Korangi,<br /> Karachi</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-before-fade feature-box col-lg-4 col-md-6 col-sm-8 col-xs-12">
                            <div className="card">
                                <div className="container">
                                    <img className="img-fluid" src={SADAM} alt="" />
                                    <p>Sahib Daad Abdul Mannan KhanTechnical Institute,Punjab, GT Road Kharian</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row institute-sm">
                        <div className="card-before-fade feature-box col-lg-4 col-md-6 col-sm-8 col-xs-12">
                            <div className="card">
                                <div className="container">
                                    <img className="img-fluid" src={FASTI} alt="" />
                                    <p>Farouq Ahmed & Aftab Shamsi Technical Institute,Bedian Road, Lahore</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-before-fade feature-box col-lg-4 col-md-6 col-sm-8 col-xs-12">
                            <div className="card">
                                <div className="container">
                                    <img className="img-fluid" src={PATTI} alt="" />
                                    <p>Pak-Arab Technical Institute,Punjab, Khanewal Road, Multan</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-before-fade feature-box col-lg-4 col-md-6 col-sm-8 col-xs-12">
                            <div className="card">
                                <div className="container">
                                    <img className="img-fluid" src={HAKTI} alt="" />
                                    <p>Hajiani Ashraf Khatoon Technical Institute, Rashidabad, Sindh, Tando Allahyar</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Institutes