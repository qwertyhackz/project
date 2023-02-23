import React from 'react';
import About from './About';
import Carousels from './Carousels';
import Category from './Category';
import Footermenu from './Footermenu';
import Joblist from './Joblist';
import Testimonial from './Testimonial';


export default function Home() {
  return (
    <>
        <Carousels/>
        <Category/>
        <About/>
        <Joblist/>
        <Testimonial/>
        <Footermenu/>
    </>
  )
}
