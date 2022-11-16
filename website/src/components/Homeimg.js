import "./HomeimgStyle.css"

import React from 'react'
import Consult from '../assets/Homeimg.jpg'
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
                welcome to F-Y
            </p>
            <h1>
              Consultant

            </h1>
           <div>
            <Link to="/service" className="btn"> Services
            </Link>
            <Link to="/contact" className="btn btn-light"> Contact us
            </Link>
           </div>
        </div>
    </div>
    
  )
}

export default Homeimg