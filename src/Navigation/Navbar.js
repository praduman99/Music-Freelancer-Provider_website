import { Col, Drawer, Image, Row } from 'antd';
import React, { useState, useEffect } from 'react'
import { MenuOutlined, HomeFilled } from '@ant-design/icons';
import { div } from 'react-router-dom';
import Authentication_page from '../Authentication/Authentication_page';


// navbar styling
const navitems = {
    color: "darkgrey",
    fontFamily: "sans-serif",
    lineHeight:"2.5rem"
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
            <Row style={{ padding: "10px 5px 5px 5px", position: "fixed", width: "100%", zIndex: "999",background:"black"}}>
                <Col span={4}>
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Logo%21_Logo.svg/1200px-Logo%21_Logo.svg.png" width="100px" height="40px" />
                </Col>
                {windowDimensions.width >= 720 ?
                    <Col span={20}>
                        <Row>
                            <Col span={3} >
                                <div style={navitems} >Home</div>
                            </Col>
                            <Col span={3} >
                                <div style={navitems} >Explore</div>
                            </Col>
                            <Col span={3} >
                                <div style={navitems} >Categories</div>
                            </Col>
                            <Col span={3} >
                                <div style={navitems} >Become a Seller</div>
                            </Col>
                            <Col span={3} >
                                <div style={navitems}>About</div>
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
                        <div onClick={() => setDrawer(false)} style={navitems} >Home</div>
                    </Col>
                    <Col style={dropdownmenu}>
                        <div onClick={() => setDrawer(false)} style={navitems}>Explore</div>
                    </Col>
                    <Col style={dropdownmenu}>
                        <div onClick={() => setDrawer(false)} style={navitems}>Categories</div>
                    </Col>
                    <Col style={dropdownmenu}>
                        <div onClick={() => setDrawer(false)} style={navitems}>Become a Seller</div>
                    </Col>
                    <Col style={dropdownmenu}>
                        <div onClick={() => setDrawer(false)} style={navitems} >About</div></Col>
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
