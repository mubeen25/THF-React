// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Footer.css'
import Youtube from '../assets/Social/youtube.png'
import Linkedin from '../assets/Social/linkedin.png'
import Facebook from '../assets/Social/facebook.png'
import Instagram from '../assets/Social/instagram.png'
import Twitter from '../assets/Social/twitter.png'
import Logo from '../assets/Social/logo-hunar.png'


const Footer = () => {
  return (
    <>
     {/* <!-- footer --> */}
    <section>
        <footer>
            <div className="container-fluid">
                <div className="row">
                    <div className=" col-lg-3 col-md-6 col-sm-12">
                        <img className="title" src={Logo} alt=""/>
                    </div>
                    <div className=" col-lg-3 col-md-6 col-sm-12">
                        <p className="para-1">The real aim is to act as a catalyst to promote vocational training in Pakistan, raise the bar of technical training in Pakistan with international qualifications and make our graduates employable in Pakistan and abroad.</p>
                    </div>
                    <div className=" col-lg-3 col-md-6 col-sm-12">
                        <div className="list">
                            <p><a href="">Home</a></p>
                            <p>
                                <a href="">Institutes</a>
                            </p>
                            <p>
                                <a href="">Achievements</a>
                            </p>
                            <p>
                                <a href="">About</a>
                            </p>
                            <p>
                                <a href="">Contact Us</a>
                            </p>
                        </div>
                    </div>
                    <div className=" col-lg-3  col-md-6 col-sm-12">
                        <div className="list2">
                            <h4 className="title2">Head Office</h4>
                            <p className='mb-5'>83/4 Deh Dih, Ibrahim Hyderi Road, Taluka Korangi District, Karachi.</p>
                            <p><a href="">info@hunarfoundation.org</a></p>
                        </div>
                    </div>
                </div>
                <hr className='line'/>
                <div className="footer-last">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="social">
                                <h3>FIND US:</h3>
                                <a href="#"><img className="youtube" src={Youtube} alt=""/></a>
                                <a href="#"><img className="linkedin" src={Linkedin} alt=""/></a>
                                <a href="#"><img className="facebook" src={Facebook} alt=""/></a>
                                <a href="#"><img className="twitter" src={Twitter} alt=""/></a>
                                <a href="#"><img className="instagram" src={Instagram} alt=""/></a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12>">
                            <div className="contact">
                                <p><span className="contact1">Donor Relations: </span> 0336-8288777</p>
                                <p><span className="contact1">Admission Cell: </span> 0309-2221193</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </section>
    </>
  )
}

export default Footer