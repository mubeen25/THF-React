import React, { useEffect, useRef } from 'react';
import './Skills.css';
import conventional from '../assets/logos/conventional.png';
import technology from '../assets/logos/technology.png';
import innovation from '../assets/logos/innovation.png';
import learning from '../assets/logos/high-end-learning.png';
import ThreeD from '../assets/logos/Three.png';

const Skills = () => {
    const observer = useRef(null);

    useEffect(() => {
        observer.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in-from-left');
                    } else {
                        entry.target.classList.remove('fade-in-from-left');
                    }
                });
            },
            { rootMargin: '0px', threshold: 0.2 }
        );

        const animatedElements = document.querySelectorAll('.fade-in-from-left');
        animatedElements.forEach((element) => {
            observer.current.observe(element);
        });

        return () => {
            observer.current.disconnect();
        };
    }, []);

    return (
        <>
            <section id="Methodologies">
                <div className="row methods-row">
                    <div className="col-lg-2 offset-lg-1 fade-in-from-left">
                        <img className="img-fluid methods-icons" src={conventional} alt="conventional" />
                        <h3 className="text-lines">Conventional Training</h3>
                    </div>
                    <div className="col-lg-2 fade-in-from-left">
                        <img className="img-fluid methods-icons" src={technology} alt="conventional" />
                        <h3 className="text-lines">High-Tech Training</h3>
                    </div>
                    <div className="col-lg-2 fade-in-from-left">
                        <img className="img-fluid methods-icons" src={innovation} alt="conventional" />
                        <h3 className="text-lines">Entrepreneurship Trainings</h3>
                    </div>
                    <div className="col-lg-2 fade-in-from-left">
                        <img className="img-fluid methods-icons" src={learning} alt="conventional" />
                        <h3 className="text-lines">On-Job Trainings</h3>
                    </div>
                    <div className="col-lg-2 fade-in-from-left">
                        <img className="img-fluid methods-icons" src={ThreeD} alt="conventional" />
                        <h3 className="text-lines">3D Printing Services</h3>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Skills;
