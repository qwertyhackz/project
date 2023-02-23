import React from 'react'
import * as icons from 'react-icons/fa';
import Carousels from './Carousels';
import './Error.css';
import Footermenu from './Footermenu';


export default function Error() {
  return (
    <>
        <Carousels/>
        <div class="container">
            <icons.FaExclamationTriangle/>
            <h1 class="display">404</h1>
            <h1 class="mb-4">Page Not Found</h1>
            <p class="mb-4">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
            <a class="btn btn-primary" href="/">Go Back To Home</a>   
        </div>
        <Footermenu/>
    </>
  )
}
