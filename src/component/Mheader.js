import React from 'react'
import { Link } from 'react-router-dom'
import '../Pages/Home/Home.css'
const Mheader = () => {
  return (
    <div className='container' id='head'>
    <div className='col-md-6' id='w1'>
    <h6>#100DaysOfWorKOut</h6>
    <h1>Join The Legends Of The Fitness World</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam excepturl similique eius optio. Dolorum quarent</p>
    <Link to='/Plans' id='lin1'>Get Started</Link>
    </div>
    <div className='col-md-6' id='right'>
    <div id='circle'></div>
    <img src={require("./Photos/main_header.png")} alt='pho'></img>
    </div>
    </div>
   
  )
}

export default Mheader