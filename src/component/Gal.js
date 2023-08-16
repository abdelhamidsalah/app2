import React from 'react'

const Gal = () => {
  return (
   <div>
   
   <div id='gal'>
   <h3>Our Gallery</h3>
   <p>Fruga itaque ducimus, ad arnet presentation suscipt sit, 
   assumenda nihil officia totarn animi culpa nobis nemo natus doloremque?</p>
   </div>
   <div className='container' id='imgs'>
   <img src={require('./Photos/gallery1.jpg')} alt='imgs'></img>
   <img src={require('./Photos/gallery2.jpg')} alt='imgs'></img>
   <img src={require('./Photos/gallery3.jpg')} alt='imgs'></img>
   <img src={require('./Photos/gallery4.jpg')} alt='imgs'></img>
   <img src={require('./Photos/gallery5.jpg')} alt='imgs'></img>
   <img src={require('./Photos/gallery6.jpg')} alt='imgs'></img>
   <img src={require('./Photos/gallery7.jpg')} alt='imgs'></img>
   <img src={require('./Photos/gallery8.jpg')} alt='imgs'></img>
   <img src={require('./Photos/gallery9.jpg')} alt='imgs'></img>
   <img src={require('./Photos/gallery10.jpg')} alt='imgs'></img>
   <img src={require('./Photos/gallery11.jpg')} alt='imgs'></img>
   <img src={require('./Photos/gallery12.jpg')} alt='imgs'></img>

   </div>
   </div>
  )
}

export default Gal