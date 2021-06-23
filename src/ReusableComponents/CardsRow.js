
import { Row, Layout, Col, Divider, Button, Image, Card, Avatar, List, Typography, Divide, Carousel, Rate } from 'antd'
import React, { useState, useEffect } from 'react'
import '../Pages/style.css'
import { EditOutlined, EllipsisOutlined, SettingOutlined, CheckOutlined, RightSquareFilled, LeftSquareFilled, AudioOutlined, LaptopOutlined, FormOutlined, ControlOutlined, DatabaseOutlined, CustomerServiceOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
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


const pics = [
    {
        id: 1,
        Name: "Parul",
        image: ["https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

        ],
        genre: "electronic"
    },
    {
        id: 1,
        Name: "Parul",
        image: [
            "https://images.unsplash.com/photo-1610889186954-69404e4affee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        ],
        genre: "electronic"
    },
    {
        id: 1,
        Name: "Parul",
        image: ["https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

        ],
        genre: "electronic"
    },
    {
        id: 1,
        Name: "Parul",
        image: [
            "https://images.unsplash.com/photo-1610889186954-69404e4affee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        ],
        genre: "electronic"
    },
    {
        id: 1,
        Name: "Parul",
        image: ["https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

        ],
        genre: "electronic"
    },
    {
        id: 1,
        Name: "Parul",
        image: [
            "https://images.unsplash.com/photo-1610889186954-69404e4affee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        ],
        genre: "electronic"
    },
    {
        id: 1,
        Name: "Parul",
        image: ["https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

        ],
        genre: "electronic"
    },
    {
        id: 1,
        Name: "Parul",
        image: [
            "https://images.unsplash.com/photo-1610889186954-69404e4affee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        ],
        genre: "electronic"
    },

]

const ArrowStyle = {
};

const CardsRow = (props) => {
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
            <Row justify="center" >
                <Row style={{ zIndex: "997", position: 'absolute', lineHeight: "350px", width: "100%" }}>
                    <Col span={12} style={{ textAlign: 'left', zIndex: "996" }}>
                        <LeftSquareFilled style={{ ...ArrowStyle, color: windowDimensions.width > 720 ? "black" : 'Darkorange', fontSize: windowDimensions.width > 720 ? "50px" : '40px' }} />
                    </Col>
                    <Col span={12} style={{ textAlign: 'right' }}>
                        <RightSquareFilled style={{ ...ArrowStyle, color: windowDimensions.width > 720 ? "black" : 'Darkorange', fontSize: windowDimensions.width > 720 ? "50px" : '40px' }} />
                    </Col>
                </Row>
                <Col span={windowDimensions.width > 720 ? 22 : 18}>
                    <Row justify="center" >
                        <div style={{ display: "flex", overflowX: "scroll", marginLeft: "-5px" }} >
                            {Freelancer_Data.map((item, index) => {
                                return (
                                    <div>
                                        <Card
                                            hoverable
                                            key={index}
                                            style={{ width: windowDimensions.width <= 720 ? windowDimensions.width - 95 + "px" : "310px", margin: "5px", zIndex: "995" }}
                                            cover={

                                                <div>
                                                    <Carousel effect="slide" arrows={true} style={{ zIndex: "9" }} autoplay={true} afterChange={onChange} >
                                                        {item.image.map((data) => {
                                                            return (

                                                                <img
                                                                    alt="example"
                                                                    src={data}
                                                                    height="250px"
                                                                    width="100%"
                                                                />

                                                            )
                                                        })}
                                                    </Carousel>
                                                </div>
                                            }

                                            actions={[

                                                <Link to='/Profile'><div>Check Profile</div></Link>
                                            ]}

                                        >

                                            <Row>

                                                <Col span={14}>
                                                    <Meta
                                                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                                        title="jhonson"


                                                    />


                                                </Col>
                                                <Col span={8}>
                                                    <div style={{ color: "darkorange", textAlign: "right", fontWeight: "500", fontSize: "25px", marginTop: "-10px" }}>$555979</div>
                                                </Col>
                                            </Row>
                                            <Row justify="center" style={{ borderTop: "lightgrey solid  1px", marginTop: "5px", padding: "5px 0px 5px 0px" }}>

                                                <Rate value={3} disabled style={{ fontSize: "15px" }}>
                                                </Rate> <div style={{ color: "grey" }}> (49)</div>
                                            </Row>

                                            <Row justify="center">
                                                <div>                                                hey iam produceriam producer
                                                    iam producer iam producer iam producer iam producer iam producer                                            </div>

                                            </Row>


                                        </Card>
                                    </div>

                                )
                            })}
                        </div>

                    </Row>
                </Col>
            </Row>

        </div>
    )
}

export default CardsRow
