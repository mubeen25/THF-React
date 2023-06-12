// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Headlines.css'

const Headlines = () => {
  return (
    <>
    {/* <!--Headlines--> */}
    <section id="Headlines">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-2 p1">
                    <h1 className="headlines-heading">Latest News</h1>
                </div>
                <div className="col-lg-10 p2">
                    <p className="Headlines-para">
                        <marquee direction="right">Admissions under NAVTTC Program are now Open at THF campuses all
                            across
                            the Pakistan, Click <span> <a className="headings-link" href="#">Enroll Now!</a></span>
                        </marquee>
                    </p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Headlines