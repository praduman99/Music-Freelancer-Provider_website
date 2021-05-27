
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
       <>
            <Navbar />
            <Homepage/>
            {/* <Switch >

                <Route strict exact path="/">
                    <Redirect to="/home" />
                </Route>
                <Route exact path="/home" component={Homepage}></Route>
            </Switch> */}
            <Footer />
       </>
    );
}

export default NavbarRouterdom
