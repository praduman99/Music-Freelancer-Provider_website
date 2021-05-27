import { Col, Drawer, Image, Row } from 'antd';
import React, { useState, useEffect } from 'react'
import { MenuOutlined, HomeFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Authentication_page from '../Authentication/Authentication_page';


// navbar styling
const navitems = {
    color: "darkgrey",
    fontFamily: "sans-serif",
}

const dropdownmenu = {
    padding: "1rem",
    fontSize: "20px"
}

const Navbar = () => {
    const [drawer, setDrawer] = useState(false);
const [drawer_Authentication, setDrawer_Authentication] = useState(false)

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    // get window dimensions
    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const onClose = () => {
        setDrawer(false);
        
    };
    const onClose_Authentication=()=>{
        setDrawer_Authentication(false)
    }
    return (

        <div>
            <Row style={{ padding: "10px 5px 5px 5px", position: "fixed", width: "100%", background: "white", zIndex: "999" }}>
                <Col span={4}>
                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdOFkJdONNVcgQtzjt6LkFzmz2xw8j1N8NeQ&usqp=CAU" width="150px" height="30px" />
                </Col>
                {windowDimensions.width >= 720 ?
                    <Col span={20}>
                        <Row>
                            <Col span={3} >
                                <Link style={navitems} to="/">Home</Link>
                            </Col>
                            <Col span={3} >
                                <Link style={navitems} to="/">Explore</Link>
                            </Col>
                            <Col span={3} >
                                <Link style={navitems} to="/">Categories</Link>
                            </Col>
                            <Col span={3} >
                                <Link style={navitems} to="/">Become a Seller</Link>
                            </Col>
                            <Col span={3} >
                                <Link style={navitems} to="/">About</Link>
                            </Col>
                            <Col span={6} style={{ textAlign: "Right" }}>
                                <div style={navitems} onClick={()=>setDrawer_Authentication(true)}>Login/Signup</div>
                            </Col>
                        </Row>
                    </Col>
                    :
                    <Col span={20} style={{ paddingLeft: "15rem" }}><MenuOutlined onClick={() => { setDrawer(true) }} style={{ fontSize: "2rem" }}></MenuOutlined></Col>
                }

            </Row>
            <Drawer

                visible={drawer}
                placement={'bottom'}
                title="Menu"
                width={"100%"}
                height={"auto"}
                onClose={onClose}
                closeIcon={false}
                style={{ textAlign: "center" }}

            >
                <div style={{ textAlign: "center", marginTop: "0rem" }}>
                    <Col style={dropdownmenu}>
                        <Link onClick={() => setDrawer(false)} style={navitems} to="/">Home</Link>
                    </Col>
                    <Col style={dropdownmenu}>
                        <Link onClick={() => setDrawer(false)} style={navitems} to="/">Explore</Link>
                    </Col>
                    <Col style={dropdownmenu}>
                        <Link onClick={() => setDrawer(false)} style={navitems} to="/sample">Categories</Link>
                    </Col>
                    <Col style={dropdownmenu}>
                        <Link onClick={() => setDrawer(false)} style={navitems} to="/sample">Become a Seller</Link>
                    </Col>
                    <Col style={dropdownmenu}>
                        <Link onClick={() => setDrawer(false)} style={navitems} to="/sample">About</Link></Col>
                        <Col style={dropdownmenu}>
                        <div  onClick={() => {setDrawer_Authentication(true);setDrawer(false)}} style={navitems} >Login/Signup</div>
                        </Col>
                </div>
            </Drawer>
            <Drawer
                placement={'right'}
                onClose={onClose_Authentication}
                visible={drawer_Authentication}
                width={windowDimensions.width >= 720 ? "30%" : "100%"}
                height={"auto"}
            >
                <Authentication_page/>

                </Drawer>

        </div>
    )
}

export default Navbar
