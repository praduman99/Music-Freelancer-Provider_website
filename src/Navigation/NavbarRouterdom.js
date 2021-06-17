
import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom';
import Footer from '../Pages/Footer'
import Homepage from '../Pages/Homepage';
import Navbar from '../Navigation/Navbar'
import FreelancerProfile from '../Pages/FreelancerProfile'
import Authentication_page from '../Authentication/Authentication_page';
import Aboutus from '../Pages/Aboutus';
import ScrollToTop from '../ReusableComponents/ScrollToTop'

const NavbarRouterdom = () => {
    return (
        <Router>
            <ScrollToTop />
            <Navbar />
            <Switch>
                <Route exact path='/' ><Homepage /></Route>
                <Route exact path='/Music-Freelancer-Provider_website/' ><Homepage /></Route>
                <Route exact path='/About'> <Aboutus /></Route>
                <Route exact path='/Profile'><FreelancerProfile /></Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default NavbarRouterdom
