import React, { useState } from 'react'
import './Work.css'

import { TabsData } from '../TabsData'
import tes from '../../assets/tes.jpg'

const Work = () => {
    const [activeTab, setActiveTab] = useState(0);
    const handleClicked = (id) =>{
        setActiveTab(id);
     };
    
  return (
    <div className='work-container-work'>

        <div className="work-container-top">
            <h1>All-in-one solution for websites and social media</h1>
            <h4>Expert design, seamless functionality, and tailored solutions to help you stand out and succeed.</h4>
        </div>

        <div className="work-container-bottom">
            <div className="work-content-left">
            <ul>
                <li>
                    {
                TabsData.map((tab,i) => (
                    // Apply "active" class if the active tab
                    <li key={i} className={activeTab === i ? "active" : ""}
                    onClick={() => handleClicked(i)}
                    >
                        {tab.title}
                    </li>
                ))}
                </li>
            
        </ul>
        <div className="content">
            {
                TabsData.map((data,i) => (
                    // apply "active class"
                    <div className={`desc ${activeTab === i ? "active" : ""}`} key={i}>
                        {data.desc}
                    </div>
                ))
            }
        </div>

            </div>
            <div className="work-content-right">
                <img src={tes} alt="s" />
            </div>
        </div>
    </div>
  )
}

export default Work