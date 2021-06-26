import React, { useState } from 'react'
import './style.css'
import { EditOutlined, EllipsisOutlined, SettingOutlined, CheckOutlined, RightSquareFilled, LeftSquareFilled, AudioOutlined, LaptopOutlined, FormOutlined, ControlOutlined, DatabaseOutlined, CustomerServiceOutlined } from '@ant-design/icons';
import { Layout, Row, Col, Slider } from 'antd'
import CardsRow from '../ReusableComponents/CardsRow'
import { disable } from 'debug';
import { setState } from 'expect';

const Categories = () => {
    const [budgetslidervalue, setBudgetslidervalue] = useState(0);
    return (
        <div>
            <Layout>

                <Row justify="center" className="Categories_Header_background">
                    <Col span={24}>
                        <div>
                            <h1 className="Categories_Header_heading" style={{ color: "black" }}>Choose What You Need ?</h1>
                        </div>

                    </Col>
                </Row>
                <Row>
                    <h1 className="Content_Heading" >Type of Service Required</h1>
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
                    <h1 className="Content_Heading" > Project Budget</h1>
                </Row>

                <Slider onChange={(e) => {
                    setBudgetslidervalue(e)
                }} />
                <Row justify="center">
                    <h1 >₹ 0 ----- ₹ {budgetslidervalue}</h1>
                </Row>


                <CardsRow />

            </Layout>

        </div>
    )
}

export default Categories
