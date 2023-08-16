import React from 'react'

import {Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Plan = () => {
  return (
    <div >
    <div id='plan'>
    <h3>Membership Plan</h3>
    <p>Fruga itaque ducimus, ad arnet presentation suscipt sit, 
    assumenda nihil officia totarn animi culpa nobis nemo natus doloremque?</p>
    </div>
 <div id='cards' className='container'>
 <div>
 <Card  id='card1'>
 
 <Card.Body>
   <Card.Title id='title'>Silver Package</Card.Title>
   <Card.Text id='text'>
    This is The Perfect Package for bigrooman who needconistant 
   </Card.Text>
   <p id='price'>$29.99/mo</p>
 </Card.Body>
<ul>
<h3>Features</h3>
<p>First Feature</p>
<p>Second Feature</p>
<p>Third Feature</p>
<p>Fourth Feature</p>
<p>Fifth Feature</p>
<p>First Feature</p>
<p>Second Feature</p>
<p>Third Feature</p>
<p>Fourth Feature</p>
<p>Fifth Feature</p>
<p>First Feature</p>
<p>Second Feature</p>
<p>Third Feature</p>
</ul>
 <Link id='linn'>Choose Plan</Link>
</Card>
 </div>

 <div>
 <Card  id='card2'>
 <Card.Body>
   <Card.Title id='title'>Gold Package</Card.Title>
   <Card.Text id='text'>
   This is The Perfect Package for bigrooman who needconistant 
   </Card.Text>
   <p id='price'>$49.99/mo</p>
 </Card.Body>
 <ul>
 <h3>Features</h3>
 <p>First Feature</p>
 <p>Second Feature</p>
 <p>Third Feature</p>
 <p>Fourth Feature</p>
 <p>Fifth Feature</p>
 <p>First Feature</p>
 <p>Second Feature</p>
 <p>Third Feature</p>
 <p>Fourth Feature</p>
 <p>Fifth Feature</p>
 <p>First Feature</p>
 <p>Second Feature</p>
 <p>Third Feature</p>
 </ul>
 <Link id='linn'>Choose Plan</Link>
</Card>
 </div>

 <div>
 <Card  id='card3'>
 <Card.Body>
   <Card.Title id='title'>Pilatinum Package</Card.Title>
   <Card.Text id='text'>
   This is The Perfect Package for bigrooman who needconistant 
   </Card.Text>
   <p id='price'>$89.99/mo</p>
 </Card.Body>
 <ul>
<h3>Features</h3>
<p>First Feature</p>
<p>Second Feature</p>
<p>Third Feature</p>
<p>Fourth Feature</p>
<p>Fifth Feature</p>
<p>First Feature</p>
<p>Second Feature</p>
<p>Third Feature</p>
<p>Fourth Feature</p>
<p>Fifth Feature</p>
<p>First Feature</p>
<p>Second Feature</p>
<p>Third Feature</p>
</ul>
<Link id='linn'>Choose Plan</Link>
</Card>
 </div>
 </div>
 </div>
  )
}

export default Plan