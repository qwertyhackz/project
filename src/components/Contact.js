import React from 'react';
import './Contact.css';
import * as icons from 'react-icons/fa';
import Carousels from './Carousels';
import Footermenu from './Footermenu';

export default function Contact() {
  return (
  <>
  <Carousels />
  <div class="container-fluid">
    <div><h1>Contact For Any Query</h1></div>
    <div class="rowcontact">
        <div class="col-md-4">
        <div class="coact">
          <icons.FaMapMarkerAlt/>
          <span>123 Street, New York, USA</span></div>
            </div>  
    <div class="col-md-4">
        <div class="coact">
            <icons.FaEnvelopeOpen/>
              <span>info@example.com</span></div>
            </div>      
    <div class="col-md-4">
        <div class="coact">
              <icons.FaPhoneAlt/>
                <span>+012 345 6789</span></div>
            </div>
        </div>
      <div class="form">
        <div class="row">
          <div class="col-md-6">
          <div class="mapouter">
            <div class="gmap_canvas">
            <iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" 
            src="https://maps.google.com/maps?width=1100&amp;height=500&amp;hl=en&amp;q=new york&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            </iframe>
          </div>
          </div>   
          </div>
      <div class="col-md-6">
        <p class="mb-4">The contact form is currently inactive. 
        Get a functional and working contact form with Ajax & PHP in a few minutes. 
        Just copy and paste the files, add a little code and you're done. 
        <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
			<section action="">
      <div class="row">
        <div class="col-md-6">
            <input type="text" class="form-control" id="name" placeholder="Your Name" />
              <label for="name">Your Name</label>
        </div>
        <div class="col-md-6">
            <input type="Email" class="form-control" id="email" placeholder="Your Email" />
              <label for="name">Your Email</label>
        </div>
        
        <div class="col-12">
          <input type="text" class="form-control" id="subject" placeholder="Subject" />
            <label for="subject">Subject</label>
        </div>
        <div class="col-12">
          <textarea class="form-control" placeholder="Leave a message here" id="message"></textarea>
            <label for="message">Message</label>
        </div>
        <div class="col-12">
          <button class="btn btn-dark w-100" type="submit">Send Message</button>
            </div>
            </div>
			</section>
      </div>
		</div>
    </div>
    </div>
    <Footermenu />      
    </>
  )
}
