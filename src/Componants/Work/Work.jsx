import React from 'react'
import './Work.css'
import tes from '../../assets/tes.jpg'

const Work = () => {
  return (
    <div className='work-container-work'>

        <div className="work-container-top">
            <h1>All-in-one solution for websites and social media</h1>
            <h4>Expert design, seamless functionality, and tailored solutions to help you stand out and succeed.</h4>
        </div>

        <div className="work-container-bottom">
            <div className="work-content-left">
                <ul>
                    <li className='product'>
                        <span>Product Details</span><br /><br />
                        Descriptions, specifications, and variations - size, color, features.
                        High-quality photos or videos for visual appeal.
                        </li>
                    <li className='customer'><span>Customer Information</span><br /><br />
                        Contact details (name, email, phone).
                        Shipping and billing addresses.</li>
                    <li className='3'>3</li>
                    <li className='4'>4</li>
                </ul>
            </div>
            <div className="work-content-right">
                <img src={tes} alt="s" />
            </div>
        </div>
    </div>
  )
}

export default Work