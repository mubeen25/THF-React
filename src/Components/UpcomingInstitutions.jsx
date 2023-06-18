import React, { useEffect, useState } from 'react'
import './UpcomingInstitutions.css'
import feroz from './../assets/Upcoming_Institutions/Feroz.jpeg'
import mansehra from './../assets/Upcoming_Institutions/Mansehra.jpeg'
import orangi from './../assets/Upcoming_Institutions/orangi.jpeg'
const UpcomingInstitutions = () => {

    const [image,setImage] = useState(feroz)
    const [showImage, setShowImage] = useState(true);
    const [active, setActive] = useState(1)

    const handleImageChange = (newImage, newActive) => {
        setActive(newActive)
        setShowImage(false);
        setTimeout(() => {
          setImage(newImage);
          setShowImage(true);
        }, 300);
      };

      useEffect(() => {
        const images = document.querySelectorAll('.image-transition');
        if (showImage) {
          images.forEach((img) => img.classList.remove('hide'));
        } else {
          images.forEach((img) => img.classList.add('hide'));
        }
      }, [showImage, active]);


    return (
       <>
            <section id="upcoming">
                <div className="container-fluid">
                    <h1 className="heading text-center" >UPCOMING INSTITUTE</h1>
                        <div className="row d-flex .justify-content-center .align-items-center p-5">
                            <div className="col-lg changing_image">
                                <img  src={image} alt="" className="image-transition "/>
                            </div>
                            <div className="col  container_line_options">
                                <div className="align-start ps-4">
                                    <span className={active == 1? 'option_line active': 'option_line'}></span>
                                    <button className="btn " 
                                    onClick={() => handleImageChange(feroz,1)}
                                    id="firstOpen">Name

                                        Feroze Fatima
                                        Trust Girls <br/>
                                        Institute, Korangi,<br/> 
                                        Karachi

                                    </button>
                                </div>

                                <div className="align-start ps-4">
                                    <span className={active == 2? 'option_line active': 'option_line'}></span>
                                    <button className="btn " 
                                    onClick={() => handleImageChange(orangi,2)}
                                    >
                                        Mian Zubairi Girls Institute,<br/>
                                        Orangi Town, <br/>Karachi
                                    </button>


                                </div>
                                <div className="align-start ps-4">
                                    <span className={active == 3? 'option_line active': 'option_line'}></span>
                                    <button className="btn" 
                                    onClick={() => handleImageChange(mansehra,3)}
                                    >
                                        Hanif Gohar Technical <br/>
                                        Institute, Mansehra,<br/> 
                                        KPK
                                    </button>
                                </div>
                            </div>
                        </div>
                </div>
            </section>
       </>
    )
}

export default UpcomingInstitutions