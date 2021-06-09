import './App.css';
import 'antd/dist/antd.css';

import Footer from './Pages/Footer'
import Homepage from './Pages/Homepage';
import Navbar from './Navigation/Navbar'
import Loader from './utility/Loader';
import Aboutus from './Pages/Aboutus';
import ServiceRequest from './Pages/ServiceRequest';
import FreelancerProfile from './Pages/FreelancerProfile';
import CardsRow from './ReusableComponents/CardsRow';
// hello is the name inrfoisnrfisnfs
// oirnlfiosenf
// irkfmosefmeoafml
// oismfpsoefosekf
// oslmsirmsoemf
// posfmpseofmeoafm
// osmefposefmp[kfe]
// okfeoeafmp[om]
const App = () => {
  return (
    <div>
      <Navbar />
      <Homepage/>
      <FreelancerProfile/>
      <ServiceRequest/>
      <Footer/> 
    </div>
  );
}

export default App;
