import React from 'react'
import './Hero.css'
import coding from '../../assets/coding.png'
import excel from '../../assets/excel.png'
import envelope from '../../assets/envelope.png'
import willbars from '../../assets/willbars.png'


const Hero = () => {
  return (

   <div className="container-hero">

        <div className="container-hero-inner">

            <div className="container-top">
                <h1>Websites and Social Media that <span className='ct'>Perform</span></h1>
                <h3>Bespoke soical media campaingns, brand visiblity and cutting-edge web design.</h3>
                <h4>Its all about sales.</h4>
                <a className='free' href="#">Get a year free</a>
                <a className='price' href="#">Our prices</a>
            </div>
            
            <div className="container-bottom">

                <h4>Some of the companies that trust us.</h4>

                <div className="container-bottom-images">
                    <img src={envelope} alt="s" />
                    <img src={excel} alt="s" />
                    <img src={coding} alt="s" />
                    <img src={willbars} alt="s" />
                </div>
                
            </div>
        </div>
       
   </div>
  )
}

export default Hero