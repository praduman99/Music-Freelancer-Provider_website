import './App.css';
import 'antd/dist/antd.css';

import Footer from './Pages/Footer'
import Homepage from './Pages/Homepage';
import Navbar from './Navigation/Navbar'

const App = () => {
  return (
    <div>

      <Navbar />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
