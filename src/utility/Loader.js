import { Spin } from 'antd'
import React,{useState,useEffect} from 'react'
const arr = [1, 2, 3, 4, 5]
const Loader = (props) => {

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

    return (
        <div style={{ color: "black", textAlign: "center",width:windowDimensions.width>720?"100%":windowDimensions.width }}>
            <Spin spinning={props.enable} style={{fontSize:"2rem",paddingTop:"10rem",paddingBottom:"10rem"}}  tip="Loading..." size="large" delay={5} >
            </Spin>
        </div>
    )
}

export default Loader
