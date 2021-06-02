import { Row, Col, Image } from 'antd'
import React, { useEffect, useState } from 'react'
import './style.css'
import { MessageOutlined, PhoneOutlined } from '@ant-design/icons'
const FreelancerProfile = () => {
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


    return (
        <div style={{ marginTop: "3rem" }}>
            <Row justify="center">
                <div>
                    <Image className="Profile_Image" src="https://images.unsplash.com/photo-1622398565884-861701ad4c0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" width={windowDimensions.width > 720 ? "350px" : windowDimensions.width + "px"} height="350px" />
                </div>
                <Col span={16} className="Heading_Data_Profile">
                    <h1 className="Heading_FreelancerProfile">Ankel sin </h1>
                    <Row justify="center"><h3> will mix and master your song to industry standard</h3></Row>
                    <Row justify='center' gutter={20}>
                        <div className="Heading_Text_Profile">Rating⭐⭐⭐⭐⭐(4.5) </div>
                        <div className="Heading_Text_Profile"> Projects in queue(4)</div>
                    </Row>
                    <Row justify="center">
                        <h4>Services</h4>
                    </Row>
                    <Row>
                        <Col span={24}></Col>
                    </Row>
                    <Row justify="center">
                        <Col span={windowDimensions.width > 720 ? 8 : 12} >
                            <button className="Heading_Button">
                                <div>
                                    <MessageOutlined />
                                    <span>Message</span>
                                </div>
                            </button>
                        </Col>
                        <Col span={windowDimensions.width > 720 ? 8 : 12}>
                            <button className="Heading_Button">
                               <span><PhoneOutlined /></span>
                               Call
                            </button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default FreelancerProfile
