import { Row, Col, List } from 'antd'
import React, { useEffect, useState } from 'react'
import './style.css'

import { Form, Input, Button, Radio } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';


const data = [
    '#1234',
    '#1234',
    '#1234',
    '#1234',
    '#1234',
    '#1234',

]

const ServiceRequest = () => {
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

    const [form] = Form.useForm();


    const onFinish = (values) => {
        console.log(values)
    };
    return (
        <div>
            <Row className="Service_Header_background">
                <Col span={24}>
                    <h1 className="Header_heading">How Can We Help u?</h1>
                </Col>
            </Row>
            <Row justify="center">
                <Col span={windowDimensions.width > 720 ? 12 : 24}>
                    <Row>
                        <h1>create Request</h1>
                    </Row>
                    <Row>
                        <Form
                            form={form}

                            onFinish={onFinish}

                        >

                            <Form.Item label="Subject" >
                                <Input placeholder="Subject" />
                            </Form.Item>
                            <Form.Item
                                label="Description"
                            >
                                <Input placeholder="add description" />
                            </Form.Item>
                            <Form.Item>
                                <button type="submit" className="Heading_Button">
                                    Submit Request
                               </button>
                            </Form.Item>
                        </Form>
                    </Row>
                    <Row>

                    </Row>
                </Col>
                <Col span={windowDimensions.width > 720 ? 12 : 24}>
                    <Row>
                        <h1>service Requests</h1>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <button style={{ fontSize: "12px", width: "90%" }} className="Heading_Button" >Open requests</button>
                        </Col>
                        <Col span={12}>
                            <button
                                style={{ fontSize: "12px", width: "90%" }} className="Heading_Button" >Closed requests</button>
                        </Col>
                    </Row>
                    <Row justify="center">
                        <div style={{textAlign:"center",padding:"1rem"}}>
                            No data
</div>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default ServiceRequest
