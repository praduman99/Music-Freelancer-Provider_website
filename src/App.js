import './App.css';
import 'antd/dist/antd.css';

import Footer from './Pages/Footer'
import Homepage from './Pages/Homepage';
import Navbar from './Navigation/Navbar'
import Loader from './utility/Loader';
import Aboutus from './Pages/Aboutus';
import ServiceRequest from './Pages/ServiceRequest';
import FreelancerProfile from './Pages/FreelancerProfile';

const App = () => {
  return (
    <div>
      <Navbar />
      <Homepage/>
      <FreelancerProfile/>
      <ServiceRequest/>
      <Aboutus/>
      <Footer/>
    </div>
  );
}

export default App;
