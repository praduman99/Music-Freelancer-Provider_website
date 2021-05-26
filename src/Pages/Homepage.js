import { Row, Layout, Col, Divider, Button, Image, Card, Avatar } from 'antd'
import React from 'react'
import '../Pages/style.css'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
const { Meta } = Card;
const choose = [
    {
        id: 1,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcu_WS7ciRH9fOqCbPyk1vI4I8WiTknpTGPA&usqp=CAU",
        Desciption: "I am using antd for my app. I need to change the color of a default Primary Button from Blue to Grey. It seems like antd doesn't provide such an option. How can I change the button color easily?",
    },
    {
        id: 2,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcu_WS7ciRH9fOqCbPyk1vI4I8WiTknpTGPA&usqp=CAU",
        Desciption: "I am using antd for my app. I need to change the color of a default Primary Button from Blue to Grey. It seems like antd doesn't provide such an option. How can I change the button color easily?",
    },
    {
        id: 3,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcu_WS7ciRH9fOqCbPyk1vI4I8WiTknpTGPA&usqp=CAU",
        Desciption: "I am using antd for my app. I need to change the color of a default Primary Button from Blue to Grey. It seems like antd doesn't provide such an option. How can I change the button color easily?",
    },
    {
        id: 4,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcu_WS7ciRH9fOqCbPyk1vI4I8WiTknpTGPA&usqp=CAU",
        Desciption: "I am using antd for my app. I need to change the color of a default Primary Button from Blue to Grey. It seems like antd doesn't provide such an option. How can I change the button color easily?",
    },

]
const choose1 = [
    {
        id: 1,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcu_WS7ciRH9fOqCbPyk1vI4I8WiTknpTGPA&usqp=CAU",
        Desciption: "I am using antd for my app. I need to change the color of a default Primary Button from Blue to Grey. It seems like antd doesn't provide such an option. How can I change the button color easily?",
    },
    {
        id: 2,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcu_WS7ciRH9fOqCbPyk1vI4I8WiTknpTGPA&usqp=CAU",
        Desciption: "I am using antd for my app. I need to change the color of a default Primary Button from Blue to Grey. It seems like antd doesn't provide such an option. How can I change the button color easily?",
    },
    {
        id: 3,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcu_WS7ciRH9fOqCbPyk1vI4I8WiTknpTGPA&usqp=CAU",
        Desciption: "I am using antd for my app. I need to change the color of a default Primary Button from Blue to Grey. It seems like antd doesn't provide such an option. How can I change the button color easily?",
    },
    {
        id: 4,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcu_WS7ciRH9fOqCbPyk1vI4I8WiTknpTGPA&usqp=CAU",
        Desciption: "I am using antd for my app. I need to change the color of a default Primary Button from Blue to Grey. It seems like antd doesn't provide such an option. How can I change the button color easily?",
    },

    {
        id: 4,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcu_WS7ciRH9fOqCbPyk1vI4I8WiTknpTGPA&usqp=CAU",
        Desciption: "I am using antd for my app. I need to change the color of a default Primary Button from Blue to Grey. It seems like antd doesn't provide such an option. How can I change the button color easily?",
    },

    {
        id: 4,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcu_WS7ciRH9fOqCbPyk1vI4I8WiTknpTGPA&usqp=CAU",
        Desciption: "I am using antd for my app. I need to change the color of a default Primary Button from Blue to Grey. It seems like antd doesn't provide such an option. How can I change the button color easily?",
    },

    {
        id: 4,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcu_WS7ciRH9fOqCbPyk1vI4I8WiTknpTGPA&usqp=CAU",
        Desciption: "I am using antd for my app. I need to change the color of a default Primary Button from Blue to Grey. It seems like antd doesn't provide such an option. How can I change the button color easily?",
    },

    {
        id: 4,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcu_WS7ciRH9fOqCbPyk1vI4I8WiTknpTGPA&usqp=CAU",
        Desciption: "I am using antd for my app. I need to change the color of a default Primary Button from Blue to Grey. It seems like antd doesn't provide such an option. How can I change the button color easily?",
    },

    {
        id: 4,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcu_WS7ciRH9fOqCbPyk1vI4I8WiTknpTGPA&usqp=CAU",
        Desciption: "I am using antd for my app. I need to change the color of a default Primary Button from Blue to Grey. It seems like antd doesn't provide such an option. How can I change the button color easily?",
    },

    {
        id: 4,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcu_WS7ciRH9fOqCbPyk1vI4I8WiTknpTGPA&usqp=CAU",
        Desciption: "I am using antd for my app. I need to change the color of a default Primary Button from Blue to Grey. It seems like antd doesn't provide such an option. How can I change the button color easily?",
    },

    {
        id: 4,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcu_WS7ciRH9fOqCbPyk1vI4I8WiTknpTGPA&usqp=CAU",
        Desciption: "I am using antd for my app. I need to change the color of a default Primary Button from Blue to Grey. It seems like antd doesn't provide such an option. How can I change the button color easily?",
    },

    {
        id: 4,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcu_WS7ciRH9fOqCbPyk1vI4I8WiTknpTGPA&usqp=CAU",
        Desciption: "I am using antd for my app. I need to change the color of a default Primary Button from Blue to Grey. It seems like antd doesn't provide such an option. How can I change the button color easily?",
    },

    {
        id: 4,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcu_WS7ciRH9fOqCbPyk1vI4I8WiTknpTGPA&usqp=CAU",
        Desciption: "I am using antd for my app. I need to change the color of a default Primary Button from Blue to Grey. It seems like antd doesn't provide such an option. How can I change the button color easily?",
    },

]

