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
import NavbarRouterdom from './Navigation/NavbarRouterdom';

const App = () => {
  return (
    <div>
      {/* <div style={{margin:'4rem'}}>
      <Loader/>
      </div> */}
      <NavbarRouterdom/>
    </div>
  );
}

export default App;
