import React, { useState } from 'react'
import { Row, Form, Input, Rate, Col, Divider, List, Image } from 'antd'



const ReviewData = [
    {
        username: "saima",
        img: "https://media.glamour.com/photos/5695f66b16d0dc3747eece9f/1:1/w_354%2Cc_limit/sex-love-life-2015-03-hot-dudes-with-dogs-main.jpg",
        ratiing: "4",
        review: "A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument."

    },
    {
        username: "saim22222a",
        img: "https://media.glamour.com/photos/5695f66b16d0dc3747eece9f/1:1/w_354%2Cc_limit/sex-love-life-2015-03-hot-dudes-with-dogs-main.jpg",
        ratiing: "4",
        review: "A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument."

    },
    {
        username: "sai4444ma",
        img: "https://media.glamour.com/photos/5695f66b16d0dc3747eece9f/1:1/w_354%2Cc_limit/sex-love-life-2015-03-hot-dudes-with-dogs-main.jpg",
        ratiing: "4",
        review: "A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument."

    }
]
const Customer_Review = () => {
    const [value, setValue] = useState(1)
    const [form] = Form.useForm();
    const desc = ['1', '2', '3', '4', '5'];

    const onFinish = (values) => {
        console.log(values)
    };

    const handleChange = (value) => {
        setValue(value)

    }



    return (
        <div>
            <Row>
                <Col span={24}>
                    <Form
                        form={form}

                        onFinish={onFinish}

                    >

                        <Form.Item >
                            <Rate tooltips={desc} onChange={(e) => handleChange(e)} value={value} />
                            {value ? <span className="ant-rate-text">{desc[value - 1]}/5</span> : ''}

                        </Form.Item>
                        <Form.Item >
                            <Input placeholder="Your Review" />
                        </Form.Item>
                        <Form.Item>
                            <button type="submit" className="Heading_Button">
                                Submit Review
                               </button>
                        </Form.Item>
                    </Form>
                </Col>
                <Divider style={{ background: "darkgray" }} />
            </Row>
            <Row>
                <Col span={24}>
                    <List
                        size="large"
                        bordered
                        style={{}}
                        dataSource={ReviewData}
                        // style={{textAlign:'center'}}
                        renderItem={item => (
                            <List.Item>
                                <Row justify="center" style={{padding:"5px"}}>
                                    <Col>
                                    <Image width={'40px'} src={item.img}></Image>

                                    <div style={{ fontSize: '15px',fontWeight: 600 }}>{item.username} </div>
                                    <Rate style={{fontSize:"10px"}} disabled defaultValue={item.ratiing} /> <spna style={{fontSize:"10px",color:"black"}}>{item.ratiing}/5</spna>
                                    <Row style={{marginTop:"1rem"}}>
                                    {item.review}
                                </Row>
                                </Col>
                                </Row>
                                


                            </List.Item>
                        )}
                    />
                </Col>

            </Row>

        </div>
    )
}

export default Customer_Review
