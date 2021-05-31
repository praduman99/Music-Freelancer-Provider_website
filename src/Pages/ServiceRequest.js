import { Row, Col } from 'antd'
import React from 'react'
import './style.css'
const ServiceRequest = () => {
    return (
        <div>
            <Row className="Service_Header_background">
                <Col span={24}>
                    <h1 className="Header_heading">How Can We Help u?</h1>
                </Col>
            </Row>
            <Row>

                <Col span={12}>
                    <Row>
                        <h1 className="Content_Heading">
                            Create Service Request
                        </h1>
                    </Row>
                </Col>
                <div>
                <Col span={12}>
                    <Row>
                        <h1 className="Content_Heading">
                            Service Requests
</h1>
                    </Row>
                </Col>
                </div>
            </Row>
        </div>
    )
}

export default ServiceRequest
