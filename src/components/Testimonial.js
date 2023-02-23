import React from 'react';
import './Testimonial.css';
import * as icons from 'react-icons/fa';


const Testimonial = () => { 
    return (
    <>
    <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                           <h1>Our Clients Say!!!</h1> 
                    <ol class="carousel-indicators">
                        <li  data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
                        <li  data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                    </ol>
                        <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class='row'>
                                <div className='col-md-4'>
                                    <div className='single-box'>
                                    <icons.FaQuoteLeft/>
                                    <p>Dolor et eos labore, stet justo sed est sed. 
                                        Diam sed sed dolor stet amet eirmod eos labore diam</p>
                                        <div className='img-area'>
                                            <img src='testimonial-1.jpg' alt='' />
                                        </div>
                                        <div className='img-text'>
                                            <h5>Client Name</h5>
                                            <small>Profession</small>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className='single-box active'>
                                        <icons.FaQuoteLeft className='active'/>
                                    <p className='active'>Dolor et eos labore, stet justo sed est sed. 
                                        Diam sed sed dolor stet amet eirmod eos labore diam</p>
                                        <div className='img-area'>
                                            <img src='testimonial-2.jpg' alt='' />
                                        </div>
                                        <div className='img-text active'>
                                            <h5>Client Name</h5>
                                            <small>Profession</small>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className='single-box'>
                                    <icons.FaQuoteLeft/>
                                    <p>Dolor et eos labore, stet justo sed est sed. 
                                        Diam sed sed dolor stet amet eirmod eos labore diam</p>
                                        <div className='img-area'>
                                            <img src='testimonial-3.jpg' alt='' />
                                        </div>
                                        <div className='img-text'>
                                            <h5>Client Name</h5>
                                            <small>Profession</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class='row'>
                                <div className='col-md-4'>
                                    <div className='single-box'>
                                    <icons.FaQuoteLeft/>
                                    <p>Dolor et eos labore, stet justo sed est sed. 
                                        Diam sed sed dolor stet amet eirmod eos labore diam</p>
                                        <div className='img-area'>
                                            <img src='testimonial-4.jpg' alt='' />
                                        </div>
                                        <div className='img-text'>
                                            <h5>Client Name</h5>
                                            <small>Profession</small>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className='single-box'>
                                    <icons.FaQuoteLeft/>
                                    <p>Dolor et eos labore, stet justo sed est sed. 
                                        Diam sed sed dolor stet amet eirmod eos labore diam</p>
                                        <div className='img-area'>
                                            <img src='testimonial-1.jpg' alt='' />
                                        </div>
                                        <div className='img-text'>
                                            <h5>Client Name</h5>
                                            <small>Profession</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Testimonial;