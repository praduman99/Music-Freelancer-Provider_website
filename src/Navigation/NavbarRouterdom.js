
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
import sample from '../Pages/sample'
import Authentication_page from '../Authentication/Authentication_page';

const NavbarRouterdom = () => {
    return (
        <Router>
            <Navbar/>
            <Switch >
                <Route strict exact path="/"  component={Homepage}></Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default NavbarRouterdom
