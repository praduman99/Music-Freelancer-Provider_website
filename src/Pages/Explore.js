
import { Col, Row } from 'antd'

import React, { useEffect, useState } from 'react'
import { Card } from 'antd';
import './style.css'

const { Meta } = Card;

function Explore() {
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
    const array = [
        { name: "kimformf" },

        { name: "eimformf" },

        { name: "kimforef" },
    ]

    return (
        <div>
            <Row justify="center">
                <h1 className="Content_Heading">Blogs</h1>
            </Row>
            <Row justify="center">

                {array.map((item, index) => {
                    return (<Col span={windowDimensions.width > 720 ? 6 : 22}><Card
                        hoverable
                        style={{ width: 300 }}
                        // cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        cover={<div className="Explore_card">
                           <h4>
                               {item.name}
                           </h4>
                        </div>}
                    >
                        <Row justify="center">
                            <Col>Follow Link Here!</Col>
                        </Row>
                    </Card></Col>)
                })}
            </Row>

        </div>
    )
}

export default Explore
