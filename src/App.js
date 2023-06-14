import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from 'react-router-dom'
import Bannar from './Components/Bannar/Bannar'
import Contact from './Components/Contact/Contact'
import Navigation from './Components/Navogation/Navigation'
import Services from './Components/Services/Services'
import AddService from './Components/AddService/AddService'
import Home from './Components/Home/Home'
import UpdateService from './Components/UpdateServices';

function App() {
  return (
    <div>
<Navigation/>

<Routes>
<Route path="/bannar" element={<Bannar />}/>
<Route path="/contact" element={<Contact />}/>
<Route path="/services" element={<Services />}/>
<Route path="/Home" element={<Home />}/>
<Route path="/Addservice" element={<AddService />}/>
<Route path="/updateService/:serviceId" element={<UpdateService />} />
</Routes>
    </div>
  );
}

export default App;
