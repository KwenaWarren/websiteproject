import React from 'react'
import NavBar from '../components/NavBar'
import Footer from'../components/Footer'
import ServiceImg from'../components/ServiceImg'

const Service = () => {
  return (
    <div>
     <NavBar/>
     <ServiceImg heading="Services" text="Here is what we offer"/>
     <Footer/>
    </div>
  )
}

export default Service