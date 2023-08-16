import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
const FAQs = () => {
  return (
    <div className='container' id='acc'>
    <Accordion defaultActiveKey="0" id='accc'>
     <div id='acc1'>
     <Accordion.Item eventKey="0" id='aci1'>
     <Accordion.Header>How often should I exercise?</Accordion.Header>
     <Accordion.Body>
     Consectetur adipisicing elit. Non ipsa dolorem, rem consequatur eum omnis ex,
      fuga temporibus qui nesciunt odio aliquam commodi culpa inventore ut similique repellendus perferendis sint!
     </Accordion.Body>
   </Accordion.Item>
   <Accordion.Item eventKey="1" id='aci2'>
     <Accordion.Header>What time of day is best to work out?</Accordion.Header>
     <Accordion.Body>
     Distinctio nihil blanditiis accusantium atque, quo maxime inventore eum! Cum dolorem quibusdam amet et qui. Eos, omnis beatae? Quas, est at! Molestiae quidem ab
      soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit.
     </Accordion.Body>
   </Accordion.Item>
   <Accordion.Item eventKey="2" id='aci3'>
   <Accordion.Header>How long should my workouts be?</Accordion.Header>
   <Accordion.Body>
   In publishing and graphic design, Lorem ipsum is a placeholder text commonly
    used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
   </Accordion.Body>
 </Accordion.Item>
     </div>

     <div id='acc2'>
     <Accordion.Item eventKey="3" id='aci4'>
     <Accordion.Header>Do I need to warm up before my workouts?</Accordion.Header>
     <Accordion.Body>
     Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus 
     placeat consectetur nisi cupiditate? Qui totam est omnis dolor nobis quisquam veritatis a!
     </Accordion.Body>
   </Accordion.Item>
   <Accordion.Item eventKey="4" id='aci5'>
     <Accordion.Header>Should I do strength training, cardio or both?</Accordion.Header>
     <Accordion.Body>
     Maiores fuga, cum praesentium esse laudantium! Distinctio nihil blanditiis accusantium atque, quo maxime inventore eum! Cum dolorem quibusdam amet et qui.
     </Accordion.Body>
   </Accordion.Item>
   <Accordion.Item eventKey="5" id='aci6'>
   <Accordion.Header>Should I lift weights for strength training?</Accordion.Header>
   <Accordion.Body>
   Quas, est at! Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit,
    consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate.
   </Accordion.Body>
 </Accordion.Item>
     </div>
    </Accordion>
    </div>
  )
}

export default FAQs