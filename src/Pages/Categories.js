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
                        <h1 className="Categories_Header_heading" style={{ color: "black" }}>Choose What You Need ?</h1>
                        <Row justify="center">
                            {/* <Col span="16" style={{textAlign:"center",fontSize:"1rem",textDecoration:"dashed",marginTop:"2rem"}}>
                                <h4>Choose your deal category and get a pro</h4> 
                            </Col> */}
                        </Row>
                    </Col>
                </Row>

                <CardsRow />

            </Layout>

        </div>
    )
}

export default Categories
