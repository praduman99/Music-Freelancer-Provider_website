import { Row, Col, Card, List, Image } from 'antd'
import { EditOutlined, EllipsisOutlined, SettingOutlined, CheckOutlined, RightSquareFilled, LeftSquareFilled, AudioOutlined, LaptopOutlined, FormOutlined, ControlOutlined, DatabaseOutlined, CustomerServiceOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react'
import './style.css'

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];
const Aboutus = () => {


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
        <div>
            <Row justify="center" className="Header_background">
                <Col span={24}>
                    <h1 className="Header_heading" style={ {fontSize: windowDimensions.width < 720 &&  "2rem" }}>About the Logo</h1>
                </Col>
            </Row>
            <Row justify="start">
                <Col>
                <h1 className="Content_Heading">
                    Who we are?
                </h1>
                </Col>
            </Row>
            <Row justify="start" style={{backgroundColor:"black",color:"white",padding:"3rem 0rem 3rem 0rem"}}>
                <Col span={18} >
               <p  className="aboutHover">Online Grammar and Writing Checker To Help You Deliver Impeccable, Mistake-free Writing. Grammarly Has a Tool For Just About Every Kind Of Writing You Do. Try It Out For Yourself! Easily Improve Any Text. Find and Add Sources Fast. Improve Word Choice.
               Online Grammar and Writing Checker To Help You Deliver Impeccable, Mistake-free Writing. Grammarly Has a Tool For Just About Every Kind Of Writing You Do. Try It Out For Yourself! Easily Improve Any Text. Find and Add Sources Fast. Improve Word Choice.
               Online Grammar and Writing Checker To Help You Deliver Impeccable, Mistake-free Writing. Grammarly Has a Tool For Just About Every Kind Of Writing You Do. Try It Out For Yourself! Easily Improve Any Text. Find and Add Sources Fast. Improve Word Choice.</p> 
               </Col>
            </Row>
            <Row justify="start">
                <Col>
                <h1 className="Content_Heading">
                  What we provide?
                </h1>
                </Col>
            </Row>
            <Row justify="start" style={{backgroundColor:"DarkRed",color:"white",padding:"3rem 0rem 3rem 0rem"}}>
                <Col span={18} >
               <p className="aboutHover">Online Grammar and Writing Checker To Help You Deliver Impeccable, Mistake-free Writing. Grammarly Has a Tool For Just About Every Kind Of Writing You Do. Try It Out For Yourself! Easily Improve Any Text. Find and Add Sources Fast. Improve Word Choice.
               Online Grammar and Writing Checker To Help You Deliver Impeccable, Mistake-free Writing. Grammarly Has a Tool For Just About Every Kind Of Writing You Do. Try It Out For Yourself! Easily Improve Any Text. Find and Add Sources Fast. Improve Word Choice.
               Online Grammar and Writing Checker To Help You Deliver Impeccable, Mistake-free Writing. Grammarly Has a Tool For Just About Every Kind Of Writing You Do. Try It Out For Yourself! Easily Improve Any Text. Find and Add Sources Fast. Improve Word Choice.</p> 
               </Col>
            </Row>
            <Row justify="start">
                <Col>
                <h1 className="Content_Heading">
                    Who we are?
                </h1>
                </Col>
            </Row>
            <Row justify="start" style={{backgroundColor:"Darkorange",color:"white",padding:"3rem 0rem 3rem 0rem"}}>
                <Col span={18} >
               <p  className="aboutHover">Online Grammar and Writing Checker To Help You Deliver Impeccable, Mistake-free Writing. Grammarly Has a Tool For Just About Every Kind Of Writing You Do. Try It Out For Yourself! Easily Improve Any Text. Find and Add Sources Fast. Improve Word Choice.
               Online Grammar and Writing Checker To Help You Deliver Impeccable, Mistake-free Writing. Grammarly Has a Tool For Just About Every Kind Of Writing You Do. Try It Out For Yourself! Easily Improve Any Text. Find and Add Sources Fast. Improve Word Choice.
               Online Grammar and Writing Checker To Help You Deliver Impeccable, Mistake-free Writing. Grammarly Has a Tool For Just About Every Kind Of Writing You Do. Try It Out For Yourself! Easily Improve Any Text. Find and Add Sources Fast. Improve Word Choice.</p> 
               </Col>
            </Row>
            
            <Row justify="start">
                <Col>
                <h1 className="Content_Heading">
                    Ceo Of Logo
                </h1>
                </Col>
            </Row>
            <Row justify="start" style={{backgroundColor:"brown",color:"white",padding:"3rem 0rem 3rem 0rem"}}>
                <Col span={18} >
               <p>Online Grammar and Writing Checker To Help You Deliver Impeccable, Mistake-free Writing. Grammarly Has a Tool For Just About Every Kind Of Writing You Do. Try It Out For Yourself! Easily Improve Any Text. Find and Add Sources Fast. Improve Word Choice.
               Online Grammar and Writing Checker To Help You Deliver Impeccable, Mistake-free Writing. Grammarly Has a Tool For Just About Every Kind Of Writing You Do. Try It Out For Yourself! Easily Improve Any Text. Find and Add Sources Fast. Improve Word Choice.
               Online Grammar and Writing Checker To Help You Deliver Impeccable, Mistake-free Writing. Grammarly Has a Tool For Just About Every Kind Of Writing You Do. Try It Out For Yourself! Easily Improve Any Text. Find and Add Sources Fast. Improve Word Choice.</p> 
               </Col>
            </Row>
            
        </div>

    )
}

export default Aboutus
