import React from 'react'
import './style.css'
import { Layout, Row, Col } from 'antd'
import CardsRow from '../ReusableComponents/CardsRow'
const Categories = () => {
    return (
        <div>
            <Layout>

                <Row justify="center" className="Categories_Header_background">
                    <Col span={24}>
                        <div>
                            <h1 className="Categories_Header_heading" style={{ color: "black" }}>Choose What You Need ?</h1>
                        </div>
                        <Row justify="center">
                                

                        </Row>
                    </Col>
                </Row>

                <Row>

                </Row>
                <CardsRow />

            </Layout>

        </div>
    )
}

export default Categories
