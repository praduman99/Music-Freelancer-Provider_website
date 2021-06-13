import { Row, Layout, Col, Divider, Button, Image, Card, Avatar, List, Typography, Divide, Carousel } from 'antd'
import React, { useState, useEffect } from 'react'
import '../Pages/style.css'
import { EditOutlined, EllipsisOutlined, SettingOutlined, CheckOutlined, RightSquareFilled, LeftSquareFilled, AudioOutlined, LaptopOutlined, FormOutlined, ControlOutlined, DatabaseOutlined, CustomerServiceOutlined } from '@ant-design/icons';
import Loader from '../utility/Loader';
import CardsRow from '../ReusableComponents/CardsRow';

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];


const Homepage = () => {

    const [isLoading, setIsLoading] = useState(false);




  
    const onChange = (a, b, c) => {
        console.log(a, b, c);
    }

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
    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 2000);

    }, [])

    return (
        <div>
            {
                isLoading ? <Loader enable={isLoading} /> :
                    <Layout className="Layout">
                        <div className="Header_Container">
                            <Row justify="center">
                                <div>
                                    <h1 className="Header_heading">We Care about Your Dreams</h1>
                                    <Divider type="horizontal" style={{ color: "darkorange", fontWeight: "900", fontSize: "2rem" }}>___________</Divider>
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <p className="Heading_Text" >As is described in the Law of Continuity of Gestalt psychology, in the perceptual process, people usually tend to understand the object in the way that it is firstly perceived, to let the straight lines be straight and let the curve</p>
                                    </div>
                                    <div style={{ textAlign: "center", paddingBottom: "10rem" }}>
                                        <button className="Heading_Button">Signup</button>
                                    </div>
                                </div>
                            </Row>
                        </div>
                        {/* */}

                        <Row justify="center">
                            <Col span={12} style={{ textAlign: "center" }} >
                                <Image src="https://images.unsplash.com/photo-1559732277-7453b141e3a1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" height="auto" preview={false}></Image>
                            </Col>
                            <div style={{ background: "white" }} >
                                <Col>
                                    <List
                                        size="small"
                                        header={<h1 style={{ fontFamily: "serif", fontSize: "2rem", textAlign: "center",color:"darkorange" }}>You always Need a pro in Game !</h1>}
                                        dataSource={data}
                                        // style={{textAlign:'center'}}
                                        renderItem={item => (
                                            <List.Item>
                                                <CheckOutlined /> {item}
                                            </List.Item>
                                        )}
                                    />
                                </Col>
                            </div>



                        </Row>

                        {/* List */}
                        <Row>
                            <h1 className="Content_Heading">Top Rating Producers</h1>
                        </Row>
                        <CardsRow/>
                        <Row>
                            <h1 className="Content_Heading">Top Rating Mixing Engineer</h1>
                        </Row>
                        <CardsRow/>
                        <Row>
                            <h1 className="Content_Heading">Explore Our Market</h1>
                        </Row>
                        <Row className="content_slab">
                            <Row style={{ width: "100%", padding: "60px 10px 5px 30px" }} gutter={24}>
                                <Col span={8} className="Hover"><ControlOutlined className="Iconname" size={5} /><p className="Iconname">Mix&Matser</p></Col>
                                <Col span={8} className="Hover"><LaptopOutlined className="Iconname" size={5} /><p className="Iconname">Producer</p></Col>
                                <Col span={8} className="Hover"><CustomerServiceOutlined className="Iconname" size={5} /><p className="Iconname">Composer</p></Col>
                            </Row>
                            <Row style={{ width: "100%", padding: "60px 10px 5px 30px" }} gutter={20}>

                                <Col span={8} className="Hover"><FormOutlined className="Iconname" size={5} /><p className="Iconname">Lyricist</p></Col>
                                <Col span={8} className="Hover"><DatabaseOutlined className="Iconname" size={5} /><p className="Iconname">Instrument Player</p></Col>
                                <Col span={8} className="Hover"> <AudioOutlined className="Iconname" size={5} /><p className="Iconname">Singer</p></Col>

                            </Row>
                        </Row>

                        <Row>

                            <h1 className="Content_Heading">Customer Reviews </h1>
                        </Row>
                        <Row justify="center">
                            <Col span={12}>
                                <iframe style={{ height: windowDimensions.width > 720 ? "400px" : 'auto' }} width="100%"
                                    src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1">
                                </iframe>

                            </Col>
                        </Row>

                    </Layout>
            }
        </div>
    )
}

export default Homepage
