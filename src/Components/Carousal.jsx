// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../Components/Carousal.css';
import sliderLogo from '../assets/logo.png';

const Carousal = () => {
    return (
        <>
            <section id="main">
                <div className="container-fluid g-0">
                    <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                                aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                                aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"
                                aria-label="Slide 5"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5"
                                aria-label="Slide 6"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6"
                                aria-label="Slide 7"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7"
                                aria-label="Slide 8"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8"
                                aria-label="Slide 9"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item content slide-1 active">
                                <div className="container carousal-cont">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <a href="#" className="btn btn-lg btn-primary sign-up">Sign up today</a>
                                        </div>
                                        <div className="col-lg-6">
                                            <p className="carousel-text">One Skilled person can change the lives of people,<br />
                                                <span className="carousel-text-Q"> ACT TO CHANGE LIVES </span>
                                            </p>
                                            <img className="carousal-logo img-fluid" src={sliderLogo} alt="logo" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="carousel-item content slide-2">
                                <div className="container carousal-cont">
                                    <h1 className="slide-text-4">THF - RAAS INSTITUTE OF EMERGING TECHNOLOGIES, KORANGI, KARACHI
                                    </h1>
                                </div>
                            </div>
                            <div className="carousel-item content slide-3">
                                <div className="container carousal-cont">
                                    <h1 className="slide-text-4">THF - SAEEDA NASEEM TECHNICAL INSTITUTE, KORANGI, KARACHI

                                    </h1>
                                </div>
                            </div>
                            <div className="carousel-item content slide-3">
                                <div className="container carousal-cont">
                                    <h1 className="slide-text-4">THF - SAEEDA NASEEM TECHNICAL INSTITUTE, KORANGI, KARACHI

                                    </h1>
                                </div>
                            </div>
                            <div className="carousel-item content slide-4">
                                <div className="container carousal-cont">
                                    <h1 className="slide-text-4">THF - DELHI MERCANTILE SOCIETY TECHNICAL INSTITUTE, KARACHI

                                    </h1>
                                </div>
                            </div>
                            <div className="carousel-item content slide-5">
                                <div className="container carousal-cont">
                                    <h1 className="slide-text-4">THF - DELHI MERCANTILE SOCIETY TECHNICAL INSTITUTE, KARACHI

                                    </h1>
                                </div>
                            </div>
                            <div className="carousel-item content slide-6">
                                <div className="container carousal-cont">
                                    <h1 className="slide-text-4">THF - SAHIB DAAD ABDUL MANNAN KHAN TECHNICAL INSTITUTE, KHARIAN

                                    </h1>
                                </div>
                            </div>
                            <div className="carousel-item content slide-7">
                                <div className="container carousal-cont">
                                    <h1 className="slide-text-4">THF - PAKARAB TECHNICAL TRAINING INSTITUTE, MULTAN

                                    </h1>
                                </div>
                            </div>
                            <div className="carousel-item content slide-8">
                                <div className="container carousal-cont">
                                    <h1 className="slide-text-4">THF - HAJIANI ASHRAF KHATOON TECHNICAL INSTITUTE, TANDO ALLAHYAR

                                    </h1>
                                </div>
                            </div>
                            <div className="carousel-item content slide-10">
                                <div className="container-fluid carousal-cont">
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Carousal