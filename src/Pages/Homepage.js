import { Row, Layout, Col, Divider, Button, Image, Card, Avatar, List, Typography, Divide, Carousel } from 'antd'
import React, { useState, useEffect } from 'react'
import '../Pages/style.css'
import { EditOutlined, EllipsisOutlined, SettingOutlined, CheckOutlined, RightSquareFilled, LeftSquareFilled, AudioOutlined, LaptopOutlined, FormOutlined, ControlOutlined, DatabaseOutlined, CustomerServiceOutlined } from '@ant-design/icons';
import Loader from '../utility/Loader';
const { Meta } = Card;

const Freelancer_Data = [
    {
        id: 1,
        Name: "Parul",
        image: ["https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

            "https://images.unsplash.com/photo-1610889186954-69404e4affee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

            "https://images.unsplash.com/photo-1568185518838-3300c90c9170?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

            "https://images.unsplash.com/photo-1588479839125-3a70c078d257?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        ],
        genre: "electronic"
    },
    {
        id: 2,
        Name: "Parul",
        image: ["https://images.unsplash.com/photo-1593359863503-f598684c806f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1605493717195-6612d1fb4a0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1619379179326-c50023f868a8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"]
    },
    {
        id: 3,
        Name: "Parul",
        image: ["https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

            "https://images.unsplash.com/photo-1610889186954-69404e4affee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

            "https://images.unsplash.com/photo-1568185518838-3300c90c9170?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

            "https://images.unsplash.com/photo-1588479839125-3a70c078d257?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        ],
        genre: "electronic"
    },
    {
        id: 4,
        Name: "Parul",
        image: ["https://images.unsplash.com/photo-1593359863503-f598684c806f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1605493717195-6612d1fb4a0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1619379179326-c50023f868a8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"]
    },
    {
        id: 5,
        Name: "Parul",
        image: ["https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

            "https://images.unsplash.com/photo-1610889186954-69404e4affee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

            "https://images.unsplash.com/photo-1568185518838-3300c90c9170?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

            "https://images.unsplash.com/photo-1588479839125-3a70c078d257?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        ],
        genre: "electronic"
    },
    {
        id: 6,
        Name: "Parul",
        image: ["https://images.unsplash.com/photo-1593359863503-f598684c806f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1605493717195-6612d1fb4a0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1619379179326-c50023f868a8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"]
    },
    {
        id: 7,
        Name: "Parul",
        image: ["https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

            "https://images.unsplash.com/photo-1610889186954-69404e4affee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

            "https://images.unsplash.com/photo-1568185518838-3300c90c9170?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

            "https://images.unsplash.com/photo-1588479839125-3a70c078d257?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        ],
        genre: "electronic"
    },
    {
        id: 8,
        Name: "Parul",
        image: ["https://images.unsplash.com/photo-1593359863503-f598684c806f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1605493717195-6612d1fb4a0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1619379179326-c50023f868a8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"]
    },
    {
        id: 9,
        Name: "Parul",
        image: ["https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

            "https://images.unsplash.com/photo-1610889186954-69404e4affee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

            "https://images.unsplash.com/photo-1568185518838-3300c90c9170?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

            "https://images.unsplash.com/photo-1588479839125-3a70c078d257?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        ],
        genre: "electronic"
    },
    {
        id: 10,
        Name: "Parul",
        image: ["https://images.unsplash.com/photo-1593359863503-f598684c806f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1605493717195-6612d1fb4a0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1619379179326-c50023f868a8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"]
    },
    {
        id: 11,
        Name: "Parul",
        image: ["https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

            "https://images.unsplash.com/photo-1610889186954-69404e4affee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

            "https://images.unsplash.com/photo-1568185518838-3300c90c9170?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

            "https://images.unsplash.com/photo-1588479839125-3a70c078d257?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        ],
        genre: "electronic"
    },
    {
        id: 12,
        Name: "Parul",
        image: ["https://images.unsplash.com/photo-1593359863503-f598684c806f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1605493717195-6612d1fb4a0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1619379179326-c50023f868a8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"]
    },
    {
        id: 13,
        Name: "Parul",
        image: ["https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

            "https://images.unsplash.com/photo-1610889186954-69404e4affee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

            "https://images.unsplash.com/photo-1568185518838-3300c90c9170?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

            "https://images.unsplash.com/photo-1588479839125-3a70c078d257?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        ],
        genre: "electronic"
    },
    {
        id: 14,
        Name: "Parul",
        image: ["https://images.unsplash.com/photo-1593359863503-f598684c806f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1605493717195-6612d1fb4a0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1619379179326-c50023f868a8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"]
    },
    {
        id: 15,
        Name: "Parul",
        image: ["https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

            "https://images.unsplash.com/photo-1610889186954-69404e4affee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

            "https://images.unsplash.com/photo-1568185518838-3300c90c9170?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

            "https://images.unsplash.com/photo-1588479839125-3a70c078d257?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        ],
        genre: "electronic"
    },

]

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

const ArrowStyle = {


};

const Homepage = () => {

    const [isLoading, setIsLoading] = useState(false)
    const onChange = (a, b, c) => {
        console.log(a, b, c);
    }

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
    // useEffect(() => {
    //     setIsLoading(true)
    //     setTimeout(() => {
    //         setIsLoading(false)
    //     }, 2000);

    // }, [])

    return (
        <div>
            {
                isLoading ? <Loader enable={isLoading} /> :
                    <Layout>
                        <div className="Header_Container">
                            <Row justify="center">
                                <div>
                                    <h1 className="Header_heading">We Care about Your Dreams</h1>
                                    <Divider type="horizontal" style={{ color: "#03fc73", fontWeight: "900", fontSize: "2rem" }}>___________</Divider>
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
                            <Col span={12} style={{ textAlign: "center" }} >
                                <Image src="https://images.unsplash.com/photo-1559732277-7453b141e3a1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" height="auto" preview={false}></Image>
                            </Col>
                            <div style={{ background: "white" }} >
                                <Col>
                                    <List
                                        size="small"
                                        header={<h1 style={{ fontFamily: "serif", fontSize: "2rem", textAlign: "center" }}>You always Need a pro in Game !</h1>}
                                        dataSource={data}
                                        // style={{textAlign:'center'}}
                                        renderItem={item => (
                                            <List.Item>
                                                <CheckOutlined /> {item}
                                            </List.Item>
                                        )}
                                    />
                                </Col>
                            </div>



                        </Row>

                        {/* List */}
                        <Row>
                            <h1 className="Content_Heading">Top Rating Producers</h1>
                        </Row>
                        <Row justify="center" >
                            <Row style={{ zIndex: "997", position: 'absolute', lineHeight: "250px", width: "100%" }}>
                                <Col span={12} style={{ textAlign: 'left', zIndex: "996" }}>
                                    <LeftSquareFilled style={{ ...ArrowStyle, color: windowDimensions.width > 720 ? "black" : 'Darkorange', fontSize: windowDimensions.width > 720 ? "50px" : '40px' }} />
                                </Col>
                                <Col span={12} style={{ textAlign: 'right' }}>
                                    <RightSquareFilled style={{ ...ArrowStyle, color: windowDimensions.width > 720 ? "black" : 'Darkorange', fontSize: windowDimensions.width > 720 ? "50px" : '40px' }} />
                                </Col>
                            </Row>
                            <Col span={windowDimensions.width > 720 ? 22 : 18}>
                                <Row justify="center">
                                    <div style={{ display: "flex", overflowX: "scroll", marginLeft: "-5px" }} >
                                        {Freelancer_Data.map((item, index) => {
                                            return (
                                                <Card
                                                    hoverable
                                                    key={index}
                                                    style={{ width: windowDimensions.width <= 720 ? windowDimensions.width + "px" : "310px", margin: "5px", zIndex: "995" }}
                                                    cover={

                                                        <div>
                                                            <Carousel dots={false} arrows="small" effect="slide" autoplay="true" style={{ zIndex: "9" }} afterChange={onChange}>
                                                                {item.image.map((data) => {
                                                                    return (<div>

                                                                        <img
                                                                            alt="example"
                                                                            src={data}
                                                                            height="250px"
                                                                            width="100%"
                                                                        />
                                                                    </div>)
                                                                })}
                                                            </Carousel>
                                                        </div>
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

                            </Col>
                        </Row>
                        <Row>
                            <h1 className="Content_Heading">Top Rating Producers</h1>
                        </Row>
                        <Row justify="center" >
                            <Row style={{ zIndex: "997", position: 'absolute', lineHeight: "250px", width: "100%" }}>
                                <Col span={12} style={{ textAlign: 'left', zIndex: "996" }}>
                                    <LeftSquareFilled style={{ ...ArrowStyle, color: windowDimensions.width > 720 ? "black" : 'Darkorange', fontSize: windowDimensions.width > 720 ? "50px" : '40px' }} />
                                </Col>
                                <Col span={12} style={{ textAlign: 'right' }}>
                                    <RightSquareFilled style={{ ...ArrowStyle, color: windowDimensions.width > 720 ? "black" : 'Darkorange', fontSize: windowDimensions.width > 720 ? "50px" : '40px' }} />
                                </Col>
                            </Row>
                            <Col span={windowDimensions.width > 720 ? 22 : 18}>
                                <Row justify="center">
                                    <div style={{ display: "flex", overflowX: "scroll", marginLeft: "-5px" }} >
                                        {Freelancer_Data.map((item, index) => {
                                            return (
                                                <Card
                                                    hoverable
                                                    key={index}
                                                    style={{ width: windowDimensions.width <= 720 ? windowDimensions.width + "px" : "310px", margin: "5px", zIndex: "995" }}
                                                    cover={

                                                        <div>
                                                            <Carousel dots={false} arrows="small" effect="slide" autoplay="true" style={{ zIndex: "9" }} afterChange={onChange}>
                                                                {item.image.map((data) => {
                                                                    return (<div>

                                                                        <img
                                                                            alt="example"
                                                                            src={data}
                                                                            height="250px"
                                                                            width="100%"

                                                                        />
                                                                    </div>)
                                                                })}
                                                            </Carousel>
                                                        </div>
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

                            </Col>
                        </Row>

                        <Row>
                            <h1 className="Content_Heading">Explore Our Market</h1>
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

                            <h1 className="Content_Heading">Customer Reviews </h1>
                        </Row>
                        <Row justify="center">
                            <Col span={12}>
                                <iframe style={{ height: windowDimensions.width > 720 ? "400px" : 'auto' }} width="100%"
                                    src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1">
                                </iframe>

                            </Col>
                        </Row>

                    </Layout>
            }
        </div>
    )
}

export default Homepage
