import "./HomeimgStyle.css"

import React from 'react'
import Consult from '../assets/consult.jpg'
import { Link } from "react-router-dom"

const Homeimg = () => {
  return (
    <div className="home">
        <div className="mask">
          <img className="consultimg"
          src={Consult} alt="Consult"/>
        </div>
        <div className="content">
            <p>
                i'm a Consultant
            </p>
            <h1>
                Consultant
            </h1>
           <div>
            <Link to="/career" className="btn"> Services
            </Link>
            <Link to="/contact" className="btn btn-light"> contact
            </Link>
           </div>
        </div>
    </div>
    
  )
}

export default Homeimg