import React from 'react'
import '../Pages/Trainers/Trainer.css'
const Train = () => {
  return (
    <div>
    <div id='trainer'>
    <h3>Our Trainers</h3>
    <p>Fruga itaque ducimus, ad arnet presentation suscipt sit, 
    assumenda nihil officia totarn animi culpa nobis nemo natus doloremque?</p>
    </div>
    <div className='container' id='cardds'>
    <div id='c1'>
    <img src={require('./Photos/trainer1.jpg')} alt='trainer'></img>
    <h3>John Doe</h3>
    <p>Aerobic Trainer</p>
    <div id='llii'>
    <a href='/'><i class="fa-brands fa-instagram"></i></a>
    <a href='/'><i class="fa-brands fa-twitter"></i></a>
    <a href='/'><i class="fa-brands fa-facebook"></i></a>
    <a href='/'><i class="fa-brands fa-linkedin-in"></i></a>
    </div>
    </div>

    <div id='c2'>
    <img src={require('./Photos/trainer2.jpg')} alt='trainer'></img>
    <h3>Danial Vioe</h3>
    <p>Speed Trainer</p>
    <div id='llii'>
    <a href='/'><i class="fa-brands fa-instagram"></i></a>
    <a href='/'><i class="fa-brands fa-twitter"></i></a>
    <a href='/'><i class="fa-brands fa-facebook"></i></a>
    <a href='/'><i class="fa-brands fa-linkedin-in"></i></a>
    </div>
    </div>

    <div id='c3'>
    <img src={require('./Photos/trainer3.jpg')} alt='trainer'></img>
    <h3>Edem quiest</h3>
    <p>Aerobic Trainer</p>
    <div id='llii'>
    <a href='/'><i class="fa-brands fa-instagram"></i></a>
    <a href='/'><i class="fa-brands fa-twitter"></i></a>
    <a href='/'><i class="fa-brands fa-facebook"></i></a>
    <a href='/'><i class="fa-brands fa-linkedin-in"></i></a>
    </div>
    </div>

    <div id='c4'>
    <img src={require('./Photos/trainer4.jpg')} alt='trainer'></img>
    <h3>Shatta Eale</h3>
    <p>Body Composition Trainer</p>
    <div id='llii'>
    <a href='/'><i class="fa-brands fa-instagram"></i></a>
    <a href='/'><i class="fa-brands fa-twitter"></i></a>
    <a href='/'><i class="fa-brands fa-facebook"></i></a>
    <a href='/'><i class="fa-brands fa-linkedin-in"></i></a>
    </div>
    </div>

    <div id='c5'>
    <img src={require('./Photos/trainer5.jpg')} alt='trainer'></img>
    <h3>Diana Ayi</h3>
    <p>Circuit Trainer</p>
    <div id='llii'>
    <a href='/'><i class="fa-brands fa-instagram"></i></a>
    <a href='/'><i class="fa-brands fa-twitter"></i></a>
    <a href='/'><i class="fa-brands fa-facebook"></i></a>
    <a href='/'><i class="fa-brands fa-linkedin-in"></i></a>
    </div>
    </div>

    <div id='c6'>
    <img src={require('./Photos/trainer6.jpg')} alt='trainer'></img>
    <h3>Wayne Carter</h3>
    <p>Physicall Intelligance Trainer</p>
    <div id='llii'>
    <a href='/'><i class="fa-brands fa-instagram"></i></a>
    <a href='/'><i class="fa-brands fa-twitter"></i></a>
    <a href='/'><i class="fa-brands fa-facebook"></i></a>
    <a href='/'><i class="fa-brands fa-linkedin-in"></i></a>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Train