const Homepage = () => {
    return (
        <div>
            <Layout>
                <div className="Header_Container">
                    <Row justify="center">
                        <div>
                            <h1 className="Header_heading">We Care about Your Dreams</h1>
                            <Divider type="horizontal" style={{ color: "orange", fontWeight: "900", fontSize: "2rem" }}>___________</Divider>
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
                    <h1 className="Content_Heading" style={{ textAlign: "center" }}>WHY Chose from Here</h1>
                </Row>
                <Row justify="center">
                    {choose.map((item, index) => {
                        return (
                            <Card
                                hoverable
                                style={{ width: 200, margin: "1rem", border: "none" }}
                                cover={<img alt="example" src={item.image} />}
                            >
                                <Meta description={item.Desciption} />
                            </Card>
                        )
                    })}
                </Row>

                {/* List */}
                <Row>
                    <h1 className="Content_Heading">Top Rating Producers</h1>
                </Row>
                <Row justify="center" >

                    <div style={{ display: "flex", overflowX: "scroll" }} >
                        {choose1.map((item, index) => {
                            return (
                                <Card
                                hoverable
                                    key={index}
                                    style={{ width: 300, margin: "5px" }}
                                    cover={
                                        <img
                                            alt="example"
                                            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                                            style={{ width: 300, margin: "5px" }}
                                        />
                                    }
                                    actions={[
                                        <SettingOutlined key="setting" />,
                                        <EditOutlined key="edit" />,
                                        <EllipsisOutlined key="ellipsis" />,
                                    ]}
                                >
                                    <Meta
                                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                        title="Card title"
                                        description="This is the description"
                                    />
                                </Card>
                            )
                        })}
                    </div>

                </Row>
                {/* List */}
                <Row>
                    <h1 className="Content_Heading">Top Rating Producers</h1>
                </Row>
                <Row justify="center" >

                    <div style={{ display: "flex", overflowX: "scroll" }}>
                        {choose1.map((item, index) => {
                            return (
                                <Card
                                hoverable
                                    key={index}
                                    style={{ width: 300, margin: "5px" }}
                                    cover={
                                        <img
                                            alt="example"
                                            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.pn"
                                            style={{ width: 300, margin: "5px" }}
                                        />
                                    }
                                    actions={[
                                        <SettingOutlined key="setting" />,
                                        <EditOutlined key="edit" />,
                                        <EllipsisOutlined key="ellipsis" />,
                                    ]}
                                >
                                    <Meta
                                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                        title="Card title"
                                        description="This is the description"
                                    />
                                </Card>
                            )
                        })}
                    </div>

                </Row>

            </Layout>
        </div>
    )
}

export default Homepage
