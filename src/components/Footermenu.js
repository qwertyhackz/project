import React from 'react';
import * as icons from 'react-icons/fa';
import './Footermenu.css';

export default function Footermenu() {
  return (
        <div className="container-fluidd ">
            <div className="containerr">
                <div className="rows">
                    <div className="col-lg-3 col-md-6">
                        <h5 className="mb-4">Company</h5>
                        <ul>
                        <li><a className="btn btn-link" href="">About Us</a></li>
                        <li><a className="btn btn-link" href="">Contact Us</a></li>
                        <li><a className="btn btn-link" href="">Our Services</a></li>
                        <li><a className="btn btn-link" href="">Privacy Policy</a></li>
                        <li><a className="btn btn-link" href="">Terms & Condition</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="mb-4">Quick Links</h5>
                        <ul>
                        <li><a className="btn btn-link" href="">About Us</a></li>
                        <li><a className="btn btn-link" href="">Contact Us</a></li>
                        <li><a className="btn btn-link" href="">Our Services</a></li>
                        <li><a className="btn btn-link" href="">Privacy Policy</a></li>
                        <li><a className="btn btn-link" href="">Terms & Condition</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="mb-4">Contact</h5>
                        <ul className='contact'>
                        <li><p className="mb-2"><icons.FaMapMarkerAlt/>123 Street, New York, USA</p></li>
                        <li><p className="mb-2"><icons.FaPhoneAlt/>+012 345 67890</p></li>
                        <li><p className="mb-2"><icons.FaEnvelope/>info@example.com</p></li>
                        </ul>
                        <div className="">
                            <ul className='social'>
                            <li><a className="btn btn-outline-light btn-social" href=""><icons.FaTwitter/></a></li>
                            <li><a className="btn btn-outline-light btn-social" href=""><icons.FaFacebookF/></a></li>
                            <li><a className="btn btn-outline-light btn-social" href=""><icons.FaYoutube/></a></li>
                            <li><a className="btn btn-outline-light btn-social" href=""><icons.FaLinkedin/></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="mb-4">Newsletter</h5>
                        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <div className="signup">
                            <input className="form-control" type="text" placeholder="Your email" />
                            <button type="button" className="btn btn-primaryy">SignUp</button>
                        </div>
                    </div>
                    </div>
                </div>
                <hr/>
                    <div className="container1">
                <div className="copyright">
                    <div className="row1">
                        <div className="col-md-6">
                            &copy; <a className="border-bottom" href="#">Your Site Name</a>, All Right Reserved.
							Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
                            <br/>Distributed By <a className="border-bottom" href="https://themewagon.com" target="_blank">ThemeWagon</a>
                        </div>
                        <div className="col-md-6">
                            <div className="footer-menu">
                                <a href="">Home</a>
                                <a href="">Cookies</a>
                                <a href="">Help</a>
                                <a href="">FQAs</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a href='' className='back-to-top'><icons.FaArrowUp/></a>
    </div>
  )
}
