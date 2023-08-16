import React from 'react'
import '../Pages/About/About.css'
const Elabout = () => {
  return (
    <div>
    <div id='about'>
    <h3>About Us</h3>
    <p>Fruga itaque ducimus, ad arnet presentation suscipt sit, 
    assumenda nihil officia totarn animi culpa nobis nemo natus doloremque?</p>
    </div>
    <div className='container' id='ab'>

    <div id='ab1'>
    <div className='col-md-6'>
    <img src={require('./Photos/about1.jpg')} alt='ab1'></img>
    </div>
    <div className='col-md-6'>
    <h2>Our Story</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet risus nunc, non maximus metus accumsan quis. Nullam id dolor efficitur, venenatis erat id, finibus ipsum. Suspendisse potenti. Vestibulum commodo mi vel lacus sollicitudin rutrum quis vel eros. Aenean ac nisi nisi. Mauris quis vestibulum neque. Donec vulputate maximus metus nec pharetra. Nam consectetur, metus quis lacinia fermentum, dui erat viverra eros, non placerat velit sapien nec ipsum. Donec tincidunt aliquam libero.
     Sed ut pulvinar neque, semper feugiat nisi. Cras dignissim lacinia volutpat. Sed pulvinar</p>
    </div>
    </div>

    <div id='ab2'>
    <div className='col-md-6'>


     <img src={require('./Photos/about2.jpg')} alt='ab1'></img>
    </div>
    
    
    <div className='col-md-6'>
    <h2>Our Vision</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet risus nunc, non maximus metus accumsan quis. Nullam id dolor efficitur, venenatis erat id, finibus ipsum. Suspendisse potenti. Vestibulum commodo mi vel lacus sollicitudin rutrum quis vel eros. Aenean ac nisi nisi. Mauris quis vestibulum neque. Donec vulputate maximus metus nec pharetra. Nam consectetur, metus quis lacinia fermentum, dui erat viverra eros, non placerat velit sapien nec ipsum. Donec tincidunt aliquam libero.
     Sed ut pulvinar neque, semper feugiat nisi. Cras dignissim lacinia volutpat. Sed pulvinar</p>
    </div>
</div>
    <div id='ab3'>
    <div className='col-md-6'>
    <img src={require('./Photos/about3.jpg')} alt='ab1'></img>
    </div>
    <div className='col-md-6'>
    <h2>Our Mission</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet risus nunc, non maximus metus accumsan quis. Nullam id dolor efficitur, venenatis erat id, finibus ipsum. Suspendisse potenti. Vestibulum commodo mi vel lacus sollicitudin rutrum quis vel eros. Aenean ac nisi nisi. Mauris quis vestibulum neque. Donec vulputate maximus metus nec pharetra. Nam consectetur, metus quis lacinia fermentum, dui erat viverra eros, non placerat velit sapien nec ipsum. Donec tincidunt aliquam libero.
     Sed ut pulvinar neque, semper feugiat nisi. Cras dignissim lacinia volutpat. Sed pulvinar</p>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Elabout