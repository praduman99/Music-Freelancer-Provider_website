import { List, Row, Col, Image, Carousel } from 'antd'
import React, { useEffect, useState } from 'react'
import './style.css'
import { MessageOutlined, PhoneOutlined, CheckOutlined } from '@ant-design/icons'
import CardsRow from '../ReusableComponents/CardsRow';
import Layout from 'antd/lib/layout/layout';
const data = [
    'Mixed Mater',
    'Production',
    'Fuck u buddy',
 
];
const data1 = [
    'Mixed Mater',
    'Sonlyrics',
    'Fuck u buddy',
];
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


    function onChange(a, b, c) {
        console.log(a, b, c);
    }

    const contentStyle = {
        height: '300px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };


    return (
        <Layout className="Layout">
            <div style={{ marginTop: "3rem" }}>
                <Row justify="center" style={{ backgroundColor: "white" }}>
                    <div>
                        <Image className="Profile_Image" src="https://images.unsplash.com/photo-1622398565884-861701ad4c0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" width={windowDimensions.width > 720 ? "350px" : windowDimensions.width + "px"} height="350px" />
                    </div>
                    <Col span={16} className="Heading_Data_Profile">
                        <h1 className="Heading_FreelancerProfile">Ankel sin </h1>
                        <Row justify="center"><h3> will mix and master your song to industry standard</h3></Row>
                        <Row justify='center'>
                            <div className="Heading_Text_Profile">Rating⭐⭐⭐⭐⭐(4.5) </div>
                            <div className="Heading_Text_Profile"> Projects in queue(4)</div>
                        </Row>

                        <Row justify="center" >

                            <Col span={14} style={{ alignItems: "end" }}>
                                <Row justify="center">
                                    <h3 style={{ fontFamily: "monospace", fontWeight: "800" }}>Services</h3>
                                </Row>
                                <Row justify={'center'}>
                                    {data.map(item => {
                                        return (<div className="Profile_services">{item}</div>)
                                    })}
                                </Row>
                            </Col>
                            <Col span={8} ><Row justify="center"> <h1  style={{fontSize:"4rem",padding:"20px 0px 0px 20px"}}>₹148 <span className="Price_Profile">/Song</span></h1> </Row></Col>
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
                            {/* <Col span={windowDimensions.width > 720 ? 8 : 12}>
                            <button className="Heading_Button">
                               <span><PhoneOutlined /></span>
                               Call
                            </button>
                        </Col> */}
                        </Row>
                    </Col>
                </Row>
                <Row style={{ padding: "1rem" }}>
                    <Col span={windowDimensions.width > 720 ? 16 : 24} >
                        <Carousel afterChange={onChange} pauseOnDotsHover>
                            <div>
                                <h3 style={contentStyle}>1</h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}>2</h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}>3</h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}>4</h3>
                            </div>
                        </Carousel>
                    </Col>

                    <List
                        header={<div><h1 className="Price_card_heading"> Check Out Plan Here!</h1></div>}
                        footer={<div style={{ textAlign: 'center' }}><button className="Heading_Button" style={{ width: "100%" }}>Continue(₹143)</button></div>}
                        bordered
                        dataSource={data1}
                        style={{ width: windowDimensions.width > 720 ? "30%" : "100%" }}
                        renderItem={item => (
                            <List.Item>

                                <CheckOutlined style={{ color: "darkorange", fontSize: "1rem" }} />  {item}
                            </List.Item>
                        )}
                    />
                </Row>

                <Row>
                    <h1 className="Content_Heading">Some More Experts</h1>
                </Row>
                <CardsRow />

            </div>
        </Layout>
    )
}

export default FreelancerProfile
