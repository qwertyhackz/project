import React from 'react';
import './Joblist.css';
import * as icons from 'react-icons/fa';

export default function Joblist() {
  return (
    <div>
        <div class="container">
    <div class="text-center">
      <h2>Job Listing</h2>
      <ul className='nav-pills'>
            <li class="item">
                <a className='active' href="#tab-1">
                    <h6 className='tab'>Featured</h6>
                </a>
            </li>
            <li class="item">
                <a className='active' href="#tab-2">
                    <h6 className='tab'>Full Time</h6>
                </a>
            </li>
            <li class="item">
                <a className='active' href="#tab-3">
                    <h6 className='tab'>Part Time</h6>
                </a>
            </li>
        </ul>
    </div>
    <div class="card mb-3">
      <div class="card-body">
        <div class="d-flex flex-column flex-lg-row">
        <img class="rounded" src="com-logo-1.jpg" alt=""/>
          <div class="row">
            <div class="col-sm-12 col-md-8">
              <h4 class="ps-4">Software Engineer</h4>
                <span class="text-truncate"><icons.FaMapMarkerAlt/> New York, USA</span>
                <span class="text-truncate"><icons.FaRegClock/> Full Time</span>
                <span class="text-truncate"><icons.FaMoneyBill/> $123 - $456</span>
            </div>
            <div class="col-sm-12 col-md-4">
                <a class="btn btn-light btn-square me-3" href=""><icons.FaRegHeart/></a>
                <a class="btn btn-info" href="">Apply Now</a>
                <small class="text-truncate"><icons.FaCalendarAlt/> Date Line: 01 Jan, 2045</small>
            </div>
            </div>
          </div>
        </div>
      </div>
    
      <div class="card mb-3">
      <div class="card-body">
        <div class="d-flex flex-column flex-lg-row">
        <img class="rounded" src="com-logo-2.jpg" alt=""/>
          <div class="row">
            <div class="col-sm-12 col-md-8">
              <h4 class="ps-4">Marketing Manager</h4>
                <span class="text-truncate"><icons.FaMapMarkerAlt/> New York, USA</span>
                <span class="text-truncate"><icons.FaRegClock/> Full Time</span>
                <span class="text-truncate"><icons.FaMoneyBill/> $123 - $456</span>
            </div>
            <div class="col-sm-12 col-md-4">
                <a class="btn btn-light btn-square me-3" href=""><icons.FaRegHeart/></a>
                <a class="btn btn-info" href="">Apply Now</a>
                <small class="text-truncate"><icons.FaCalendarAlt/> Date Line: 01 Jan, 2045</small>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-3">
      <div class="card-body">
        <div class="d-flex flex-column flex-lg-row">
        <img class="rounded" src="com-logo-3.jpg" alt=""/>
          <div class="row">
            <div class="col-sm-12 col-md-8">
              <h4 class="ps-4">Product Designer</h4>
                <span class="text-truncate"><icons.FaMapMarkerAlt/> New York, USA</span>
                <span class="text-truncate"><icons.FaRegClock/> Full Time</span>
                <span class="text-truncate"><icons.FaMoneyBill/> $123 - $456</span>
            </div>
            <div class="col-sm-12 col-md-4">
                <a class="btn btn-light btn-square me-3" href=""><icons.FaRegHeart/></a>
                <a class="btn btn-info" href="">Apply Now</a>
                <small class="text-truncate"><icons.FaCalendarAlt/> Date Line: 01 Jan, 2045</small>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-3">
      <div class="card-body">
        <div class="d-flex flex-column flex-lg-row">
        <img class="rounded" src="com-logo-4.jpg" alt=""/>
          <div class="row">
            <div class="col-sm-12 col-md-8">
              <h4 class="ps-4">Creative Director</h4>
                <span class="text-truncate"><icons.FaMapMarkerAlt/> New York, USA</span>
                <span class="text-truncate"><icons.FaRegClock/> Full Time</span>
                <span class="text-truncate"><icons.FaMoneyBill/> $123 - $456</span>
            </div>
            <div class="col-sm-12 col-md-4">
                <a class="btn btn-light btn-square me-3" href=""><icons.FaRegHeart/></a>
                <a class="btn btn-info" href="">Apply Now</a>
                <small class="text-truncate"><icons.FaCalendarAlt/> Date Line: 01 Jan, 2045</small>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-3">
      <div class="card-body">
        <div class="d-flex flex-column flex-lg-row">
        <img class="rounded" src="com-logo-5.jpg" alt=""/>
          <div class="row">
            <div class="col-sm-12 col-md-8">
              <h4 class="ps-4">Wordpress Developer</h4>
                <span class="text-truncate"><icons.FaMapMarkerAlt/> New York, USA</span>
                <span class="text-truncate"><icons.FaRegClock/> Full Time</span>
                <span class="text-truncate"><icons.FaMoneyBill/> $123 - $456</span>
            </div>
            <div class="col-sm-12 col-md-4">
                <a class="btn btn-light btn-square me-3" href=""><icons.FaRegHeart/></a>
                <a class="btn btn-info" href="">Apply Now</a>
                <small class="text-truncate"><icons.FaCalendarAlt/> Date Line: 01 Jan, 2045</small>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div>
          <a class="btn btn-info py-3 px-5" href="">Browse More Jobs</a>
      </div>
  </div>
    </div>
  )
}
