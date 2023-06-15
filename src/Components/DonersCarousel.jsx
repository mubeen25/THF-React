import React, { useState } from 'react'
import img1 from './../assets/donors/amreeli.jpg'
import img2 from './../assets/donors/engro.jpg'
import img3 from './../assets/donors/hbl.jpg'
import img4 from './../assets/donors/pso.jpg'
import './DonorCarousel.css'
import OwlCarousel from 'react-owl-carousel';
const DonersCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <section id="Donors" className='my-3'>
            <p className="text-center text-uppercase fs-1 fw-bold">
                INSTITUTIONAL AND CORPORATIONAL DONORS
            </p>
            {/* <div className="container-fluid">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className={index === 0 ? 'active' : ''} aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className={index === 1 ? 'active' : ''} aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className={index === 2 ? 'active' : ''} aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col">
                                    <img src={img1} className="d-block w-100" alt="Image 1" />
                                </div>
                                <div className="col">
                                    <img src={img2} className="d-block w-100" alt="Image 2" />
                                </div>
                                <div className="col">
                                    <img src={img3} className="d-block w-100" alt="Image 3" />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col">
                                    <img src={img2} className="d-block w-100" alt="Image 2" />
                                </div>
                                <div className="col">
                                    <img src={img3} className="d-block w-100" alt="Image 3" />
                                </div>
                                <div className="col">
                                    <img src={img4} className="d-block w-100" alt="Image 4" />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col">
                                    <img src={img3} className="d-block w-100" alt="Image 3" />
                                </div>
                                <div className="col">
                                    <img src={img4} className="d-block w-100" alt="Image 4" />
                                </div>
                                <div className="col">
                                    <img src={img1} className="d-block w-100" alt="Image 1" />
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div> */}
            <div className="container">
                <OwlCarousel
                    className='owl-theme'
                    items={3}
                    // autoplay
                    nav
                    dots
                    loop
                >
                    <img src={img1} className="d-block w-100 " alt="Image 1" />
                    <img src={img2} className="d-block w-100" alt="Image 2" />
                    <img src={img3} className="d-block w-100" alt="Image 3" />
                    <img src={img4} className="d-block w-100" alt="Image 4" />
                </OwlCarousel>
            </div>

        </section>
    );
}

export default DonersCarousel