
import { Fragment } from 'react'
import Mheader from '../../component/Mheader'
import Value from '../../component/Value'
import FAQs from '../../component/FAQs'
import Program from '../../component/Program'




const Home = () => {
  
  return (
    
  <Fragment>
  <Mheader/>
  <Program/>
  <Value/>
  <FAQs/>
  </Fragment>
    
  )
}

Home.propTypes = {}

export default Home