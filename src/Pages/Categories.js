import React, { useState } from 'react'
import './style.css'
import { EditOutlined, EllipsisOutlined, SettingOutlined, CheckOutlined, RightSquareFilled, LeftSquareFilled, AudioOutlined, LaptopOutlined, FormOutlined, ControlOutlined, DatabaseOutlined, CustomerServiceOutlined } from '@ant-design/icons';
import { Layout, Row, Col, Slider } from 'antd'
import CardsRow from '../ReusableComponents/CardsRow'
import { disable } from 'debug';
import { darkorange } from 'color-name';


const budget = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000]

const Categories = () => {
    const [budgetslidervalue, setBudgetslidervalue] = useState(1000)
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
                    <h1 className="Content_Heading" > Select Project Budget</h1>
                </Row>
                <Row justify="center">
                    <Col span={16}>
                        <Slider tooltipVisible={false} min={100} max={20000} value={budgetslidervalue} defaultValue={1000} onChange={(e) => {
                            setBudgetslidervalue(e)
                        }} />
                        <Row justify={'center'}>
                            {budget.map((item, index) => {
                                return (<div key={index}>
                                    <div style={{ padding: ".5rem", background: "darkorange", margin: "5px" }} onClick={() => setBudgetslidervalue(item)}> ₹ {item}</div>
                                </div>)
                            })}
                        </Row>

                    </Col>
                </Row>

                <Row justify={'center'}>
                    <h1 style={{ fontSize: "4rem" }}>₹ 0-{budgetslidervalue}</h1>
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
                    <h1 className="Content_Heading" > Genre</h1>
                </Row>

                <CardsRow />

            </Layout>

        </div >
    )
}

export default Categories
