
import { BrowserRouter , Routes , Route } from "react-router-dom";
import "./index.css";
import Navv from "./component/Navv";
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Plans from './Pages/Plans/Plans'
import Trainers from './Pages/Trainers/Trainer'
import Notfound from './Pages/Notfound/Not'
import Gallery from './Pages/Gallery/Gallery'
import Footer from "./component/Footer";



function App() {
  return (
    
  <BrowserRouter>
  <Navv/>
  <Routes>
  <Route index element={<Home/>}/>
  
  <Route path="/About" element={<About/>}/>
  <Route path="/Home" element={<Home/>}/>
  <Route path="/Gallery" element={<Gallery/>}/>
  <Route path="/Plans" element={<Plans/>}/>
  <Route path="/Contact" element={<Contact/>}/>
  <Route path="/Trainers" element={<Trainers/>}/>
  <Route path="*" element={<Notfound/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>

  
    
   
  );
}
export default App;

