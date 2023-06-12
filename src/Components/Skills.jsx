// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Skills.css'
import conventional from '../assets/logos/conventional.png'
import technology from '../assets/logos/technology.png'
import innovation from '../assets/logos/innovation.png'
import learning from '../assets/logos/high-end-learning.png'
import ThreeD from '../assets/logos/Three.png'

const Skills = () => {
  return (
    <>
    {/* Methodologies */}
    <section id="Methodologies">
        <div className="row methods-row">
            <div className="col-lg-2 offset-lg-1">
                <img className="img-fluid methods-icons" src={conventional} alt="conventional" />
                <h3 className="text-lines">Conventional Training</h3>
            </div>
            <div className="col-lg-2">
                <img className="img-fluid methods-icons" src={technology} alt="conventional" />
                <h3 className="text-lines">High-Tech
                    Training</h3>
            </div>
            <div className="col-lg-2">
                <img className="img-fluid methods-icons" src={innovation} alt="conventional" />
                <h3 className="text-lines">Entrepreneurship Trainings</h3>
            </div>
            <div className="col-lg-2">
                <img className="img-fluid methods-icons" src={learning } alt="conventional" />
                <h3 className="text-lines">On-Job <br /> Trainings</h3>
            </div>
            <div className="col-lg-2">
                <img className="img-fluid methods-icons" src={ThreeD} alt="conventional" />
                <h3 className="text-lines">3D Printing Services</h3>
            </div>
        </div>
    </section>
    </>
  )
}

export default Skills