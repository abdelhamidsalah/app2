import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
const Footer = () => {
  return (
    <footer>
    <div className='container'  id='foot'>
    <div id='sec1'>
    <img src={require('./Photos/logo.png')} alt='logo'></img>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam excepturl similique eius optio. Dolorum quarent piacant quis 
    nescuint nescuinttion facere</p>
    <Link><i class="fa-brands fa-linkedin-in" id='foo1'></i></Link>
    <Link><i class="fa-brands fa-facebook" id='foo1'></i></Link>
    <Link><i class="fa-brands fa-twitter" id='foo1'></i></Link>
    <Link><i class="fa-brands fa-instagram" id='foo1'></i></Link>
    </div>
    <div id='sec2'>
    <h4>Permalinks</h4>
    <div id='lll'>
    <Link to='/About'><p>About</p></Link>
    <Link to='/Plans'><p>Plans</p></Link>
    <Link to='/Trainers'><p>Trainers</p></Link>
    <Link to='/Blog'><p>Blog</p></Link>
    <Link to='/Contact'><p>Contact</p></Link>
    </div>
    </div>
    <div id='sec3'>
    <h4>Insights</h4>
    <p>Blog</p>
    <p>Case Studies</p>
    <p>Events</p>
    <p>Communities</p>
    <p>FAQs</p>
    </div>
    <div id='sec4'>
    <h4>Get In Touch</h4>
    <p>Contact Us</p>
    <p>Support</p>
    </div>
    </div>
    <hr id='hhh'></hr>
    <p id='right'>2022 EGATOR © All Rights Reserved</p>
    </footer>
  )
}

export default Footer