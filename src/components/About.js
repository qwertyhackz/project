import React from 'react';
import * as icons from 'react-icons/fa';
import './About.css';


export default function About() {
  return (
    <>
    <div className='col-lg-6'>
      <div className="container">
        <div className="img-container-grid">
        <div className="smallsquare"><img src="about-1.jpg" class="img-grid-a" /></div>
        <div className="smallsquare"><img src="about-2.jpg" class="img-grid-b" /></div>
        <div className="smallsquare"><img src="about-3.jpg" class="img-grid-c" /></div>
        <div className="smallsquare"><img src="about-4.jpg" class="img-grid-d" /></div>
          </div>
            </div>
    </div>
        <div className="col-lg-6">
            <div className='content'>
            <h1>We Help To Get The Best Job And Find A Talent</h1>
            <p className="mb-3">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. 
            Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
            <p className='about'><icons.FaCheck/>Tempor erat elitr rebum at clita</p>
            <p className='about'><icons.FaCheck/>Aliqu diam amet diam et eos</p>
            <p className='about'><icons.FaCheck/>Clita duo justo magna dolore erat amet</p>
            <a className="btn btn-warning" href="">Read More</a>
            </div>
        </div>
    </> 
  )
}
