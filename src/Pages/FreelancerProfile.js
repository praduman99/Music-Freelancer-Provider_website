import { List, Row, Col, Image, Carousel, Rate } from 'antd'
import React, { useEffect, useState } from 'react'
import './style.css'
import { MessageOutlined, PhoneOutlined, CheckOutlined, EnvironmentOutlined } from '@ant-design/icons'
import CardsRow from '../ReusableComponents/CardsRow';
import Layout from 'antd/lib/layout/layout';
import Customer_Review from '../ReusableComponents/Customer_Review';
const data = [
    'Mixed Mater',
    'Production',
    'Fuck u buddy',

];
const data1 = [
    'Mixed Mater',
    'music',
    '5 audios',
    '3 days',
    '2 times renew',
    '5 audios',
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
        background: 'black',
    };


    return (
        <Layout className="Layout">
            <div style={{ marginTop: "5rem" }}>
                <Row justify="center" style={{ backgroundColor: "white" }}>
                    <div>
                        <Image className="Profile_Image" src="https://media.glamour.com/photos/5695f66b16d0dc3747eece9f/1:1/w_354%2Cc_limit/sex-love-life-2015-03-hot-dudes-with-dogs-main.jpg" width={windowDimensions.width > 720 ? "350px" : windowDimensions.width + "px"} height="350px" />
                    </div>
                    <Col span={16} className="Heading_Data_Profile">
                        <h1 className="Heading_FreelancerProfile">Ankel sin </h1>
                        <Row justify="center"><h3> will mix and master your song to industry standard</h3></Row>
                        <Row justify='center'>
                            <div className="Heading_Text_Profile">Rating : <Rate disabled defaultValue={4} style={{ fontSize: "15px" }} />(4.5) </div>
                            <div className="Heading_Text_Profile" > Projects in queue(4)</div>
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
                            <Col span={windowDimensions.width > 720 ? 12 : 24}><div className="Price_Profile">*₹3413/song</div>  </Col>
                        </Row>

                        <Row justify="center">
                            <Col span={windowDimensions.width > 720 ? 12 : 24} >
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
                                <h3 style={contentStyle}><audio
                                    controls
                                    src="/media/cc0-audio/t-rex-roar.mp3">
                                    Your browser does not support the
            <code>audio</code> element.
    </audio></h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}> <iframe 
                                    src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1">
                                </iframe></h3>
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
                    <h1 className="Content_Heading">Profile</h1>
                </Row>
                <Row>
                    <Col span={windowDimensions.width > 720 ? 12 : 22} style={{ padding: "1rem" }}>
                        <Row justify="space-between">
                            <div className="Heading_FreelancerProfile">
                                Ankel sin
                            </div>
                            <div style={{ fontSize: "1.5rem", paddingTop: "1.5rem" }}>
                                <EnvironmentOutlined />
                               India
                            </div>
                        </Row>
                        <Row>
                            <div>
                                A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument.
                            </div>
                        </Row>
                        <Row>
                            <div className="Bio_Headings_Profiles">Experience :</div>
                            <div className="Bio_Text_Profiles">5yrs</div>
                        </Row>
                        <Row>
                            <div className="Bio_Headings_Profiles">Experties :</div>
                            <div className="Bio_Text_Profiles">Mixing</div>
                        </Row>
                        <Row>
                            <div className="Bio_Headings_Profiles">Acheivements :</div>
                            <div className="Bio_Text_Profiles">5yrs</div>
                        </Row>
                        <Row>
                            <div className="Bio_Headings_Profiles">Highest Rating Work :</div>
                            <div className="Bio_Text_Profiles">
                                <a href="https://www.youtube.com/watch?v=KeSeFHfSqys">https://www.youtube.com/watch?v=KeSeFHfSqys</a></div>
                        </Row>
                        <Row>
                            <div className="Bio_Headings_Profiles">Collaborations :</div>
                            <div className="Bio_Text_Profiles">5yrs</div>
                        </Row>
                        <Row>
                            <div className="Bio_Headings_Profiles">Acheivements :</div>
                            <div className="Bio_Text_Profiles">5yrs</div>
                        </Row>

                        <Row>
                            <div className="Bio_Headings_Profiles">Acheivements :</div>
                            <div className="Bio_Text_Profiles">5yrs</div>
                        </Row>
                        <Row>
                            <div className="Bio_Headings_Profiles">Acheivements :</div>
                            <div className="Bio_Text_Profiles">5yrs</div>
                        </Row>
                        <Row>
                            <div className="Bio_Headings_Profiles">Acheivements :</div>
                            <div className="Bio_Text_Profiles">5yrs</div>
                        </Row>
                        <Row>
                            <div className="Bio_Headings_Profiles">Acheivements :</div>
                            <div className="Bio_Text_Profiles">5yrs</div>
                        </Row>
                    </Col>
                </Row>

                <Row>
                    <h1 className="Content_Heading">Some More Experts</h1>
                </Row>
                <CardsRow />


                <Row>
                    <h1 className="Content_Heading">Customer Reviews</h1>
                </Row>
                <Row justify="center">
                    <Col span={22}>
                        <Customer_Review />
                    </Col>
                </Row>
            </div>
        </Layout >
    )
}

export default FreelancerProfile
