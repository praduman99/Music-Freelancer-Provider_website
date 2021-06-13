
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

import Authentication_page from '../Authentication/Authentication_page';
import Aboutus from '../Pages/Aboutus';

const NavbarRouterdom = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route render={() => {
                    return (<Redirect to='/'></Redirect>)
                }} exact component={Homepage} path='/' ></Route>
                <Route exact component={Aboutus} path='/About' />
            </Switch>
            <Footer />
        </Router>
    );
}

export default NavbarRouterdom
